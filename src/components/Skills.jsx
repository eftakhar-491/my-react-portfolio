import React from "react";
import Marquee from "react-fast-marquee";
import css from "../assets/skills/css.png";
import html from "../assets/skills/html.png";
import js from "../assets/skills/js.png";
import njs from "../assets/skills/njs.png";
import react from "../assets/skills/react.png";

import vs from "../assets/skills/vs.png";
import tail from "../assets/skills/tail.png";
import gpt from "../assets/skills/gpt.png";
import boots from "../assets/skills/boots.png";
import ex from "../assets/skills/ex.png";

import gitp from "../assets/skills/gitp.png";
import ts from "../assets/skills/ts.png";
import nx from "../assets/skills/nx.jpeg";

export default function Skills() {
  return (
    <>
      <section className="w-11/12 mx-auto lg:w-4/5 ">
        <div className="text-white mt-10 max-w-[1400px] mb-7 mx-auto">
          <h1 className="text-2xl font-bold text-center">Skills</h1>
        </div>
        <Marquee gradient={false} speed={40}>
          <div className="border-black border-l-4 border-r-4 rounded-lg pr-5 pl-5 flex mr-5 flex-col items-center">
            <h1 className="text-white">Profetional Skills</h1>
            <div className="flex gap-6  items-center overflow-hidden ">
              <img src={html} alt="html" title="HTML" />
              <img src={css} alt="css" title="CSS" />
              <img src={js} alt="javaScript" title="javaScript" />
              <img src={njs} alt="nodeJs" title="NodeJS" />
              <img
                className="animate-spin"
                src={react}
                alt="react"
                title="ReactJs"
              />
            </div>
          </div>
          <div className="mr-5 border-black border-l-4 border-r-4 pr-5 ml-5 rounded-lg pl-5 flex flex-col items-center">
            <h1 className="text-white">Frameworks & Tools</h1>
            <div className="flex gap-6  items-center overflow-hidden ">
              <img src={boots} alt="bootstrap" title="bootstrap" />
              <img src={tail} alt="tailwind" title="tailwindCss" />
              <img src={vs} alt="vsCode" title="Vs code" />
              <img src={gpt} alt="ChatGpt" title="ChatGpt" />
              <img src={ex} alt="ChatGpt" title="ChatGpt" />
            </div>
          </div>
          <div className="border-black border-l-4 border-r-4 pr-5 rounded-lg pl-5 ml-5 flex flex-col items-center">
            <h1 className="text-white">Basic Skills</h1>
            <div className="flex gap-6  items-center overflow-hidden ">
              <img
                className="w-9"
                src={ts}
                alt="typescript"
                title="typeScript"
              />
              <img className="w-9" src={nx} alt="nextJs" title="nextJs" />
              <img src={gitp} alt="css" title="CSS" />
            </div>
          </div>
        </Marquee>
      </section>
    </>
  );
}
