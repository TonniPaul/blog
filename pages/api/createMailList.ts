import { client } from "@/sanity/config/client.config";
import { NextApiRequest, NextApiResponse } from "next";

export default async function createMailList(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email } = JSON.parse(req.body);


  try {
    if (client) {

      await client.create({
        _type: "newsletter",
        name,
        email,
      });
    }

    return res.status(200).json({ message: "submitted" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Couldn't submit data", err });
  }
}
