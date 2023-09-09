import React from 'react';
import html from"../downloads/html.png"
import css from"../downloads/css.png"
import javascript from"../downloads/javascript.png"
import react from"../downloads/react.png"
import node from"../downloads/node.png"
import mongodb from"../downloads/mongodb.png"
import express from"../downloads/express.png"
import mysql from"../downloads/mysql.png"
import github from"../downloads/github.png"
import {faTools} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "../ThemeContext";


const Skills = () => { 
  
const { isDarkMode } = useTheme();

const tech=[
    {
        id:1,
        src:html, 
        title:'HTML',
        style:'shadow-orange-500'
    },
    {
        id:2,
        src:css,
        title:'CSS',
        style:'shadow-blue-400'
    },
    {
        id:3,
        src:javascript,
        title:'JavaScript',
        style:'shadow-yellow-500'
    },
    {
        id:4,
        src:react,
        title:'React.js',
        style:'shadow-green-300'
    },
    {
        id:5,
        src:node,
        title:'Node.js',
        style:'shadow-green-400'
    },
    {
        id:6,
        src:mongodb,
        title:'MongoDB',
        style:'shadow-green-500'
    },
    {
        id:7,
        src:mysql,
        title:'MySQL',
        style:'shadow-yellow-500'
    },
    {
        id:8,
        src:express,
        title:'Express.js',
        style:'shadow-sky-400'
    },
    {
        id:9,
        src:github,
        title:'GitHub',
        style:'shadow-gray-100'
    },
]

  return (
    <div
      name="skills"
      className={`text-center sm:text-left  w-full h-screen
      ${
        isDarkMode
          ? "bg-gray-100 text-black"
          : " bg-gradient-to-l from-gray-600 via-gray-800 to-black text-white"
      }`}
    >
      <div className="max-w-screen-lg px-4 pl-8 pt-10 mx-auto flex flex-col justify-center w-full h-full ">
        <p className="text-2xl font-bold inline">Skills</p>

        <div className="wow animate__animated animate__fadeInLeft animate__delay-0.7s">
          <p className="py-10  pb-2 pt-2 font-medium ">
            <FontAwesomeIcon icon={faTools} style={{ color: "#06b6d4" }} />
            &nbsp; These are my skills I am focusing on
          </p>
        </div>

        <div className=" w-full lg:pl-8 grid grid-cols-2 sm:grid-cols-3 gap-6 text-center sm:px-0">
          {tech.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`w-44 shadow-md hover:scale-105 duration-500  rounded-lg ${style}`}
            >
              <img src={src} alt="" className=" w-10 mx-auto" />
              <p className="mt-2 text-sm">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills