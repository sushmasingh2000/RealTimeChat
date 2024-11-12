import React, { useState } from "react";
import Chat from "./Chat";
import UserList from "./UserList";

function Home() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="h-screen flex">
      {/* Left Side: User List and Search Bar */}
      <div className="w-1/2 bg-gray-800 text-white p-4">
        <UserList setSelectedUser={setSelectedUser} />
      </div>

      {/* Right Side: Chat Area */}
      <div className="w-1/2 bg-gray-50 p-4">
        {selectedUser ? (
          <Chat selectedUser={selectedUser} />
        ) : (
          <p>Select a user to start chatting</p>
        )}
      </div>
    </div>
  );
}

export default Home;
