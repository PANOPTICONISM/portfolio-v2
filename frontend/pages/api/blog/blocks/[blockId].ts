import { notionClient } from "../../lib/Notion";

export default async function handler(req, res) {
    const { blockId } = req.query;

    try {
        const response = await notionClient.blocks.children.list({
            block_id: blockId,
        });
        return res.json({
            message: "Success",
            success: true,
            blocks: response.results,
        });
    } catch (error) {
        return res.json({
            message: Error,
            success: false,
        });
    }
}