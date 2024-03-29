import { GetPageResponse, QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import { NextApiRequest, NextApiResponse } from "next";
import { notionClient } from "../lib/Notion";

type Data = {
    message: ErrorConstructor | string;
    success: boolean;
    posts?: QueryDatabaseResponse,
};

const databaseId = "75de570ce04946ba8ddc3c6f48f6a723";

export default async function retrieveData(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        const posts = await notionClient.databases.query({
            database_id: databaseId
        });

        return res.json({
            message: "Success",
            success: true,
            posts,
        });
    } catch (error) {
        return res.json({
            message: Error,
            success: false,
        });
    }
}