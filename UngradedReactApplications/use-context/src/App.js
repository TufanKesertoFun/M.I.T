import React, { useContext } from "react";
import AuthContext from "./components/Provider"; // Correct import path

function App() {
    const authContext = useContext(AuthContext);

    return (
        <div>
            <h1>
                You are {authContext.isLoggedIn ? "logged in" : "logged out"}
            </h1>
            {authContext.isLoggedIn && (
                <button onClick={authContext.logout}>Logout</button>
            )}
            {!authContext.isLoggedIn && (
                <button onClick={authContext.login}>Login</button>
            )}
        </div>
    );
}

export default App;
