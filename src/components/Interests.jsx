import React from 'react'

const Interests = () => {
  return (
    <div
      name="Interests"
      className="bg-cover text-center sm:text-left w-full h-screen bg-[url('./downloads/bgv.gif')] text-white "
    >
      <div className="wow animate__animated animate__zoomIn animate__delay-0.7s max-w-screen-lg p-4 pl-8 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-5">
          <p className="text-2xl font-bold"> Achievements</p>
        </div>
        <div>
          <ul className="pl-4 list-disc p-auto">
            Guvi JavaScript{" "}
            <a
              href="https://www.guvi.in/verify-certificate?id=3Yl42qi27wc6160d6A&course=javascript_en"
              target="_blank"
              rel="noreferrer"
              className="text-decoration-line: underline hover:text-black      "
            >
              Certificate link
            </a>
          </ul>
        </div>
        <div className="pt-10 pb-4">
          <p className="text-2xl font-bold">Interests</p>
        </div>
        <div>
          <ul className="pl-4 list-disc p-auto ">
            Art
            <br />
            Travelling <br />
            Learning new languages
            <br />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Interests
