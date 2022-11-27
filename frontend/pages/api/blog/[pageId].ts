import { notionClient } from "../lib/Notion";

export default async function handler(req, res) {
    const { pageId } = req.query;

    try {
        const page = await notionClient.pages.retrieve({ page_id: pageId });
        return res.json({
            message: "Success",
            success: true,
            page,
        });
    } catch (error) {
        return res.json({
            message: Error,
            success: false,
        });
    }
}