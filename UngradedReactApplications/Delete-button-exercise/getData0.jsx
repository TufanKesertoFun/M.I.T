const App = () => {
    const { useState } = React;
    const [state, setState] = useState([1,2,3,4,5,6,7]);

    const handler = index => {
        const newState = state.filter((_, i) => i !== index);
        setState(newState);
    };

 const list = state.map((item, index) => {
    return <MyButton onClick={() => handler(index)} key={index}></MyButton>;
});

return <div>{list}</div>;
};

const MyButton = ({ onClick }) => {
    const { Button } = ReactBootstrap;
    return <Buttonutton onClick={onClick}>Click Me</Buttonutton>;
};

ReactDOM.render(<App />, document.getElementById("root"));
