import React from "react";
import "../../i18n/i18n";
import pic1 from "../../assets/lawyer1.png";
import pic2 from "../../assets/lawyer2.png";
import pic3 from "../../assets/lawyer3.png";
import pic4 from "../../assets/lawyer4.png";
import pic5 from "../../assets/lawyer5.png";
import pic6 from "../../assets/lawyer6.png";
import pic7 from "../../assets/lawyer7.png";
import pic8 from "../../assets/lawyer8.png";
import pic9 from "../../assets/lawyer9.png";
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
      id: "tania-carlos",
      name: "Tânia Carlos Michaque",
      photo: pic9,
      position: t("team.collaborators.tania-carlos.practice-areas.position"),
      professionalExperience: t(
        "team.collaborators.tania-carlos.professional-experience",
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
      id: "florinda-fazenda",
      name: "Florinda Mezava Fazenda ",
      photo: pic7,
      position: t(
        "team.collaborators.florinda-mezava-fazenda.practice-areas.position"
      ),
      professionalExperience: t(
        "team.collaborators.florinda-mezava-fazenda.professional-experience",
        { returnObjects: true }
      ),
    },
    {
      id: "carlitos-jeremias",
      name: "Carlitos Abdala  Jeremias",
      photo: pic8,
      position: t(
        "team.collaborators.carlitos-jeremias.practice-areas.position"
      ),
      professionalExperience: t(
        "team.collaborators.carlitos-jeremias.professional-experience",
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
      position: t(
        "team.collaborators.leonardo-ngariamao.practice-areas.position"
      ),
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
      <section className=" px-3 min-h-screen max-w-7xl mx-auto py-8 mt-16 lg:mt-24 w-full sm:px-8 sm:py-12 lg:px-16 lg:py-20 bg-gray-50 text-gray-800">
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8 text-base sm:text-lg lg:text-xl leading-relaxed">
          <div className="w-full lg:w-1/2 max-w-lg lg:max-w-none h-96 md:h-[40rem]">
            <img
              src={filteredMember.photo}
              alt={filteredMember.name}
              className="object-cover w-full h-full rounded-lg shadow-lg"
            />
          </div>

          <div className="w-full lg:w-1/2 space-y-4 text-start">
            <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl text-blue-600">
              {filteredMember.name}
            </h2>
            <h3 className="font-bold text-blue-600">
              {t("team.collaborators.title")}
            </h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>{filteredMember.position || "Informação não disponível"}</li>
            </ul>
            <h3 className="font-bold text-blue-600">
              {t("team.collaborators.title2")}
            </h3>
            {Array.isArray(filteredMember.professionalExperience) &&
            filteredMember.professionalExperience.length > 0 ? (
              <ul className="space-y-2  list-disc list-inside">
                {filteredMember.professionalExperience.map((exp, index) => (
                  <li
                    key={index}
                    className="flex flex-col space-x-5 w-full md:flex-row  "
                  >
                    <p className="font-medium w-60 ">{exp["year-range"]}</p>
                    {/* <span className="mx-2">-</span> */}
                    <p className="md:w-5/6">{exp.position}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Nenhuma experiência profissional disponível.</p>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
