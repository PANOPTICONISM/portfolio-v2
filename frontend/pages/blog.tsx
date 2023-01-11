import { Footer, Header, LoadingScreen } from 'components';
import { Entries } from 'components/Entries/Entries';
import { TextField } from 'components/Notion/Blocks';
import { useThemeContext } from 'contexts/theme-context';
import { GetServerSideProps, NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { BlogDataProps } from 'types/types';

const Blog: NextPage<BlogDataProps> = ({ posts, success }) => {
    const { theme } = useThemeContext();
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        if (success === true) {
            setLoading(false);
        }
    }, [success]);

    return (
        <div className={`common theme-${theme}`}>
            {isLoading ?
                <LoadingScreen /> :
                <>
                    <Header />
                    <h1>Archive</h1>
                    <main>
                        <Entries posts={posts} />
                    </main>
                    <Footer />
                </>
            }
        </div>
    )
}

export default Blog;

export const getServerSideProps: GetServerSideProps = async () => {
    const entries = await fetch(`${process.env.VERCEL_URL}/api/blog/table`).then((res) => res.json());
    const readyOnlyEntries = entries.posts.results.filter((entry: { properties: { Status: { status: { name: string; }; }; }; }) => entry.properties.Status.status.name === 'Done');

    return {
        props: { posts: readyOnlyEntries, success: entries.success },
    };
};