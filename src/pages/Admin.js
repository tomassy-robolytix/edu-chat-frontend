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
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>Admin Dashboard</h1>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "20px" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "10px", textAlign: "left" }}>ID</th>
            <th style={{ border: "1px solid black", padding: "10px", textAlign: "left" }}>Name</th>
            <th style={{ border: "1px solid black", padding: "10px", textAlign: "left" }}>Progress</th>
            <th style={{ border: "1px solid black", padding: "10px", textAlign: "left" }}>Grade</th>
            <th style={{ border: "1px solid black", padding: "10px", textAlign: "left" }}>SIS</th>
            <th style={{ border: "1px solid black", padding: "10px", textAlign: "left" }}>SIS Login</th>
            <th style={{ border: "1px solid black", padding: "10px", textAlign: "left" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td style={{ border: "1px solid black", padding: "10px" }}>{user.id}</td>
              <td style={{ border: "1px solid black", padding: "10px" }}>{user.name}</td>
              <td style={{ border: "1px solid black", padding: "10px" }}>{user.progress}%</td>
              <td style={{ border: "1px solid black", padding: "10px" }}>{user.grade}</td>
              <td style={{ border: "1px solid black", padding: "10px" }}>{user.sis}</td>
              <td style={{ border: "1px solid black", padding: "10px" }}>{user.sisLogin}</td>
              <td style={{ border: "1px solid black", padding: "10px" }}>
                <button
                  style={{ marginRight: "5px", padding: "5px", backgroundColor: "#007BFF", color: "white", border: "none", cursor: "pointer" }}
                  onClick={() => handleEdit(user, setFormData)}
                >
                  Edit
                </button>
                <button
                  style={{ padding: "5px", backgroundColor: "#DC3545", color: "white", border: "none", cursor: "pointer" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(formData, setUsers, setFormData, API_URL);
        }}
        style={{ display: "flex", flexDirection: "column", maxWidth: "400px", margin: "auto" }}
      >
        <h2 style={{ textAlign: "center" }}>Add/Edit User</h2>
        <input
          type="text"
          placeholder="ID"
          value={formData.id}
          onChange={(e) => setFormData({ ...formData, id: e.target.value })}
          style={{ padding: "10px", marginBottom: "10px" }}
        />
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          style={{ padding: "10px", marginBottom: "10px" }}
        />
        <input
          type="number"
          placeholder="Progress"
          value={formData.progress}
          onChange={(e) => setFormData({ ...formData, progress: e.target.value })}
          style={{ padding: "10px", marginBottom: "10px" }}
        />
        <input
          type="number"
          placeholder="Grade"
          value={formData.grade}
          onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
          style={{ padding: "10px", marginBottom: "10px" }}
        />
        <input
          type="text"
          placeholder="SIS"
          value={formData.sis}
          onChange={(e) => setFormData({ ...formData, sis: e.target.value })}
          style={{ padding: "10px", marginBottom: "10px" }}
        />
        <input
          type="text"
          placeholder="SIS Login"
          value={formData.sisLogin}
          onChange={(e) => setFormData({ ...formData, sisLogin: e.target.value })}
          style={{ padding: "10px", marginBottom: "10px" }}
        />
        <input
          type="password"
          placeholder="SIS Password"
          value={formData.sisPassword}
          onChange={(e) => setFormData({ ...formData, sisPassword: e.target.value })}
          style={{ padding: "10px", marginBottom: "10px" }}
        />
        <button
          type="submit"
          style={{ padding: "10px", backgroundColor: "#28A745", color: "white", border: "none", cursor: "pointer" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Admin;
