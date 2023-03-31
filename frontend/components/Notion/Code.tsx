import React from 'react';
import styles from "./styles.module.css";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const Code = ({ content, language }: { content: string, language: string }) => {

    return (
        <section className={styles.code}>
            <SyntaxHighlighter language={language} style={coldarkDark} showLineNumbers showInlineLineNumbers lineNumberContainerStyle={{ left: '2px' }}>
                {content}
            </SyntaxHighlighter>
        </section>
    )
}
