import React from "react";
import MyPhoto from "../downloads/about.gif";
import { MdPictureAsPdf } from "react-icons/md";
import { useTheme } from "../ThemeContext";


const About = () => {
  const handleDownloadClick = () => {
    const resumeLink =
      "https://drive.google.com/file/d/1idfgDAxLorTp0Bx9emr6wuA4YWAKOf0G/view?usp=share_link";
    

    // Extract the file ID from the Google Drive URL
    const fileID = resumeLink.match(/[-\w]{25,}/);

    // Construct the download URL
    const downloadURL = `https://drive.google.com/uc?export=download&id=${fileID[0]}`;

    // Create an anchor element
    const downloadLink = document.createElement("a");
    downloadLink.href = downloadURL;
    downloadLink.download = "Vidhyasagar_Resume.pdf"; // Specify the desired filename
    downloadLink.click();
  };
      const { isDarkMode } = useTheme();


  return (
    <div
      name="about"
      className={`text-center sm:text-left w-full h-screen text-black
      ${
        isDarkMode
          ? "bg-gray-200"
          : " bg-gray-500"
      }`}
    >
      <div className="max-w-screen-lg px-4 pl-8 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-5">
          <p className="text-2xl font-bold">About</p>
        </div>
        <div className="flex space-x-8">
          <div className="wow animate__animated animate__fadeInLeft animate__delay-0.7s text-justify font-medium text-black">
            <p>
              Being passionate about Computers and technology is the main reason
              for me to work in this field. I have an interest in designing and
              developing websites. I would like to work with an enthusiastic,
              passionate team and company for enhancing the organization's
              goals.
            </p>
            <br />

            <div className="">
              <p className="mb-2 font-medium  pt-7 max-w-md wow animate__animated animate__fadeInLeft animate__delay-0.5s">
                Here you can download my Resume
              </p>
              <button
                className="bg-cyan-500 shadow-2xl shadow-cyan-900 wow animate__animated animate__fadeInRightBig animate__delay-0.5s text-white w-5/12 px-3 py-1 flex items-center rounded-md bg-gradient-to-l from-gray-300 to-gray-900 cursor-pointer"
                onClick={handleDownloadClick}
              >
                <span className="hover:translate-x-6 duration-700 lg:ml-7">
                  Resume
                </span>
                <MdPictureAsPdf size={40} className="ml-7" />
              </button>
            </div>
          </div>
          <div className="wow animate__animated animate__fadeInRight animate__delay-0.7s ">
            <img
              src={MyPhoto}
              alt="developer gif"
              className="rounded-tl-3xl rounded-br-3xl shadow-xl shadow-gray-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
