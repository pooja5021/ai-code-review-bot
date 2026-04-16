import Groq from "groq-sdk";
import dotenv from "dotenv";

dotenv.config();

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function reviewCode(code, language = "code") {
  try {
    const prompt = `
You are a senior ${language} developer.

Review the following ${language} code and provide:
1. Bugs
2. Security issues
3. Performance improvements
4. Code quality suggestions

Code:
${code}
`;

    const response = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        { role: "system", content: "You are an expert code reviewer." },
        { role: "user", content: prompt }
      ],
    });

    return response.choices[0].message.content;

  } catch (error) {
    console.error("Groq Error:", error);
    return "Error reviewing code";
  }
}