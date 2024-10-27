import { useState } from "react";
import axios from "axios";
import { AdminNavbar } from "../navbar/adm-navbar";
import { Link } from "react-router-dom";
import { api } from "../../api";

export const AddTeamMemberForm = () => {
  const [member, setMember] = useState({
    name: { pt: "" },
    info: { pt: "", en: "" },
    file: null,
  });
  const [isUploading, setIsUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const handleInputChange = (e, lang, field) => {
    if (field === "file") {
      setMember({ ...member, file: e.target.files[0] });
    } else {
      setMember({
        ...member,
        [field]: { ...member[field], [lang]: e.target.value },
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!member.file) {
      alert("Por favor, selecione uma imagem.");
      return;
    }

    setIsUploading(true);

    const formData = new FormData();
    formData.append("file", member.file);
    formData.append("upload_preset", "shanks");

    try {
      // Upload da imagem para o Cloudinary
      const cloudinaryResponse = await axios.post(
        "https://api.cloudinary.com/v1_1/dumx0ucdq/image/upload",
        formData
      );

      const uploadedImageUrl = cloudinaryResponse.data.secure_url;
      setImageUrl(uploadedImageUrl);

      // Dados do membro para enviar ao backend
      const memberData = {
        name: member.name,
        info: member.info,
        imageUrl: uploadedImageUrl,
      };

      // Fazendo o POST para a API backend
      const apiResponse = await api.post(
        "/user/register", // Coloque aqui o endpoint da sua API
        memberData
      );

      console.log("Membro salvo com sucesso:", apiResponse.data);
    } catch (error) {
      console.error("Erro ao salvar membro:", error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <>
      <AdminNavbar />
      <form
        className="bg-white flex flex-col items-center shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-lg mx-auto"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Adicionar Membro
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Nome
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Nome"
            onChange={(e) => handleInputChange(e, "pt", "name")}
            value={member.name.pt}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Informações (PT)
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Informações PT"
              onChange={(e) => handleInputChange(e, "pt", "info")}
              value={member.info.pt}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Informações (EN)
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Informações EN"
              onChange={(e) => handleInputChange(e, "en", "info")}
              value={member.info.en}
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Foto do Membro
          </label>
          <input
            type="file"
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
            onChange={(e) => handleInputChange(e, "", "file")}
          />
        </div>
        {imageUrl && (
          <div className="mt-6 text-center">
            <p className="text-green-500 font-bold mb-2">
              Imagem carregada com sucesso!
            </p>
            <img
              src={imageUrl}
              alt="Imagem carregada"
              className="rounded-lg shadow-lg mx-auto"
              width="200"
            />
          </div>
        )}

        {isUploading ? (
          <p className="text-blue-500 text-center">Fazendo upload...</p>
        ) : (
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          >
            Salvar
          </button>
        )}
        <div className="w-full mt-4 text-center bg-blue-600 text-white py-2 rounded-lg">
          <Link to="/admin/members">Ver Notícias</Link>
        </div>
      </form>
    </>
  );
};
