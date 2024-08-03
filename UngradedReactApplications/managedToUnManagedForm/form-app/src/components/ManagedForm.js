import React, { useState } from "react";

function ManagedForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Submitted data:", formData);
    }

    function handleChange(event) {
        const {name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>Name: </label>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                />
            <br />
            <label>Email: </label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
            <br />
            <label>Password: </label>
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />
        </form>
    );
}

export default ManagedForm;