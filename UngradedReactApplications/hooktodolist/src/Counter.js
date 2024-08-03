import React, { useState } from "react";


function handleButtonClick() {
    alert("Clickled")
}

function handleDivClick() {
    alert("Clicked")
}

function handleSpanClick() {
    alert("Clicked")
}

function handleAnchorClick() {
    alert("Anchor Click")
}

function handleImangeClicked() {
    alert("Image clicked")
}

function Counter() {

    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick = {() => setCount(count + 1)}>Increment</button>
            <button onClick = {() => setCount(count -1)}>Decrement</button>
            <button onClick={() =>  handleButtonClick()}>Click me!</button>
            <div onClick={() => handleDivClick()}>Clickme I am div</div>
            <span onClick={() => handleSpanClick() }>Span me!</span>
            <a onClick={() => handleAnchorClick()}>Anchor me</a>
            <img src="logo192.png"  alt="Clickable Image" onClick={() => handleImangeClicked()}/>
        </div>
    );
}

export default Counter;