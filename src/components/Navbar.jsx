import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


export default function Navbar() {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto p-4">
      <h1 className="w-full text-3xl font-bold text-[#4ADE80]">PRTMTECHIE.</h1>
      <ul className="hidden md:flex">
        <li className="p-4 cursor-pointer hover:scale-105 duration-200 capitalize font-medium">
          Home
        </li>
        <li className="p-4 cursor-pointer hover:scale-105 duration-200 capitalize font-medium">
          About
        
        </li>
        <li className="p-4 cursor-pointer hover:scale-105 duration-200 capitalize font-medium">
          Portfolio
        </li>
        <li className="p-4 cursor-pointer hover:scale-105 duration-200 capitalize font-medium">
          Experiences
        </li>
        <li className="p-4 cursor-pointer hover:scale-105 duration-200 capitalize font-medium">
          Contact
        </li>
      </ul>
      <div onClick={handleNav} className=" cursor-pointer md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#0f172a] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#4ADE80] m-8">
          PRTMTECHIE.
        </h1>
        <ul className=" uppercase p-4">
          <li className="p-4 border-b border-b-gray-600">Home</li>
          <li className="p-4 border-b border-b-gray-600">About</li>
          <li className="p-4 border-b border-b-gray-600">Portfolio</li>
          <li className="p-4 border-b border-b-gray-600">Experiences</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
}
