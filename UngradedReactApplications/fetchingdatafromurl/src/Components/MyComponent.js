import React, { useState, useEffect } from 'react';

function MyComponent() {

    const [data, setData] = useState(null);

    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchData = async () => {

            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

                const result = await response.json();

                setData(result);
            } catch (error) {

                setError(error);
            }
        };
        fetchData();
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if(!data) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1> Fecthing data from a url with useEffect </h1>

            <p>Title: {data.title}</p>
        </div>
    )
}

export default MyComponent;