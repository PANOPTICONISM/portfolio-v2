import React from 'react';
import styles from "./styles.module.css";
import Prism from "prismjs";
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

export const Code = ({ content, language }: { content: string, language: string }) => {

    React.useEffect(() => {
        const highlightDynamically = async () => {
            if (typeof window !== "undefined") {
                Prism.highlightAll();
            }
        }
        highlightDynamically();
    }, [language]);

    return (
        <section className={styles.code}>
            <pre className='line-numbers copy-to-clipboard'>
                <code className={`language-${language}`} data-prismjs-copy="Copy the C snippet!">
                    {content}
                </code>
            </pre>
        </section>
    )
}
