import React from 'react';
import styles from "./styles.module.css";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClone, faSquareCheck } from '@fortawesome/free-regular-svg-icons';

export const Code = ({ content, language }: { content: string, language: string }) => {
    const [copied, setCopied] = React.useState(false);

    React.useEffect(() => {
        const timeout = setTimeout(() => setCopied(false), 2000);

        return () => clearTimeout(timeout);
    }, [copied]);

    return (
        <section className={styles.code}>
            <CopyToClipboard text={content} onCopy={() => setCopied(true)}>
                <div className={styles.copyBtn}>
                    {copied ? <FontAwesomeIcon icon={faSquareCheck} color='green' /> : <FontAwesomeIcon icon={faClone} color='white' />}
                </div>
            </CopyToClipboard>
            <SyntaxHighlighter language={language} style={coldarkDark} showLineNumbers showInlineLineNumbers lineNumberContainerStyle={{ left: '2px' }}>
                {content}
            </SyntaxHighlighter>
        </section >
    )
}
