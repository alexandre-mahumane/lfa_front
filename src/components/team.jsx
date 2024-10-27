import { TitleComponent } from "./title";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import { useTranslation } from "react-i18next";
import React from "react";
import "../i18n/i18n";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Team = () => {
  const { t } = useTranslation();
  const teamMembers = [
    {
      name: "Advogado 1",
      photo: pic1,
    },
    {
      name: "Advogado 1",
      photo: pic1,
    },
    {
      name: "Advogado 1",
      photo: pic2,
    },
    {
      name: "Advogado 1",
      photo: pic2,
    },
    {
      name: "Advogado 2",
      photo: pic1,
    },
    {
      name: "Advogado 1",
      photo: pic1,
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative group flex flex-col items-center"
          >
            <Link to={`/information/member/${member.id}`}>
              <img
                src={member.photo}
                alt={member.name}
                className="md:w-32 md:h-32 w-72 h-64 object-fill rounded-lg shadow-lg transition-opacity duration-300 group-hover:opacity-70"
              />

              <div className="absolute inset-0 flex-col flex  px-3 justify-end bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">
                  {member.name}
                </span>
                <span className="text-white text-lg font-semibold">Cargo</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
