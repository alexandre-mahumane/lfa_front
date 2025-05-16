import { TitleComponent } from "./title";
import pic1 from "../assets/lawyer1.png";
import pic2 from "../assets/lawyer2.png";
import pic3 from "../assets/lawyer3.png";
import pic4 from "../assets/lawyer4.png";
import pic5 from "../assets/lawyer5.png";
import pic6 from "../assets/lawyer6.png";
import pic7 from "../assets/lawyer7.png";
import pic8 from "../assets/lawyer8.png";
import pic9 from "../assets/lawyer9.png";
import pic10 from "../assets/lawyer10.jpeg";
import { useTranslation } from "react-i18next";
import React from "react";
import "../i18n/i18n";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Team = () => {
  const { t } = useTranslation();
  const teamMembers = [
    {
      id: "luis-fazenda",
      name: "Luís José Fazenda",
      photo: pic2,
      cargo: t("team.collaborators.luis-fazenda.practice-areas.position"),
    },
    {
      id: "shaida-carimo",
      name: "Shaida Abdul Carimo",
      photo: pic4,
      cargo: t("team.collaborators.shaida-carimo.practice-areas.position"),
    },
    {
      id: "florinda-fazenda",
      name: "Florinda Mezava Fazenda",
      photo: pic7,
      cargo: t(
        "team.collaborators.florinda-mezava-fazenda.practice-areas.position"
      ),
    },
    // {
    //   id: "acacio-mitilage",
    //   name: "Acácio Mitilage",
    //   photo: pic6,
    //   cargo: t("team.collaborators.acacio-mitilage.practice-areas.position"),
    // },
    {
      id: "leonardo-ngariamao",
      name: "Leonardo Ngariamao",
      photo: pic1,
      cargo: t("team.collaborators.leonardo-ngariamao.practice-areas.position"),
    },
    {
      id: "carlitos-jeremias",
      name: "Carlitos Jeremias Abdala",
      photo: pic8,
      cargo: t("team.collaborators.carlitos-jeremias.practice-areas.position"),
    },
    {
      id: "tania-carlos",
      name: "Tânia Carlos Michaque",
      photo: pic9,
      cargo: t("team.collaborators.tania-carlos.practice-areas.position"),
    },

    // {
    //   id: "luisa-fazenda",
    //   name: "Luísa Job Fazenda",
    //   photo: pic5,
    //   cargo: t("team.collaborators.luisa-fazenda.practice-areas.position"),
    // },
    {
      id: "wardah-chemade",
      name: "Wardah Chemade",
      photo: pic10,
      cargo: t("team.collaborators.wardah-chemade.practice-areas.position"),
    },
    {
      id: "andre-matenga",
      name: "André Matenga",
      photo: pic3,
      cargo: "Assistente Administrativo",
    },
  ];

  return (
    <section
      id={t("team.title").toLowerCase()}
      className="w-full space-y-6 flex flex-col items-center"
    >
      <div className="text-start w-full">
        <TitleComponent text={t("team.title")} />
      </div>

      <div className="space-y-6 pl-px-4">
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {t("team.text")}
        </motion.p>
      </div>

      <div className="flex flex-wrap justify-center  gap-6 mt-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative group flex flex-col items-center"
          >
            <Link to={`/information/member/${member.id}`}>
              <img
                src={member.photo}
                alt={member.name}
                className=" md:h-80 w-full h-full object-fit rounded-lg shadow-lg transition-opacity duration-300 group-hover:opacity-70"
              />

              <div className="absolute inset-0 flex-col flex  px-3 justify-end bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">
                  {member.name}
                </span>
                <span className="text-white text-base font-light">
                  {t("team.collaborators.title")}
                  {": "} {member.cargo}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
