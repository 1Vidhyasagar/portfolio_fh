import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import "animate.css";


const Connect = () => {

  const links=[
    {
        id:1,
        child:(
    <>
    <FaLinkedin size={45}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LinkedIn
    </>
        ),
        href: 'https://www.linkedin.com/in/vidhyasagar-myana-530a08236/',
        style:'round-tr-md'
    },
    {
        id:2,
        child:(
    <>
    <FaGithub size={45}/> GitHub
    </>
        ),
        href: 'https://github.com/1Vidhyasagar',
    },
    {
        id:3,
        child:(
    <>
    <HiOutlineMail size={45}/>Mail
    </>
        ),
        href: 'mailto:vidhyasagarmyana9598@gmail.com',
    }
  ]

  return (
    <div className="animate__animated animate__zoomIn animate__delay-1s Right md:flex-col top-[35%] right-0 px-auto fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          // eslint-disable-next-line no-useless-concat
          <li
            key={id}
            className={
              "flex justify-between items-center w-15 h-16 px-3 mr-[-100px] hover:mr-[-10px] hover:text-blue-600 font-bold hover:rounded-md duration-500  " +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-gray-800"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Connect

