import { useState } from "react";
import "../../i18n/i18n";
import { useTranslation } from "react-i18next";
import { TitleComponent } from "../../components/title";
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer";

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
      <section className="min-h-screen flex justify-center items-center bg-gray-50 text-gray-800">
        <div className="bg-white p-8 max-w-4xl w-full">
          <TitleComponent text={t(`values.title`)} />
          <div className="space-y-6 mt-4 text-base sm:text-lg lg:text-xl leading-relaxed">
            {values.map((value, index) => (
              <div key={index}>
                <h2
                  onClick={() => toggleTextVisibility(index)}
                  className="text-2xl cursor-pointer text-blue-600 transition duration-300"
                >
                  {value.title}
                </h2>
                {visibleIndex === index && (
                  <p className="text-lg mt-2">{value.text}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
