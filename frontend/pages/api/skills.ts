import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "./lib/Contentful";

type Data = {
  message: ErrorConstructor | string;
  success: boolean;
  skills?: any;
};

export default async function retrieveData(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const skills = await client.getEntries({
      content_type: "toolshed",
      order: "fields.id",
    });
    return res.json({
      message: "Success",
      success: true,
      skills,
    });
  } catch (error) {
    return res.json({
      message: Error,
      success: false,
    });
  }
}
