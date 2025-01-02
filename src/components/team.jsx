import { TitleComponent } from "./title";
import pic1 from "../assets/lawyer1.jpg";
import pic2 from "../assets/lawyer2.jpg";
import pic3 from "../assets/lawyer3.jpg";
import pic4 from "../assets/lawyer4.jpg";
import pic5 from "../assets/lawyer5.jpg";
import pic6 from "../assets/lawyer6.jpg";
import pic7 from "../assets/lawyer7.jpg";
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
      cargo: "Sócio Administrador e Advogado",
    },
    {
      id: "shaida-carimo",
      name: "Shaida Abdul Carimo",
      photo: pic4,
      cargo: "Advogada e Sócia",
    },
    {
      id: "acacio-mitilage",
      name: "Acácio Mitilage",
      photo: pic6,
      cargo: "Advogado Associado Sénior",
    },
    {
      id: "leonardo-ngariamao",
      name: "Leonardo Ngariamao",
      photo: pic1,
      cargo: "Advogado Estagiário",
    },
    {
      id: "luisa-fazenda",
      name: "Luísa Job Fazenda",
      photo: pic5,
      cargo: "Recepcionista",
    },

    {
      id: "andre-matenga",
      name: "André matenga",
      photo: pic3,
      cargo: "Assistente Administrativo",
    },
    {
      id: "florinda-fazenda",
      name: "Florinda Mezava Fazenda",
      photo: pic7,
      cargo: "",
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

      <div className="grid justify-items-center items-center grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative group flex flex-col items-center"
          >
            <Link to={`/information/member/${member.id}`}>
              <img
                src={member.photo}
                alt={member.name}
                className=" md:h-80 w-64 h-full object-fit rounded-lg shadow-lg transition-opacity duration-300 group-hover:opacity-70"
              />

              <div className="absolute inset-0 flex-col flex  px-3 justify-end bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">
                  {member.name}
                </span>
                <span className="text-white text-base font-light">
                  Cargo: {member.cargo}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
