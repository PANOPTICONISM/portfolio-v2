import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "./lib/Contentful";

type Data = {
  message: ErrorConstructor | string;
  success: boolean;
  jobs?: any;
};

export default async function retrieveData(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const jobs = await client.getEntries({
      content_type: "experience",
      order: "fields.id",
    });
    return res.json({
      message: "Success",
      success: true,
      jobs,
    });
  } catch (error) {
    return res.json({
      message: Error,
      success: false,
    });
  }
}
