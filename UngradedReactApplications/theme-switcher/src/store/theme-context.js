import { createContext, useState } from "react";
const ThemeContext = createContext();
export function ThemeProvider({ children }) {
 const [isLight, setIsLight] = useState(true);
 function toggleTheme() {
 setIsLight(!isLight);
 console.log("toggled");
 }
 return (
 <ThemeContext.Provider value={{ isLight, toggleTheme }}>
 {children}
 </ThemeContext.Provider>
 );
}
export default ThemeContext;