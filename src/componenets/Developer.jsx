import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const Developer = () => {
  const items = [
    "English Speaking Programmers",
    "Flexible Work Hours",
    "Rapid Onboarding Process",
    "Expertise In Top Technologies",
    "Reliable Partner Credentials",
  ];

  const bulletsLeft = [
    "Client-Centric Approach",
    "Global Quality Standards",
    "Cutting-Edge Infrastructure",
  ];

  const bulletsRight = [
    "Best-In-Class Project Management",
    "Time-Zone Compatibility",
    "Agile Adaptability",
  ];

  return (
    <>

      <section className="relative min-h-[420px] sm:min-h-[520px]">
    
        <div className="absolute inset-0">
        
          <img
            src="/images/Rectangle.png"
            alt=""
            loading="lazy"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
         
          <div className="absolute inset-0 bg-[#0f1e4a] opacity-85 sm:opacity-90" />

          <img
            src="/images/persons.png"
            alt=""
            loading="lazy"
            aria-hidden="true"
            className="
              pointer-events-none select-none
              absolute left-1/2 sm:left-0 top-1/2 -translate-y-1/2
              -translate-x-1/2 sm:translate-x-0
              w-[min(95vw,640px)] sm:w-[560px] lg:w-[680px]
              max-w-none
              opacity-35 sm:opacity-45
              mix-blend-screen
            "
          />
        </div>

  
        <div className="relative z-10" id="resources">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
         
              <div className="max-w-xl">
                <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold leading-tight">
                  Why Hire Software Developers
                  <br className="hidden sm:block" /> In India?
                </h2>
              </div>

              
              <div className="space-y-5 sm:space-y-6">
                {items.map((t, i) => (
                  <div key={i} className="group">
                    <div className="flex items-center justify-between gap-4 border-b border-white/18 pb-4 sm:pb-5">
                      <span className="text-[15px] sm:text-lg">{t}</span>

                   
                     <MdOutlineArrowOutward size={20}/>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

 
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
         
            <div className="flex justify-center">
              <img
                src="/images/Code typing-bro 1.png" 
                alt="Developers illustration"
                loading="lazy"
                className="w-full max-w-[520px] h-auto object-contain"
              />
            </div>

       
            <div>
              <h2 className="text-[#17243b] text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                Top Companies Trust ValueCoders
                <br className="hidden sm:block" /> For Hiring Software Developers
              </h2>

              <p className="mt-5 text-gray-600 text-sm sm:text-base leading-7">
                Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
                Industry. Lorem Ipsum Has Been The Industry&apos;s Standard Dummy
                Text Ever Since The 1500s, When An Unknown Printer Took A Galley
                Of Type And Scrambled It To Make A Type Specimen Book.
              </p>

            
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
           
                {bulletsLeft.map((t, i) => (
                  <div key={`L-${i}`} className="flex items-start gap-3">
                  
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100">
                      <svg viewBox="0 0 24 24" className="h-4 w-4 text-emerald-600">
                        <path
                          fill="currentColor"
                          d="M9 16.2 4.8 12 3.4 13.4 9 19l12-12-1.4-1.4z"
                        />
                      </svg>
                    </span>
                    <span className="text-[#17243b] font-medium">{t}</span>
                  </div>
                ))}

           
                {bulletsRight.map((t, i) => (
                  <div key={`R-${i}`} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100">
                      <svg viewBox="0 0 24 24" className="h-4 w-4 text-emerald-600">
                        <path
                          fill="currentColor"
                          d="M9 16.2 4.8 12 3.4 13.4 9 19l12-12-1.4-1.4z"
                        />
                      </svg>
                    </span>
                    <span className="text-[#17243b] font-medium">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Developer;
