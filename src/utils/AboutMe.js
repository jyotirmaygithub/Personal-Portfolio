import React from "react";
import Footer from "../Layout/Footer";

export default function AboutMe() {
  return (
    <>
      <div>
        <div className="m-5 mt-20 flex flex-col items-start space-y-5 md:mt-32 md:space-y-7 md:px-5 lg:mt-32">
          <h1 className="text-4xl font-semibold">
            Hey, I'm Jyotirmay Gupta. <br />{" "}
          </h1>
          <h2 className="text-3xl">
            I specialize in creating websites with sleek, responsive design and
            seamless accessibility for all users{" "}
          </h2>
          <p className="text-xl">
            I am a dynamic Full Stack Web Developer and dedicated open-source
            contributor, embodying the essence of versatility and proficiency as
            a tech enthusiast <br /> Find me on{" "}
            <a
              href="https://github.com/jyotirmaygithub"
              target="_blank"
              rel="noopener noreferrer"
              className="underline bg-green-200"
            >
              GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://www.linkedin.com/in/jyotirmay-gupta/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline bg-blue-200"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>
        <div className="flex w-full items-center md:flex-row md:justify-start md:space-x-5 md:space-y-0">
          <a
            href="#projects"
            className="border border-gray-200 text-zinc-900 px-6 py-2 rounded-full ms-3 hover:bg-black hover:text-white"
          >
            Projects
          </a>
        </div>
      </div>
    </>
  );
}
