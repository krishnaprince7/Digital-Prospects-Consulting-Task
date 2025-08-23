import React from "react";
import {
  FiUser,
  FiMonitor,
  FiUsers,
  FiTrendingUp,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";

const HiringProcess = () => {
  return (
    <section className="relative">
     
      <img
        src="/images/sectionnn.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-100"
        loading="lazy"
        aria-hidden="true"
      />
  
      <div className="absolute inset-0 bg-white/60" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
  
        <header className="text-center">
          <h2 className="text-[#17243b] text-3xl sm:text-4xl font-extrabold">
            Our Hiring Process
          </h2>
          <p className="mt-3 text-gray-600 text-sm sm:text-base">
            Take A Look At Our Simple And Straightforward Process To Hire
            Software Developers From ValueCoders.
          </p>
        </header>

        <div className="mt-10 sm:mt-12 hidden md:grid grid-cols-4 gap-6 items-start">
     
          <div className="relative flex flex-col items-center text-center">
            <span className="absolute -top-3 right-8 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-rose-400 text-white text-sm font-semibold shadow">
              1
            </span>
            <div className="h-28 w-28 rounded-full border-4 border-emerald-500/80 bg-white flex items-center justify-center shadow-sm">
              <FiUser className="h-9 w-9 text-gray-700" />
            </div>
            <h3 className="mt-5 text-[#17243b] font-extrabold tracking-wide">
              INQUIRY
            </h3>
            <p className="mt-2 text-gray-600 text-xs leading-6 max-w-[240px]">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
              Industry.
            </p>
            <div className="absolute top-1/2 -right-3 translate-x-1/2 -translate-y-1/2 text-gray-400">
              <FiArrowRight className="h-6 w-6" />
            </div>
          </div>

   
          <div className="relative flex flex-col items-center text-center">
            <span className="absolute -top-3 right-8 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-rose-400 text-white text-sm font-semibold shadow">
              2
            </span>
            <div className="h-28 w-28 rounded-full border-4 border-emerald-500/80 bg-white flex items-center justify-center shadow-sm">
              <FiMonitor className="h-9 w-9 text-gray-700" />
            </div>
            <h3 className="mt-5 text-[#17243b] font-extrabold tracking-wide">
              SELECT DEVELOPERS
            </h3>
            <p className="mt-2 text-gray-600 text-xs leading-6 max-w-[240px]">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
              Industry.
            </p>
            <div className="absolute top-1/2 -right-3 translate-x-1/2 -translate-y-1/2 text-gray-400">
              <FiArrowRight className="h-6 w-6" />
            </div>
          </div>


          <div className="relative flex flex-col items-center text-center">
            <span className="absolute -top-3 right-8 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-rose-400 text-white text-sm font-semibold shadow">
              3
            </span>
            <div className="h-28 w-28 rounded-full border-4 border-emerald-500/80 bg-white flex items-center justify-center shadow-sm">
              <FiUsers className="h-9 w-9 text-gray-700" />
            </div>
            <h3 className="mt-5 text-[#17243b] font-extrabold tracking-wide">
              TEAM INTEGRATION
            </h3>
            <p className="mt-2 text-gray-600 text-xs leading-6 max-w-[240px]">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
              Industry.
            </p>
            <div className="absolute top-1/2 -right-3 translate-x-1/2 -translate-y-1/2 text-gray-400">
              <FiArrowRight className="h-6 w-6" />
            </div>
          </div>


          <div className="relative flex flex-col items-center text-center">
            <span className="absolute -top-3 right-8 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-rose-400 text-white text-sm font-semibold shadow">
              4
            </span>
            <div className="h-28 w-28 rounded-full border-4 border-emerald-500/80 bg-white flex items-center justify-center shadow-sm">
              <FiTrendingUp className="h-9 w-9 text-gray-700" />
            </div>
            <h3 className="mt-5 text-[#17243b] font-extrabold tracking-wide">
              TEAM SCALING
            </h3>
            <p className="mt-2 text-gray-600 text-xs leading-6 max-w-[240px]">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
              Industry.
            </p>
          </div>
        </div>


        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">

          <div className="flex flex-col items-center text-center">
            <span className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-rose-400 text-white text-xs font-semibold shadow">
              1
            </span>
            <div className="h-24 w-24 rounded-full border-4 border-emerald-500/80 bg-white flex items-center justify-center shadow-sm">
              <FiUser className="h-8 w-8 text-gray-700" />
            </div>
            <h3 className="mt-4 text-[#17243b] font-extrabold tracking-wide text-sm">
              INQUIRY
            </h3>
            <p className="mt-2 text-gray-600 text-xs leading-6 max-w-[240px]">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
              Industry.
            </p>
          </div>


          <div className="flex flex-col items-center text-center">
            <span className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-rose-400 text-white text-xs font-semibold shadow">
              2
            </span>
            <div className="h-24 w-24 rounded-full border-4 border-emerald-500/80 bg-white flex items-center justify-center shadow-sm">
              <FiMonitor className="h-8 w-8 text-gray-700" />
            </div>
            <h3 className="mt-4 text-[#17243b] font-extrabold tracking-wide text-sm">
              SELECT DEVELOPERS
            </h3>
            <p className="mt-2 text-gray-600 text-xs leading-6 max-w-[240px]">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
              Industry.
            </p>
          </div>

  
          <div className="flex flex-col items-center text-center">
            <span className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-rose-400 text-white text-xs font-semibold shadow">
              3
            </span>
            <div className="h-24 w-24 rounded-full border-4 border-emerald-500/80 bg-white flex items-center justify-center shadow-sm">
              <FiUsers className="h-8 w-8 text-gray-700" />
            </div>
            <h3 className="mt-4 text-[#17243b] font-extrabold tracking-wide text-sm">
              TEAM INTEGRATION
            </h3>
            <p className="mt-2 text-gray-600 text-xs leading-6 max-w-[240px]">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
              Industry.
            </p>
          </div>

    
          <div className="flex flex-col items-center text-center">
            <span className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-rose-400 text-white text-xs font-semibold shadow">
              4
            </span>
            <div className="h-24 w-24 rounded-full border-4 border-emerald-500/80 bg-white flex items-center justify-center shadow-sm">
              <FiTrendingUp className="h-8 w-8 text-gray-700" />
            </div>
            <h3 className="mt-4 text-[#17243b] font-extrabold tracking-wide text-sm">
              TEAM SCALING
            </h3>
            <p className="mt-2 text-gray-600 text-xs leading-6 max-w-[240px]">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
              Industry.
            </p>
          </div>
        </div>
      </div>


      <div className="relative bg-transparent">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
          <h3 className="text-center text-[#17243b] text-2xl sm:text-3xl font-extrabold">
            User Guide To Hire Dedicated Software Developers
          </h3>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
   
            <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-black/5 p-0 overflow-hidden">
              <ul className="divide-y divide-black/5">
                <li className="px-4 sm:px-5 py-4 text-[#17243b]  sm:mb-4">Benefits Of Hiring Developers</li>
                <li className="px-4 sm:px-5 py-4 bg-emerald-500 sm:mb-4 text-white font-medium">
                  Key Factors To Consider While Hiring
                </li>
                <li className="px-4 sm:px-5 py-4 sm:mb-4 text-[#17243b]">Defining Your Project Requirements</li>
                <li className="px-4 sm:px-5 py-4 sm:mb-4 text-[#17243b]">Choosing The Right Development Model</li>
                <li className="px-4 sm:px-5 py-4 sm:mb-4 text-[#17243b]">Typical Challenges For Hiring Developers</li>
                <li className="px-4 sm:px-5 py-4 sm:mb-4 text-[#17243b]">Hiring Freelancers Vs. Dedicated Developers</li>
                <li className="px-4 sm:px-5 py-4 sm:mb-4 text-[#17243b]">Communication With Remote Developers</li>
              </ul>
            </div>

   
            <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-black/5 p-5 sm:p-6">
              <h4 className="text-[#17243b] font-semibold">
                Benefits Of Hiring Developers
              </h4>
              <p className="mt-3 text-gray-600 text-sm leading-7">
                Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry&apos;s
                Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To
                Make A Type Specimen Book.
              </p>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                {[
                  "Client-Centric Approach",
                  "Global Quality Standards",
                  "Cutting-Edge Infrastructure",
                ].map((t) => (
                  <div key={t} className="flex items-start gap-2">
                    <FiCheckCircle className="mt-0.5 h-5 w-5 text-emerald-600" />
                    <span className="text-[#17243b]">{t}</span>
                  </div>
                ))}

                {[
                  "Best-In-Class Project Management",
                  "Time-Zone Compatibility",
                  "Agile Adaptability",
                ].map((t) => (
                  <div key={t} className="flex items-start gap-2">
                    <FiCheckCircle className="mt-0.5 h-5 w-5 text-emerald-600" />
                    <span className="text-[#17243b]">{t}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <img
                  src="/images/Rectangle 107.png" 
                  alt="Guide preview"
                  loading="lazy"
                  className="w-full h-44 sm:h-52 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringProcess;
