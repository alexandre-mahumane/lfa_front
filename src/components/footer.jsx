import React from "react";
import '../i18n/i18n'
import { useTranslation } from "react-i18next";
export const Footer = ()=>{
    const { t } = useTranslation();
    return(
        <footer className="w-full flex items-center justify-center  font-thin text-white bg-black h-20">
            <p>{t("footer.text")}</p>
        </footer>
    )
}