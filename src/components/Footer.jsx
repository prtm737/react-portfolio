import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center items-center font-semibold p-6 text-white ">
      <h3>
        Made with ❤ by&nbsp;
        <a
          className="text-[#4ADE80] hover:text-green-600"
          href="https://twitter.com/itsprtm"
          target="_blank"
          rel="noreferrer"
        >
          Pritom
        </a>
      </h3>
    </div>
  );
};

export default Footer;
