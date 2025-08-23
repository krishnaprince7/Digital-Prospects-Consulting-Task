import React from 'react';
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
 
    <div
      id='company'
      className="w-full min-h-screen pt-20 sm:pt-24 flex justify-center items-start bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/section-bg.png')",
      }}
    >
    
      <div className="w-full max-w-6xl rounded-xl mx-auto flex flex-col lg:flex-row items-stretch lg:items-center justify-between px-4 sm:px-6 py-8 sm:py-12 gap-8">
        
   
        <div className="flex-1 max-w-xl px-1">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">
            HIRE DEDICATED
          </h2>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#17243b] mb-4">
            DEVELOPERS
          </h1>
          <p className="text-base sm:text-lg font-medium text-gray-500 mb-2">
            Top 1% Pre-Vetted, In-House & Dedicated Software Programmers
          </p>
          <p className="text-gray-400 mb-6 sm:mb-8">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled
          </p>


          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button className="flex items-center justify-center gap-2 bg-[#fd7e80] text-white px-5 sm:px-6 py-3 rounded-md hover:bg-[#ff4651] font-bold transition duration-200">
              View More <MdOutlineArrowOutward />
            </button>
            <button className="flex items-center justify-center gap-2 border-2 border-green-500 text-green-600 px-5 sm:px-6 py-3 rounded-md hover:bg-green-50 font-bold transition duration-200">
              Get In Touch <MdOutlineArrowOutward />
            </button>
          </div>
        </div>

        <div className="flex-1 max-w-md w-full rounded-sm shadow-lg overflow-hidden">
   
          <div className="text-center bg-[#e6fff5] py-3 px-4">
            <h3 className="text-xl sm:text-2xl font-bold text-[#17243b] mb-1">
              Create Your Team
            </h3>
            <p className="text-xs sm:text-sm text-gray-400">
              Lorem Ipsum Is Simply Dummy Text Of The Printing
            </p>
          </div>

  
          <form className="space-y-4 p-4 sm:p-5 bg-[#FFFFFF]">
   
            <div className="flex flex-col sm:flex-row sm:space-x-4 gap-4 sm:gap-0">
              <div className="w-full sm:w-1/2">
                <label htmlFor="name" className="block text-[#17243b] mb-2">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full p-3 border border-gray-300 rounded-md text-sm"
                />
              </div>

              <div className="w-full sm:w-1/2">
                <label htmlFor="email" className="block text-[#17243b] mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full p-3 border border-gray-300 rounded-md text-sm"
                />
              </div>
            </div>

   
            <div className="flex flex-col sm:flex-row sm:space-x-4 gap-4 sm:gap-0">
              <div className="w-full sm:w-1/2">
                <label htmlFor="number" className="block text-[#17243b] mb-2">
                  Phone Number
                </label>
                <input
                  id="number"
                  type="text"
                  placeholder="Enter Your Number"
                  className="w-full p-3 border border-gray-300 rounded-md text-sm"
                />
              </div>

              <div className="w-full sm:w-1/2">
                <label htmlFor="country" className="block text-[#17243b] mb-2">
                  Country
                </label>
                <input
                  id="country"
                  type="text"
                  placeholder="Enter Your Country"
                  className="w-full p-3 border border-gray-300 rounded-md text-sm"
                />
              </div>
            </div>

     
            <div>
              <label htmlFor="project" className="block text-[#17243b] mb-2">
                Project Brief
              </label>
              <textarea
                id="project"
                placeholder="Enter Your Project Brief"
                className="w-full h-24 sm:h-20 p-3 border border-gray-300 rounded-md text-sm resize-none"
              ></textarea>
            </div>

            <Link className="flex items-center justify-center gap-2 w-full bg-[#fd7e80] text-white py-3 rounded-md font-bold hover:bg-[#ff4651] transition duration-200">
              Hire Software Developer <MdOutlineArrowOutward />
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Home;
