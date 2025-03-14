import { useState } from "react";
import "../../i18n/i18n";
import { useTranslation } from "react-i18next";
import { TitleComponent } from "../../components/title";
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { WhatsApp } from "../../components/contact/whatsapp";

export const WhyLfaInformation = () => {
  const { t } = useTranslation();
  const [visibleIndex, setVisibleIndex] = useState(null);

  const toggleTextVisibility = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  const reasons = [
    { title: t(`whyLfa.value1`), text: t(`whyLfa.text1`) },
    { title: t(`whyLfa.value2`), text: t(`whyLfa.text2`) },
    { title: t(`whyLfa.value3`), text: t(`whyLfa.text3`) },
  ];

  return (
    <>
      <Navbar />
      <section className="min-h-screen flex justify-center items-center bg-gray-50 text-gray-800">
        <div className="bg-white space-y-8  p-8 max-w-4xl w-full">
          <TitleComponent text={t(`whyLfa.title`)} />
          <p className="text-lg">{t(`whyLfa.reason`)}</p>

          <div className="space-y-6 mt-4 text-base sm:text-lg lg:text-xl leading-relaxed">
            {reasons.map((reason, index) => (
              <div key={index}>
                <h2
                  onClick={() => toggleTextVisibility(index)}
                  className={`text-2xl cursor-pointer hover:text-blue-600 transition duration-300 flex justify-between items-center ${
                    visibleIndex === index ? "text-blue-600" : ""
                  }`}
                >
                  {reason.title}
                  {visibleIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </h2>
                {visibleIndex === index && (
                  <p className="text-lg mt-2">{reason.text}</p>
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
