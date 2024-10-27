import { useState } from "react";
import { api } from "../../api";

export const EditProfileModal = ({ isOpen, onClose, user, onSave }) => {
  const [name, setName] = useState(user.name);
  const [password, setPassword] = useState("");
  const [description, setDescription] = useState(user.description);
  const [profilePicture, setProfilePicture] = useState(null);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("password", password);
    formData.append("description", description);

    if (profilePicture) {
      formData.append("profilePicture", profilePicture);
    }

    try {
      const response = await api.put(`/user/update/${user.id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Perfil atualizado com sucesso:", response.data);
      onSave({ name, password, description, profilePicture });
    } catch (error) {
      console.error("Erro ao atualizar o perfil:", error);
    } finally {
      setIsSaving(false);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-md space-y-4 w-96">
        <h2 className="text-2xl font-bold text-center">Editar Perfil</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
          placeholder="Nome"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
          placeholder="Senha"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
          placeholder="Descrição"
        />
        <input
          type="file"
          onChange={(e) => setProfilePicture(e.target.files[0])}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="py-2 px-4 bg-gray-500 text-white rounded-md"
            disabled={isSaving}
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            className="py-2 px-4 bg-blue-600 text-white rounded-md"
            disabled={isSaving}
          >
            {isSaving ? "Salvando..." : "Salvar"}
          </button>
        </div>
      </div>
    </div>
  );
};
