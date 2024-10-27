import { Link } from "react-router-dom";
import React from "react";
import "../i18n/i18n";
import { useTranslation } from "react-i18next";
export const NotFound = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-6">{t("notFound.text1")}</h2>
      <p className="text-lg text-gray-600 mb-8">{t("notFound.text2")}</p>
      <Link
        to="/"
        className="py-3 px-6 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-500"
      >
        {t("notFound.text3")}
      </Link>
    </div>
  );
};
