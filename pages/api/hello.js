// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from "next";

// type Data = {
//   name: string;
// };

export default function handler(
  req,
  res,
) {
  res.status(200).json({ name: "John Doe" });
}
