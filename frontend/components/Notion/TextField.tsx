import { TextProps } from "./Notion.types";
import styles from "./styles.module.css";
import cx from 'classnames';

export const TextField = ({ text }: { text: TextProps }) => {
    return (
        <p>
            {text.map((value, index) => {
                const {
                    annotations: { bold, code, color, italic, strikethrough, underline },
                    text,
                } = value;
                return (
                    <span
                        key={index}
                        className={cx({
                            [`${styles.bold}`]: bold,
                            [`${styles.codeText}`]: code,
                            [`${styles.italic}`]: italic,
                            [`${styles.strikethrough}`]: strikethrough,
                            [`${styles.underline}`]: underline,
                        })}
                        style={color !== "default" ? { color } : {}}
                    >
                        {text.link ? <a className={styles.underline} href={text.link.url}>{text.content}</a> : text.content}
                    </span>
                );
            })}
        </p>)
};