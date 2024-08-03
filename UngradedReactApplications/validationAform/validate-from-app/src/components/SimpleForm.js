import React, { useState } from "react";

const SimpleForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const {name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};
        if (!formData.firstName.trim()) {
            newErrors.firstName = "First Name is required";
        }
        if (!formData.lastName.trim()){
            newErrors.lastName = "Last Name is required";
        }
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!isValidEmail(formData.email)) {
            newErrors.email = "Email is invalid";
        }

        if(Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            console.log("Form submitted:", formData);
        }

        setFormData({
            firstName: "",
            lastName: "",
            email: "",
        });
        setErrors({});
    }


const isValidEmail = (email) => {
    return email.includes("@") && email.includes(".");
};

return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>First Name:</label>
            <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
            />
            {errors.firstName && (
                <span 
                    style={{ color: "red" }}
                    > { ` *${errors.firstName}`}</span>
            )}
            <label>Last Name:</label>
            <input
                type="text"
                name="firstName"
                value={formData.lastName}
                onChange={handleChange}
            />
            {errors.firstName && (
                <span 
                    style={{ color: "red"}}
                    > { ` *${errors.lastName}`}</span>
            )}
        </div>
        <div>
                <label>Email:</label>
                <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onchange={handleChange}
                />
                {errors.email && (
                    <span
                        style={{ color: "red"}}
                        >
                            { ` *${errors.email}`}</span>
                )}
        </div>
                <button type="submit">Submit</button>
    </form>
);
}

export default SimpleForm;