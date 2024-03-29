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
            <input type="checkbox" onClick={changeThemeMode} defaultChecked={isChecked} />
            <span className={`${styles.slider} ${styles.round}`}></span>
        </label>
    )
}
