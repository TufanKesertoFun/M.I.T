import React from "react";

function UnmanagedForm() {
    function handleSubmit(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        console.log("Submitted data:", {name, email, password });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name: </label>
            <input type="text" id="name"/>
            <br />
            <label>Email: </label>
            <input type="email" id="email" />
            <br />
            <label>Password: </label>
            <input type="password" id="password" />
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default UnmanagedForm;