import { useState } from "react";
import { AdminNavbar } from "../navbar/adm-navbar";
import { api } from "../../api";

export const AddAdminAndContactForm = () => {
  const [admin, setAdmin] = useState({ name: "", password: "" });
  const [contact, setContact] = useState({ email: "", phone: "", address: "" });

  const [adminMessage, setAdminMessage] = useState(""); // Mensagem de sucesso ou erro para Admin
  const [contactMessage, setContactMessage] = useState(""); // Mensagem de sucesso ou erro para Contato

  // Funções de alteração de estado para admin e contact
  const handleAdminInputChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleContactInputChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  // Função para enviar os dados do administrador para a API
  const handleAdminSubmit = async (e) => {
    e.preventDefault();

    // Validação simples para garantir que os campos não estejam vazios
    if (!admin.name || !admin.password) {
      setAdminMessage("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const response = await api.post("/user/register", admin); // Altere a URL para o endpoint correto
      console.log("Novo administrador salvo:", response.data);

      // Limpar formulário após sucesso
      setAdmin({ name: "", password: "" });
      setAdminMessage("Administrador adicionado com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar administrador:", error);
      setAdminMessage("Erro ao adicionar administrador.");
    }
  };

  // Função para enviar os dados do contato para a API
  const handleContactSubmit = async (e) => {
    e.preventDefault();

    // Validação simples para garantir que os campos não estejam vazios
    if (!contact.email || !contact.phone || !contact.address) {
      setContactMessage("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const response = await api.post("/contact/insert", contact); // Altere a URL para o endpoint correto
      console.log("Novo contato salvo:", response.data);

      // Limpar formulário após sucesso
      setContact({ email: "", phone: "", address: "" });
      setContactMessage("Contato adicionado com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar contato:", error);
      setContactMessage("Erro ao adicionar contato.");
    }
  };

  return (
    <>
      <AdminNavbar />
      <div className="p-6 bg-gray-50 rounded-lg shadow-md">
        {/* Formulário de adicionar administrador */}
        <form
          className="space-y-4 bg-white p-6 rounded-lg shadow-md mb-6"
          onSubmit={handleAdminSubmit}
        >
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Adicionar Administrador
          </h2>

          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nome do Administrador
              </label>
              <input
                type="text"
                name="name"
                placeholder="Nome"
                className="w-full p-2 border rounded"
                onChange={handleAdminInputChange}
                value={admin.name}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Senha
              </label>
              <input
                type="password"
                name="password"
                placeholder="Senha"
                className="w-full p-2 border rounded"
                onChange={handleAdminInputChange}
                value={admin.password}
              />
            </div>
          </div>

          {/* Exibir mensagem de sucesso ou erro */}
          {adminMessage && (
            <p
              className={`text-sm mt-2 ${
                adminMessage.includes("sucesso")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {adminMessage}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg"
          >
            Salvar Administrador
          </button>
        </form>

        {/* Formulário de adicionar contato */}
        <form
          className="space-y-4 bg-white p-6 rounded-lg shadow-md"
          onSubmit={handleContactSubmit}
        >
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Adicionar Contato
          </h2>

          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-2 border rounded"
                onChange={handleContactInputChange}
                value={contact.email}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Telefone
              </label>
              <input
                type="text"
                name="phone"
                placeholder="Telefone"
                className="w-full p-2 border rounded"
                onChange={handleContactInputChange}
                value={contact.phone}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Endereço
              </label>
              <input
                type="text"
                name="address"
                placeholder="Endereço"
                className="w-full p-2 border rounded"
                onChange={handleContactInputChange}
                value={contact.address}
              />
            </div>
          </div>

          {/* Exibir mensagem de sucesso ou erro */}
          {contactMessage && (
            <p
              className={`text-sm mt-2 ${
                contactMessage.includes("sucesso")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {contactMessage}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg"
          >
            Salvar Contato
          </button>
        </form>
      </div>
    </>
  );
};
