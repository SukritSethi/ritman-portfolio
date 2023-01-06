import React from "react";
import Animation from "./Animation";

const Hero = () => {
  return (
    <>
      <div className="relative">
        <Animation></Animation>
        <div className="absolute h-64 w-64 bg-black top-1/3 left-1/3 rotate-45 border-beige-main border-2"></div>
      </div>
    </>
  );
};

export default Hero;
