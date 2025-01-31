import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  const [m, setM] = useState(false);
  return (
    <>
      <nav className=" text-white z-50 py-4 fixed top-0  lg:w-4/5 w-11/12 left-1/2 -translate-x-1/2 bg-[#212428]/80">
        <div className=" flex justify-between items-center xl:max-w-[1400px] px-[5%] mx-auto">
          <div className="flex gap-2 cursor-pointer items-center">
            <div
              onClick={() => setM((p) => !p)}
              className="block md:hidden active:scale-95"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
            <Link to={"/"} className="text-lg md:text-2xl font-bold">
              Eftakhar.
            </Link>
          </div>
          <ul className="md:flex gap-4 hidden">
            <NavLink className={({ isActive }) => {}} to="/">
              <li>Home</li>
            </NavLink>
            <a href="/#about">
              <li>About</li>
            </a>
            <a href="/#contact">
              <li>Contact</li>
            </a>
          </ul>
          {m && (
            <ul className="backdrop-blur-sm absolute top-16 w-36 py-3 shadow-2xl rounded-lg border text-white  pl-5 md:hidden flex flex-col gap-2 z-50 ">
              <NavLink to="/">
                <li className="  ">Home</li>
              </NavLink>

              <a href="/#about">
                <li>About</li>
              </a>

              <a href="/#contact">
                <li>Contact</li>
              </a>
            </ul>
          )}
          <Link
            download={true}
            target="_blank"
            to="https://drive.google.com/file/d/1TjQ8dcd5N0FOChxJPeRaPemnRjsv73Fj/view?usp=sharing"
          >
            <button className="text-sm md:text-lg hover:backdrop-blur-3xl hover:bg-orange-700/80 active:scale-95 border px-4 py-1 rounded-lg">
              Download Resume
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
}
