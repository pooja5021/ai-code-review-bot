# 🤖 AI Code Review Bot

An AI-powered web application that reviews code and provides feedback on bugs, security issues, performance, and code quality using Groq LLM API.

---

## 🚀 Features

* 🔍 AI-based code review
* 🐞 Detects bugs and logical issues
* 🔐 Highlights security vulnerabilities
* ⚡ Suggests performance improvements
* 🧹 Improves code quality and readability
* 🌐 Supports multiple languages (JavaScript, Python, Java, C++, Go)

---

## 🛠️ Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **Backend:** Node.js, Express.js
* **AI Model:** Groq API (LLaMA 3.1)
* **Deployment:** Render
* **Version Control:** Git & GitHub

---

## 📂 Project Structure

```
ai-code-review-bot/
│── index.html        # Frontend UI
│── server.js         # Express backend server
│── review.js         # AI logic (Groq API)
│── index.js          # CLI tool (optional)
│── test.js           # Sample test file
│── .env              # API key (not pushed)
│── .gitignore
│── package.json
```

---

## ⚙️ Installation & Setup (Local)

### 1️⃣ Clone the repository

```
git clone https://github.com/pooja5021/ai-code-review-bot.git
cd ai-code-review-bot
```

---

### 2️⃣ Install dependencies

```
npm install
```

---

### 3️⃣ Setup environment variables

Create a `.env` file and add:

```
GROQ_API_KEY=your_api_key_here
```

---

### 4️⃣ Run backend server

```
node server.js
```

Server will run at:

```
http://localhost:3000
```

---

### 5️⃣ Run frontend

Open `index.html` using Live Server or browser.

---

## 🔥 API Endpoint

### POST `/review`

**Request Body:**

```json
{
  "code": "function sum(a,b){return a+b}",
  "language": "JavaScript"
}
```

**Response:**

```json
{
  "success": true,
  "review": "AI generated review..."
}
```

---

## 🌍 Live Demo

👉 (Add your Render link here after deployment)

---

## 🧠 How It Works

1. User pastes code in frontend
2. Frontend sends request to backend API
3. Backend sends prompt to Groq AI
4. AI analyzes code
5. Response is displayed to user

---

## 🔐 Security Note

* `.env` file is excluded using `.gitignore`
* API keys are never exposed in the repository

---

## 📸 Screenshots

(Add screenshots here if needed)

---

## 🚀 Future Improvements

* ✅ Add authentication (login/signup)
* ✅ Support file upload (.py, .js)
* ✅ GitHub repo code review
* ✅ Code diff comparison
* ✅ Syntax highlighting editor

---

## 👩‍💻 Author

**Pooja Upadhyay**

---

## ⭐ If you like this project

Give it a ⭐ on GitHub!
