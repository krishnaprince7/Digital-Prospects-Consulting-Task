import React from "react";
import { FaStar } from "react-icons/fa";
import { FiPlay } from "react-icons/fi";

const OurClients = () => {
  return (
    <section className="relative">
    
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(180deg, rgba(224,247,234,0.6) 0%, rgba(255,245,247,0.6) 100%)",
        }}
      />

      <div id="ourclient" className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
 
        <header className="text-center">
          <h2 className="text-[#17243b] text-3xl sm:text-4xl font-extrabold">
            What Our Clients Have To Say About Us
          </h2>
          <p className="mt-3 text-gray-600 text-sm">
            Take A Look At Our Simple And Straightforward Process To Hire Software
          </p>
        </header>


        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    
          <div className="group">
            <div className="relative overflow-hidden rounded-xl bg-gray-100 cursor-pointer">
              <img
                src="/images/Vector 1.png"   /* <- yahan apni image path daalo */
                alt="Client 1"
                className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                loading="lazy"
              />
   
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white shadow-md ring-4 ring-white/70">
                  <FiPlay className="h-6 w-6" />
                </span>
              </span>
            </div>

            <div className="mt-4">
              <p className="text-[#17243b] font-semibold">Krish Bruynson</p>
              <p className="text-gray-500 text-sm">Director, Storloft</p>
              <div className="mt-2 flex gap-1 text-emerald-500">
                <FaStar className="h-4 w-4" /><FaStar className="h-4 w-4" />
                <FaStar className="h-4 w-4" /><FaStar className="h-4 w-4" />
                <FaStar className="h-4 w-4" />
              </div>
            </div>
          </div>

   
          <div className="group">
            <div className="relative overflow-hidden rounded-xl bg-gray-100 cursor-pointer">
              <img
                src="/images/Vector 2.png"   
                alt="Client 2"
                className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white shadow-md ring-4 ring-white/70">
                  <FiPlay className="h-6 w-6" />
                </span>
              </span>
            </div>

            <div className="mt-4">
              <p className="text-[#17243b] font-semibold">Krish Bruynson</p>
              <p className="text-gray-500 text-sm">Director, Storloft</p>
              <div className="mt-2 flex gap-1 text-emerald-500">
                <FaStar className="h-4 w-4" /><FaStar className="h-4 w-4" />
                <FaStar className="h-4 w-4" /><FaStar className="h-4 w-4" />
                <FaStar className="h-4 w-4" />
              </div>
            </div>
          </div>

     
          <div className="group">
            <div className="relative overflow-hidden rounded-xl bg-gray-100 cursor-pointer">
              <img
                src="/images/Vector 3.png" 
                alt="Client 3"
                className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white shadow-md ring-4 ring-white/70">
                  <FiPlay className="h-6 w-6" />
                </span>
              </span>
            </div>

            <div className="mt-4">
              <p className="text-[#17243b] font-semibold">Krish Bruynson</p>
              <p className="text-gray-500 text-sm">Director, Storloft</p>
              <div className="mt-2 flex gap-1 text-emerald-500">
                <FaStar className="h-4 w-4" /><FaStar className="h-4 w-4" />
                <FaStar className="h-4 w-4" /><FaStar className="h-4 w-4" />
                <FaStar className="h-4 w-4" />
              </div>
            </div>
          </div>

          <div className="group">
            <div className="relative overflow-hidden rounded-xl bg-gray-100 cursor-pointer">
              <img
                src="/images/Vector 4.png"   
                alt="Client 4"
                className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white shadow-md ring-4 ring-white/70">
                  <FiPlay className="h-6 w-6" />
                </span>
              </span>
            </div>

            <div className="mt-4">
              <p className="text-[#17243b] font-semibold">Krish Bruynson</p>
              <p className="text-gray-500 text-sm">Director, Storloft</p>
              <div className="mt-2 flex gap-1 text-emerald-500">
                <FaStar className="h-4 w-4" /><FaStar className="h-4 w-4" />
                <FaStar className="h-4 w-4" /><FaStar className="h-4 w-4" />
                <FaStar className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
