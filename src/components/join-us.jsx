import { motion } from "framer-motion";
import { LinkComponent } from "./link-component";
import { TitleComponent } from "./title";
import React from "react";
import "../i18n/i18n";
import { useTranslation } from "react-i18next";
export const JoinUs = () => {
  const { t } = useTranslation();
  return (
    <section className="w-full space-y-6 flex flex-col ">
      <div className="text-start w-full">
        <TitleComponent text={t("whyLfa.title")} />
      </div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-6 pl-px-4"
      >
    
        <p className="text-lg">{t(`whyLfa.reason`)}</p>
      </motion.div>
      <LinkComponent path={"why-lfa"} />

      <div className="mt-10">
        <iframe
          className="h-80 w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3586.9097563953546!2d32.582858574727894!3d-25.970999854515764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee69ba62d6fd22f%3A0x7a2ab432ccfa10d0!2sc%2C%201154%20Av.%20Ahmed%20Sekou%20Tour%C3%A9%2C%20Maputo!5e0!3m2!1spt-PT!2smz!4v1725456892483!5m2!1spt-PT!2smz"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};
