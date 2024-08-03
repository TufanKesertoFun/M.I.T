import React, { useState } from "react";

export function  MyManagedForm() {
    const [city, setCity] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>City: </label>
                <input type="text" value={city} onChange={handleCityChange} />
                <input type="submit" value="Submit" />
            </form>
            <p>I live in {city}</p>
        </>
    );
}