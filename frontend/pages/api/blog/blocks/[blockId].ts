import { BlockObjectResponse, PartialBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { NextApiResponse } from "next";
import { notionClient } from "../../lib/Notion";

type Data = {
    message: ErrorConstructor | string;
    success: boolean;
    blocks?: (PartialBlockObjectResponse | BlockObjectResponse)[],
};

export default async function handler(req: { query: { blockId: string; }; },
    res: NextApiResponse<Data>) {
    const { blockId } = req.query;

    try {
        const response = await notionClient.blocks.children.list({
            block_id: blockId,
        });
        const blocks = response.results;

        return res.json({
            message: "Success",
            success: true,
            blocks,
        });
    } catch (error) {
        return res.json({
            message: Error,
            success: false,
        });
    }
}