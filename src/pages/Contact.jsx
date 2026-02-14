import React, { useState } from "react";
import element1 from "../../public/Images/element-01.png";
import element2 from "../../public/Images/element-02.png";
import element3 from "../../public/Images/element-03.png";
import element4 from "../../public/Images/element-04.png";
import element5 from "../../public/Images/element-05.png";
import element6 from "../../public/Images/element-06.png";
const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <>

    
      {/* Верхній блок */}
      <section className="relative px-[2%] sm:px-[8%] lg:px-[12%] py-[70px] lg:py-[110px]">
        {/* Декор */}
        <img
                 src={element1}
                 alt="shape-image"
                 className="element1 hero-shape1 absolute left-10 top-10 object-contain hidden md:block"
               />
               <img
                 src={element2}
                 alt="shape-image"
                 className="element2 hero-shape2 absolute left-40 bottom-20 object-contain hidden md:block"
               />
               <img
                 src={element3}
                 alt="shape-image"
                 className="element3 hero-shape3 absolute right-10 top-40 z-2 object-contain hidden lg:block"
               />
               <img
                 src={element4}
                 alt="shape-image"
                 className="element4 hero-shape4 absolute right-20 bottom-30 z-2 object-contain hidden lg:block"
               />
               <img
                 src={element5}
                 alt="shape-image"
                 className="element5 hero-shape5 absolute right-60 bottom-40 w-[20px] h-[20px] hidden sm:flex"
               />
               <img
                 src={element5}
                 alt="shape-image"
                 className="element5 hero-shape5 absolute left-60 top-40 w-[25px] h-[25px] hidden sm:flex"
               />
               <img
                 src={element6}
                 alt="shape-image"
                 className="element6 hero-shape6 absolute right-40 bottom-20 w-[25px] hidden lg:flex"
               />

        <div className="mx-auto max-w-[1100px]">
          <div className="text-center mx-auto w-full lg:w-[70%] xl:w-[55%]">
            <span className="text-[#076dcb] font-semibold sora-font pb-1 inline-flex items-center gap-2">
              <i className="bi bi-chat-dots"></i>
              Зв’язок з нами
            </span>
            <h2 className="text-[#0b11c1] text-3xl md:text-4xl md:leading-12 sora-font font-semibold">
              Напишіть нам — допоможемо швидко
            </h2>
            <p className="text-[#576070] pt-3 pb-10 text-sm md:text-base">
              Маєте питання щодо навчання, доступу або співпраці? Залиште повідомлення —
              ми відповімо найближчим часом.
            </p>
          </div>

          {/* Картки */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="group bg-white border border-[#EBECEF] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="min-w-[48px] min-h-[48px] bg-[#f3f9ff] rounded-2xl flex justify-center items-center text-xl text-[#076dcb]">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div>
                  <h4 className="sora-font font-semibold text-lg text-[#222e48]">
                    Офіс
                  </h4>
                  <p className="text-sm text-[#404a60] pt-2">
                    м. Київ, вул. Прикладна, 12
                    <br />
                    Пн–Пт: 10:00–18:00
                  </p>
                  <button
                    type="button"
                    className="mt-4 text-sm font-medium text-[#076dcb] inline-flex items-center gap-2 hover:text-black transition-colors"
                  >
                    Показати на мапі <i className="bi bi-arrow-up-right"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="group bg-white border border-[#EBECEF] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="min-w-[48px] min-h-[48px] bg-[#f3f9ff] rounded-2xl flex justify-center items-center text-xl text-[#076dcb]">
                  <i className="bi bi-envelope"></i>
                </div>
                <div>
                  <h4 className="sora-font font-semibold text-lg text-[#222e48]">
                    Email
                  </h4>
                  <p className="text-sm text-[#404a60] pt-2">
                    support@example.com
                    <br />
                    partners@example.com
                  </p>
                  <button
                    type="button"
                    className="mt-4 text-sm font-medium text-[#076dcb] inline-flex items-center gap-2 hover:text-black transition-colors underline"
                  >
                    Написати лист <i className="bi bi-arrow-up-right"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="group bg-white border border-[#EBECEF] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="min-w-[48px] min-h-[48px] bg-[#f3f9ff] rounded-2xl flex justify-center items-center text-xl text-[#076dcb]">
                  <i className="bi bi-telephone"></i>
                </div>
                <div>
                  <h4 className="sora-font font-semibold text-lg text-[#222e48]">
                    Телефон
                  </h4>
                  <p className="text-sm text-[#404a60] pt-2">
                    +380 (99) 123 45 67
                    <br />
                    +380 (67) 987 65 43
                  </p>
                  <button
                    type="button"
                    className="mt-4 text-sm font-medium text-[#076dcb] inline-flex items-center gap-2 hover:text-black transition-colors underline"
                  >
                    Замовити дзвінок <i className="bi bi-arrow-up-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Нижній блок */}
      <section className="px-[2%] sm:px-[8%] lg:px-[12%] py-[60px] lg:py-[90px]">
        <div className="mx-auto max-w-[1100px] grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Ліва колонка */}
          <div className="bg-[#f3f9ff] border border-[#EBECEF] rounded-3xl p-6 sm:p-10">
            <span className="text-[#076dcb] font-semibold sora-font pb-1 inline-flex items-center gap-2">
              <i className="bi bi-headset"></i>
              Підтримка
            </span>
            <h3 className="text-[#222e48] text-3xl md:text-4xl md:leading-12 sora-font font-semibold">
              Є питання? Напишіть — ми на зв’язку
            </h3>
            <p className="text-[#576070] pt-4 text-sm md:text-base">
              Ми допомагаємо з доступом до курсів, оплатою, технічними проблемами та
              підбором навчальної траєкторії.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="text-xs font-semibold bg-white border border-[#EBECEF] px-3 py-2 rounded-full">
                Відповідь до 24 годин
              </span>
              <span className="text-xs font-semibold bg-white border border-[#EBECEF] px-3 py-2 rounded-full">
                Допомога з оплатою
              </span>
              <span className="text-xs font-semibold bg-white border border-[#EBECEF] px-3 py-2 rounded-full">
                Техпідтримка
              </span>
            </div>

            <div className="mt-8 border-t-2 border-dotted border-[#c1c4cc] pt-6 flex items-center justify-between gap-6 flex-wrap">
              <button
                type="button"
                className="bg-[#076dcd] hover:bg-black text-white px-5 py-3 rounded-full text-sm font-medium transition-colors"
              >
                Дізнатися більше <i className="bi bi-arrow-up-right ps-2"></i>
              </button>

            
                
            
            </div>
          </div>

          {/* Форма */}
          <div className="bg-white border border-[#EBECEF] rounded-3xl p-3 sm:p-4">
            <form
              onSubmit={handleSubmit}
              className="w-full bg-[#f3f9ff] border border-[#f3f9ff] p-5 sm:p-10 rounded-3xl space-y-4"
            >
              <h3 className="sora-font text-2xl font-semibold text-[#222e48] border-b-2 border-[#ebecef] border-dashed pb-5">
                Напишіть повідомлення
              </h3>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#222e48]">
                  Ім’я
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Ваше ім’я"
                  className="w-full px-4 py-3 rounded-2xl border bg-white border-gray-300 focus:ring-2 focus:ring-[#066dca] outline-none transition"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#222e48]">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Ваш email"
                  className="w-full px-4 py-3 rounded-2xl border bg-white border-gray-300 focus:ring-2 focus:ring-[#066dca] outline-none transition"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#222e48]">
                  Повідомлення
                </label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder="Опишіть ваше питання або запит…"
                  className="w-full px-4 py-3 rounded-2xl border bg-white border-gray-300 focus:ring-2 focus:ring-[#066dca] outline-none transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#066dca] hover:bg-black text-white font-medium py-3 rounded-2xl transition-all duration-300 cursor-pointer"
              >
                Надіслати
              </button>

              {submitted && (
                <p className="text-green-600 font-medium mt-3 text-center animate-fadeIn">
                  Дякую! Повідомлення успішно надіслано.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
