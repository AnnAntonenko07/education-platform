import { faHome } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

import element1 from "../../public/Images/element-01.png";
import element2 from "../../public/Images/element-02.png";
import element3 from "../../public/Images/element-03.png";
import element4 from "../../public/Images/element-04.png";
import element5 from "../../public/Images/element-05.png";
import element6 from "../../public/Images/element-06.png";

import featuresImage1 from "../../public/Images/features-icon1.png";
import featuresImage2 from "../../public/Images/features-icon2.png";
import featuresImage3 from "../../public/Images/features-icon3.png";

import whychooseImage from "../../public/Images/about-img.png";

import choseImage1 from "../../public/Images/choose-icon1.png";
import choseImage2 from "../../public/Images/choose-icon2.png";
import choseImage3 from "../../public/Images/choose-icon3.png";
import choseImage4 from "../../public/Images/choose-icon4.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";


import "swiper/css";
import "swiper/css/navigation";

import testiImage1 from "../../public/Images/testi-img1.png";
import testiImage2 from "../../public/Images/testi-img2.png";
import testiImage3 from "../../public/Images/testi-img3.png";

import quoteImage from '../../public/Images/quote-icon.png';

const About = () => {
  const testimonials = [
  {
    course: "JavaScript з нуля",
    ratings: 5,
    text: "Курс допоміг мені зрозуміти базу JavaScript та впевнено писати власний код.",
    author: "Олена К.",
    role: "Початківець",
    img: testiImage1,
  },
  {
    course: "UI/UX дизайн",
    ratings: 4,
    text: "Дуже структурований матеріал і практичні завдання після кожного модуля.",
    author: "Ірина М.",
    role: "UI дизайнер",
    img: testiImage2,
  },
  {
    course: "Front-end розробка",
    ratings: 5,
    text: "Навчання проходить легко, подобається формат та подача матеріалу.",
    author: "Аліна С.",
    role: "Front-end developer",
    img: testiImage3,
  },
  {
    course: "Python для початківців",
    ratings: 5,
    text: "Все пояснюється просто і зрозуміло. Ідеально для старту в програмуванні.",
    author: "Дмитро П.",
    role: "Студент",
    img: testiImage1,
  },
  {
    course: "Web Design",
    ratings: 4,
    text: "Чудовий курс, який допоміг покращити моє портфоліо.",
    author: "Марина Л.",
    role: "Web дизайнер",
    img: testiImage2,
  },
];
  return (
    <>
     


     <div className="px-[2%] lg:px-[12%] sm:px-[8%]  pt-[120px] lg:pt-[120px] py-[50px] lg:py-[90px] bg-[#f3f9ff] relative">
  <div className="max-w-4xl">
    <span className="text-[#0b11c1] font-semibold sora-font pb-2 inline-flex items-center gap-2">
      <i className="bi bi-book"></i>
      Чому саме Learn Space
    </span>

    <h2 className="text-[#000000] text-3xl md:text-4xl md:leading-12 sora-font font-semibold">
      Вчись у своєму темпі та прокачуй навички, які реально потрібні.
    </h2>

    <p className="text-[#4d79ff] pt-4 text-sm md:text-base">
      Learn Space — це платформа для навчання без зайвого стресу: короткі уроки, зрозумілі пояснення,
      практика після кожної теми та підтримка на всьому шляху.
    </p>
  </div>

  {/* Feature cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
    <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition">
      <div className="w-12 h-12 rounded-full bg-[#e8f3ff] flex items-center justify-center text-[#076dcb] text-xl mb-4">
        <i className="bi bi-lightning-charge"></i>
      </div>
      <h3 className="text-[#13203b] font-semibold sora-font mb-2">
        Коротко і по суті
      </h3>
      <p className="text-[#404a60] text-sm">
        Уроки без “води”: тільки те, що справді допомагає розуміти й робити.
      </p>
    </div>

    <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition">
      <div className="w-12 h-12 rounded-full bg-[#e8f3ff] flex items-center justify-center text-[#076dcb] text-xl mb-4">
        <i className="bi bi-journal-check"></i>
      </div>
      <h3 className="text-[#13203b] font-semibold sora-font mb-2">
        Практика після теми
      </h3>
      <p className="text-[#404a60] text-sm">
        Закріплюй знання завданнями та міні-проєктами одразу під час навчання.
      </p>
    </div>

    <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition">
      <div className="w-12 h-12 rounded-full bg-[#e8f3ff] flex items-center justify-center text-[#076dcb] text-xl mb-4">
        <i className="bi bi-clock-history"></i>
      </div>
      <h3 className="text-[#13203b] font-semibold sora-font mb-2">
        Гнучкий графік
      </h3>
      <p className="text-[#404a60] text-sm">
        Вчись коли зручно: з телефону, ноутбука або планшета, без прив’язки до часу.
      </p>
    </div>

    <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition">
      <div className="w-12 h-12 rounded-full bg-[#e8f3ff] flex items-center justify-center text-[#076dcb] text-xl mb-4">
        <i className="bi bi-people"></i>
      </div>
      <h3 className="text-[#13203b] font-semibold sora-font mb-2">
        Підтримка і мотивація
      </h3>
      <p className="text-[#404a60] text-sm">
        Підказки, матеріали та дружня атмосфера, щоб не “злитися” на середині.
      </p>
    </div>
  </div>

  {/* CTA */}
  <div className="mt-10 flex flex-wrap gap-3 items-center">
    <Link to="/Courses">
      <button
        className="bg-[#0b11c1] hover:bg-black text-white px-6 py-3 rounded-full text-sm cursor-pointer transition-colors duration-300"
        type="button"
      >
        Перейти до курсів <i className="bi bi-arrow-up-right ps-2"></i>
      </button>
    </Link>

    <p className="text-[#576070] text-sm">
      Обери напрям і почни з першого уроку вже сьогодні.
    </p>
  </div>
</div>
{/* Certificate section */}
<section className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-14 lg:py-20 bg-white">
  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
    {/* Left: text */}
    <div>
      <span className="inline-flex items-center gap-2 text-[#076dcb] font-semibold sora-font">
        <i className="bi bi-patch-check"></i>
        Сертифікат Learn Space
      </span>

      <h2 className="text-[#222e48] text-3xl md:text-4xl font-semibold sora-font mt-3">
        Підтвердження навичок, яке можна додати в резюме
      </h2>

      <p className="text-[#576070] mt-4 text-base leading-relaxed">
        Після успішного завершення курсу ти отримуєш сертифікат, який підтверджує твої знання та
        прогрес. Його можна додати до портфоліо, LinkedIn або показати роботодавцю.
      </p>

      <ul className="mt-6 space-y-3 text-[#404a60]">
        <li className="flex items-start gap-3">
          <i className="bi bi-check2-circle text-[#076dcb] mt-1"></i>
          <span className="text-sm md:text-base">
            Іменний сертифікат після проходження фінального тесту/проєкту
          </span>
        </li>
        <li className="flex items-start gap-3">
          <i className="bi bi-check2-circle text-[#076dcb] mt-1"></i>
          <span className="text-sm md:text-base">
            Вказано назву курсу та рівень складності
          </span>
        </li>
        <li className="flex items-start gap-3">
          <i className="bi bi-check2-circle text-[#076dcb] mt-1"></i>
          <span className="text-sm md:text-base">
            Можна завантажити у PDF та зберегти назавжди
          </span>
        </li>
      </ul>

     
    </div>
<div className="max-w-xl mx-auto">
  <img
    src="/Images/certificate.png"
    alt="Приклад сертифікату Learn Space"
    className="w-full rounded-3xl shadow-xl border border-[#e6eef8]"
  />
</div>
  
     </div>
</section>

      {/* Testmonials */}
      <div className="texti px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 
            lg:py-[90px] flex flex-col gap-3 relative">
        <div className="feature-content z-2 flex flex-col text-center w-full lg:w-[60%] mx-auto xl:w-[50%]">
          
          <h2 className="text-[#222e48] text-2xl sm:text-3xl md:text-4xl md:leading-10 sora-font font-semibold">
            Що кажуть наші студенти про нас
          </h2>
         
        </div>
      </div>

      <Swiper
  modules={[Navigation]}
  spaceBetween={24}
  slidesPerView={3}
  loop={true}
  navigation={{
    nextEl: ".swiper-testi-next",
    prevEl: ".swiper-testi-prev",
  }}
  breakpoints={{
    1200: { slidesPerView: 3 },
    768: { slidesPerView: 2 },
    0: { slidesPerView: 1 },
  }}
   className="w-full max-w-6xl mx-auto px-6 sm:px-10"
>
  {testimonials.map((testi, index) => (
    <SwiperSlide key={index}>
      <div className="bg-white rounded-2xl p-6 shadow-lg max-w-[460px] mx-auto flex flex-col justify-between h-full">

        {/* Назва курсу */}
        <span className="text-[#076dcd] text-sm font-semibold">
          {testi.course}
        </span>

        {/* Текст відгуку */}
        <p className="text-[#222e48] text-base mt-3 mb-6 leading-relaxed">
          {testi.text}
        </p>

        {/* Автор */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-full bg-[#e8f3ff] flex items-center justify-center text-[#076dcd] text-xl">
            <i className="bi bi-person-fill"></i>
          </div>

          <div>
            <h3 className="text-[#222e48] font-semibold text-sm">
              {testi.author}
            </h3>
            <p className="text-[#576070] text-xs">
              {testi.role}
            </p>
          </div>
        </div>

        {/* Зірочки */}
        <div className="flex gap-1 text-[#ff9f29]">
          {Array.from({ length: 5 }, (_, i) => (
            <i
              key={i}
              className={`bi ${
                i < testi.ratings ? "bi-star-fill" : "bi-star"
              }`}
            ></i>
          ))}
        </div>

      </div>
    </SwiperSlide>
  ))}
</Swiper>
      <div className="flex swiper-btn flex-col items-center mt-6 justify-center">
        <div className="flex gap-3">
          <div className="swiper-testi-prev cursor-pointer">
            <i className="bi bi-arrow-left"></i>
          </div>
          <div className="swiper-testi-next cursor-pointer">
            <i className="bi bi-arrow-right"></i>
          </div>
        </div>
      </div>

      <img
          src={element1}
          alt="shape-image"
          className="element1 hero-shape1 absolute left-30 top-30 object-contain hidden md:block"
        />
         <img
          src={element4}
          alt="shape-image"
          className="element4 hero-shape4 absolute right-40 bottom-50 z-2 object-contain hidden lg:block"
        />
        <img
          src={element5}
          alt="shape-image"
          className="element5 hero-shape5 absolute right-30 top-70 w-[20px] h-[20px] hidden sm:flex"
        />
        <img
          src={element5}
          alt="shape-image"
          className="element5 hero-shape5 absolute left-10 bottom-50 w-[25px] h-[25px] hidden sm:flex"
        />
    </>
  );
};

export default About;
