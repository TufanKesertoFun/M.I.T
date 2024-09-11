import React, {useContext} from "react";
import ThemeContext from "./store/theme-context";
import "./App.css";


function App() {
  const themeContext = useContext(ThemeContext);

  return (
    <div className={`App ${themeContext.isLight ? `light` : `dark`}`}>
      <h1>This is some random text</h1>
      <button onClick={themeContext.toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default App;