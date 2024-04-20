import React from 'react';
import styles from "./Notion.module.css";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClone, faSquareCheck } from '@fortawesome/free-regular-svg-icons';

export const Code = ({ content, language, allowCopy }: { content: string, language: string, allowCopy: boolean }) => {
    const [copied, setCopied] = React.useState(false);

    React.useEffect(() => {
        const timeout = setTimeout(() => setCopied(false), 2000);

        return () => clearTimeout(timeout);
    }, [copied]);

    return (
        <div className={styles.code}>
            {allowCopy ? <CopyToClipboard text={content} onCopy={() => setCopied(true)}>
                <div className={styles.copyBtn}>
                    {copied ? <FontAwesomeIcon icon={faSquareCheck} color='green' /> : <FontAwesomeIcon icon={faClone} color='white' />}
                </div>
            </CopyToClipboard> : null}
            <SyntaxHighlighter language={language} style={coldarkDark} showLineNumbers showInlineLineNumbers lineNumberContainerStyle={{ left: '2px' }}>
                {content}
            </SyntaxHighlighter>
        </div>
    )
}
