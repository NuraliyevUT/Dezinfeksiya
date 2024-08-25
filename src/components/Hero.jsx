import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import hero from "../assets/hero.png";
import AOS from "aos";
import "aos/dist/aos.css";

export const Hero = () => {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
    });
  }, []);

  return (
    <div className="w-full h-auto mb-10 rounded-3xl bg-cover bg-center bg-[url('https://www.dezinfeksiyatashkent.uz/assets/hero-9df3d259.jpg')] lg:bg-none">
      <div className="flex justify-between items-center  backdrop-brightness-75 lg:backdrop-brightness-100 rounded-3xl ">
        <div className="w-full p-8 lg:w-[50%]" data-aos="fade-right">
          <div className="mb-20">
            <h2 className="text-3xl text-white font-sans font-bold mb-5 max-w-lg md:text-7xl lg:text-7xl lg:text-blue-600">
              {t("Служба дезинфекции")}
            </h2>
            <div className="flex justify-between items-start">
              <p className="text-base font-sans text-orange-100 lg:text-slate-900 max-w-sm lg:text-xl">
                {t(
                  "Мы проводим профессиональную дезинфекцию в Ташкенте 10 лет, поэтому знаем, как избавить вас от вредителей с 1-го раза."
                )}
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="p-3 mt-15 w-[200px] text-center inline-block rounded-full bg-blue-700 text-white hover:bg-blue-500"
          >
            {t("Связь")}
          </a>
        </div>
        <div className="hidden lg:block lg:w-[50%]">
          <img
            src={hero}
            className="lg:w-full object-cover"
            alt="Description of the image"
          />
        </div>
      </div>
    </div>
  );
};
