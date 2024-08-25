import React, { useEffect } from "react";
import rat from "../assets/xvirus.png";
import ant from "../assets/xant.png";
import virus from "../assets/xrat.png";
import klopi from "../assets/klopi.jpg";
import tarakan from "../assets/tarakan.jpg";
import scorpion from "../assets/skarpion.jpg";
import grizuni from "../assets/grizuni.jpg";
import bloxi from "../assets/bloxi.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

import { useTranslation } from "react-i18next";

export const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <img src={rat} alt="virus" />,
      text: "Дезинфекция – Уничтожить Вредоносные Микроорганизмы",
      description:
        "Главная задача любой дезинфекции уничтожить опасные микроорганизмы, способные вызывать инфекции и заболевания. Дезинфекционные мероприятия избавляют пространство от плесени, вирусов, грибка, бактерий. Процедура очищает среду от патогенных организмов, Если вы беспричинно чувствуете недомогание, утомление, слабость, необходимо вызвать дезинфекторов.",
    },
    {
      icon: <img src={ant} alt="ant" />,
      text: "Дезинсекция – Уничтожение Насекомых",
      description:
        "Главная задача любой дезинфекции уничтожить опасные микроорганизмы, способные вызывать инфекции и заболевания. Дезинфекционные мероприятия избавляют пространство от плесени, вирусов, грибка, бактерий. Процедура очищает среду от патогенных организмов, Если вы беспричинно чувствуете недомогание, утомление, слабость, необходимо вызвать дезинфекторов.",
    },
    {
      icon: <img src={virus} alt="rat" />,
      text: "Дератизация — Уничтожению Грызунов.",
      description:
        "Главная задача любой дезинфекции уничтожить опасные микроорганизмы, способные вызывать инфекции и заболевания. Дезинфекционные мероприятия избавляют пространство от плесени, вирусов, грибка, бактерий. Процедура очищает среду от патогенных организмов, Если вы беспричинно чувствуете недомогание, утомление, слабость, необходимо вызвать дезинфекторов.",
    },
  ];
  const servicetypes = [
    {
      icon: (
        <img
          src={klopi}
          alt="klopi"
          className="w-[100%] h-[100%] rounded-[50%]"
        />
      ),
      text: "КЛOПЫ",
      description:
        "Живут в постели, мягкой мебели, текстиле, под дверными коробами и оконными рамами. Питаются кровью людей и теплокровных животных. Провоцируют аллергию и сильный психологический дискомфорт...",
      btn: (
        <a
          href="#contact"
          className="w-32 lg:max-w-[190px] lg:h-[50px] p-3 mt-15 text-center inline-block rounded-full bg-blue-700 text-white hover:bg-blue-500"
        >
          {t("Связь")}
        </a>
      ),
    },
    {
      icon: (
        <img
          src={tarakan}
          alt="tarakan"
          className="w-[100%] h-[100%] rounded-[50%]"
        />
      ),
      text: "ТAРAКАНЫ",
      description:
        "Переносят на себе возбудители болезней. Живут в щелях, под плинтусами, за мебелью, под ванной, под шкафами и пр. Питаются пищевыми продуктами, бытовыми отходами, кожаными изделиями, бумагой...",
      btn: (
        <a
          href="#contact"
          className="w-32 lg:max-w-[190px] lg:h-[50px] p-3 mt-15 text-center inline-block rounded-full bg-blue-700 text-white hover:bg-blue-500"
        >
          {t("Связь")}
        </a>
      ),
    },
    {
      icon: (
        <img
          src={scorpion}
          alt="scorpion"
          className="w-[100%] h-[100%] rounded-[50%]"
        />
      ),
      text: "СКОРПИОН",
      description:
        "Теплолюбивые существа, которые питаются насекомыми и паукообразными. Могут поселиться в сарае и доме, но чаще они встречаются в деревянных строениях...",
      btn: (
        <a
          href="#contact"
          className="w-32 lg:max-w-[190px] lg:h-[50px] p-3 mt-15 text-center inline-block rounded-full bg-blue-700 text-white hover:bg-blue-500"
        >
          {t("Связь")}
        </a>
      ),
    },
    {
      icon: (
        <img
          src={grizuni}
          alt="grizuni"
          className="w-[100%] h-[100%] rounded-[50%]"
        />
      ),
      text: "ГРЫЗУНЫ",
      description:
        "Самые распространенные — крысы и мыши. Они переносят на себе возбудители болезней, бегают по всем поверхностям, проделывают ходы в стенах и перекрытиях, снижая надежность строения. Питаются пищевыми продуктами и бытовыми отходами...",
      btn: (
        <a
          href="#contact"
          className="w-32 lg:max-w-[190px] lg:h-[50px] p-3 mt-15 text-center inline-block rounded-full bg-blue-700 text-white hover:bg-blue-500"
        >
          {t("Связь")}
        </a>
      ),
    },
    {
      icon: (
        <img
          src={bloxi}
          alt="bloxi"
          className="w-[100%] h-[100%] rounded-[50%]"
        />
      ),
      text: "БЛОХИ",
      description:
        "Попадают в дом на теле питомцев, мигрируют от соседей. Живут в мягкой мебели, постели, коврах, мягких игрушках, под плинтусами и рамами окон и дверей. Питаются кровью людей и животных. Переносят болезни...",
      btn: (
        <a
          href="#contact"
          className="w-32 lg:max-w-[190px] lg:h-[50px] p-3 mt-15 text-center inline-block rounded-full bg-blue-700 text-white hover:bg-blue-500"
        >
          {t("Связь")}
        </a>
      ),
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
    });
  }, []);

  return (
    <div id="service">
      <h2 className="w-[100%] text-3xl flex items-center justify-normal text-neutral-800 lg:text-5xl font-bold my-4 ">
        {t("Услуги")}
      </h2>
      <p className="max-w-80 text">
        {t("Мы обеспечиваем вам эффективное и гарантированное обслуживание.")}
      </p>
      <div className="flex flex-col mt-5 lg:mt-10" >
        {services.map((service, index) => (
          <div
            key={index}
            className="w-full border-2 border-neutral-400 rounded-2xl p-4 mt-4"
            data-aos="fade-right"
          >
            <div className=" flex-row items-center lg:flex sm:flex">
              <div className="max-w-[180px] max-h-[280px] md:max-w-[200px] md:max-h-[200px] lg:w-[300px] lg:h-[300px] bg-transparent mx-5 lg:mx-16">
                {service.icon}
              </div>
              <div className="md:w-[80%] lg:w-[70%]">
                <h5 className="mt-4 text-xl px-3 font-bold lg:text-2xl">
                  {t(service.text)}
                </h5>
                <p className="text-neutral-400 mt-5 px-3 text-xs md:text-base">
                  {t(service.description)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2 className="w-[100%] text-3xl flex items-center justify-normal text-neutral-800 lg:text-5xl font-bold my-4">
        {t("Тип обслуживания")}
      </h2>
      <div className="flex items-start flex-wrap mt-11">
        {servicetypes.map((servicetype, index) => (
          <div
            key={index}
            className="relative flex flex-col justify-between lg:max-w-[32%] h-[290px] lg:h-[450px] rounded-[12px] mr-4 mt-4 p-5 bg-slate-100 "
            data-aos="fade-right"
          >
            <div>
              <h3 className="text-neutral-800 text-2xl lg:text-3xl font-bold ">
                {t(servicetype.text)}
              </h3>
              <p className="text-neutral-700 text-xs sm:text-base font-light mt-5">
                {t(servicetype.description)}
              </p>
            </div>
            {servicetype.btn}
            <div className="w-[80px] h-[80px] sm:w-[130px] sm:h-[130px] rounded-[50%] absolute bottom-5 right-5 ">
              {servicetype.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
