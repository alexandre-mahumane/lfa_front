import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import "../i18n/i18n";
import "swiper/css";
import photo1 from "../assets/photo5.jpeg";
import photo2 from "../assets/photo4.jpeg";
import photo3 from "../assets/photo3.jpeg";
import video from "../assets/lfa_video_banner.mp4";
import { Link } from "react-router-dom";
import { TitleComponent } from "./title";
import { register } from "swiper/element/bundle";

import "swiper/css/effect-fade";
register();
export const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="relative w-full mt-14 h-screen text-white flex justify-center items-center">
      <Swiper
        speed={1000}
        cssMode={true}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        className="absolute top-0 left-0 w-full h-full custom-bezier"
      >
        <SwiperSlide>
  <div className="w-full h-full">
    <video
      className="w-full h-full object-cover"
      autoPlay
      loop
      muted
      playsInline
      src={video} // Substitua 'video1' pelo caminho do seu vídeo
    />
  </div>
</SwiperSlide>

        {/* <SwiperSlide>
          <div
            className="w-full h-full  bg-cover"
            style={{ backgroundImage: `url(${photo1})` }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full h-full  bg-cover"
            style={{ backgroundImage: `url(${photo2})` }}
          ></div>
        </SwiperSlide> */}
        {/* <SwiperSlide>
          <div
            className="w-full h-full  bg-cover"
            style={{ backgroundImage: `url(${photo3})` }}
          ></div>
        </SwiperSlide> */}
      </Swiper>

      <div className="absolute w-full sm:w-4/5 h-full sm:h-3/4 bg-black bg-opacity-75 p-6 sm:p-12 lg:p-24 flex flex-col justify-center items-start space-y-6 sm:space-y-10 text-white z-10">
        <TitleComponent text={t("hero.title")} />
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-sm sm:text-base lg:text-lg"
        >
          {t("hero.var")}
          <span className="font-bold">{t("hero.var1")}</span>
          {t("hero.text")}{" "}
        </motion.p>
        {/* <motion.p
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-sm sm:text-base lg:text-lg"
        >
          {t("hero.text2")}
        </motion.p> */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          viewport={{ once: true }}
          className="w-full flex space-x-4 text-center sm:w-auto mt-4"
        >
          <Link
            to={`information/about-us`}
            className="w-fit px-4 py-2 bg-blue-600 hover:bg-transparent text-white border-2 border-blue-600 transition-all"
          >
            {t("link.text")}
          </Link>

          <a
            id="#contact"
            href={`#${t("contacts.name")}`}
            className="w-fit px-4 py-2 hover:bg-blue-600 text-white border-2 border-blue-600 transition-all"
          >
            {t("contacts.title")}
          </a> 
        </motion.div>
      </div>
    </div>
  );
};
