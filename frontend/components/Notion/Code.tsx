import React from 'react';
import styles from "./styles.module.css";

export const Code = ({ content }: { content: string }) => {
    return (
        <section className={styles.code}>
            <pre>
                <code>
                    {content}
                </code>
            </pre>
        </section>
    )
}
