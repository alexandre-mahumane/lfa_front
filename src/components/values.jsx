import { LinkComponent } from "./link-component";
import { TitleComponent } from "./title";
import { useTranslation } from "react-i18next";
import React from "react";
import { motion } from "framer-motion";
import "../i18n/i18n";
export const Values = () => {
  const { t } = useTranslation();
  return (
    <section className="px-4 py-8 sm:px-8 sm:py-12 lg:px-16 lg:py-20 bg-gray-50 text-gray-800">
      <TitleComponent text={t("values.title")} />
      <motion.p
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mt-4 text-base sm:text-lg lg:text-xl leading-relaxed"
      >
        {t("values.text")}
      </motion.p>
      <LinkComponent path={"values"} />
    </section>
  );
};
