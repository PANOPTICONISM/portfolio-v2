import React from 'react'
import { useThemeContext } from 'contexts/theme-context';
import styles from "./ThemeSwitch.module.css";

export const ThemeSwitch = () => {
    const [isChecked, setIsChecked] = React.useState(true);
    const { theme, setTheme } = useThemeContext();

    const changeThemeMode = () => {
        setIsChecked(!isChecked);
        const isCurrentDark = theme === 'dark';
        setTheme(isCurrentDark ? 'light' : 'dark');
    }

    return (
        <label className={styles.switch}>
            <span className={styles.srOnly}>Toggle dark mode</span>
            <input
                type="checkbox"
                role="switch"
                aria-label="Toggle dark mode"
                onClick={changeThemeMode}
                defaultChecked={isChecked}
            />
            <span className={`${styles.slider} ${styles.round}`} aria-hidden="true"></span>
        </label>
    )
}
