import { useState } from "react";
import "../../i18n/i18n";
import { useTranslation } from "react-i18next";
import { TitleComponent } from "../../components/title";
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { WhatsApp } from "../../components/contact/whatsapp";

export const ValuesInformation = () => {
  const { t } = useTranslation();
  const [visibleIndex, setVisibleIndex] = useState(null);

  const toggleTextVisibility = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  const values = [
    { title: t(`values.value`), text: t(`values.text1`) },
    { title: t(`values.value2`), text: t(`values.text2`) },
    { title: t(`values.value3`), text: t(`values.text3`) },
    { title: t(`values.value4`), text: t(`values.text4`) },
    { title: t(`values.value5`), text: t(`values.text5`) },
  ];

  return (
    <>
      <Navbar />
      <section className="min-h-screen flex flex-col justify-center mt-14 items-center md:mt-4 bg-gray-50 text-gray-800">
        <div className="bg-white p-8  max-w-4xl space-y-8 w-full">
          <TitleComponent text={t(`values.title`)} />
          <p className="text-lg">{t(`values.information1`)}</p>
          <div className="space-y-6 mt-4 text-base sm:text-lg lg:text-xl leading-relaxed">
            {values.map((value, index) => (
              <div key={index}>
                <h2
                  onClick={() => toggleTextVisibility(index)}
                  className={`text-2xl cursor-pointer hover:text-blue-600 transition duration-300 flex justify-between items-center ${
                    visibleIndex === index ? "text-blue-600" : ""
                  }`}
                >
                  {value.title}
                  {visibleIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </h2>
                {visibleIndex === index && (
                  <p className="text-lg mt-2">{value.text}</p>
                )}
              </div>
            ))}
          </div>
          <div>
            <Link
              className="w-fit px-4 py-2 bg-blue-600 text-white border-2 border-blue-600"
              to={"/information/contact"}
            >
              {t("contacts.title")}
            </Link>
          </div>
        </div>
      </section>
      <Footer />
      <WhatsApp />
    </>
  );
};
