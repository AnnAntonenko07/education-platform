import React from "react";
import { Link } from "react-router-dom";
import loginImage from "../../public/Images/вхід.png";

const SignIn = () => {
  return (
    <section className="px-[2%] sm:px-[8%] lg:px-[12%] py-[60px] lg:py-[90px] w-full min-h-screen flex items-center">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* ==== FORM ==== */}
        <div className="w-full max-w-[500px] mx-auto lg:mx-0">
          <form
            className="bg-white border border-[#EBECEF] rounded-3xl p-8 sm:p-10 shadow-lg"
          >
            <h2 className="text-[#222e48] text-3xl font-semibold">
              Вхід до акаунту
            </h2>
            <p className="text-[#576070] text-sm mt-2">
              Увійдіть, щоб продовжити навчання
            </p>

            {/* Email */}
            <div className="mt-8 flex flex-col space-y-2">
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
                placeholder="Введіть пароль"
                required
                className="h-[50px] px-4 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-[#076dcd] outline-none transition"
              />
            </div>

            {/* Remember + Forgot */}
            <div className="flex justify-between items-center mt-5 text-sm">
              <label className="flex items-center gap-2 text-[#576070] cursor-pointer">
                <input type="checkbox" className="accent-[#076dcd]" />
                Запам’ятати мене
              </label>

              <Link
                to="/forgot-password"
                className="text-[#076dcd] hover:underline font-medium"
              >
                Забули пароль?
              </Link>
            </div>

            {/* Button */}
            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-[#076dcd] hover:bg-black text-white py-3 rounded-2xl font-medium transition-colors duration-300"
              >
                Увійти
              </button>
            </div>

            {/* Signup */}
            <p className="text-center text-sm text-[#576070] mt-6">
              Немає акаунту?{" "}
              <Link
                to="/signup"
                className="text-[#076dcd] font-medium hover:underline"
              >
                Зареєструватися
              </Link>
            </p>
          </form>
        </div>

        {/* ==== IMAGE ==== */}
        <div className="hidden lg:flex justify-center">
          <div className="bg-[#f3f9ff] rounded-3xl p-10 shadow-inner flex items-center justify-center">
            <img
  src={loginImage}
  alt="login illustration"
  className="max-w-[420px] object-contain"
/>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SignIn;
