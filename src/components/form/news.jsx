import { useState } from "react";
import axios from "axios";
import { AdminNavbar } from "../navbar/adm-navbar";
import { Link } from "react-router-dom";
import { api } from "../../api";

export const AddNewsForm = () => {
  const [news, setNews] = useState({
    title: { pt: "", en: "" },
    content: { pt: "", en: "" },
    type: "",
    file: null,
  });
  const [isUploading, setIsUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [message, setMessage] = useState(""); // Mensagem de sucesso ou erro

  const handleInputChange = (e, lang, field) => {
    if (field === "file") {
      setNews({ ...news, file: e.target.files[0] });
    } else if (field === "type") {
      setNews({ ...news, type: e.target.value });
    } else {
      setNews({
        ...news,
        [field]: { ...news[field], [lang]: e.target.value },
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!news.file) {
      alert("Por favor, selecione uma imagem.");
      return;
    }

    setIsUploading(true);

    const formData = new FormData();
    formData.append("file", news.file);
    formData.append("upload_preset", "shanks"); // Substituir pelo preset correto

    try {
      // Upload da imagem para o Cloudinary
      const cloudinaryResponse = await axios.post(
        "https://api.cloudinary.com/v1_1/dumx0ucdq/image/upload",
        formData
      );

      const uploadedImageUrl = cloudinaryResponse.data.secure_url;
      setImageUrl(uploadedImageUrl);

      const newsData = {
        title: news.title,
        content: news.content,
        type: news.type,
        imageUrl: uploadedImageUrl,
      };

      // Envio dos dados da notícia para a API
      const response = await api.post("/news/insert", newsData); // Substitua pela URL correta
      console.log("Notícia salva com sucesso:", response.data);

      setMessage("Notícia adicionada com sucesso!");

      // Limpar o formulário
      setNews({
        title: { pt: "", en: "" },
        content: { pt: "", en: "" },
        type: "",
        file: null,
      });
      setImageUrl("");
    } catch (error) {
      console.error("Erro ao salvar notícia:", error);
      setMessage("Erro ao adicionar notícia.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <>
      <AdminNavbar />
      <form
        className="space-y-6 bg-white p-6 flex flex-col items-center rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Adicionar Notícia/Newsletter
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Título PT
            </label>
            <input
              type="text"
              placeholder="Título em Português"
              className="w-full p-2 border rounded"
              onChange={(e) => handleInputChange(e, "pt", "title")}
              value={news.title.pt}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Título EN
            </label>
            <input
              type="text"
              placeholder="Título em Inglês"
              className="w-full p-2 border rounded"
              onChange={(e) => handleInputChange(e, "en", "title")}
              value={news.title.en}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Conteúdo PT
            </label>
            <textarea
              placeholder="Conteúdo em Português"
              className="w-full p-2 border rounded"
              onChange={(e) => handleInputChange(e, "pt", "content")}
              value={news.content.pt}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Conteúdo EN
            </label>
            <textarea
              placeholder="Conteúdo em Inglês"
              className="w-full p-2 border rounded"
              onChange={(e) => handleInputChange(e, "en", "content")}
              value={news.content.en}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Tipo de Publicação
          </label>
          <select
            className="w-full p-2 border rounded"
            onChange={(e) => handleInputChange(e, "", "type")}
            value={news.type}
          >
            <option value="">Selecione o tipo</option>
            <option value="news">Notícia</option>
            <option value="newsletter">Newsletter</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Imagem
          </label>
          <input
            type="file"
            className="w-full"
            onChange={(e) => handleInputChange(e, "", "file")}
          />
        </div>

        {imageUrl && (
          <div className="mt-4">
            <p>Imagem carregada com sucesso!</p>
            <img src={imageUrl} alt="Imagem carregada" width="200" />
          </div>
        )}

        {isUploading ? (
          <p className="w-full bg-blue-600 text-white py-2 rounded-lg">
            Fazendo upload...
          </p>
        ) : (
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg"
          >
            Salvar
          </button>
        )}

        {message && (
          <p
            className={`mt-4 text-sm ${
              message.includes("sucesso") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}

        <div className="w-full mt-4 text-center bg-blue-600 text-white py-2 rounded-lg">
          <Link to="/admin/news">Ver Notícias</Link>
        </div>
      </form>
    </>
  );
};
