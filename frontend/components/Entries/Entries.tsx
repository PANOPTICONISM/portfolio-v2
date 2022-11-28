import { TextField } from 'components/Notion/Blocks';
import Link from 'next/link';
import React from 'react';
import styles from "./Entries.module.css";

export const Entries = ({ posts }) => {
    return (
        <section className={styles.entries}>
            {posts.map((entry) =>
                <article key={entry.id}>
                    <TextField text={entry.properties.Name.title} />
                    <Link href={`/blog/${entry.id}`}>Read post →</Link>
                </article>
            )}
        </section>
    )
}
