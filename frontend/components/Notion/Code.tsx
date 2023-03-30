import React from 'react';
import styles from "./styles.module.css";
import Prism from "prismjs";
import 'prismjs/plugins/line-numbers/prism-line-numbers.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

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
            <pre className='line-numbers'>
                <code className={`language-${language}`}>
                    {content}
                </code>
            </pre>
        </section>
    )
}
