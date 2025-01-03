import React, { useEffect, useState } from "react";
import { handleSubmit } from "../handlers/handleSubmit";
import { handleEdit } from "../handlers/handleEdit";

const API_URL = "https://edu-chat-functions-node.azurewebsites.net/api/HelloFunction?code=-OKtQBUYEufhOHibr91cG4I8WXMe_geBd4_PKEk4IJQeAzFu1aF8LA==";

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ id: "", name: "", progress: "", grade: "", sis: "", sisLogin: "", sisPassword: "" });

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Progress</th>
            <th>Grade</th>
            <th>SIS</th>
            <th>SIS Login</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.progress}%</td>
              <td>{user.grade}</td>
              <td>{user.sis}</td>
              <td>{user.sisLogin}</td>
              <td>
                <button onClick={() => handleEdit(user, setFormData)}>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(formData, setUsers, setFormData, API_URL); }}>
        {/* Formulář zde */}
      </form>
    </div>
  );
};

export default Admin;
