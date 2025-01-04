import React from "react";
import fb from "../assets/fb.png";
import linkdin from "../assets/in.png";
import git from "../assets/git.png";
import my from "../assets/my1.png";
import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <>
      <div className="text-white mt-16 lg:w-4/5 w-11/12 mx-auto  md:h-[calc(100vh-4rem)] xl:h-[700px] flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="w-11/12  lg:w-1/2">
          <h1 className="text-4xl font-bold">Hi, I'm Eftakharul Islam</h1>
          <p className="mt-4">
            I am a{" "}
            <span className="text-lg text-orange-700 font-bold">
              Frontend Developer{" "}
            </span>
            with a passion for web development. I am Passionate programmer and
            web development enthusiast with a love for challenges, continuous
            learning, and creativity.
          </p>
          <div className="flex gap-4 mt-4">
            <Link target="_blank" to="https://github.com/eftakhar-491">
              <div className="active:scale-95 w-9 cursor-pointer hover:bg-orange-700 bg-white rounded-full">
                <img className="w-full scale-[1.14]" src={git} alt="" />
              </div>
            </Link>
            <Link
              target="_blank"
              to="https://www.facebook.com/eftakhar.islam.56829/"
            >
              <img
                className="active:scale-95 hover:bg-orange-700 w-9 cursor-pointer bg-white rounded-full"
                src={fb}
                alt=""
              />
            </Link>
            <Link target="_blank" to="https://www.linkedin.com/in/eftakhar491/">
              <img
                className="active:scale-95 hover:bg-orange-700 cursor-pointer w-9 bg-white rounded-full"
                src={linkdin}
                alt=""
              />
            </Link>
          </div>
          <Link
            target="_blank"
            to="https://drive.google.com/file/d/1-mTRnkxSlMIqDmQJ8bugCTJ2I-M8kj_f/view?usp=sharing"
          >
            <button className="mb-5 active:scale-95 hover:bg-orange-700/70 border px-4  py-1 rounded-lg mt-5">
              Download Resume
            </button>
          </Link>
        </div>

        <div className="flex justify-center items-center h-[400px] md:h-full w-11/12 md:w-1/2 flex-shrink-0 ">
          <div className="w-[260px] min-w-[350px] z-[-10] h-screen xl:h-[766px] absolute right-[10%] top-0 bg-orange-700 hidden lg:block"></div>
          <img
            className="rounded-full bg-orange-700 lg:bg-transparent lg:rounded-none md:w-full h-[400px] mx-auto lg:h-full md:min-w-[350px]"
            src={my}
            alt=""
          />
        </div>
      </div>
    </>
  );
}
