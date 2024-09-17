import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../assets/profile-pictures/logo.png";

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const handleChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const navItems = [
    { label: t("Основной"), href: "#" },
    { label: t("О нас"), href: "#about" },
    { label: t("Услуги"), href: "#service" },
    { label: t("ФАҚ"), href: "#faq" },
  ];
  const language = localStorage.getItem("i18nextLng");

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <a
              href="#"
              className="flex items-center w-[140px] h-[60px] justify-center lg:w-[220px] lg:h-[60px]"
            >
              <img className="h-auto w-auto mr-2" src={logo} alt="logo" />
            </a>
            <select
              value={language}
              name="Lng"
              id="lng"
              onChange={handleChange}
              className="border-2 border-neutral-400 bg-white rounded-md p-1 md:p-2 ml-3 text-xs md:text-sm text-neutral-700 hover:border-blue-500"
            >
              <option value="ru">Русский</option>
              <option value="uz">Узбек</option>
              <option value="en">English</option>
            </select>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a
              href="#contact"
              className="p-3 mt-15 w-[200px] text-center inline-block rounded-full bg-blue-700 text-white hover:bg-blue-500"
            >
              {t("Связь")}
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-slate-100 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href} onClick={toggleNavbar}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a
                onClick={toggleNavbar}
                href="#contact"
                className="p-3 mt-15 w-[150px] text-center inline-block rounded-full bg-blue-700 text-white hover:bg-blue-500"
              >
                {t("Связь")}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
