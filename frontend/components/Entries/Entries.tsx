import Link from 'next/link';
import React from 'react';
import styles from "./Entries.module.css";

type PostProps = {
    id: string,
    properties: {
        Name: {
            title: {
                plain_text: string,
            }[]
        }
    }
}[];

export const Entries = ({ posts }: { posts: PostProps }) => {
    return (
        <section className={styles.entries}>
            {posts.map((entry) =>
                <article key={entry.id}>
                    <h2>{entry.properties.Name.title[0].plain_text}</h2>
                    <Link href={`/blog/${entry.id}`}>Read article →</Link>
                </article>
            )}
        </section>
    )
}
