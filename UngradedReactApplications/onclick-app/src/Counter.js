import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div
            style={{
                width: "300px",
                display: "flex",
                justifyContent: "space-between",
            }}
            >
                <button onClick={() => setCount(count -1)}> Decrement</button>
                <div>{`Counter: ${count}`}</div>
                <button onClick={() => setCount(count +1)}>Increment</button>

        </div>
    );
}

export default Counter;