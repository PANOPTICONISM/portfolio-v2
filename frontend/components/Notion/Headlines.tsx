import styles from "./Blocks.module.css";
import { HeadlineProps } from "./types";

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