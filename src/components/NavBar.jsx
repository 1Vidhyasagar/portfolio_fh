import React, {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import {Link} from "react-scroll";
import name from "../downloads/name.svg";
import { useTheme } from "../ThemeContext";
const NavBar = () => {

    const [nav, setNav] = useState(false);
     const { isDarkMode, toggleDarkMode } = useTheme();

    const links =[
        {
            id:1,
            link:'home'
        },
        {
            id:2,
            link:'about'
        },
        {
            id:3,
            link:'skills'
        },
        {
            id:4,
            link:'projects'
        },
        {
            id:5,
            link:'Interests'
        },
        {
            id:6,
            link:'Contact'
      }
    ]
    
     
  return (
    <div className={`flex justify-evenly items-center w-full h-14 font-bold text-sm  backdrop-filter backdrop-blur-lg fixed   ${
        isDarkMode
          ? "bg-gray-700 "
          : " bg-black "
      }`}>
      <div>
        <img className=" max-w-full max-h-full " src={name} alt="name gif" />
      </div>

      <ul className="invisible md:visible md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-5 cursor-pointer capitalize text-white hover:scale-125 duration-300"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={toggleDarkMode} className="bg-gray-300 rounded-full p-1  ">
        {isDarkMode ? "Dark." : "Light"}
      </button>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;