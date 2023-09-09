import React from 'react'
import { useTheme } from "../ThemeContext";



const Contact = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      name="Contact"
      className={`text-center sm:text-left w-full h-screen bg-gray-100 p-10
      ${
        isDarkMode
          ? "bg-gray-100 text-gray-800"
          : " bg-gray-800 text-gray-200"
      }`}
    >
      <div className=" flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="  wow animate__animated animate__fadeInLeft animate__delay-0.7s pl-4">
          <p className="text-2xl  font-bold mt-2">Contact</p>

          <p>
            <a
              className="text-sm font-medium  pl-4    
             "
              href="tel:+919822074397"
            >
              Call me at &nbsp;<span>&#9990;</span>
              &nbsp;+91 9822074397 or
            </a>
          </p>
          <p className="text-sm ml-4 font-medium">
            Kindly fill below and contact me
          </p>
        </div>
        <div
          className="flex md:mx-64  justify-center  items-center  bg-gray-500 rounded-2xl "
          style={{ height: "300px" }}
        >
          <form
            action="https://getform.io/f/5375b9de-f060-4863-8ebd-795c95998635"
            method="post"
            className=" flex flex-col  md:w-4/6  h-3/4"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="  text-sm bg-gray-100  rounded-sm text-center align:center text-gray-900 focus:outline-none mb-3 h-16"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className=" text-sm bg-gray-100 rounded-sm text-center align:center text-gray-900 focus:outline-none mb-3 h-16 "
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="7"
              className="mb-3   p-2 text-sm bg-gray-100  rounded-sm text-center align:center text-gray-900 focus:outline-none"
            ></textarea>
            <button className="text-white bg-slate-800 px-4  my-2 mx-auto flex items-center rounded-md hover:scale-110 py-1 hover:bg-slate-900 duration-300">
              Submit
            </button>
          </form>
        </div>
      </div>
      <footer className="border-t border-t-gray-500 text-xs w-full bg  pt-2  ">
        <div className="wow animate__animated animate__fadeInRight animate__delay-0.7s container mx-auto flex justify-between font-medium">
          <p>copyright &copy; 2023 | Vidhyasagar Myana. All rights reserved</p>
          <p>India</p>
        </div>
      </footer>
    </div>
  );
}

export default Contact