import React, {useReducer, useEffect } from 'react';

const initialState = {
    data: null,
    loading: true,
    error: null,
};

const reducer = (state, action) => {
    switch (action.type) {
    case 'FETCH_SUCCESS':
        return {...state, data: action.payload, loading: false, error: null};
    case 'FETCH_FAILURE':
        return {...state, loading: false, error: action.payload};
    default:
        return state;
}
};

function DataFetcher() {

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response  = await fetch('https://jsonplaceholder.typicode.com/todos/1');
                const data = await response.json();
                dispatch({ type: 'FETCH_SUCCESS', payload: data});
            } catch (error) {
                dispatch({ type: 'FETCH_FAILURE', payload: error.message});
            }
        };

        fetchData();
    }, []);

    const {data, loading, error } = state;

    if (loading) {
        return <div>Error: {error}</div>;
    }

    if (error){
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Data Fetched with useReducer</h1>
            <p>Title: {data.title}</p>
        </div>
    )
}


export default DataFetcher;