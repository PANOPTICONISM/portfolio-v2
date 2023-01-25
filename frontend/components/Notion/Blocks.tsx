import Link from "next/link";
import { Fragment } from "react";
import styles from "./Blocks.module.css";
import { Code } from "./Code";
import { CalloutProps, HeadlineProps, TextProps } from "./types";

export const TextField = ({ text }: { text: TextProps }) => {
    return (
        <>
            {text.map((value, index) => {
                const {
                    annotations: { bold, code, color, italic, strikethrough, underline },
                    text,
                } = value;
                return (
                    <span
                        key={index}
                        className={[
                            bold ? styles.bold : "",
                            code ? styles.code : "",
                            italic ? styles.italic : "",
                            strikethrough ? styles.strikethrough : "",
                            underline ? styles.underline : "",
                        ].join(" ")}
                        style={color !== "default" ? { color } : {}}
                    >
                        {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
                    </span>
                );
            })}
        </>)
};

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

export const Callout = ({ text }: { text: CalloutProps }) => {
    return (
        <section className={styles.callout}>
            <span>{text.icon.emoji} {text?.rich_text?.[0]?.plain_text}</span>
        </section>
    )
}

export const renderNestedList = (block: any) => {
    const { type } = block;
    const value = block[type];
    if (!value) return null;

    const isNumberedList = value.children[0].type === "numbered_list_item";

    if (isNumberedList) {
        return <ol>{value.children.map((block: any) => renderBlock(block))}</ol>;
    }
    return <ul>{value.children.map((block: any) => renderBlock(block))}</ul>;
};

export const renderBlock = (block: any) => {
    const { type, id } = block;
    const value = block[type];

    switch (type) {
        case "paragraph":
            return (
                <p>
                    <TextField text={value.rich_text} />
                </p>
            );
        case "callout":
            return (
                <Callout text={value} />
            );
        case "heading_1":
            return (
                <Headline title={value.rich_text[0]} />
            );
        case "heading_2":
            return (
                <Subheadline title={value.rich_text[0]} />
            );
        case "heading_3":
            return (
                <h4>
                    <TextField text={value.rich_text} />
                </h4>
            );
        case "bulleted_list_item":
        case "numbered_list_item":
            return (
                <li>
                    <TextField text={value.rich_text} />
                    {!!value.children && renderNestedList(block)}
                </li>
            );
        case "to_do":
            return (
                <div>
                    <label htmlFor={id}>
                        <input type="checkbox" id={id} defaultChecked={value.checked} />{" "}
                        <TextField text={value.rich_text} />
                    </label>
                </div>
            );
        case "toggle":
            return (
                <details>
                    <summary>
                        <TextField text={value.rich_text} />
                    </summary>
                    {value.children?.map((block: any) => (
                        <Fragment key={block.id}>{renderBlock(block)}</Fragment>
                    ))}
                </details>
            );
        case "child_page":
            return <p>{value.title}</p>;
        case "image":
            const src =
                value.type === "external" ? value.external.url : value.file.url;
            const caption = value.caption ? value.caption[0]?.plain_text : "";
            return (
                <figure>
                    <img src={src} alt={caption} />
                    {caption && <figcaption>{caption}</figcaption>}
                </figure>
            );
        case "divider":
            return <hr key={id} />;
        case "quote":
            return <blockquote key={id}>{value.rich_text[0].plain_text}</blockquote>;
        case "code":
            return (
                <Code content={value.rich_text[0]?.plain_text} />
            );
        case "file":
            const src_file =
                value.type === "external" ? value.external.url : value.file.url;
            const splitSourceArray = src_file.split("/");
            const lastElementInArray = splitSourceArray[splitSourceArray.length - 1];
            const caption_file = value.caption ? value.caption[0]?.plain_text : "";
            return (
                <figure>
                    <div className={styles.file}>
                        📎{" "}
                        <Link href={src_file} passHref>
                            {lastElementInArray.split("?")[0]}
                        </Link>
                    </div>
                    {caption_file && <figcaption>{caption_file}</figcaption>}
                </figure>
            );
        case "bookmark":
            const href = value.url;
            return (
                <a href={href} target="_brank" className={styles.bookmark}>
                    {href}
                </a>
            );
        default:
            return `❌ Unsupported block (${type === "unsupported" ? "unsupported by Notion API" : type
                })`;
    }
};
