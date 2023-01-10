import Link from 'next/link';
import React from 'react';
import styles from "./Entries.module.css";

export type PostProps = {
    id: string,
    icon: {
        emoji: string,
    }
    properties: {
        Name: {
            title: {
                plain_text: string,
            }[],
        },
        Summary: {
            rich_text: {
                plain_text: string,
            }[]
        },
        Tags: {
            multi_select: {
                id: string,
                name: string,
                color: string,
            }[]
        }
    }
}[];

type ColorsProps = {
    [key: string]: string,
}

const colors: ColorsProps = {
    "React": "#61dafb",
    "Frontend": "#007d55",
    "Material UI": "rgb(0, 127, 255)",
}

export const Entries = ({ posts }: { posts: PostProps }) => {
    console.log(colors["React"])
    return (
        <section className={styles.entries}>
            {posts.map((entry) =>
                <article key={entry.id}>
                    <span>{entry.icon.emoji}</span>
                    <h2>{entry.properties.Name.title[0].plain_text}</h2>
                    {entry.properties.Tags.multi_select && <ul>{entry.properties.Tags.multi_select.map((tag) =>
                        <li key={tag.id} style={{ background: colors[tag.name] }}>{tag.name}</li>)}</ul>}
                    <p>{entry.properties.Summary.rich_text[0]?.plain_text}</p>
                    <Link href={`/blog/${entry.id}`}>Read article →</Link>
                </article>
            )}
        </section>
    )
}
