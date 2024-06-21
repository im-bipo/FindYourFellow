import React from "react";
import TestimonialCarousel from "../components/Carousel.jsx";

const Landing = () => {
  return (
    <section >
      <div className="text-center mt-16 lg:mt-20 sm:mx-auto sm:w-10/12  lg:w-4/5 flex justify-center flex-col items-center">

          <div className="flex gap-1 text-5xl text-center">
            <span className="text-[#6522ad] font-bold">Find</span>
            <span className="text-[#39c868] font-bold">Your</span>
            <span className="text-[#6522ad] font-bold">Fellow</span>
          </div>

        <p className="text-wrap mx-auto mt-8 max-w-2xl text-lg text-[#6522ad] block">
          Find Your Fellow is a user-friendly social networking app that
          connects you with people nearby who share your interests. It helps you
          find and connect with like-minded individuals, discover local events,
          and expand your social circle effortlessly.
        </p>
      </div>

      <TestimonialCarousel />
    </section>
  );
};

export default Landing;
