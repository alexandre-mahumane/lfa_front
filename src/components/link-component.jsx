import React from "react";
import "../i18n/i18n";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
export const LinkComponent = ({ path }) => {
  const { t } = useTranslation();
  return (
    <div className="w-full sm:w-auto mt-4">
      <Link to={`information/${path}`}>
        <button className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white border-2 border-blue-600 transition-all">
          {t("link.text")}
        </button>
      </Link>
    </div>
  );
};
