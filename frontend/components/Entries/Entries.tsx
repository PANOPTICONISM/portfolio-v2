import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from "./Entries.module.css";

export type PostProps = {
    id: string,
    icon: {
        file: {
            url: string,
        },
        emoji: string,
        type: string,
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
    "JavaScript": "#c2b13f",
    "TypeScript": "#007acc",
    "React": "#57c4e1",
    "Frontend": "#007d55",
    "Material UI": "rgb(0, 127, 255)",
    "GIT": "#F1502F",
    "Tools": "#795695",
    "Resources": "#fc9d09",
    "Testing": "#FF7F50",
    "Jest": "#944059"
}

export const Entries = ({ posts }: { posts: PostProps }) => {
    return (
        <main className={styles.entries}>
            {posts.map((entry) =>
                <article key={entry.id}>
                    <span className={styles.icon}>{entry.icon.type === "emoji" ? entry.icon.emoji : <img src={entry.icon.file.url} alt="icon" width={30} height={30} />}</span>
                    <h2>{entry.properties.Name.title[0].plain_text}</h2>
                    {entry.properties.Tags.multi_select && <ul>{entry.properties.Tags.multi_select.map((tag) =>
                        <li key={tag.id} style={{ background: colors[tag.name] }}>{tag.name}</li>)}</ul>}
                    <p>{entry.properties.Summary.rich_text[0]?.plain_text}</p>
                    <Link href={`/blog/${entry.id}`}>
                        <div className={styles.learn_more}>
                            <div className={styles.projects_button}>
                                <span>Read article →</span>
                            </div>
                        </div>
                    </Link>
                </article>
            )}
        </main>
    )
}
