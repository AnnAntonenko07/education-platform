import React from "react";

import { Link } from "react-router-dom";
import certificateimg from "../../public/Images/certificate-img.png";
import element5 from "../../public/Images/element-05.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons/faEnvelopeOpen";
import { faMap, faPaperPlane } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="banner px-[2%] lg:px-[12%] sm:px-[8%] py-[30px] lg:py-[60px] relative">
        <div className="banner-content w-full z-2 bg-[#0b11c1] p-5 h-[300px] flex justify-between items-center rounded-xl relative">
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-white text-xl sm:text-2xl lg:text-3xl md:leading-10 sora-font font-semibold pb-4">
              LearnSpace допомагає отримувати знання та навички, які потрібні для навчання, кар'єри й особистого розвитку.
            </h2>
          </div>
          
          <div className="w-full lg:w-1/2 flex flex-col items-end lg:ps-10">
            <p className="text-white text-sm sm:text-md pb-6 sora-font text-right">
              Якісні курси, зручний формат і підтримка на кожному етапі навчання.
            </p>
            <a
              href="/courses"
              className="btn custom-btn bg-white hover:bg-white hover:text-[#076dcb] text-[#076dcb] px-5 py-3 rounded-full w-fit text-sm cursor-pointer transition-colors duration-300 inline-flex items-center"
            >
              Перейти до курсів
              <i className="bi bi-arrow-up-right ps-2"></i>
            </a>
          </div>
        </div>

        <img
          src={element5}
          alt="shape-image"
          className="element5 hero-shape5 absolute right-30 top-70 w-[20px] h-[20px] hidden sm:flex"
        />
        <img
          src={element5}
          alt="shape-image"
          className="element5 hero-shape6 absolute left-10 bottom-50 w-[25px] h-[25px] hidden sm:flex"
        />
      </div>
      <div className="footer px-[2%] lg:px-[12%] sm:px-[8%] pt-[50px] lg:pt-[50px] relative overflow-hidden">
        <div className="grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-10 mb-8">
          <div className="w-full">
            <Link to="/">
              <h1 className="text-3xl font-semibold sora-font text-[#0b11c1]">
                Learn Space
              </h1>
            </Link>
            <p className="text-normal mt-4 font-inter text-[#404a60]">
            </p>
            <div className="footer-icons flex gap-3 mt-6">
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-[#006dca] cursor-pointer hover:text-black transition-colors duration-300"
              />
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-[#006dca] cursor-pointer hover:text-black transition-colors duration-300"
              />
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-[#006dca] cursor-pointer hover:text-black transition-colors duration-300"
              />
              <FontAwesomeIcon
                icon={faPinterest}
                className="text-[#006dca] cursor-pointer hover:text-black transition-colors duration-300"
              />
            </div>
          </div>
          <div className="w-full flex flex-col">
            <h3 className="text-[#222e48] font-semibold sora-font mb-3 text-xl">
              Навігація
            </h3>
            <Link
              to="/About"
              className="text-[#404a60] mb-1 hover:text-[#006dca] font-medium transition-colors duration-300"
            >
              Про нас
            </Link>
            <Link
              to="/Courses"
              className="text-[#404a60] mb-1 hover:text-[#006dca] font-medium transition-colors duration-300"
            >
              Курси
            </Link>
            <Link
              to="/Contact"
              className="text-[#404a60] mb-1 hover:text-[#006dca] font-medium transition-colors duration-300"
            >
              Контакти
            </Link>
          </div>
          <div className="w-full flex flex-col">
            <h3 className="text-[#222e48] font-semibold sora-font mb-3 text-xl">
              Категорії
            </h3>
            <Link
              to="/"
              className="text-[#404a60] mb-1 hover:text-[#006dca] font-medium transition-colors duration-300"
            >
              UI/UX Design
            </Link>
            <Link
              to="/"
              className="text-[#404a60] mb-1 hover:text-[#006dca] font-medium transition-colors duration-300"
            >
              Web Development
            </Link>
            <Link
              to="/"
              className="text-[#404a60] mb-1 hover:text-[#006dca] font-medium transition-colors duration-300"
            >
              Python Development
            </Link>
            <Link
              to="/"
              className="text-[#404a60] mb-1 hover:text-[#006dca] font-medium transition-colors duration-300"
            >
              Digital Marketing
            </Link>
            <Link
              to="/"
              className="text-[#404a60] mb-1 hover:text-[#006dca] font-medium transition-colors duration-300"
            >
              Graphic Design
            </Link>
          </div>
          <div className="w-full flex flex-col">
            <h3 className="text-[#222e48] font-semibold sora-font mb-3 text-xl">
              Контакти
            </h3>
            <div className="footer-section mb-3 flex items-center gap-5">
              <div className="footer-icons">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-[#006dca] text-xl"
                />
              </div>
              <div className="footer-text">
                <p className="text-[#404a60] hover:text-[#006dca] font-medium transition-colors duration-300">
                  (207) 555-0119
                </p>
                <p className="text-[#404a60] hover:text-[#006dca] font-medium transition-colors duration-300">
                  (704) 555-0127
                </p>
              </div>
            </div>
            <div className="footer-section mb-3 flex items-center gap-5">
              <div className="footer-icons">
                <FontAwesomeIcon
                  icon={faEnvelopeOpen}
                  className="text-[#006dca] text-xl"
                />
              </div>
              <div className="footer-text">
                <p className="text-[#404a60] hover:text-[#006dca] font-medium transition-colors duration-300">
                  info@gamil.com
                </p>
                <p className="text-[#404a60] hover:text-[#006dca] font-medium transition-colors duration-300">
                  eduall@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col">
            <h3 className="text-[#222e48] font-semibold sora-font mb-3 text-xl">
              Підпишіться
            </h3>
            <p className="text-[#404a60] mb-6 text-sm">Введіть вашу електронну пошту, щоб підписатися на нашу розсилку</p>
            <div className="footer-btn flex relative">
                <input type="email" placeholder="Email" className="w-full bg-white h-[45px] ps-5 rounded-full border-1 border-[#ebecef] outline-none"/>
                <button className="absolute right-1 top-0.5 rounded-full bg-[#066dca] text-white h-[40px] w-[40px] flex justify-center items-center p-3 cursor-pointer">
                    <FontAwesomeIcon icon={faPaperPlane} className="btn-icon" />
                </button>
            </div>
          </div>
        </div>
        <div className="border-t border-[#006dca] py-6">
            <p className="text-center text-md text-[#404a60]">
                © 2026 Antonenko Ann
            </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
