import { TextProps } from "./types";
import styles from "./Blocks.module.css";
import cx from 'classnames';

export const BulletedList = ({ text }: { text: TextProps }) => {

    return (
        <li className={styles.list}>
            {text.map((value, index) => {
                const {
                    annotations: { bold, code, color, italic, strikethrough, underline },
                    text,
                } = value;
                return (
                    <span
                        key={index}
                        className={
                            cx({
                                [`${styles.bold}`]: bold,
                                [`${styles.codeText}`]: code,
                                [`${styles.italic}`]: italic,
                                [`${styles.strikethrough}`]: strikethrough,
                                [`${styles.underline}`]: underline,
                            })
                        }
                        style={color !== "default" ? { color } : {}}
                    >
                        {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
                    </span>
                );
            })}
        </li>)
}