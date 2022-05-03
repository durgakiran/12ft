// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { url } = req.query;
  const response = await axios.get(
    `http://webcache.googleusercontent.com/search?q=cache:${url}`
  );

  const responseCode = response.status;

  return res.status(responseCode).send(response.data);
}
