import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";

export const Contact = () => {
  const { t } = useTranslation();

  const [loading, setLoading] = useState(false);

  const SendMessage = (event) => {
    setLoading(true);
    event.preventDefault();
    const token = "7486996857:AAHo0mc-QJHTiBAYE0VYAoW9lFWEp9GwcWA";
    const chatId = 922395119;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const name = document.getElementById("name").value;
    const number = document.getElementById("number").value;
    const message = `Name: ${name}\nNumber: ${number}`;

    axios({
      url: url,
      method: "POST",
      data: {
        chat_id: chatId,
        text: message,
      },
    })
      .then((res) => {
        document.getElementById("myForm").reset();
        toast.success("Message Sent Successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error while sending data", error);
        toast.error("Error while sending message.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
    });
  }, []);

  return (
    <div
      className="w-full h-[550px] rounded-[12px] bg-gradient-to-t from-blue-500 to-slate-400 flex items-center justify-evenly relative px-[24px] mt-20"
      id="contact"
    >
      <div>
        <div
          className="max-w-[456px] min-h-[385px] bg-gray-50 rounded-[8px] p-5"
          data-aos="fade-right"
        >
          <h2 className="text-lg text-neutral-800 lg:ext-[32px] font-bold leading-10">
            {t("Оставьте свою информацию")}
          </h2>
          <form id="myForm" action="" className="w-full" onSubmit={SendMessage}>
            <input
              id="name"
              type="text"
              className="flex items-center outline-none w-full h-[50px] border-none rounded-[8px] bg-gray-200 text-neutral-800 py-[20px] text-base font-medium mt-[30px] p-5"
              placeholder={t("Ваше имя")}
              required
            />
            <label htmlFor="" className="relative">
              <input
                id="number"
                type="text"
                className="flex items-center outline-none w-full h-[50px] border-none rounded-[8px] bg-gray-200 text-neutral-800 py-[20px] text-xs sm:text-base font-medium mt-[30px] p-5"
                placeholder="+998-90-123-45-67"
                required
              />
            </label>
            <button
              type="submit"
              className="
            flex w-full items-center justify-center h-[50px] border-none outline-none rounded-[8px] bg-neutral-900 text-white text-base font-medium cursor-pointer mt-[50px] hover:text-black hover:bg-zinc-300 "
              loading={loading}
            >
              {loading ? t("Отправляется...") : t("Отправка")}
            </button>
          </form>
          <ToastContainer />
        </div>
      </div>
      <div className="hidden lg:flex w-[400px] h-[280px]  items-start">
        <img
          className="absolute bottom-0 right-[10px]"
          src="https://www.dezinfeksiyatashkent.uz/assets/contact-a5f11f68.png"
          alt="hero"
        />
      </div>
    </div>
  );
};
