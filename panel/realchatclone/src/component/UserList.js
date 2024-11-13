import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const users = [
  { id: 1, image:"https://randomuser.me/api/portraits/lego/2.jpg", name: "John Doe" },
  { id: 2, image:"https://randomuser.me/api/portraits/lego/1.jpg", name: "Jane Smith" },
  { id: 3, image:"https://randomuser.me/api/portraits/lego/3.jpg", name: "Alice Johnson" },
  { id: 4, image:"https://randomuser.me/api/portraits/lego/2.jpg", name: "Bob Brown" },
];

function UserList({ setSelectedUser }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Search Bar */}
      <div className="flex items-center bg-gray-700 p-2 rounded-md mb-4">
        <FaSearch className="text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="ml-2 bg-transparent text-white outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* User List */}
      <div className="space-y-2">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className="p-2 cursor-pointer hover:bg-gray-600 rounded-md"
            onClick={() => setSelectedUser(user)}

          >
          <div className="flex gap-5 bg-green-400 rounded-xl p-2 item-center">
          <img src={user.image} alt="" className="!h-10 !w-10 rounded-full"/> 
          <p className="pt-2">{user.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;
