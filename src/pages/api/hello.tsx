import * as fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const filePath = path.join(process.cwd(), `src/pages/api/randomData/${req.query.slug}.json`);
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      res.status(500).json({ error: "bobs" });
    }
    res.status(200).json(JSON.parse(data));
  })
}