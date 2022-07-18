import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="w-full h-screen mt-40 text-white"
      data-aos="zoom-in"
      data-aos-easing="ease-in-out"
      data-aos-duration="1000"
    >
      <div className="max-w-screen-lg p-6 flex flex-col mx-auto justify-center w-full ">
        <div className="pb-5">
          <p className="text-5xl text-center text-[#4ADE80] font-bold border-b-4 border-[#1E293B]">
            About
          </p>
        </div>

        <p className="text-xl mt-10">
          Who Am I? I am a Web Developer from India. I have spent the last 4
          years in a PSU working as a Network and System Administrator. I have
          always had a knack for technology and working with computer programs.
          In 2020 during the pandemic, I started working with WordPress to build
          a blogging site. Then I started doing some minor edits in HTML & CSS
          to make my WordPress site work.
        </p>
        <br />
        <p className="text-xl mt-2 ">
          What I thought was just a few minor edits turned into a love for
          programming. Fascinated with how intricate programming can be I was
          quickly drawn to learn more. I started learning javascript and was
          even more enthused with making websites interactive. I am now spending
          my time learning Javascript and building projects with React Js, Next
          Js and Firebase, and learning new technologies.
        </p>
      </div>
    </div>
  );
};

export default About;
