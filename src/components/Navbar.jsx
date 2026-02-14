import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Navbar */}
      <nav
        className={`nav w-full flex justify-between items-center px-[2%] lg:px-[12%] sm:px-[8%] h-[90px] fixed top-0 left-0 right-0 z-50 border border-[#045eb014] transition-all duration-300 ${
          isActive ? "bg-white shadow-lg" : ""
        }`}
      >
        {/* Left side */}
        <div className="nav-left flex items-center">
          <div className="nav-logo">
            <Link to="/">
              <h1 className="text-3xl font-semibold sora-font text-[#0b11c1]">
                Learn Space
              </h1>
            </Link>
          </div>

          <ul className="hidden xl:flex gap-8 items-center ms-20 nav-menu">
            <li>
              <Link to="/" className="font-semibold text-md">Головна</Link>
            </li>
            <li>
              <Link to="/about" className="font-semibold text-md">Про нас</Link>
            </li>
            <li>
              <Link to="/courses" className="font-semibold text-md">Курси</Link>
            </li>
           
            <li>
              <Link to="/contact" className="font-semibold text-md">Контакти</Link>
            </li>
          </ul>
        </div>

        {/* Right side */}
        <div className="nav-right flex gap-2 items-center">
          <div className="
  user min-h-[40px]
  bg-white
  border border-transparent
  hover:border-[var(--prim-color)]
  transition-all duration-300
  shadow-xl
  px-4
  flex justify-center items-center
  rounded-xl
  cursor-pointer
  hover:scale-105
">
            <Link to="/SignIn"
            className="
    flex items-center gap-2
    
    text-sm font-medium
    text-[var(--text-color)]
    transition-colors duration-300
    group
  ">
              <FontAwesomeIcon icon={faRightToBracket}
             
    className="text-sm" />
              <span>Вхід</span>
            </Link>
          </div>
          <div
            className="open-sidebar min-h-[40px] min-w-[40px] text-xl bg-white hover:bg-[#006dca] hover:text-white transition-colors duration-300 shadow-xl p-1 justify-center items-center rounded-full flex xl:hidden"
            onClick={() => setIsOpen(true)}
          >
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar overflow-y-scroll ${isOpen ? "active" : ""}`}>
        <div className="nav-logo">
          <Link to="/">
            <h1 className="text-3xl font-semibold text-[var(--prim-color)]">LearnSpace</h1>
          </Link>
        </div>

        <ul className="flex gap-6 items-start flex-col pt-10 w-full">
          <li className="w-full">
            <Link to="/" className="font-bold text-gray-700 hover:text-[#006dca] transition-colors duration-300 chakrapetch-font uppercase text-2xl border-b border-gray-300 pb-2 w-full block">
              Home
            </Link>
          </li>
          <li className="w-full">
            <Link to="/about" className="font-bold text-gray-700 hover:text-[#006dca] transition-colors duration-300 chakrapetch-font uppercase text-2xl border-b border-gray-300 pb-2 w-full block">
              About
            </Link>
          </li>
          <li className="w-full">
            <Link to="/courses" className="font-bold text-gray-700 hover:text-[#006dca] transition-colors duration-300 chakrapetch-font uppercase text-2xl border-b border-gray-300 pb-2 w-full block">
              Courses
            </Link>
          </li>
          <li className="w-full">
            <Link to="/contact" className="font-bold text-gray-700 hover:text-[#006dca] transition-colors duration-300 chakrapetch-font uppercase text-2xl border-b border-gray-300 pb-2 w-full block">
              Contact
            </Link>
          </li>
        </ul>

        <div
          className="close-btn absolute top-5 right-10 text-2xl cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <FontAwesomeIcon icon={faXmark} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
