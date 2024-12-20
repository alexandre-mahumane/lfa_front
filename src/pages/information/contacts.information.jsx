import { useState } from "react";
import "../../i18n/i18n";
import { useTranslation } from "react-i18next";
import { TitleComponent } from "../../components/title";
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer";
import { Team } from "../../components/team";
import { Contact } from "../../components/contact/contact";

export const ContactInformation = () => {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <section className="min-h-screen flex justify-center items-center bg-gray-50 text-gray-800">

<div className="bg-white p-8 max-w-4xl w-full">
          <div className="space-y-6 mt-14 text-base sm:text-lg lg:text-xl leading-relaxed">
          <Contact />

          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
