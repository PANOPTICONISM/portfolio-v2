import Link from 'next/link';
import React from 'react';
import styles from "./Entries.module.css";

export const Entries = ({ posts }) => {
    return (
        <section className={styles.entries}>
            {posts.map((entry) =>
                <article key={entry.id}>
                    <h2>{entry.properties.Name.title[0].plain_text}</h2>
                    <Link href={`/blog/${entry.id}`}>Read post →</Link>
                </article>
            )}
        </section>
    )
}
