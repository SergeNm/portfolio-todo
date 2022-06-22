import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import profile from "../../assets/profile.png";

const Home = () => {
  return (
    <div id="home" className="w-full flex h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-6 md:px-12 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, My name is</p>
        <h2 className="text-3xl md:pt-6 sm:text-5xl font-bold text-blue-800">
          N. Mugisha Serge
        </h2>
        <h2 className="text-3xl md:pt-8 sm:text-6xl font-bold text-[#8892b0]">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <p className="text-[#8892b0] py-4 max-w-[700px]">5+ Years of experience in software development , and more than 3 years working in professional paced environment.</p>
        <div>
          <button className="text-blue-600 group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-600 hover:border-blue-300 hover:text-white">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
      <div className="hidden md:flex flex-col justify-center md:px-12">
        <img src={profile} alt="" />
      </div>
    </div>
  );
};

export default Home;
