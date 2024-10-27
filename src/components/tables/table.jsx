import { useState } from "react";

export const Table = () => {
  // Dados simulados
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: "João Silva",
      addedDate: "2024-09-06",
      description: "Advogado especializado em contratos",
    },
    {
      id: 2,
      name: "Maria Souza",
      addedDate: "2024-09-05",
      description: "Consultora Jurídica",
    },
  ]);

  const deleteMember = (id) => {
    const updatedMembers = teamMembers.filter((member) => member.id !== id);
    setTeamMembers(updatedMembers);
  };

  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Membros da Equipe
      </h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">ID</th>
            <th className="py-2">Nome</th>
            <th className="py-2">Data de Adição</th>
            <th className="py-2">Descrição</th>
            <th className="py-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {teamMembers.map((member) => (
            <tr key={member.id} className="border-t">
              <td className="py-2 text-center">{member.id}</td>
              <td className="py-2 text-center">{member.name}</td>
              <td className="py-2 text-center">{member.addedDate}</td>
              <td className="py-2 text-center">{member.description}</td>
              <td className="py-2 text-center">
                <button
                  onClick={() => deleteMember(member.id)}
                  className="text-red-600 hover:underline"
                >
                  Apagar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
