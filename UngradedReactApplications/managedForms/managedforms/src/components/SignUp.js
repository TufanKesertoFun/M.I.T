import React, { useState } from 'react';

export default function SignUp() {
    const [formData, setFormData] = useState({
        year: '',
        name: '',
        email: '',
        password: '',
        rememberMe: false
    });

    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    }

    function handleSubmit() {
        console.log('Form Data:', formData);
    }

    return (
        <>
            <select name="year" value={formData.year} onChange={handleChange}>
                <option value="">Select Year</option>
                <option value="Freshman">Freshman</option>
                <option value="Sophomore">Sophomore</option>
                <option value="Junior">Junior</option>
                <option value="Senior">Senior</option>
            </select>
            <div>Name</div>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
            <div>Email</div>
            <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
            <div>Password</div>
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />
            <div>
                <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                />
                Remember me
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </>
    );
}
