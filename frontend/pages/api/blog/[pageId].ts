import { GetPageResponse } from "@notionhq/client/build/src/api-endpoints";
import { NextApiRequest, NextApiResponse } from "next";
import { notionClient } from "../lib/Notion";

type Data = {
    message: ErrorConstructor | string;
    success: boolean;
    page?: GetPageResponse,
};

export default async function handler(req: { query: { pageId: string; }; },
    res: NextApiResponse<Data>) {
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