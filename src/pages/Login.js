import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Prozatím jednoduchá autentizace
    if (username === "admin" && password === "admin123") {
      navigate("/admin");
    } else if (username === "student" && password === "student123") {
      navigate("/learn");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Login</h1>
      <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "300px" }}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" style={{ padding: "10px", backgroundColor: "#007BFF", color: "white", border: "none", cursor: "pointer" }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

