import { Card } from "./card";
import photo from "../assets/news1.jpeg";
import photo1 from "../assets/news2.jpeg";
import photo2 from "../assets/news3.jpeg";
import { TitleComponent } from "./title";
import React from "react";
import "../i18n/i18n";
import { useTranslation } from "react-i18next";
export const Article = () => {
  const { t } = useTranslation();
  return (
    <article
      id={t("article.name")}
      className="flex flex-col w-full  space-y-10 md:space-y-0 md:space-x-10"
    >
      <div className="animate__animated animate__fadeInLeft">
        <TitleComponent text={"Newsletters"} />
      </div>
      <section className="md:p-6 w-full flex flex-col items-center bg-blue-50">
        <Card
          pic={photo}
          text={t("article.news1.title")}
          title={t("article.news1.intro")}
          path={"news/1"}
        />
        <Card
          pic={photo1}
          text={t("article.news2.title")}
          title={t("article.news2.intro")}
          path={"news/2"}
        />

        <Card
          path={"news/3"}
          variant={"N"}
          pic={photo2}
          text={t("article.news3.title")}
          title={t("article.news3.intro")}
        />
      </section>
    </article>
  );
};
