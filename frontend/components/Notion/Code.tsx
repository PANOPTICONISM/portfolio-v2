import React from 'react';
import styles from "./styles.module.css";
import Prism from "prismjs";

export const Code = ({ content, language }: { content: string, language: string }) => {

    React.useEffect(() => {
        const highlightDynamically = async () => {
            if (typeof window !== "undefined") {
                Prism.highlightAll();
                await import(`prismjs/components/prism-${language}`);
            }
        }
        highlightDynamically();
    }, [language]);

    return (
        <section className={styles.code}>
            <pre>
                <code className={`language-javascript`}>
                    {content}
                </code>
            </pre>
        </section>
    )
}
