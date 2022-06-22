import React from 'react'
import Quotes from "../images/Quotes.png";
import Pass from "../images/random-pass.png";
import Todo from "../images/todo.png";
import Weather from "../images/weather.png";

const Portfolio = () => {
  return (
    <div name="Portfolio" className="w-full md:h-screen text-white">
            <div className="max-w-screen-lg p-6 flex flex-col mx-auto justify-center w-full ">
              <div className='pb-8'>
                  <p className='text-5xl text-center text-[#4ADE80] font-bold border-b-4 border-[#1E293B]'>Portfolio</p>
                  <p className='py-6 text-xl text-center'>Some of my Works</p>
              </div>
              <div className='grid md:grid-cols-2 gap-10 px-14'>
                  <div className='shadow-2xl shadow-[#1E293B] rounded-xl'>
                      <img src={Quotes} alt="" className='rounded-xl duration-200 hover:scale-105' />
                      <div className='flex justify-center items-center'>
                          <button className='px-6 py-3 m-4 duration-200 hover:scale-105 font-bold text'>Demo</button>
                      </div>
                  </div>
                 
                  <div className='shadow-2xl shadow-[#1E293B] rounded-xl'>
                      <img src={Pass} alt="" className='rounded-xl duration-200 hover:scale-105' />
                      <div className='flex justify-center items-center'>
                          <button className='px-6 py-3 m-4 duration-200 hover:scale-105 font-bold text'>Demo</button>
                      </div>
                  </div>
                  
                  <div className='shadow-2xl shadow-[#1E293B] rounded-xl'>
                      <img src={Todo} alt="" className='rounded-xl duration-200 hover:scale-105' />
                      <div className='flex justify-center items-center'>
                          <button className='px-6 py-3 m-4 duration-200 hover:scale-105 font-bold text'>Demo</button>
                      </div>
                  </div>
                  
                  <div className='shadow-2xl shadow-[#1E293B] rounded-xl'>
                      <img src={Weather} alt="" className='rounded-xl duration-200 hover:scale-105' />
                      <div className='flex justify-center items-center'>
                          <button className='px-6 py-3 m-4 duration-200 hover:scale-105 font-bold text'>Demo</button>
                      </div>
                  </div>
                  
              </div>
            </div>
    </div>
  )
}

export default Portfolio
