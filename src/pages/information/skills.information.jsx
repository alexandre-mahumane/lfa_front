import { useState } from "react";
import "../../i18n/i18n";
import { useTranslation } from "react-i18next";
import { TitleComponent } from "../../components/title";
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer";

export const SkillsInformation = () => {
  const { t } = useTranslation();
  const [visibleIndex, setVisibleIndex] = useState(null);

  const toggleTextVisibility = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  const skills = [
    { title: t(`skills.area1.title`), text: t(`skills.area1.description`) },
    { title: t(`skills.area2.title`), text: t(`skills.area2.description`) },
    { title: t(`skills.area3.title`), text: t(`skills.area3.description`) },
    { title: t(`skills.area4.title`), text: t(`skills.area4.description`) },
  ];

  return (
    <>
      <Navbar />
      <section className="min-h-screen flex justify-center items-center bg-gray-50 text-gray-800">
        <div className="bg-white  p-8 max-w-4xl w-full">
          <TitleComponent text={t(`skills.title`)} />
          <div className="space-y-6 mt-4 text-base sm:text-lg lg:text-xl leading-relaxed">
            {skills.map((skill, index) => (
              <div key={index}>
                <h2
                  onClick={() => toggleTextVisibility(index)}
                  className="text-2xl cursor-pointer hover:text-blue-600 transition duration-300"
                >
                  {skill.title}
                </h2>
                {visibleIndex === index && (
                  <p className="text-lg mt-2">{skill.text}</p>
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
