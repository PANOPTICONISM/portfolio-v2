import { notionClient } from "pages/api/lib/Notion";

import { Client } from "@notionhq/client";

const notion = new Client({
    auth: "secret_8oekjJVsjHwppBp3KbmB4m1TJL6O9sgborL5aEMCddg",
});

export const getDatabase = async (databaseId: string) => {
    const response = await notion.databases.query({
        database_id: databaseId,
    });
    return response.results;
};

export const getPage = async (pageId: string) => {
    const response = await notionClient.pages.retrieve({ page_id: pageId });
    return response;
};

export const getBlocks = async (blockId: string) => {
    const blocks = [];
    let cursor;
    while (true) {
        const { results, next_cursor } = await notionClient.blocks.children.list({
            start_cursor: cursor,
            block_id: blockId,
        });
        blocks.push(...results);
        if (!next_cursor) {
            break;
        }
        cursor = next_cursor;
    }
    return blocks;
};