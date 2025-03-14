import React, { useEffect, useState } from "react";
import "../../i18n/i18n";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { TitleComponent } from "../../components/title";
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer";
import { WhatsApp } from "../../components/contact/whatsapp";
export const Information = () => {
  const { section } = useParams();
  const { t } = useTranslation();
  const [content, setContent] = useState("");
  useEffect(() => {
    if (section == t("hero.link")) {
      setContent("hero");
    } else if (section == t("values.link")) {
      setContent("values");
    } else if (section == t("joinUs.link")) {
      setContent("joinUs");
    }
  }, [section]);

  return (
    <>
      <Navbar />
      <section className="min-h-screen px-4 py-8 mt-16 lg:mt-6 sm:px-8 sm:py-12 lg:px-16 lg:py-20 bg-gray-50 text-gray-800">
        <TitleComponent text={t(`${content}.title`)} />
        <div className="mt-4 space-y-4 text-base sm:text-lg lg:text-xl leading-relaxed">
          <p>{t(`${content}.information`)}</p>
          <p>{t(`${content}.information1`)}</p>
          <p>{t(`${content}.information2`)}</p>
        </div>
      </section>
      <Footer />
      <WhatsApp />
    </>
  );
};
