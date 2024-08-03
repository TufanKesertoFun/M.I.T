const App = () => {
 
  const handler = () => alert(`hello`);
  return <MyButton onClick={handler} index="9"></MyButton>;
};

const MyButton = ({onClick})=> {
  let { Button : Abutton } = ReactBootstrap;
  return <Abutton onClick={onClick}>Click Me</Abutton>;
}



ReactDOM.render(<App />, document.getElementById("root"));