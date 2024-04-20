import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "./lib/Contentful";

type Data = {
  message?: ErrorConstructor | string;
  success?: boolean;
  projects?: any;
};

export default async function retrieveData(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const projects = await client.getEntries({
      content_type: "project",
      order: "fields.id",
    });
    return res.json({
      projects,
      message: "Success",
      success: true,
    });
  } catch (error) {
    return res.json({
      message: Error,
      success: false,
    });
  }
}
