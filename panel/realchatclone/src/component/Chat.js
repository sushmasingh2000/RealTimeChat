import React, { useState, useEffect, useRef } from "react";
import EmojiPicker from "emoji-picker-react";
import { FaArrowRight, FaMicrophone } from 'react-icons/fa';

function Chat({ selectedUser }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [timestamp, setTimestamp] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    if (selectedUser) {
      setActive(selectedUser.isActive);
      const currentTime = new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      });
      setTimestamp(selectedUser.isActive ? "Active Now" : `Last seen at ${currentTime}`);
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
    <div className="h-full flex flex-col bg-[#E5DDD5]">
      {selectedUser && (
        <div className="flex items-center p-4 bg-[#075e54] text-white">
          <img
            src={selectedUser.image}
            alt={selectedUser.name}
            className="h-10 w-10 rounded-full"
          />
          <div className="ml-2">
            <p className="font-semibold">{selectedUser?.name}</p>
            <div className="flex items-center space-x-1">
              <span
                className={`w-2.5 h-2.5 rounded-full ${isActive ? "bg-green-500" : "bg-gray-500"}`}
              />
              <p className="text-xs">{timestamp}</p>
            </div>
          </div>
        </div>
      )}

      <div className="flex-1 overflow-auto pb-4 px-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] p-2 my-2 rounded-lg ${msg.sender === "me"
                ? "bg-[#25D366] text-white"
                : "bg-[#f1f1f1] text-black"
                }`}
            >
              {msg.text}
              <div className="text-xs text-gray-500 mt-1 text-right">
                {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative flex items-center space-x-2 p-4 bg-white border-t border-gray-300">
        <button onClick={toggleEmojiPicker} className="p-2 text-[#075e54]">
          😀
        </button>

        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 p-2 border rounded-full text-black"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        {showEmojiPicker && (
          <div className="absolute bottom-16 left-4 z-10">
            <EmojiPicker onEmojiClick={handleEmojiClick} />
          </div>
        )}
        <button
          className="p-2 text-[#075e54] hover:bg-[#e5f6f3] rounded-full"
        >
          <FaMicrophone size={20} />
        </button>
        <button
          onClick={handleSendMessage}
          className="bg-[#075e54] text-white p-2 rounded-full hover:bg-[#128c7e] transition-colors flex items-center justify-center"
        >
          <FaArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}

export default Chat;
