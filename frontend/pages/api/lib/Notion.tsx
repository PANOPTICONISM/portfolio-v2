import { Client } from "@notionhq/client";

const API_key = process.env.NOTION_API_KEY;
export const notionClient = new Client({ auth: API_key })