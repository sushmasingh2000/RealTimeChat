import React, { useState, useEffect } from "react";
import EmojiPicker from "emoji-picker-react";

function Chat({ selectedUser }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [timestamp, setTimestamp] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  useEffect(() => {
    if (selectedUser) {
      const currentTime = new Date().toLocaleTimeString();
      setTimestamp(currentTime);
    }
  }, [selectedUser]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: "me" }]);
      setMessage(""); 
    }
  };

  const handleEmojiClick = (emoji) => {
    setMessage((prevMessage) => prevMessage + emoji.emoji);
    setShowEmojiPicker(false);
  };

  const toggleEmojiPicker = () => {
    setShowEmojiPicker((prev) => !prev); 
  };

  return (
    <div className="h-full flex flex-col">
      {selectedUser && (
        <div className="flex items-center space-x-2 p-4 bg-gray-800 text-white">
          <img
            src={selectedUser.image}
            alt={selectedUser.name}
            className="h-10 w-10 rounded-full"
          />
          <div>
            <p className="font-bold">{selectedUser?.name}</p>
            {timestamp && <p className="text-sm text-gray-400">{timestamp}</p>}
          </div>
        </div>
      )}

      {/* Chat Messages */}
      <div className="flex-1 overflow-auto mb-4">
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
      <div className="relative flex items-center space-x-2 m-4">
         {/* Emoji Button */}
         <button
          onClick={toggleEmojiPicker}
          className="p-2 bg-gray-200 rounded-md"
        >
          😀
        </button>

        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 p-2 border rounded-md"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

       
        {/* Emoji Picker */}
        {showEmojiPicker && (
          <div className="absolute bottom-14 left-0 z-10">
            <EmojiPicker onEmojiClick={handleEmojiClick} />
          </div>
        )}

        {/* Send Button */}
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
