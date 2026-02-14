import React from "react";
import { Link } from "react-router-dom";

import element1 from "../../public/Images/element-01.png";
import element2 from "../../public/Images/element-02.png";
import element3 from "../../public/Images/element-03.png";
import element4 from "../../public/Images/element-04.png";
import element5 from "../../public/Images/element-05.png";

const SignUp = () => {
  return (
    <section className="relative px-[2%] sm:px-[8%] lg:px-[12%] py-[60px] lg:py-[90px] w-full min-h-screen flex items-center">
      {/* Decorative Shapes */}
      <img src={element1} alt="shape" className="absolute left-10 top-16 hidden md:block opacity-80" />
      <img src={element2} alt="shape" className="absolute left-14 top-48 hidden md:block opacity-70" />
      <img src={element3} alt="shape" className="absolute right-28 bottom-14 hidden lg:block opacity-70" />
      <img src={element4} alt="shape" className="absolute right-12 bottom-28 hidden lg:block opacity-70" />
      <img src={element5} alt="shape" className="absolute right-16 top-24 w-[22px] h-[22px] hidden sm:block" />
      <img src={element5} alt="shape" className="absolute left-10 bottom-20 w-[26px] h-[26px] hidden sm:block" />

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* ==== FORM ==== */}
        <div className="w-full max-w-[520px] mx-auto lg:mx-0">
          <form className="bg-white border border-[#EBECEF] rounded-3xl p-8 sm:p-10 shadow-lg">
            <h2 className="text-[#222e48] text-3xl font-semibold">
              Створити акаунт
            </h2>
            <p className="text-[#576070] text-sm mt-2">
              Заповніть дані, щоб приєднатися до платформи
            </p>

            {/* Full Name */}
            <div className="mt-8 flex flex-col space-y-2">
              <label className="text-sm font-medium text-[#222e48]">
                Ім’я та прізвище
              </label>
              <input
                type="text"
                placeholder="Введіть ваше ім’я"
                required
                className="h-[50px] px-4 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-[#076dcd] outline-none transition"
              />
            </div>

            {/* Email */}
            <div className="mt-6 flex flex-col space-y-2">
              <label className="text-sm font-medium text-[#222e48]">
                Email
              </label>
              <input
                type="email"
                placeholder="Введіть ваш email"
                required
                className="h-[50px] px-4 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-[#076dcd] outline-none transition"
              />
            </div>

            {/* Password */}
            <div className="mt-6 flex flex-col space-y-2">
              <label className="text-sm font-medium text-[#222e48]">
                Пароль
              </label>
              <input
                type="password"
                placeholder="Придумайте пароль"
                required
                className="h-[50px] px-4 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-[#076dcd] outline-none transition"
              />
            </div>

            {/* Confirm Password */}
            <div className="mt-6 flex flex-col space-y-2">
              <label className="text-sm font-medium text-[#222e48]">
                Підтвердіть пароль
              </label>
              <input
                type="password"
                placeholder="Повторіть пароль"
                required
                className="h-[50px] px-4 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-[#076dcd] outline-none transition"
              />
            </div>

            {/* Terms */}
            <div className="mt-5 text-sm text-[#576070] flex items-start gap-2">
              <input type="checkbox" required className="mt-1 accent-[#076dcd]" />
              <p>
                Я погоджуюсь з{" "}
                <Link to="/terms" className="text-[#076dcd] font-medium hover:underline">
                  умовами використання
                </Link>{" "}
                та{" "}
                <Link to="/privacy" className="text-[#076dcd] font-medium hover:underline">
                  політикою конфіденційності
                </Link>
                .
              </p>
            </div>

            {/* Button */}
            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-[#076dcd] hover:bg-black text-white py-3 rounded-2xl font-medium transition-colors duration-300"
              >
                Зареєструватися
              </button>
            </div>

            {/* Already have account */}
            <p className="text-center text-sm text-[#576070] mt-6">
              Вже є акаунт?{" "}
              <Link to="/signin" className="text-[#076dcd] font-medium hover:underline">
                Увійти
              </Link>
            </p>
          </form>
        </div>

        {/* ==== IMAGE ==== */}
        <div className="hidden lg:flex justify-center">
          <div className="bg-[#f3f9ff] rounded-3xl p-10 shadow-inner flex items-center justify-center">
            <img
              src="/Images/вхід.png"
              alt="login illustration"
              className="max-w-[420px] object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default SignUp;
