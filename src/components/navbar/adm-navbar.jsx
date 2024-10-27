import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { EditProfileModal } from "../model";

export const AdminNavbar = () => {
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [user, setUser] = useState({
    name: "Administrador",
    profilePicture: "https://via.placeholder.com/150",
    description: "Gestor de Conteúdos",
  });
  const handleProfileUpdate = (updatedUser) => {
    setUser(updatedUser);
  };
  const handleProfileMenuToggle = () => {
    setProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleLogout = () => {
    // Lógica para logout
    navigate("/login");
  };

  const handleDeleteProfile = () => {
    // Lógica para deletar perfil
    alert("Perfil deletado");
  };

  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center">
      <h1 className="text-white text-2xl font-bold">Painel de Administração</h1>
      <div className="flex items-center space-x-4">
        <Link to="/admin/add/member" className="text-white hover:underline">
          Membros
        </Link>
        <Link to="/admin/add/news" className="text-white hover:underline">
          Notícias
        </Link>
        <Link to="/admin/manage/content" className="text-white hover:underline">
          Gestão de Conteúdo
        </Link>

        {/* Menu do Perfil */}
        <div className="relative">
          <button
            onClick={handleProfileMenuToggle}
            className="flex items-center space-x-2"
          >
            <img
              src={user.profilePicture}
              alt="Foto de perfil"
              className="w-10 h-10 rounded-full"
            />
            <span className="text-white">{user.name}</span>
          </button>
          {isProfileMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md">
              <button
                onClick={() => setEditModalOpen(!isEditModalOpen)}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Editar Perfil
              </button>
              <button
                onClick={handleDeleteProfile}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
              >
                Deletar Perfil
              </button>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
      <EditProfileModal
        isOpen={isEditModalOpen}
        onClose={() => setEditModalOpen(false)}
        user={user}
        onSave={handleProfileUpdate}
      />
    </nav>
  );
};
