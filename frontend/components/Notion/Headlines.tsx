import styles from "./Notion.module.css";
import { HeadlineProps } from "./Notion.types";

export const Headline = ({ title }: { title: HeadlineProps }) => {
    return (
        <h2 className={styles.headline}>
            {title.link ? <a href={title.link.url}>{title.plain_text}</a> : title.plain_text}
        </h2>
    );
};

export const Subheadline = ({ title }: { title: HeadlineProps }) => {
    return (
        <h3 className={styles.subheadline}>
            {title.link ? <a href={title.link.url}>{title.plain_text}</a> : title.plain_text}
        </h3>
    );
};