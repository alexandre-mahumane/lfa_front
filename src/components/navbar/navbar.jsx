import { useState } from "react";
import { Mobile } from "./mobile";
import logo from "../../../public/logo.jpg";
import React from "react";
import "../../i18n/i18n";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [onFocus, setOnFocus] = useState("pt");

  // Função para alterar o idioma
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setOnFocus(language === "pt" ? "en" : "pt");
  };

  // Alterna a visibilidade do menu mobile
  const toggleMenu = () => setIsVisible(!isVisible);

  return (
    <header className="pb-6 bg-white fixed z-50 top-0 w-full lg:pb-0 lg:shadow-sm">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0 w-16">
            <Link to={"/"} className="flex">
              <img src={logo} className="h-full w-full" alt="logo" />
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button
              type="button"
              autoFocus={onFocus === "pt"}
              onClick={() => changeLanguage("pt")}
              className="text-base font-medium border-0 outline-none text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              PT
            </button>
            <button
              type="button"
              autoFocus={onFocus !== "pt"}
              onClick={() => changeLanguage("en")}
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              EN
            </button>
            <NavLink
              className="lg:text-base font-thin text-xs"
              to={`/information/contact`}
            >
              {t("menu")}
            </NavLink>

            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex p-2 text-black transition-all duration-200 rounded-md focus:bg-gray-100 hover:bg-gray-100"
            >
              <svg
                className={`${isVisible ? "hidden" : "block"} w-6 h-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 8h16M4 16h16"
                />
              </svg>

              <svg
                className={`${isVisible ? "block" : "hidden"} w-6 h-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </nav>

        {/* Menu mobile */}
        {isVisible && (
          <div>
            <ul className="flex flex-col space-y-4 py-4 bg-white">
              <li>
                <NavLink
                  to={`/information/about-us`}
                  onClick={toggleMenu}
                  className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {t("hero.title")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/information/values`}
                  onClick={toggleMenu}
                  className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {t("values.title")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/information/skills`}
                  onClick={toggleMenu}
                  className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {t("skills.title")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/information/article`}
                  onClick={toggleMenu}
                  className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {t("menu-news")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/information/team`}
                  onClick={toggleMenu}
                  className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {t("team.title")}
                </NavLink>
              </li>

              <li>
                <Link
                  onClick={() => toggleMenu()}
                  to={`/information/contact`}
                  className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {t("contacts.title")}
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};
