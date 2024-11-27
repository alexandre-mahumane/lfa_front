import { TitleComponent } from "../title";
import { ContactForm } from "./contact-form";
import React from "react";
import "../../i18n/i18n";
import { useTranslation } from "react-i18next";
export const Contact = () => {
  const { t } = useTranslation();

  return (
    <section
      id={t("contacts.name")}
      className="space-y-6 p-6 bg-blue-50 rounded-lg shadow-md"
    >
      <div>
        <TitleComponent text={t("contacts.title")} />
        <h3 className="font-bold text-lg mt-4">{t("contacts.adress")}</h3>
        <p className="font-light">{t("contacts.text")}</p>
      </div>
      <div>
        <h3 className="font-bold text-lg">{t("contacts.title")}</h3>
        <a
          href="mailto:geral@lfadvogados.co.mz"
          className="block text-blue-600 underline mt-2"
        >
          geral@lfadvogados.co.mz
        </a>
        <a
          href="tel:+258877499115"
          className="block text-blue-600 underline mt-2"
        >
          (+258) 87 749 9115
        </a>
        <a
          href="tel:+258847499116"
          className="block text-blue-600 underline mt-2"
        >
          (+258) 84 749 9116
        </a>
        <a
          href="tel:+258847893310"
          className="block text-blue-600 underline mt-2"
        >
          (+258) 84 789 3310
        </a>
      </div>
      <ContactForm />
    </section>
  );
};
