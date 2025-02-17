import { Card } from "./card";
import photo from "../assets/news1.jpeg";
import photo1 from "../assets/news2.jpeg";
import photo2 from "../assets/news3.jpeg";
import photo3 from "../assets/news4.jpeg";
import photo4 from "../assets/news5.jpeg";
import photo6 from "../assets/news6.jpeg";
import photo5 from "../assets/news7.jpeg";
import photo8 from "../assets/news8.jpeg";
import { TitleComponent } from "./title";
import React from "react";
import "../i18n/i18n";
import { useTranslation } from "react-i18next";
export const Article = () => {
  const { t } = useTranslation();
  return (
    <article
      id={t("article.name")}
      className="flex flex-wrap w-full  space-y-10 md:space-y-0 md:space-x-10"
    >
      <div className="animate__animated animate__fadeInLeft">
        <TitleComponent text={"Newsletters"} />
      </div>
      <section className="md:p-6 w-full md:space-x-4 grid grid-cols-1 content-center md:grid-cols-2 items-center bg-blue-50">
        <Card
          path={"news/7"}
          variant={"N"}
          pic={photo8}
          text={t("article.news7.title")}
          title={t("article.news7.intro")}
        />
        <Card
          path={"news/4"}
          variant={"N"}
          pic={photo6}
          text={t("article.news4.title")}
          title={t("article.news4.intro")}
        />
        <Card
          path={"news/5"}
          variant={"N"}
          pic={photo4}
          text={t("article.news5.title")}
          title={t("article.news5.intro")}
        />
        <Card
          path={"news/6"}
          variant={"N"}
          pic={photo5}
          text={t("article.news6.title")}
          title={t("article.news6.intro")}
        />
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
