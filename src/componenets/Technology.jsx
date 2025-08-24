import React from "react";

const Technology = () => {
  return (
    <section id="technolohy" className="relative bg-white text-[#17243b]">
  
      <img
        src="/images/iarrow.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="pointer-events-none select-none absolute top-3 left-3 sm:top-28 sm:left-20 w-16 sm:w-16 opacity-90 z-0"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <header className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Our Diverse Technology Competency
          </h2>
          <p className="mt-4 text-gray-500 text-sm sm:text-base">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been
          </p>
          <p className="mt-1 text-gray-400 text-xs sm:text-sm">
            The Industry’s Standard Dummy Text Ever Since
          </p>
        </header>

       <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 cursor-pointer">
  {[
    { title: "Backend Development",  icon: "/images/web-settings 1.png",  tint: "bg-indigo-50",  border: "border-b-4 border-indigo-300" },
    { title: "Fronted Development",  icon: "/images/web-settings 2.png",  tint: "bg-amber-50",   border: "border-b-4 border-amber-300" },
    { title: "Mobile Development",   icon: "/images/web-settings 3.png",  tint: "bg-fuchsia-50", border: "border-b-4 border-fuchsia-300" },
    { title: "Blockchain, AI/ML",    icon: "/images/web-settings 4.png",  tint: "bg-cyan-50",    border: "border-b-4 border-cyan-300" },
    { title: "DevOps & Low-Code",    icon: "/images/web-settings 5.png",  tint: "bg-lime-50",    border: "border-b-4 border-lime-300" },
    { title: "E-commerce & CMS",     icon: "/images/web-settings 6.png",  tint: "bg-rose-50",    border: "border-b-4 border-rose-300" },
  ].map((card, idx) => (
    <div
      key={idx}
      className={`${card.tint} ${card.border} rounded-xl p-6 sm:p-7 shadow-sm transition-all duration-200 ease-out
                  hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01]
                  active:translate-y-0 active:scale-[1.005]
                  focus-visible:shadow-lg focus-visible:-translate-y-1 focus-visible:scale-[1.01]`}
      tabIndex={0} // enables keyboard focus for focus-visible styles
    >
      <div className="flex items-center gap-3">
        <img src={card.icon} alt="" loading="lazy" className="h-10 w-10 sm:h-12 sm:w-12 object-contain" />
      </div>

      <h3 className="mt-5 text-xl sm:text-2xl font-semibold">{card.title}</h3>

      <div className="mt-5 text-sm sm:text-[15px] text-gray-600 leading-7">
      <div className="flex flex-wrap gap-3">
        <span className="inline-block">.NET</span>
        <span className="inline-block">C/C++</span>
        <span className="inline-block">DJANGO</span>
        <span className="inline-block">Firebase</span>
        <span className="inline-block">GOLANG</span>
        <span className="inline-block">SYMFONY</span>
        <span className="inline-block">LARAVEL</span>
        <span className="inline-block">NODE</span>
        <span className="inline-block">PHP</span>
        <span className="inline-block">PYTHON</span>
        <span className="inline-block">RUBY ON RAILS</span>
        <span className="inline-block">JAVA</span>
      </div>




      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default Technology;
