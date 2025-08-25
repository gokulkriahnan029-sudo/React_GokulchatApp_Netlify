
import './App.css'
import { useEffect, useState } from 'react'



function App() { 


  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const systemPrompt = {
        role: "user",
        parts: [
          {
            text: "You are Gokul AI, a friendly assistant. Never mention Google or OpenAI in your replies."
          }
        ],
      };

  const callGemini = async (chatHistory) => {
    try {
      const res = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
        {
          method: "POST",
          headers: { "Content-Type": "application/json", "X-goog-api-key": "AIzaSyCW7PKHC8AFaGF6uKp3ciP87m6FRgdRFXQ"},
          body: JSON.stringify({
            contents: [ systemPrompt, ...chatHistory.map((msg) => ({
              role: msg.sender === "user" ? "user" : "model",
              parts: [{ text: msg.text }],
            })),
          ]
          }),
        }
      );

      const data = await res.json();
      return data.candidates?.[0]?.content?.parts?.[0]?.text || "No response";
    } catch (err) {
      console.error("Error:", err);
      return "Error calling Gemini API";
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);

    const botReply = await callGemini(newMessages);
    setMessages([...newMessages, { sender: "bot", text: botReply }]);
    setInput("");
  };


return (
      <>
         <div className="chat-container">
      <div className="chat-box">
        <header className="app-header">
          <h1> 🤖 Gokul -- AI 🤖 </h1>
        </header>
        <div className="messages">
          {messages.length < 1 && <h2 className='text'>AI Build By Gokul</h2>}
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`message ${msg.sender === "user" ? "user" : "bot"}`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="input-area">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
      </>
  )
}

export default App
