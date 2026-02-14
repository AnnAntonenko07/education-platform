import React, { useState } from "react";
import { BsCheckAll } from "react-icons/bs";

import element1 from "../../public/Images/element-01.png";
import element2 from "../../public/Images/element-02.png";
import element3 from "../../public/Images/element-03.png";
import element4 from "../../public/Images/element-04.png";
import element5 from "../../public/Images/element-05.png";
import element6 from "../../public/Images/element-06.png";

import laptopImage from "../../public/Images/laptop.png";

import whychoose from "../../public/Images/why-choose-us-image.jpg";

import featureicon1 from "../../public/Images/feature-icon1.png";
import featureicon2 from "../../public/Images/feature-icon2.png";
import featureicon3 from "../../public/Images/feature-icon3.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faMessage, faUserCircle } from "@fortawesome/free-regular-svg-icons";

import CoursesData from "../CoursesData.json";
import { Link } from "react-router-dom";

import article1 from '../../public/Images/articles-01.jpg';
import article2 from '../../public/Images/articles-02.jpg';
import article3 from '../../public/Images/articles-03.jpg';
const Index = () => {
  
  const categoryTranslations = {
    "All": "Усі курси",
    "Marketing": "Маркетинг",
    "Academic": "Навчальні дисципліни",
    "WebDesign": "Вебдизайн",
    "Programming": "Програмування",
    "Design": "Дизайн"
  };

  const categories = ["All", ...Object.keys(CoursesData.Courses)];
  const [activeCategory, setActiveCategory] = useState("All");

  const getCourses = () => {
    if (activeCategory === "All") {
      return Object.keys(CoursesData.Courses).flatMap((cat) => {
        if (cat === "Marketing") return CoursesData.Courses[cat].slice(0, 2);
        return CoursesData.Courses[cat].slice(0, 1);
      });
    }
    return CoursesData.Courses[activeCategory] || [];
  };

  const courses = getCourses();

  return (
    <>
      {/* Hero */}
      <div className="hero flex justify-between items-center gap-10 px-[2%] lg:px-[12%] sm:px[8%] py-[50px] lg:py-[90px] h-screen relative">
        <div className="hero-content text-center mx-auto w-full flex flex-col items-center relative z-9">
          <span className="text-[#076dcb] font-semibold chakrapetch-font">
            Інвестуй у своє майбутнє
          </span>
          <h2 className="text-[#222e48] text-3xl sm:text-5xl lg:text-7xl leading-14 lg:leading-20 font-bold sora-font py-2 w-full xl:w-[75%]">
            <div className="animate-fadeInUp" style={{animationDelay: '0s'}}>Навчайся</div>
            <div className="animate-fadeInUp" style={{animationDelay: '0.5s'}}><span className="text-[#0b11c1]">Розвивайся</span></div>
            <div className="animate-fadeInUp" style={{animationDelay: '1s'}}>Досягай</div>
          </h2>

          <div className="flex gap-3 flex-wrap mt-6">
            <a
              href="/courses"
              className="btn btn-hero btn-primary bg-[#0b11c1] text-white px-5 py-3 rounded-full w-auto text-sm cursor-pointer transition-all duration-300 inline-flex items-center"
            >
              Почни вже сьогодні
              <i className="bi bi-arrow-up-right ps-2"></i>
            </a>
          </div>
        </div>

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
      </div>
      {/* About */}
      <div className="about flex lg:flex-row flex-col justify-between items-center gap-10 px-[2%] lg:px-[12%] sm:px-[8%] py-[50px] lg:py-[90px] relative">
        <div className="about-content flex flex-col lg:w-1/2 w-full">
          <h2 className="text-[#222e48] text-3xl md:text-5xl md:leading-16 sora-font font-semibold pb-2">
            LearnSpace
          </h2>
          <h3 className="text-[#0b11c1] text-2xl md:text-4xl md:leading-12 sora-font font-semibold pb-6">
            Простір, де знання стають можливостями
          </h3>
          <p className="text-[#576070] pt-3 pb-4 text-sm sm:text-md">
            LearnSpace — це сучасна освітня платформа, створена для тих, хто хоче розвивати навички, здобувати нові знання та впевнено рухатися вперед.
          </p>
          <p className="text-[#576070] pb-6 text-sm sm:text-md">
            Ми поєднуємо зручний формат навчання, актуальні курси та підтримку на кожному етапі твого розвитку.
          </p>

          <ul className="flex flex-col gap-8 pb-10">
            <li className="flex gap-4 items-start">
              <div className="bg-gradient-to-br from-[#e8f2ff] to-[#f3f9ff] rounded-full w-[60px] h-[60px] flex justify-center items-center flex-shrink-0 shadow-sm border border-[#0b11c1] border-opacity-20 mt-1">
                <i className="bi bi-book-half text-[#0b11c1] text-2xl"></i>
              </div>
              <div className="flex flex-col justify-start">
                <h4 className="text-[#222e48] font-semibold text-lg sora-font">
                  Наша Мета
                </h4>
                <p className="text-neutral-500 text-sm lg:text-md mt-1">
                  Ми прагнемо зробити якісну освіту доступною та зрозумілою.
                </p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <div className="bg-gradient-to-br from-[#e8f2ff] to-[#f3f9ff] rounded-full w-[60px] h-[60px] flex justify-center items-center flex-shrink-0 shadow-sm border border-[#0b11c1] border-opacity-20 mt-1">
                <i className="bi bi-rocket-takeoff text-[#0b11c1] text-2xl"></i>
              </div>
              <div className="flex flex-col justify-start">
                <h4 className="text-[#222e48] font-semibold text-lg sora-font">
                  Наша Місія
                </h4>
                <p className="text-neutral-500 text-sm lg:text-md mt-1">
                  LearnSpace допомагає людям навчатися у власному темпі, розвивати практичні навички та досягати цілей.
                </p>
              </div>
            </li>
          </ul>

          <div className="border-t-2 border-dotted border-[#c1c4cc] pt-5 flex items-center gap-8">
            <a
              href="/courses"
              className="btn custom-btn bg-[#0b11c1] hover:bg-black text-white px-5 py-3 rounded-full w-fit text-sm cursor-pointer transition-colors duration-300 inline-flex items-center"
            >
              Розпочати навчання
              <i className="bi bi-arrow-up-right ps-2"></i>
            </a>
          </div>
        </div>
        <div className="about-image w-full lg:w-1/2 h-[320px] overflow-hidden group rounded-lg z-2 shadow-lg">
          <img
            src={laptopImage}
            alt="laptop-learnspace"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <img
          src={element1}
          alt="shape-image"
          className="element1 about-shape1 absolute left-10 top-30 object-contain sm:block hidden"
        />
        <img
          src={element6}
          alt="shape-image"
          className="element5 about-shape7 absolute right-10 bottom-10 object-contain lg:block hidden"
        />
        <img
          src={element5}
          alt="shape-image"
          className="element5 about-shape6 absolute left-10 bottom-50 w-[25px] h-[25px] sm:block hidden"
        />
        <img
          src={element5}
          alt="shape-image"
          className="element5 about-shape5 absolute right-30 top-70 w-[20px] h-[20px] sm:block hidden"
        />
      </div>
      {/* Features */}
      <div className="feature flex justify-center items-center flex-col gap-10 px-[2%] lg:px[12%] sm:px-[8%] py-[90px] lg:py-[120px] relative">
        <div className="feature-content z-2 flex flex-col text-center w-full lg:w-[60%] xl:w-[50%]">
          <h2 className="text-[#222e48] text-2xl sm:text-3xl md:text-4xl md:leading-10 sora-font font-semibold">
            Каталог онлайн-курсів для навчання
          </h2>
          <p className="text-[#576070] pt-3 pb-8 text-sm sm:text-md">
            Досліджуй різноманітні напрями навчання та отримуй знання у зручному форматі — будь-коли і будь-де.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          breakpoints={{
            1399: {
              slidesPerView: 3,
            },
            1199: {
              slidesPerView: 2.5,
            },
            767: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
          className="feature-wrapper w-full"
        >
          <SwiperSlide>
            <div className="feature-item hover:bg-[#006dca] group flex justify-center items-start flex-col bg-white shadow-xl rounded-xl py-10 px-5 transition-all duration-300">
              <div className="feature-icon w-fit bg-white rounded-[50%] p-5">
                <i className="bi bi-laptop text-[#0b11c1] text-3xl"></i>
              </div>
              <div className="feature-info pt-8">
                <h4 className="text-[#222e48] sora-font pb-2 text-xl font-semibold group-hover:text-white">
                  Програмування та IT
                </h4>
                <p className="text-[#576070] text-sm group-hover:text-white">
                  Курси з веб-розробки, програмування, аналітики даних та сучасних IT-технологій.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="feature-item hover:bg-[#006dca] group flex justify-center items-start flex-col bg-white shadow-xl rounded-xl py-10 px-5 transition-all duration-300">
              <div className="feature-icon w-fit bg-white rounded-[50%] p-5">
                <i className="bi bi-palette text-[#0b11c1] text-3xl"></i>
              </div>
              <div className="feature-info pt-8">
                <h4 className="text-[#222e48] sora-font pb-2 text-xl font-semibold group-hover:text-white">
                  Дизайн та креатив
                </h4>
                <p className="text-[#576070] text-sm group-hover:text-white">
                  Навчання графічному дизайну, UI/UX, цифровому мистецтву та візуальним рішенням.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="feature-item hover:bg-[#006dca] group flex justify-center items-start flex-col bg-white shadow-xl rounded-xl py-10 px-5 transition-all duration-300">
              <div className="feature-icon w-fit bg-white rounded-[50%] p-5">
                <i className="bi bi-briefcase text-[#0b11c1] text-3xl"></i>
              </div>
              <div className="feature-info pt-8">
                <h4 className="text-[#222e48] sora-font pb-2 text-xl font-semibold group-hover:text-white">
                  Бізнес та кар'єра
                </h4>
                <p className="text-[#576070] text-sm group-hover:text-white">
                  Курси з менеджменту, маркетингу, комунікацій та розвитку професійних навичок.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="feature-item hover:bg-[#006dca] group flex justify-center items-start flex-col bg-white shadow-xl rounded-xl py-10 px-5 transition-all duration-300">
              <div className="feature-icon w-fit bg-white rounded-[50%] p-5">
                <img src={featureicon3} alt="feature-icon" />
              </div>
              <div className="feature-info pt-8">
                <h4 className="text-[#222e48] sora-font pb-2 text-xl font-semibold group-hover:text-white">
                  Health & Fitness
                </h4>
                <p className="text-[#576070] text-sm group-hover:text-white">
                  Courses On nutrition, fitness, traning, yoga, meditation...youga to sent...
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <img
          src={element3}
          alt="shape"
          className="element3 hero-shape3 absolute right-96 bottom-10 z-2 object-contain hidden lg:block"
        />
        <img
          src={element5}
          alt="shape"
          className="element5 hero-shape3 absolute right-30 top-70 w-[20px] h-[20px] object-contain hidden sm:flex"
        />
        <img
          src={element5}
          alt="shape"
          className="element5 hero-shape3 absolute left-10 bottom-50 w-[25px] h-[25px] object-contain hidden sm:flex"
        />
        <img
          src={element6}
          alt="shape"
          className="element5 hero-shape3 absolute right-70 top-20  object-contain hidden lg:flex"
        />
      </div>
      {/* Our Achivements */}
      <div className="our-achievements grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8 px-[2%] lg:px[12%] sm:px-[90px] lg:py-[120px] relative">
        <div className="achievements-item z-2 h-[250px] flex justify-center items-center flex-col p-5 text-center w-full bg-[#fce8e1] border border-[#ebecef] rounded-2xl">
          <div className="achievements-icon text-[#e75480] bg-white w-[70px] min-h-[70px] flex justify-center items-center rounded-[50%] mx-auto text-3xl p-1 mb-8 shadow-lg">
            <i className="bi bi-journal-text"></i>
          </div>
          <div className="achievements-info">
            <h2 className="text-[#222e48] text-3xl font-bold sora-font uppercase">
              3 тис.
            </h2>
            <span className="text-[#404a60] text-sm lg:text-md">
              Успішно пройдених навчань
            </span>
          </div>
        </div>

        <div className="achievements-item z-2 h-[250px] flex justify-center items-center flex-col p-5 text-center w-full bg-[#f1f6fd] border border-[#ebecef] rounded-2xl">
          <div className="achievements-icon text-[#006dca] bg-white w-[70px] min-h-[70px] flex justify-center items-center rounded-[50%] mx-auto text-3xl p-1 mb-8 shadow-lg">
            <i className="bi bi-camera-video"></i>
          </div>
          <div className="achievements-info">
            <h2 className="text-[#222e48] text-3xl font-bold sora-font uppercase">
              5 тис.
            </h2>
            <span className="text-[#404a60] text-sm lg:text-md">
              Курсів розроблено
            </span>
          </div>
        </div>

        <div className="achievements-item z-2 h-[250px] flex justify-center items-center flex-col p-5 text-center w-full bg-[#fce8e1] border border-[#ebecef] rounded-2xl">
          <div className="achievements-icon text-[#e75480] bg-white w-[70px] min-h-[70px] flex justify-center items-center rounded-[50%] mx-auto text-3xl p-1 mb-8 shadow-lg">
            <i className="bi bi-people-fill"></i>
          </div>
          <div className="achievements-info">
            <h2 className="text-[#222e48] text-3xl font-bold sora-font uppercase">
              2.5 тис.
            </h2>
            <span className="text-[#404a60] text-sm lg:text-md">
              Понад 1 тис. менторів
            </span>
          </div>
        </div>

        <div className="achievements-item z-2 h-[250px] flex justify-center items-center flex-col p-5 text-center w-full bg-[#f1f6fd] border border-[#ebecef] rounded-2xl">
          <div className="achievements-icon text-[#006dca] bg-white w-[70px] min-h-[70px] flex justify-center items-center rounded-[50%] mx-auto text-3xl p-1 mb-8 shadow-lg">
            <i className="bi bi-person"></i>
          </div>
          <div className="achievements-info">
            <h2 className="text-[#222e48] text-3xl font-bold sora-font uppercase">
              10 тис.
            </h2>
            <span className="text-[#404a60] text-sm lg:text-md">
              Студентів
            </span>
          </div>
        </div>

        <img
          src={element5}
          alt="shape-image"
          className="element-5 hero-shape5 absolute right-30 top-70 w-[20px] h-[20px] hidden sm:flex"
        />
      </div>
      {/* Courses  */}
      <div className="courses px-[2%] lg:px-[12%] sm:px-[8%] py-[90px] lg:py-[150px] bg-white relative">
        <div className="flex justify-between items-center flex-col lg:flex-row w-full gap-3">
          <h2 className="text-[#222e48] text-2xl sm:text-3xl md:text-4xl font-medium lg:w-1/2">
            Що ми пропонуємо
          </h2>
          <div className="lg:w-1/2 w-full">
            <Link to="/Courses">
              <button className="bg-[#0b11c1] hover:bg-white hover:border-2 hover:border-[#076dcd] hover:scale-110 hover:text-[#076dcd] text-white px-5 py-3 rounded-full text-sm transition-all duration-300">
                Переглянути всі курси <i className="bi bi-arrow-up-right ps-2"></i>
              </button>
            </Link>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 my-8 bg-white p-5 rounded-xl shadow-xl">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-3 rounded-full text-sm font-medium transition cursor-pointer shadow-md ${
                activeCategory === category
                  ? "bg-[#0b11c1] text-white"
                  : "bg-[#f3f9ff] text-[#404a60]"
              }`}
            >
              {categoryTranslations[category]}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.length > 0 ? (
            courses.map((course) => {
              const courseImages = {
                "Digital Marketing Fundamentals": "/Images/Digital Marketing Fundamentals.webp",
                "SEO Mastery Course": "https://techwalksol.com/wp-content/uploads/2025/02/what-is-seo-e1722370603532.webp",
                "Social Media Marketing Strategy": "https://images.unsplash.com/photo-1683721003111-070bcc053d8b?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "Google Ads & PPC Training": "https://aclm.in/wp-content/uploads/2021/09/Ads.png",
                "Content Marketing & Blogging": "https://hoffmannmurtaugh.com/wp-content/uploads/2022/04/content-marketing.jpeg",
                "Introduction to Digital Marketing": "https://web-promo.ua/wp-content/uploads/2024/10/graph-growth-development-improvement-profit-success-concept_53876-124848-1024x683.jpg",
                "Business Communication Skills": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
                "Research & Writing Skills": "https://media.licdn.com/dms/image/v2/D4E12AQE8B_BGn-Bqeg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1709901302504?e=2147483647&v=beta&t=GmC0MGCEHB-HLi9bwKUIl-bL_UkzKwXUbBJQsGpLGtU",
                "Critical Thinking & Problem Solving": "https://media.licdn.com/dms/image/v2/C5612AQE_IeTPP_6hpQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1625412825048?e=2147483647&v=beta&t=RI2HbgGtNsdmZXqmtInkqChoZySU--e2yv8kJVnyfgI",
                "Public Speaking & Presentation": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
                "HTML & CSS Crash Course": "https://img.freepik.com/free-photo/programming-background-collage_23-2149901782.jpg?semt=ais_hybrid&w=740&q=80",
                "Responsive Web Design": "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
                "JavaScript for Web Designers": "https://myaolcc.com/wp-content/uploads/2017/05/javascript-web-design-courses-1.jpg",
                "UI/UX Design Basics": "https://motiongility.com/wp-content/uploads/2025/06/Core-Principles-Every-UI-UX-Designer.png",
                "Web Accessibility & Standards": "https://www.skynettechnologies.com/sites/default/files/styles/blog_details/public/2023-07/International-Web-Accessibility-Standards.jpg?itok=luqGZ_r0",
                "Introduction to Python Programming": "https://campus.w3schools.com/cdn/shop/files/Python_d3889400-7dfd-4be0-b42e-be4b186555a3_700x700.png?v=1764577019",
                "Java for Beginners": "https://play-lh.googleusercontent.com/SgtwFP0aKkyEdyrm8gdTl-4utcnyC_Zvd3ubsJVjL6-vexUCI7PxnNdB18tYGeXviHE",
                "C++ Programming Essentials": "https://play-lh.googleusercontent.com/K-GWbooc9bRDmf7KkVFn5aPOWq5cI9XZ-rMhrl0aIgBcbq00aMiU07G7xXWRfvG7ROw",
                "JavaScript Full Course": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZR9npLfmApWYC0keCwuwCDzeini7NocCW8w&s",
                "Data Structures & Algorithms": "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fthepracticaldev.s3.amazonaws.com%2Fi%2Fsrnvrd7vfeeq5qpxnabq.png",
                "Introduction to Photography Masterclass": "https://media.greatbigphotographyworld.com/wp-content/uploads/2022/04/hand-camera-Photography-Terms.jpg",
                "Graphic Design Fundamentals": "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
                "Adobe Photoshop Mastery": "https://toolveda.com/wp-content/uploads/2025/11/Photoshop-Mastery-2.jpg",
                "Illustrator & Logo Design": "https://nvina.com/files/2019/01/Owl-Logo-Design-Tutorial-in-Adobe-Illustrator.jpg",
                "3D Modeling for Beginners": "https://cdn-wordpress-info.futurelearn.com/wp-content/uploads/FL_3D_Modelling_Blog_Header_1500x750.jpg.optimal.jpg"
              };

              return (
              <div
                key={course.title}
                className="bg-[#e8f0f8] p-8 rounded-3xl group hover:shadow-lg transition relative min-h-[400px] flex flex-col justify-between hover:scale-105 hover:-translate-y-2"
              >
                <div className="mb-6 rounded-2xl overflow-hidden h-[200px]">
                  <img 
                    src={courseImages[course.title]} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
                
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-[#222e48] font-bold text-xl hover:text-[#006dca] transition-colors duration-500 flex-1">
                      {course.title}
                    </h4>
                    <span className="bg-white text-[#404a60] px-4 py-2 rounded-full text-sm font-medium ml-4 whitespace-nowrap">
                      {course.price === 0 ? "Безкоштовно" : `$${course.price}`}
                    </span>
                  </div>

                  <div className="mb-6">
                    <p className="text-[#404a60] text-base font-medium">
                      <i className="bi bi-bar-chart pe-2"></i>
                      {course.level}
                    </p>
                  </div>
                </div>

                <button
                  className="text-[#076dcd] hover:text-white hover:bg-[#076dcd] font-medium cursor-pointer px-5 py-3 rounded-full w-fit text-sm transition-all duration-300 border border-[#076dcd]"
                  type="button"
                >
                  Зареєструватися зараз{" "}
                  <i className="bi bi-arrow-up-right ps-2"></i>
                </button>
              </div>
              );
            })
          ) : (
            <p className="col-span-full text-center text-gray-600">
              No course available
            </p>
          )}
        </div>

        <img
          src={element1}
          alt="shape-image"
          className="element1 hero-shape1 absolute left-30 top-30 object-contain hidden lg:block"
        />
        <img
          src={element2}
          alt="shape-image"
          className="element2 hero-shape2 absolute left-20 top-60 object-contain hidden lg:block"
        />
        <img
          src={element3}
          alt="shape-image"
          className="element3 hero-shape3 absolute right-96 bottom-10 z-2 object-contain hidden lg:block"
        />
        <img
          src={element4}
          alt="shape-image"
          className="element3 hero-shape4 absolute right-40 bottom-50 z-2 object-contain hidden lg:block"
        />
        <img
          src={element5}
          alt="shape-image"
          className="element5 hero-shape5 absolute right-30 top-70 w-[25px] h-[25px] object-contain hidden sm:flex"
        />
        <img
          src={element5}
          alt="shape-image"
          className="element5 hero-shape6 absolute left-10 bottom-50 w-[25px] h-[25px] object-contain hidden sm:flex"
        />
        <img
          src={element6}
          alt="shape-image"
          className="element5 hero-shape7 absolute right-50 top-20 hidden lg:flex"
        />
      </div>

    </>
  );
};

export default Index;
