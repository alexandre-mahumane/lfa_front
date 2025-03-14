import { motion } from "framer-motion";
import { TitleComponent } from "./title";
import photo from "../assets/photo6.jpeg";
import React from "react";
import "../i18n/i18n";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { LinkComponent } from "./link-component";
export const Skills = () => {
  const { t } = useTranslation();
  return (
    <section className=" bg-gray-200 ">
      <div className="flex flex-col md:flex-row py-4 items-center max-w-7xl mx-auto  px-4 sm:px-8 lg:px-12">
        <div className="md:w-1/2">
          <TitleComponent text={t("skills.title")} />
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-4 "
          >
            {t("skills.text")}
            <span className="font-bold">{t("skills.service")}</span>
          </motion.p>
          <LinkComponent path={"skills"} />
        </div>

        <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <img
            src={photo}
            alt="Advogado em ação"
            className=" h-64 object-fill rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};
