import React from "react";
import brewery from "../downloads/projects/brewery.png";
import covid from "../downloads/projects/covid.png";
import game from "../downloads/projects/game.png";
import movies from "../downloads/projects/movies.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef } from "react";
import { useTheme } from "../ThemeContext";


const Projects = () => {
       const { isDarkMode } = useTheme();

  const projects = [
    {
      id: 1,
      abc: "A website showing a comprehensive list of movies with detailed information, ratings and reviews.",
      title: "Box office",
      src: movies,
      href1: "https://movies-1list.netlify.app/",
      href2: "https://github.com/1Vidhyasagar/Day_25.-2-",
    },

    {
      id: 2,
      abc: "A website displaying Covid-19 case reports of various countries, created to provide real-time information.",
      title: "Covid Tracker",
      src: covid,
      href1: "https://covidtracker-world.netlify.app/",
      href2: "https://github.com/1Vidhyasagar/Day_25.-3-",
    },
    {
      id: 3,
      abc: "A website featuring four mini projects namely Fruits transfer, Nested Info, Infinite scroll, Hit game, Square splits",
      title: "Collection",
      src: game,
      href1: "https://amusing.netlify.app/",
      href2: "https://github.com/1Vidhyasagar/Amusing",
    },
    {
      id: 4,
      abc: "A user-friendly website showcasing a comprehensive list of breweries from API with information.",
      title: "Brewery List",
      src: brewery,
      href1: "https://breweries-shop.netlify.app/",
      href2: "https://github.com/1Vidhyasagar/shopbeer",
    },
  ];
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const interval = setInterval(() => {
      if (slider) {
        slider.slickNext();
      }
    }, 10000); // Change this value to set the autoplay interval

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      name="projects"
      className={`p-4 pt-14 text-center sm:text-left bg- bg-gray-300 h-full w-full 
      ${
        isDarkMode
          ? "bg-gray-100 text-gray-800"
          : " bg-gray-500 text-gray-200"
      }`}
    >
      <div className=" max-w-screen-lg  mx-auto flex flex-col justify-center w-full h-full   px-4 pl-8">
        <p className="text-2xl font-bold">Projects </p>

        <div className="wow animate__animated animate__fadeInLeft animate__delay-0.5s flex align-center ">
          <p className="text-sm pb-2 font-bold mx-auto">
            Explore my projects gallery, where a click is all it takes to
            discover!
          </p>
        </div>

        <div className="  lg: grid grid-cols-2 sm:grid-cols-3   gap-4 text-center sm:px-0 ">
          {projects.map(({ id, title, abc, src, href1, href2 }) => (
            <div
              key={id}
              className="   hover:bg-gray-900  bg-gray-800  rounded-lg"
            >
              <div>
                <p className="py-1 text-sky-400  text-sm  text-center w-full h-auto ">
                  Project : {title}
                </p>
                <div>
                  <p className="px-5 pb-1 text-justify p-  text-xs bg-gray text-gray-200">
                    {abc}
                  </p>
                </div>

                <img src={src} alt="" className="  w-10/12 h-24  mx-auto" />
                <div>
                  <a href={href1} target="_blank" rel="noreferrer">
                    <button className="text-white text-sm w-10/12 h-5 mt-1 items-center justify-center rounded-md mx-auto  bg-black hover:bg-cyan-700 cursor-pointer">
                      LIVE
                    </button>
                  </a>
                </div>

                <div>
                  <a href={href2} target="_blank" rel="noreferrer">
                    <button className=" text-white text-xs w-5/12 h-5 items-center justify-center rounded-md  bg-black   hover:bg-cyan-700 duration-500 cursor-pointer">
                      FRONTEND
                    </button>
                  </a>
                  <a href={href2} target="_blank" rel="noreferrer">
                    <button className="text-white text-xs w-5/12 h-5 items-center justify-center ml-3 rounded-md  bg-black   hover:bg-cyan-700 duration-500 cursor-pointer">
                      BACKEND
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-2 text-sm">
          <p>
            <b>Currently I am working on Projects namely</b>
          </p>
          <ul className="font-semibold  list-disc text-xs ">
            Movie ticket booking app/site &nbsp;&&nbsp; AWS polymer search clone
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
