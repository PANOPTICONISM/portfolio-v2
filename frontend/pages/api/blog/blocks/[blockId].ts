import { notionClient } from "../../lib/Notion";

export default async function handler(req, res) {
    const { blockId } = req.query;

    try {
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
            return res.json({
                message: "Success",
                success: true,
                blocks,
            });
        }
        return blocks;
    } catch (error) {
        return res.json({
            message: Error,
            success: false,
        });
    }
}