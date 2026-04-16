import fs from "fs";
import { reviewCode } from "./review.js";

const filePath = process.argv[2];

if (!filePath) {
  console.log("❌ Please provide a file path");
  process.exit(1);
}

try {
  const code = fs.readFileSync(`./${filePath}`, "utf-8");

  console.log("📄 Code being sent:\n", code);
  console.log("\n🔍 Reviewing code...\n");

  reviewCode(code)
    .then((result) => {
      console.log("=================================");
      console.log("AI CODE REVIEW RESULT");
      console.log("=================================\n");

      console.log(result);

      console.log("\n=================================");

      fs.writeFileSync("review.txt", result);
      console.log("\n📄 Review saved to review.txt");
    })
    .catch((err) => {
      console.error("❌ Error:", err);
    });

} catch (error) {
  console.error("❌ File Error:", error.message);
}