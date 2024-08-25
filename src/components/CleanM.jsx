import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

export const CleanM = () => {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
    });
  }, []);

  return (
    <>
      <div className="w-[100%] min-h-[585] rounded-2xl flex items-center justify-around px-5 bg-gradient-to-b from-blue-400 to-cyan-400 mt-20">
        <div
          className="max-w-[528px] min-h-[530px] mt-[20px] hidden lg:block"
          data-aos="fade-right"
        >
          <img
            src="https://www.dezinfeksiyatashkent.uz/assets/cleanT-f1a5f564.jpg"
            alt="clean"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="lg:h-[600px] py-[30px] px-[25] flex flex-col items-start justify-evenly rounded-[16px]">
          <div className="" data-aos="fade-right">
            <img
              src="https://www.dezinfeksiyatashkent.uz/assets/d3icons-b8f1c170.svg"
              alt="shield"
            />
          </div>
          <div>
            <h3
              className="max-w-[643px] text-white text-xl sm:text-3xl font-bold mt-3 mb-12"
              data-aos="fade-right"
            >
              {t(
                "Официальная гарантия - 1 год. Оказываем услуги физическим и юридическим лицам. Услуги лицензированы!!!"
              )}
            </h3>
          </div>
          <div>
            <a
              href="#contact"
              className="p-3 mt-15 w-[200px] text-center inline-block rounded-full bg-blue-700 text-white hover:bg-blue-500"
              data-aos="fade-right"
            >
              {t("Связь")}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
