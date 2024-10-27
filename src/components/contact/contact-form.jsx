import React from "react";
import '../../i18n/i18n'
import { useTranslation } from "react-i18next";
export const ContactForm = () => {
  const { t } = useTranslation();
  const inputStyle =
    "border w-full px-3 py-2 rounded-md shadow-sm outline-none focus:ring-2 focus:ring-blue-500 transition-all";
  return (
    <form className="space-y-4">
      <input type="text" placeholder={t("placeholders.var1")} className={inputStyle} />
      <input type="email" placeholder={t("placeholders.var2")} className={inputStyle} />
      <input type="tel" placeholder={t("placeholders.var3")} className={inputStyle} />
      <textarea
        placeholder={t("placeholders.var4")}
        className={inputStyle}
      />
      <div className="w-full sm:w-auto mt-4">
        <button className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white border-2 border-blue-600 rounded-md shadow-md hover:bg-transparent hover:text-blue-600 transition-all">
        {t("placeholders.var5")}
        </button>{" "}
      </div>{" "}
    </form>
  );
};
