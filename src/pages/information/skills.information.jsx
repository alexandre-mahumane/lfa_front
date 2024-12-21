import { useState } from "react";
import "../../i18n/i18n";
import { useTranslation } from "react-i18next";
import { TitleComponent } from "../../components/title";
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Link } from "react-router-dom";

export const SkillsInformation = () => {
  const { t } = useTranslation();
  const [visibleIndex, setVisibleIndex] = useState(null);
  const [visibleSubIndex, setVisibleSubIndex] = useState(null);

  const toggleTextVisibility = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  const toggleSubTextVisibility = (index) => {
    setVisibleSubIndex(visibleSubIndex === index ? null : index);
  };

  const skills = [
    { title: t(`skills.area1.title`), text: t(`skills.area1.description`) },
    { title: t(`skills.area2.title`), text: t(`skills.area2.description`) },
    { title: t(`skills.area3.title`), text: t(`skills.area3.description`) },
  ];

  const subSkills = [
    { title: t(`skills.area4.title`), text: t(`skills.area4.description`) },
    { title: t(`skills.area5.title`), text: t(`skills.area5.description`) },
    { title: t(`skills.area6.title`), text: t(`skills.area6.description`) },
    { title: t(`skills.area7.title`), text: t(`skills.area7.description`) },
    { title: t(`skills.area8.title`), text: t(`skills.area8.description`) },
    { title: t(`skills.area9.title`), text: t(`skills.area9.description`) },
    { title: t(`skills.area10.title`), text: t(`skills.area10.description`) },
  ];

  return (
    <> 
      <Navbar />
      <section className="min-h-screen flex justify-center items-center bg-gray-50 text-gray-800">
        <div className="bg-white space-y-8 p-8 max-w-4xl w-full">
          <TitleComponent text={t(`skills.title`)} />
          <p className="text-lg">{t(`skills.text2`)}</p>

          <div className="space-y-6 mt-4 text-base sm:text-lg lg:text-xl leading-relaxed">
            {skills.map((skill, index) => (
              <div key={index}>
                <h2
                  onClick={() => toggleTextVisibility(index)}
                  className={`text-2xl cursor-pointer transition duration-300 flex justify-between items-center ${
                    visibleIndex === index ? 'text-blue-600' : ''
                  }`}
                >
                  {skill.title}
                  {visibleIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </h2>
                {visibleIndex === index && (
                  <p className="text-lg mt-2">{skill.text}</p>
                )}
                {index === skills.length - 1 && visibleIndex === index && (
                  <div className="mt-4 space-y-4">
                    {subSkills.map((subSkill, subIndex) => (
                      <div key={subIndex}>
                        <h3
                          onClick={() => toggleSubTextVisibility(subIndex)}
                          className={`text-xl cursor-pointer transition duration-300 flex justify-between items-center ${
                            visibleSubIndex === subIndex ? 'text-blue-500' : ''
                          }`}
                        >
                          {subSkill.title}
                          {visibleSubIndex === subIndex ? <FaChevronUp /> : <FaChevronDown />}
                        </h3>
                        {visibleSubIndex === subIndex && (
                          <p className="text-base mt-2">{subSkill.text}</p>
                        )}
                      </div>
                    ))}
                  </div>
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
    </>
  );
};
