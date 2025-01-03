export const handleEdit = (user, setFormData) => {
  setFormData({
    id: user.id,
    name: user.name,
    progress: user.progress,
    grade: user.grade,
    sis: user.sis,
    sisLogin: user.sisLogin,
    sisPassword: user.sisPassword,
  });
};
