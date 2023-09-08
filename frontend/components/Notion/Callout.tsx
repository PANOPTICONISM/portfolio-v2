import styles from "./styles.module.css";
import { CalloutProps } from "./Notion.types";

export const Callout = ({ text }: { text: CalloutProps }) => {
    return (
        <section className={styles.callout}>
            <span>{text.icon.emoji} {text?.rich_text?.[0]?.plain_text}</span>
        </section>
    )
}