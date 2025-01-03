export const handleSubmit = async (formData, setUsers, setFormData, API_URL) => {
  try {
    const method = formData.id ? "PUT" : "POST"; // Rozlišení mezi přidáním a editací
    const response = await fetch(API_URL, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!response.ok) throw new Error(`Error: ${response.status}`);

    const updatedUser = await response.json();

    if (method === "PUT") {
      setUsers((users) => users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
    } else {
      setUsers((users) => [...users, updatedUser]);
    }

    setFormData({ id: "", name: "", progress: "", grade: "", sis: "", sisLogin: "", sisPassword: "" });
  } catch (err) {
    console.error("Error submitting user:", err);
  }
};
