import "../../i18n/i18n";
import { useTranslation } from "react-i18next";
import { TitleComponent } from "../../components/title";
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer";
import { Link } from "react-router-dom";
import { WhatsApp } from "../../components/contact/whatsapp";
export const AboutUsInformation = () => {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <section className="min-h-screen space-y-10 px-4 py-8 mt-16 lg:mt-6 sm:px-8 sm:py-12 lg:px-16 lg:py-20 bg-gray-50 text-gray-800">
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
        <div>
          <Link
            className="w-fit  px-4 py-2 bg-blue-600 text-white border-2 border-blue-600 "
            to={"/information/contact"}
          >
            {t("contacts.title")}
          </Link>
        </div>
      </section>
      <Footer />
      <WhatsApp />
    </>
  );
};
