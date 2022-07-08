import React from "react";

const Contact = () => {
  return (
    <div name="Contact" className="w-full h-screen text-white mt-40">
      <div className="mt-20 max-w-screen-lg p-6 flex flex-col mx-auto justify-center w-full h-full ">
        <div className="pb-5">
          <p className="text-5xl text-center text-[#4ADE80] font-bold border-b-4 border-[#1E293B]">
            Contact
          </p>
          <p className="py-6 text-xl text-center">Feel free to contact me</p>
        </div>
        <div>
          <form
            action="https://getform.io/f/eadab2a6-2e07-49e6-a0a2-a6bda632334b"
            method="POST"
            className=" flex flex-col w-full "
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-black font-bold bg-[#4ADE80] px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
