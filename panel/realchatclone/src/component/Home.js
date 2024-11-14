import React, { useState } from "react";
import Chat from "./Chat";
import UserList from "./UserList";

function Home() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="h-screen flex">
      <div className="w-[30%] bg-[#075e54] text-white p-2 flex flex-col">
        <div className="text-center ">
          <h1 className="text-xl py-2 font-semibold">WhatsApp</h1>
        </div>
        <UserList setSelectedUser={setSelectedUser} />
      </div>
      <div className="w-[70%] bg-[#E5DDD5] flex flex-col">
        {selectedUser ? (
          <Chat selectedUser={selectedUser} />
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <h2 className="text-2xl font-semibold text-[#075e54] mb-4">Welcome to WhatsApp!</h2>
            <p className="text-gray-600 mb-6">Please select a user to start chatting.</p>
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 12.72V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v4.72a2 2 0 00-1 1.732V9a2 2 0 00-2-2h-4a2 2 0 00-2 2v3.452a2 2 0 00-1-1.732V4a2 2 0 00-2-2h-2a2 2 0 00-2 2v16a2 2 0 002 2h2a2 2 0 002-2v-7.204a2 2 0 001 1.732V19a2 2 0 002 2h4a2 2 0 002-2v-3.568a2 2 0 001-1.732V12.72a2 2 0 00-1-1.732z"
                />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
