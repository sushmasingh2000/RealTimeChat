import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const users = [
  { id: 1, image: "https://randomuser.me/api/portraits/lego/2.jpg", name: "John Doe" },
  { id: 2, image: "https://randomuser.me/api/portraits/lego/1.jpg", name: "Jane Smith" },
  { id: 3, image: "https://randomuser.me/api/portraits/lego/3.jpg", name: "Alice Johnson" },
  { id: 4, image: "https://randomuser.me/api/portraits/lego/2.jpg", name: "Bob Brown" },
  { id: 5, image: "https://randomuser.me/api/portraits/lego/2.jpg", name: "John Doe" },
 
];

function UserList({ setSelectedUser }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-full bg-[#E5DDD5] p-4">
      <div className="relative mb-4">
      <input
        type="text"
        placeholder="Search..."
        className="w-full pl-10 pr-4 py-2 bg-[#075e54] text-white outline-none placeholder-white placeholder-opacity-80 rounded-full"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white text-xl" />
    </div>
      <div className="space-y-2 max-h-[calc(100vh-160px)] overflow-hidden hover:overflow-y-auto">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className="flex items-center p-2 cursor-pointer hover:bg-[#25D366] rounded-lg bg-white"
            onClick={() => setSelectedUser(user)}
          >
            <img
              src={user.image}
              alt={user.name}
              className="h-12 w-12 rounded-full border-2 border-[#075e54]"
            />
            <p className="ml-4 text-[#075e54] text-lg">{user.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;
