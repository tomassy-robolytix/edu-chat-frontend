import React, { useEffect, useState } from "react";

const API_URL = "https://edu-chat-functions-node.azurewebsites.net/api/HelloFunction?code=-OKtQBUYEufhOHibr91cG4I8WXMe_geBd4_PKEk4IJQeAzFu1aF8LA==";

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ id: "", name: "", progress: "" });

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const newUser = await response.json();
      setUsers([...users, newUser]);
      setFormData({ id: "", name: "", progress: "" });
    } catch (err) {
      console.error("Error adding user:", err);
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {/* Tabulka uživatelů a formulář zůstávají stejné */}
    </div>
  );
};

export default Admin;
