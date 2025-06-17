# 🤖 AI Chatbot with Gemini API

A responsive and intelligent AI chatbot interface powered by **Google Gemini API**.  
This project allows users to send queries and receive real-time generative responses in a conversational UI.

---

## 🛠️ Tech Stack Used

| Technology | Description |
|------------|-------------|
| ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) | Frontend UI framework |
| ![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white) | Responsive styling & layout |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) | Scripting logic |
| ![Gemini](https://img.shields.io/badge/Google%20GenAI-4285F4?style=for-the-badge&logo=google&logoColor=white) | Gemini 2.0 Generative AI model |

---

## 📁 Project Structure




project-root/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   └── Chatbot.js       # Main chatbot logic and UI
│   ├── App.css              # Global styling
│   ├── App.js               # Main app container
│   └── Chatbot.css          # Chatbot-specific styling
│
├── package.json
└── README.md



---

## ✨ Features

- Toggle background style (transparent or dark)
- Real-time messaging with Gemini API
- Auto-scroll to latest message
- Thinking animation for bot typing
- Input field limit logic
- Responsive layout for all devices

---

## ⚙️ How to Run the Project

### 1. Clone and install dependencies


git clone /https://github.com/nimal1310/ChatBot.git
cd chatBot
npm install

const ai = new GoogleGenAI({ apiKey: 'your-api-key' });
npm start

🖼️ Preview


![Chatbot Screenshot1](./ScreenShot1.png)
![Chatbot Screenshot2](./ScreenShot2.png)


💡 Sample UI Flow

+------------------------------------------------------+
| ChatBot [🔘 Toggle]                                   |
|------------------------------------------------------|
| 🧠 Bot: Hello! How can I assist you today?           |
| 👤 You: Tell me a joke                              |
| 🧠 Bot: Why did the computer cross the road?        |
|         To get a byte to eat!                        |
+------------------------------------------------------+
| [ write your query... ]   [🚀]                        |
+------------------------------------------------------+

🔮 Future Enhancements
Integrate voice input (Web Speech API)

Save chat history to backend (Node.js / Firebase)

Add document-based retrieval (RAG architecture)
