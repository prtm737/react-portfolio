import React from "react";

const About = () => {
  return (
    <div name="About" className="w-full h-screen text-white">
      <div className="max-w-screen-lg p-6 flex flex-col mx-auto justify-center w-full ">
        <div className="pb-5">
          <p className="text-5xl text-center text-[#4ADE80] font-bold border-b-4 border-[#1E293B]">
            About
          </p>
        </div>

        <p className="text-xl mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          exercitationem necessitatibus unde ipsum repudiandae aliquid facilis,
          obcaecati ullam error fuga quam iure soluta accusamus libero itaque
          eligendi. Inventore, similique harum. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Possimus repellendus reprehenderit.
        </p>
        <br />
        <p className="text-xl mt-2 ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui dicta
          ipsa neque, rerum voluptatibus dolorum provident vel quae perferendis
          eligendi iusto animi autem necessitatibus possimus amet beatae
          voluptatum quos optio? Lorem ipsum dolor sit, amet consectetur.
        </p>
      </div>
    </div>
  );
};

export default About;
