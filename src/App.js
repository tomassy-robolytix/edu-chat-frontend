import React, { useEffect, useState } from "react";

const API_URL = "https://edu-chat-functions-node.azurewebsites.net/api/HelloFunction?code=-OKtQBUYEufhOHibr91cG4I8WXMe_geBd4_PKEk4IJQeAzFu1aF8LA==";

function App() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ id: "", name: "", progress: "" });

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((newUser) => {
        setUsers([...users, newUser]);
        setFormData({ id: "", name: "", progress: "" });
      })
      .catch((err) => console.error("Error adding user:", err));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>User Progress Dashboard</h1>
      <table border="1" cellPadding="10" cellSpacing="0" style={{ width: "100%", marginBottom: "20px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.progress}%</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "300px" }}>
        <input
          type="text"
          placeholder="ID"
          value={formData.id}
          onChange={(e) => setFormData({ ...formData, id: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Progress"
          value={formData.progress}
          onChange={(e) => setFormData({ ...formData, progress: e.target.value })}
          required
        />
        <button type="submit" style={{ padding: "10px", backgroundColor: "#007BFF", color: "white", border: "none", cursor: "pointer" }}>
          Add User
        </button>
      </form>
    </div>
  );
}

export default App;
