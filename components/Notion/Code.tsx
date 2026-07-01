import React from "react";
import dynamic from "next/dynamic";
import styles from "./Notion.module.css";
import { coldarkDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClone, faSquareCheck } from "@fortawesome/free-regular-svg-icons";

const SyntaxHighlighter = dynamic(
  () => import("react-syntax-highlighter").then((mod) => mod.Prism),
  { ssr: false, loading: () => null },
);

export const Code = ({
  content,
  language,
  allowCopy,
}: {
  content: string;
  language: string;
  allowCopy: boolean;
}) => {
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => setCopied(false), 2000);

    return () => clearTimeout(timeout);
  }, [copied]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content);
    setCopied(true);
  };

  return (
    <div className={styles.code}>
      {allowCopy ? (
        <div className={styles.copyBtn} onClick={handleCopy}>
          {copied ? (
            <FontAwesomeIcon icon={faSquareCheck} color="green" />
          ) : (
            <FontAwesomeIcon icon={faClone} color="white" />
          )}
        </div>
      ) : null}
      <SyntaxHighlighter
        language={language}
        style={coldarkDark}
        showLineNumbers
        showInlineLineNumbers
        lineNumberContainerStyle={{ left: "2px" }}
      >
        {content}
      </SyntaxHighlighter>
    </div>
  );
};
