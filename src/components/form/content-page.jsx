import { useState } from "react";
import axios from "axios";
import { AdminNavbar } from "../navbar/adm-navbar";
import { api } from "../../api";

export const ManageContentForm = () => {
  const [content, setContent] = useState({
    apresentacao: { pt: "", en: "" },
    sobreNos: { pt: "", en: "" },
    valores: { pt: "", en: "" },
    equipa: { pt: "", en: "" },
    areasDeActuacao: { pt: "", en: "" },
    junteSeANos: { pt: "", en: "" },
  });

  const [isSaving, setIsSaving] = useState(false);

  const handleInputChange = (e, lang, field) => {
    setContent({
      ...content,
      [field]: { ...content[field], [lang]: e.target.value },
    });
  };

  const handleSave = async (field) => {
    setIsSaving(true);

    try {
      const dataToSend = {
        [field]: content[field],
      };

      const response = await api.post("/content/update", dataToSend);

      console.log(`Conteúdo salvo com sucesso para ${field}:`, response.data);
    } catch (error) {
      console.error(`Erro ao salvar o conteúdo para ${field}:`, error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <>
      <AdminNavbar />
      <form className="space-y-8">
        <h2 className="text-2xl font-semibold text-blue-600">
          Gerenciar Conteúdo
        </h2>

        {[
          { label: "Apresentação", field: "apresentacao" },
          { label: "Sobre Nós", field: "sobreNos" },
          { label: "Valores", field: "valores" },
          { label: "Equipa", field: "equipa" },
          { label: "Áreas de Atuação", field: "areasDeActuacao" },
          { label: "Junte-se a Nós", field: "junteSeANos" },
        ].map(({ label, field }) => (
          <div key={field} className="space-y-4">
            <h3 className="text-lg font-medium text-blue-600">{label}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder={`${label} PT`}
                onChange={(e) => handleInputChange(e, "pt", field)}
                value={content[field].pt}
                className="border p-2 rounded w-full"
              />
              <input
                type="text"
                placeholder={`${label} EN`}
                onChange={(e) => handleInputChange(e, "en", field)}
                value={content[field].en}
                className="border p-2 rounded w-full"
              />
            </div>
            <button
              type="button"
              onClick={() => handleSave(field)}
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              disabled={isSaving}
            >
              {isSaving ? "Salvando..." : `Salvar ${label}`}
            </button>
          </div>
        ))}
      </form>
    </>
  );
};
