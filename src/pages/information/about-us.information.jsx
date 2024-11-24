import "../../i18n/i18n";
import { useTranslation } from "react-i18next";
import { TitleComponent } from "../../components/title";
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer";
export const AboutUsInformation = () => {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <section className="min-h-screen px-4 py-8 mt-16 lg:mt-6 sm:px-8 sm:py-12 lg:px-16 lg:py-20 bg-gray-50 text-gray-800">
        <TitleComponent text={t(`hero.title`)} />
        <div className="space-y-6 mt-4  text-base sm:text-lg lg:text-xl leading-relaxed">
          <div>
            <p className="text-2xl">LFA {t(`hero.text`)}</p>
            <p className="text-lg">{t(`hero.text2`)}</p>
          </div>
          <div>
            <h2 className="text-2xl text-blue-600">
              {t(`hero.mission.title`)}
            </h2>
            <p className="text-lg">{t(`hero.mission.text`)}</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
