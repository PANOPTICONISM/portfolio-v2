import { Footer, Header, LoadingScreen } from 'components';
import { Entries } from 'components/Entries/Entries';
import { TextField } from 'components/Notion/Blocks';
import { useThemeContext } from 'contexts/theme-context';
import { GetServerSideProps, NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { BlogDataProps } from 'types/types';
import { notionClient } from './api/lib/Notion';

const Blog: NextPage<BlogDataProps> = ({ posts }) => {
    const { theme } = useThemeContext();
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        if (posts) {
            setLoading(false);
        }
    }, [posts]);

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
    const databaseId = "75de570ce04946ba8ddc3c6f48f6a723";

    const entries = await notionClient.databases.query({
        database_id: databaseId
    });
    const readyOnlyEntries = entries.results.filter((entry) => {
        if ("properties" in entry) {
            const status = entry.properties.Status;
            if (status.type === "status" && status.status) {
                return status.status.name === 'Done'
            }
        }
    });
    return {
        props: { posts: readyOnlyEntries },
    };
};