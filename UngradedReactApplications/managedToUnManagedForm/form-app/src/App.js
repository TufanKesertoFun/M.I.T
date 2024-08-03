import React from "react";
import UnmanagedForm from "./components/UnmanagedForm";
import ManagedFrom from "./components/ManagedForm";

function App() {
  return (
    <div style={{ width: "90%", margin: "2rem auto auto"}}>
      <UnmanagedForm />
      <ManagedFrom />
    </div>
  )
}

export default App;