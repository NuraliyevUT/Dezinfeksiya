import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export const Faq = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const handleOpen = (index) => {
    setOpenIndex((prevOpenIndex) => (prevOpenIndex === index ? null : index));
  };

  const faqes = [
    {
      icon: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          className="faq_acc_icon"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0V0z"></path>
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
        </svg>
      ),
      title: "Чем Производится Уничтожение Вредителей?",
      description:
        "При помощи специального оборудования инсектициды превращаются в аэрозольный туман и проникают в мельчайшие зазоры между обоями, стенами и плинтусами, в невидимые глазу потенциальные «укрытия» насекомых.",
    },
    {
      icon: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          className="faq_acc_icon"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0V0z"></path>
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
        </svg>
      ),
      title: "Опасны Ли Используемые Вами Препараты?",
      description:
        "Для людей, домашних питомцев и растений препараты не представляют опасности. Но после обработки помещение необходимо всё же проветрить в течение 40 минут.",
    },
    {
      icon: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          className="faq_acc_icon"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0V0z"></path>
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
        </svg>
      ),
      title: "Мне Нужно Как-То Подготовить Свой Дом Для Обработки?",
      description:
        "В основном нужно изолировать посуду и средства личной гигиены. Также нужно изолировать домашних животных на время обработки. Передвигать мебель и бытовую технику не требуется.",
    },
  ];

  return (
    <div
      className="w-full pt-5 border-t border-neutral-500 mt-20 lg:flex justify-between items-start"
      id="faq"
    >
      <h2 className="text-neutral-800 text-5xl font-bold py-5">ФАҚ</h2>
      <div className="lg:w-[80%]">
        {faqes.map((faq, index) => (
          <div key={index} className="w-full mb-4">
            <div className="flex justify-between items-center">
              <h4
                className="font-sans text-xl lg:text-2xl font-bold"
                onClick={() => handleOpen(index)}
              >
                {t(faq.title)}
              </h4>
              <button
                onClick={() => handleOpen(index)}
                className="p-2 rounded-full text-[20px] bg-gray-200 text-black"
              >
                {faq.icon}
              </button>
            </div>
            <div
              className={
                openIndex === index
                  ? "block mt-2 bg-slate-100 rounded-md  p-2"
                  : "hidden"
              }
            >
              <p>{t(faq.description)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
