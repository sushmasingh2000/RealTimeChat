import React, { useState } from "react";
import Chat from "./Chat";
import UserList from "./UserList";

function Home() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="h-screen flex">
      {/* Left Side: User List and Search Bar */}
      <div className="w-[30%] bg-gray-800 text-white p-4">
        <UserList setSelectedUser={setSelectedUser} />
      </div>

      {/* Right Side: Chat Area */}
      <div className="w-[70%] bg-gray-50">
        {selectedUser ? (
          <Chat selectedUser={selectedUser} />
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center relative z-10">
      <div className="absolute inset-0 bg-cover bg-center"
       style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2021/03/31/10/07/welcome-screen-for-pc-6139167_1280.jpg')" }}></div>

    </div>
        )}
      </div>
    </div>
  );
}

export default Home;
