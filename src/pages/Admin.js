import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { handleSubmit } from "../handlers/handleSubmit";
import { handleEdit } from "../handlers/handleEdit";

// Import proměnné API_URL

import { API_URL } from "../config";

fetch(API_URL, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
});

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    progress: "",
    grade: "",
    sis: "",
    sisLogin: "",
    sisPassword: "",
  });

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Admin Dashboard</h1>

      {/* Tabulka uživatelů */}
      <TableContainer component={Paper} style={{ marginBottom: "20px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Progress</TableCell>
              <TableCell>Grade</TableCell>
              <TableCell>SIS</TableCell>
              <TableCell>SIS Login</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.progress}%</TableCell>
                <TableCell>{user.grade}</TableCell>
                <TableCell>{user.sis}</TableCell>
                <TableCell>{user.sisLogin}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ marginRight: "10px" }}
                    onClick={() => handleEdit(user, setFormData)}
                  >
                    Edit
                  </Button>
                  <Button variant="contained" color="error">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Formulář pro přidání/upravení uživatele */}
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Add/Edit User</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(formData, setUsers, setFormData, API_URL);
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "15px",
          maxWidth: "500px",
          margin: "auto",
        }}
      >
        <TextField
          label="ID"
          value={formData.id}
          onChange={(e) => setFormData({ ...formData, id: e.target.value })}
          fullWidth
        />
        <TextField
          label="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          fullWidth
        />
        <TextField
          label="Progress"
          type="number"
          value={formData.progress}
          onChange={(e) => setFormData({ ...formData, progress: e.target.value })}
          fullWidth
        />
        <TextField
          label="Grade"
          type="number"
          value={formData.grade}
          onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
          fullWidth
        />
        <TextField
          label="SIS"
          value={formData.sis}
          onChange={(e) => setFormData({ ...formData, sis: e.target.value })}
          fullWidth
        />
        <TextField
          label="SIS Login"
          value={formData.sisLogin}
          onChange={(e) => setFormData({ ...formData, sisLogin: e.target.value })}
          fullWidth
        />
        <TextField
          label="SIS Password"
          type="password"
          value={formData.sisPassword}
          onChange={(e) => setFormData({ ...formData, sisPassword: e.target.value })}
          fullWidth
        />
        <Button variant="contained" color="success" type="submit" fullWidth>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Admin;
