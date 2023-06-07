import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@sanity/client";
import clientConfig from "@/sanity/config/client.config";

export default async function createComment(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { _id, name, email, comment } = JSON.parse(req.body);

  const client = createClient(clientConfig);

  try {
    await client.create({
      _type: "comment",
      post: {
        _type: "reference",
        _ref: _id,
      },
      name,
      email,
      comment,
    });

    return res.status(200).json({ message: "Comment submitted" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Couldn't submit comment", err });
  }
}
