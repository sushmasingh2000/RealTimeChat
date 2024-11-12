import React, { useState } from "react";

function Chat({ selectedUser }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: "me" }]);
      setMessage("");
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 overflow-auto mb-4">
        {/* Chat Messages */}
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 my-2 rounded-md ${
              msg.sender === "me" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Chat Input */}
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 p-2 border rounded-md"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white p-2 rounded-md"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;
