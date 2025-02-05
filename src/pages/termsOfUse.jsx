import React, { useState, useEffect } from "react";
import "../i18n/i18n";
import { useTranslation } from "react-i18next";
import { t } from "i18next";

const TermsOfUse = ({ language }) => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{t("terms.title")}</h1>
      <p className="text-lg mb-6">{t("terms.intro")}</p>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold">{t("terms.section1.title")}</h2>
        <p>{t("terms.section1.content")}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold">{t("terms.section2.title")}</h2>
        <p>{t("terms.section2.content")}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold">{t("terms.section3.title")}</h2>
        <p>{t("terms.section3.content")}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold">{t("terms.section4.title")}</h2>
        <p>{t("terms.section4.content")}</p>
      </div>

      <p>{t("terms.acceptance")}</p>
    </div>
  );
};

export default TermsOfUse;
