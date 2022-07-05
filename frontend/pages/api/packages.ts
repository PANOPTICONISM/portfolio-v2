import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "./lib/Contentful";

type Data = {
  message: ErrorConstructor | string;
  success: boolean;
  packages?: any;
};

export default async function retrieveData(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const packages = await client.getEntries({
      content_type: "package",
    });
    return res.json({
      message: "Success",
      success: true,
      packages,
    });
  } catch (error) {
    return res.json({
      message: Error,
      success: false,
    });
  }
}
