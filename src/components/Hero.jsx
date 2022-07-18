import React from "react";
import Typed from "react-typed";
import Heroimg from "../images/hero-img.png";

const Hero = () => {
  return (
    <>
      <div className="text-white" id="particles-js">
        <div
          className="max-w-screen-lg w-full h-screen mt-24 mx-auto flex justify-between text-left p-4 flex-col md:flex-row items-center md:mt-[-96px] md:p-0 "
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="p-3 md:flex-col ">
            <p className="text-[#38AFC7] font-bold md:text-lg ">
              Welcome to My world
            </p>
            <div className="md:flex-col">
              <h1 className="lg:text-7xl md:text-6xl text-5xl font-bold lg:py-4 ">
                I'm
              </h1>
              <Typed
                className="lg:text-5xl md:text-4xl text-3xl font-bold md:py-3 md:pb-5 text-[#4ADE80]  "
                strings={[
                  "Pritom Parashar",
                  "a Web Developer",
                  "a Content Creator",
                ]}
                typeSpeed={30}
                backSpeed={40}
                loop
              />
            </div>
            <p className="text-[#38AFC7] text-sm font-bold pt-2 md:text-lg">
              Hello! I'm Pritom.Web Developer from India.
              <br />
              Building Webistes,Learning new things & stay creative.
              <br /> I'm very excited to connect with you!
            </p>
            <button
              type="button"
              className=" border border-green-500 font-bold bg-[#4ADE80] text-black rounded-md px-4 py-3 mt-4 hover:scale-110 duration-300"
            >
              Download CV
            </button>
          </div>
          <img
            src={Heroimg}
            alt=""
            className="object-cover w-3/4 mx-auto md:w-1/3 mt-20  rounded-2xl shadow-2xl block md:mt-0"
            data-aos="fade-left"
            data-aos-duration="1000"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
