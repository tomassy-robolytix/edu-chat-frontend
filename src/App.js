import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Learn from "./pages/Learn";

function App() {
  return (
    <Router>
      <Routes>
        {/* Přihlašovací stránka */}
        <Route path="/" element={<Login />} />
        {/* Admin dashboard */}
        <Route path="/admin" element={<Admin />} />
        {/* Učební prostředí */}
        <Route path="/learn" element={<Learn />} />
      </Routes>
    </Router>
  );
}

export default App;
