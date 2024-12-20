import React from "react";
import "../../i18n/i18n";
import pic1 from "../../assets/lawyer1.jpg";
import pic2 from "../../assets/lawyer2.jpg";
import pic3 from "../../assets/lawyer3.jpg";
import pic4 from "../../assets/lawyer4.jpg";
import pic5 from "../../assets/lawyer5.jpg";
import pic6 from "../../assets/lawyer6.jpg";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar/navbar";

export const Member = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  const teamMembers = [
    {
      id: "luis-fazenda",
      name: "Luís José Fazenda",
      photo: pic2,
      position: t("team.collaborators.luis-fazenda.practice-areas.position"),
      professionalExperience: t(
        "team.collaborators.luis-fazenda.professional-experience",
        { returnObjects: true }
      ),
    },
    {
      id: "shaida-carimo",
      name: "Shaida Abdul Carimo",
      photo: pic4,
      position: t("team.collaborators.shaida-carimo.practice-areas.position"),
      professionalExperience: t(
        "team.collaborators.shaida-carimo.professional-experience",
        { returnObjects: true }
      ),
    },
    {
      id: "acacio-mitilage",
      name: "Acácio Mitilage",
      photo: pic6,
      position: t("team.collaborators.acacio-mitilage.practice-areas.position"),
      professionalExperience: t(
        "team.collaborators.acacio-mitilage.professional-experience",
        { returnObjects: true }
      ),
    },
    {
      id: "leonardo-ngariamao",
      name: "Leonardo Ngariamao",
      photo: pic1,
      position: t("team.collaborators.leonardo-ngariamao.practice-areas.position"),
      professionalExperience: t(
        "team.collaborators.leonardo-ngariamao.professional-experience",
        { returnObjects: true }
      ),
    },
    {
      id: "luisa-fazenda",
      name: "Luísa Job Fazenda",
      photo: pic5,
      position: t("team.collaborators.luisa-fazenda.practice-areas.position"),
      professionalExperience: t(
        "team.collaborators.luisa-fazenda.professional-experience",
        { returnObjects: true }
      ),
    },
    {
      id: "andre-matenga",
      name: "André Matenga",
      photo: pic3,
      position: t("team.collaborators.andre-matenga.practice-areas.position"),
      professionalExperience: t(
        "team.collaborators.andre-matenga.professional-experience",
        { returnObjects: true }
      ),
    },
  ];

  const filteredMember = teamMembers.find((member) => member.id === id);

  if (!filteredMember) {
    return (
      <>
        <Navbar />
        <section className="min-h-screen flex items-center justify-center text-xl font-semibold">
          Membro não encontrado!
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <section className="px-3 min-h-screen max-w-7xl mx-auto py-8 mt-16 lg:mt-24 w-full sm:px-8 sm:py-12 lg:px-16 lg:py-20 bg-gray-50 text-gray-800">
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8 text-base sm:text-lg lg:text-xl leading-relaxed">
          <div className="w-full lg:w-1/2 max-w-lg lg:max-w-none h-auto">
            <img
              src={filteredMember.photo}
              alt={filteredMember.name}
              className="object-cover w-full h-full rounded-lg shadow-lg"
            />
          </div>

          <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
            <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
              {filteredMember.name}
            </h2>
<h3 className="font-bold">{t(
        "team.collaborators.title")}</h3>
            <ul className="space-y-2 list-disc list-inside">
              
              <li>{filteredMember.position || "Informação não disponível"}</li>
            </ul>
<h3 className="font-bold">{t(
        "team.collaborators.title2")}</h3>
            {Array.isArray(filteredMember?.professionalExperience) &&
            filteredMember?.professionalExperience.length > 0 ? (
              <ul className="space-y-2 list-disc list-inside">
              {filteredMember?.professionalExperience.map((exp, index) => (
                <li key={index} className="flex items-center">
                  <p className="font-medium">{exp["year-range"]}</p>
                  <span className="mx-2">-</span>
                  <p>{exp.position}</p>
                </li>
              ))}
            </ul>
            
            ) : (
              <p>Sem informações de experiência profissional.</p>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
