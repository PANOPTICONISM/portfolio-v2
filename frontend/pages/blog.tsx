import { Footer, Header, LoadingScreen } from 'components';
import { Entries } from 'components/Entries/Entries';
import { TextField } from 'components/Notion/Blocks';
import { useThemeContext } from 'contexts/theme-context';
import { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BlogDataProps } from 'types/types';

const Blog: NextPage<BlogDataProps> = ({ entries }) => {
    const { theme } = useThemeContext();
    const { results } = entries.posts;
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        if (entries.success === true) {
            setLoading(false);
        }
    }, [entries]);

    return (
        <div className={`common theme-${theme}`}>
            {isLoading ?
                <LoadingScreen /> :
                <>
                    <Header />
                    <h1>Archive</h1>
                    <main>
                        <Entries posts={results} />
                    </main>
                    <Footer />
                </>
            }
        </div>
    )
}

export default Blog;

export const getServerSideProps: GetServerSideProps = async () => {
    const entries = await fetch(`${process.env.BASE_FETCH_URL}/api/blog/table`).then((res) => res.json());

    return {
        props: { entries },
    };
};