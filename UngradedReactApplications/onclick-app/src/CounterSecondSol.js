import React, {useState } from "react";

function CounterSecondSol() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <div
            style={{
                width: "300px",
                display: "flex",
                justifyContent: "space-between",
            }}>

                <button onClick={decrement}>Decrement</button>
                <div>{`Counter: ${count}`}</div>
                <button onClick={increment}>Increment</button>
            </div>
    );
}

export default CounterSecondSol;