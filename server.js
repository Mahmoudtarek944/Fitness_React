import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";
import { Buffer } from "buffer";
import NodeCache from "node-cache"; // 1. استيراد مكتبة الكاش

dotenv.config();

const app = express();
app.use(cors());

// 2. إعداد الكاش: يتم تخزين البيانات لمدة 86400 ثانية (24 ساعة)
const imageCache = new NodeCache({ stdTTL: 86400 });

// Test env
console.log("RapidAPI Key:", process.env.RAPIDAPI_KEY);

app.get("/exercise-image/:id", async (req, res) => {
  const { id } = req.params;

  // 3. التحقق من الكاش أولاً
  const cachedImage = imageCache.get(id);
  if (cachedImage) {
    console.log(`Serving image ${id} from cache.`);
    res.set("Content-Type", "image/gif");
    // يتم إرجاع الصورة المخزنة
    return res.send(cachedImage);
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
      if (response.status === 429) {
        console.error(`Rate Limit Exceeded for exercise ID: ${id}`);
        // إرجاع خطأ 503 للعميل ليدل على عدم توفر الخدمة حاليًا
        return res
          .status(503)
          .send("API rate limit exceeded. Please try again later.");
      }
      return res
        .status(response.status)
        .send(`Error fetching image from API: Status ${response.status}`);
    }

    const arrayBuffer = await response.arrayBuffer();
    const imageBuffer = Buffer.from(arrayBuffer);

    // 4. تخزين الصورة الجديدة في الكاش قبل إرسالها
    imageCache.set(id, imageBuffer);
    console.log(`Image ${id} fetched and stored in cache.`);

    res.set("Content-Type", "image/gif");
    res.send(imageBuffer);
  } catch (err) {
    console.error("Server processing error:", err);
    res.status(500).send("Server error fetching image");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
