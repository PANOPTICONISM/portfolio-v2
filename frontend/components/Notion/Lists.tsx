import { ListProps, TextProps } from "./types";
import styles from "./styles.module.css";
import cx from 'classnames';

export const BulletedList = ({ text }: { text: TextProps }) => {

    return (
        <li className={styles.list}>
            <List text={text} />
        </li>)
}

export const NumberedList = ({ block }: { block: ListProps }) => {
    const value = block.numbered_list_item;
    if (!value) return null;

    return (
        <li className={styles.numberedList}>
            <List text={value.rich_text} />
        </li>)
}

export const List = ({ text }: { text: TextProps }) => {
    return (
        <>
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
        </>
    )
}