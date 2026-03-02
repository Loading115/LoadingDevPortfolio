import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

//Mehtod that handles the initial state of the theme, gets from the local storage the value 
const getInitialTheme = (): Theme => {
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (stored === "light" || stored === "dark") return stored;

    const prefersDark =
        window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ?? false;

    return prefersDark ? "dark" : "light";
}

//Custom hook that handles the change of theme everytime the user clicks the button
export const useTheme = () => {
    const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

    // Everyime the theme changes the use effect is triggrered to change the dark theme and save it to the localstorage
    useEffect(() => {
        const isDark = theme === "dark";
        document.documentElement.classList.toggle("dark", isDark);
        localStorage.setItem(STORAGE_KEY, theme);
    }, [theme]);

    const toggleTheme = () =>
        setTheme((t) => (t === "dark" ? "light" : "dark"));

    return {
        theme,
        isDark: theme === "dark",
        toggleTheme,
        setTheme
    };
}