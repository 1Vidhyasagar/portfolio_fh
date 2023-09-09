import React from "react";
import MyPhoto from "../downloads/mypic5.png";
import Mern from "../downloads/640px-MERN-logo.png";
import { useTheme } from "../ThemeContext"; // Import the useTheme hook

import "animate.css";

const Home = () => {
  const { isDarkMode } = useTheme(); // Access the theme mode

  return (
    <div
      name="home"
      className={`place-content-center h-screen w-full px-5 ${
        isDarkMode
          ? "bg-gradient-to-bl from-gray-100 via-gray-500 to-gray-800"
          : "bg-gradient-to-bl from-gray-300 via-gray-900 to-black"
      } text-white text-left`}
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 pl-8 md:flex-row overflow-hidden">
        <div className="flex mt-4 flex-col justify-center h-full">
          <h3
            className={`lg:mt-0 md:-mt-96 font-bold sm:text-2xl mt-10 ${
              isDarkMode ? "text-white" : "text-white"
            }`}
          >
            Hi' &nbsp; There <br />I am a&nbsp; full Stack Developer
          </h3>
          <p
            className={`font-medium ${
              isDarkMode ? "text-white" : "text-white"
            } pt-7 max-w-md wow animate__animated animate__fadeInLeft animate__delay-0.5s`}
          >
            Enthusiastic and adaptive in nature to work with MERN technology for
            developing web applications.
          </p>
          <div className="md:h-5/6 md:w-full p-7 px-auto md:pt-32 lg:mb-5 lg:h-1/6 lg:w-3/6 xl:h-4/6 xl:w-3/6">
            <img
              src={Mern}
              alt="my profile"
              className={`lg:-mt-16 ${isDarkMode ? "filter-invert" : ""}`}
            />
          </div>
        </div>
        <div
          className={`rounded-full bottom-0 shadow-xl w-7/12 md:h-5/6 md:w-full ${
            isDarkMode
              ? "bg-gray-700"
              : "bg-gradient-to-bl to-cyan-700 via-gray-800 from-gray-900"
          } md:mt-auto lg:mb-5 lg:h-4/6 lg:w-3/6 xl:h-4/6 xl:w-3/6 ${
            isDarkMode ? "text-white" : "text-white"
          } ${isDarkMode ? "filter-invert" : ""}`}
        >
          <img
            src={MyPhoto}
            alt="my profile"
            className="md:h-full md:mt-52 md:ml-20 lg:h-screen lg:-mt-16 right-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
