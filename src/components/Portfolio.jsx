import React from "react";
import Quotes from "../images/Quotes.png";
import Pass from "../images/random-pass.png";
import Todo from "../images/todo.png";
import Weather from "../images/weather.png";
import { motion } from "framer-motion";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      src: Quotes,
      link: "https://random-quotes-generator-chi.vercel.app/",
    },
    {
      id: 2,
      src: Pass,
      link: "https://random-pass-generator-rho.vercel.app/",
    },
    {
      id: 3,
      src: Todo,
      link: "https://to-do-list-blush-alpha.vercel.app/",
    },
    {
      id: 4,
      src: Weather,
      link: "https://weather-app-omega-liart.vercel.app/",
    },
  ];
  return (
    <div name="Portfolio" className="w-full md:h-screen mt-40 text-white">
      <div className="max-w-screen-lg p-6 flex flex-col mx-auto justify-center w-full ">
        <div className="pb-8">
          <p className="text-5xl text-center text-[#4ADE80] font-bold border-b-4 border-[#1E293B]">
            Portfolio
          </p>
          <p className="py-6 text-xl text-center">Some of my Works</p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 px-14">
          {projects.map(({ id, src, link }) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="shadow-2xl shadow-[#1E293B] rounded-xl"
            >
              <img
                key={id}
                src={src}
                alt={src}
                className="rounded-xl duration-200 hover:scale-105"
              />
              <div className="flex justify-center items-center">
                <a href={link} target="_blank" rel="noreferrer">
                  <button className="px-6 py-3 m-4 duration-200 hover:scale-105 font-bold text">
                    Demo
                  </button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
