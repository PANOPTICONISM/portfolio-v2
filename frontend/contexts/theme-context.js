import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({
    theme: '',
    setTheme: (theme) => {},
});

export function ThemeProvider({children}) {
    const [theme, setTheme] = useState("dark");
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useThemeContext() {
    return useContext(ThemeContext);
}