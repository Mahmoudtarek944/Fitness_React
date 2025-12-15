// api/exercise-image.js
import { Buffer } from "buffer";
export default async function handler(req, res) {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: "Missing exercise id" });
  }

  try {
    const response = await fetch(
      `https://exercisedb.p.rapidapi.com/image?exerciseId=${id}&resolution=180`,
      {
        headers: {
          "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
          "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        },
      }
    );

    if (!response.ok) {
      return res.status(500).json({ error: "Failed to fetch image" });
    }

    const buffer = Buffer.from(await response.arrayBuffer());
    res.setHeader("Content-Type", "image/gif");
    res.send(buffer);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
}
