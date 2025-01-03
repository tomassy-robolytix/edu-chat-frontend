import { API_URL } from "../config";

export const handleSubmit = async (formData, setUsers, setFormData) => {
  try {
    const method = formData.id ? "PUT" : "POST"; // Rozhodni, zda je to update nebo create
    const response = await fetch(API_URL, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const updatedUser = await response.json();
    setUsers((prevUsers) =>
      method === "POST"
        ? [...prevUsers, updatedUser] // Přidání nového uživatele
        : prevUsers.map((user) =>
            user.id === updatedUser.id ? updatedUser : user
          ) // Aktualizace existujícího uživatele
    );
    setFormData({
      id: "",
      name: "",
      progress: "",
      grade: "",
      sis: "",
      sisLogin: "",
      sisPassword: "",
    });
  } catch (err) {
    console.error("Error submitting user:", err);
  }
};
