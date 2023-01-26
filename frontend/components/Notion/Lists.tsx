import { TextProps } from "./types";
import styles from "./Blocks.module.css";

export const BulletedList = ({ text }: { text: TextProps }) => {
    return (
        <ul className={styles.list}>
            {text.map((value, index) =>
                <li key={index}>
                    {value.text.link ? <a href={value.text.link.url}>{value.text.content}</a> : value.text.content}
                </li>
            )}
        </ul>
    )
}