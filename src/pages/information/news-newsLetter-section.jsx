import React, { useEffect, useState } from "react";
import "../../i18n/i18n";
import photo1 from "../../assets/news1.jpeg";
import photo2 from "../../assets/news2.jpeg";
import photo3 from "../../assets/news3.jpeg";
import photo4 from "../../assets/news4.jpeg";
import photo5 from "../../assets/news5.jpeg";
import photo6 from "../../assets/news6.jpeg";
import photo7 from "../../assets/news7.jpeg";
import photo8 from "../../assets/news8.jpeg";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { TitleComponent } from "../../components/title";
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer";

export const News = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const [content, setContent] = useState("");
  const [img, setImg] = useState();
  useEffect(() => {
    if (id == 1) {
      setContent("news1");
      setImg(photo1);
    } else if (id == 2) {
      setContent("news2");
      setImg(photo2);
    } else if (id == 3) {
      setContent("news3");
      setImg(photo3);
    } else if (id == 4) {
      setContent("news4");
      setImg(photo6);
    } else if (id == 5) {
      setContent("news5");
      setImg(photo5);
    } else if (id == 6) {
      setContent("news6");
      setImg(photo4);
    } else if (id == 7) {
      setContent("news7");
      setImg(photo8);
    }
  }, [id]);
  return (
    <>
      <Navbar />
      <section className="px-3 min-h-screen max-w-7xl mx-auto py-8 mt-16 lg:mt-6 w-full sm:px-8 sm:py-12 lg:px-16 lg:py-20 bg-gray-50 text-gray-800">
        <h2 className="text-2xl text-blue-600 font-bold sm:text-3xl lg:text-4xl">
          {t(`article.${content}.title`)}
        </h2>
        <div className="mt-4 flex flex-col items-center space-y-4 text-base sm:text-lg lg:text-xl leading-relaxed">
          <div className="w-full h-auto max-w-full lg:w-96 lg:h-[26rem] ">
            <img src={img} alt="News" className="object-cover w-full h-full" />
          </div>
          <div className="space-y-5 w-full">
            <div>
              <h3 className="font-bold text-blue-600">
                {t(`article.${content}.body.section1.title`)}
              </h3>
              <p>{t(`article.${content}.body.section1.text`)}</p>
            </div>
            <div>
              <h3 className="font-bold text-blue-600">
                {t(`article.${content}.body.section2.title`)}
              </h3>
              <p>{t(`article.${content}.body.section2.text`)}</p>
            </div>
            {content == "news2" ||
              (content == "news1" && (
                <div>
                  <h3 className="font-bold text-blue-600">
                    {t(`article.${content}.body.section3.title`)}
                  </h3>
                  <p>{t(`article.${content}.body.section3.text`)}</p>
                </div>
              ))}
            {content == "news2" && (
              <div>
                <h3 className="font-bold text-blue-600">
                  {t(`article.${content}.body.section4.title`)}
                </h3>
                <p>{t(`article.${content}.body.section4.text`)}</p>
              </div>
            )}
            {content == "news6" && (
              <div className="w-full flex justify-center flex-col items-center ">
                <div className="w-full flex items-center mt-6 h-auto max-w-full lg:w-96 lg:h-[26rem] ">
                  <img
                    src={photo7}
                    alt="News"
                    className="object-contain w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-blue-600">
                    {t(`article.${content}.body.section4.title`)}
                  </h3>
                  <p>{t(`article.${content}.body.section4.text`)}</p>
                </div>
              </div>
            )}
            {content == "news7" && (
              <div className="space-y-5 w-full">
                <h3 className="font-bold text-blue-600">
                  {t(`article.${content}.body.section4.title`)}
                </h3>
                <p>{t(`article.${content}.body.section4.text`)}</p>
                <h3 className="font-bold text-blue-600">
                  {t(`article.${content}.body.section5.title`)}
                </h3>
                <p>{t(`article.${content}.body.section5.text`)}</p>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
