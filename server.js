import express from "express";
import cors from "cors";
import { reviewCode } from "./review.js";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/review", async (req, res) => {
  try {
    const { code, language } = req.body;

    if (!code) {
      return res.status(400).json({ error: "Code is required" });
    }

    const result = await reviewCode(code, language);

    res.json({
      success: true,
      review: result,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: "Something went wrong",
    });
  }
});

app.get("/", (req, res) => {
  res.send("AI Code Review API is running");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});