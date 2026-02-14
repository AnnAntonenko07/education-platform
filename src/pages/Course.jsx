import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import element1 from "../../public/Images/element-01.png";
import element2 from "../../public/Images/element-02.png";
import element3 from "../../public/Images/element-03.png";
import element4 from "../../public/Images/element-04.png";
import element5 from "../../public/Images/element-05.png";
import element6 from "../../public/Images/element-06.png";

import { Link } from "react-router-dom";
import { faHome } from "@fortawesome/free-regular-svg-icons";

import CoursesData from "../CoursesData.json";

const Course = () => {
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
  const [sortBy, setSortBy] = useState("Newest");

  const getCourses = () => {
    let selectedCourses = [];
    if (activeCategory === "All") {
      return Object.keys(CoursesData.Courses).flatMap((cat) => {
        if (cat === "Marketing") return CoursesData.Courses[cat].slice(0, 2);
        return CoursesData.Courses[cat].slice(0, 1);
      });
    } else {
      selectedCourses = CoursesData.Courses[activeCategory] || [];
    }

    switch (sortBy) {
      case "Oldest":
        return [...selectedCourses].reverse();
      case "PriceLowHigh":
        return [...selectedCourses].sort((a, b) => a.price - b.price);
      case "PriceHighLow":
        return [...selectedCourses].sort((a, b) => b.price - a.price);
      default:
        return selectedCourses;
    }
  };

  const courses = getCourses();

  const totalCourse = Object.values(CoursesData.Courses).flat().length;

  return (
    <>
    

    
      {/* Courses  */}
      <div className=" px-[2%] lg:px-[12%] sm:px-[8%] py-[90px] lg:py-[150px] bg-[#f3f9ff] relative">
        <div className="flex justify-between items-center flex-wrap gap-3 mb-6 cursor-pointer">
          <p className="text-gray-600">
           Показано{" "}
            <span className="font-semibold text-[#0b11c1]">
              {courses.length}
            </span>{" "}
             з {""}{" "}
            <span className="font-semibold text-[#f991d1]">{totalCourse}</span>{" "}
            результатів
          </p>
          <div className="cursor-pointer">
            <label htmlFor="" className="mr-2 text-gray-600">
             Сортувати за:
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 appearance-none outline-none bg-[#f3f9ff] rounded-full text-sm cursor-pointer border border-[#ebecef] shadow-lg"
            >
              <option value="Newest">Найновіші</option>
              <option value="Oldest">Найстаріші</option>
              <option value="PriceLowHigh">Ціна: від низької до високої</option>
              <option value="PriceHighLow">Ціна: від високої до низької</option>
            </select>
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

export default Course;
