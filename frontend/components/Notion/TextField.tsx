import { TextProps } from "./types";
import styles from "./Blocks.module.css";

export const TextField = ({ text }: { text: TextProps }) => {
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
                        className={[
                            bold ? styles.bold : "",
                            code ? styles.code : "",
                            italic ? styles.italic : "",
                            strikethrough ? styles.strikethrough : "",
                            underline ? styles.underline : "",
                        ].join(" ")}
                        style={color !== "default" ? { color } : {}}
                    >
                        {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
                    </span>
                );
            })}
        </>)
};