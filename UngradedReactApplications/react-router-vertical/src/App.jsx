
import MyNavBar from "./components/MyNavBar";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
    <MyNavBar />
    <div style={{ textAlign: "center "}}>
        <Outlet />
    </div>
    </>
  );
}

export default App;