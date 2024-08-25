import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

export const Footer = () => {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
    });
  }, []);

  return (
    <div className="w-full pt-[70px] mt-[100px] mb-[80px] border-t border-neutral-500 bg-white p-6">
      <div className="pl-4 md:flex md:justify-between md:items-center">
        <a
          href="#"
          className="flex items-center w-[140px] h-[40px] md:w-[180px] md:h-[50px] lg:w-[220px] lg:h-[60px]"
        >
          <img
            src="https://www.dezinfeksiyatashkent.uz/assets/dez_logo2-5b433e48.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </a>
        <div className="pt-10 md:w-[500px] lg:w-[900px]">
          <div className="w-full flex flex-col" data-aos="fade-right">
            <div>
              <a href="#" className="flex items-center mb-[20px]">
                <span className="flex w-10 p-[10px] justify-center items-center border rounded-[8px] border-neutral-300 mr-[25px]">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    class="f_icon"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </span>
                <p className="text-neutral-600 text-base font-medium">
                  {t("Узбекистан, город Ташкент")}
                </p>
                <svg
                  className="text-[30px] ml-[25px]"
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="fd_a_icon"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>
            <div data-aos="fade-right">
              <a
                href="tel:+998991199933"
                className="flex items-center mb-[20px]"
              >
                <span className="flex w-10 p-[10px] justify-center items-center border rounded-[8px] border-neutral-300 mr-[25px]">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    class="f_icon"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                </span>
                <p className="text-neutral-600 text-base font-medium">
                  +998991199933
                </p>
                <svg
                  className="text-[30px] ml-[25px]"
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="fd_a_icon"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
