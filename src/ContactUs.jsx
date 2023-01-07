import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { BsInstagram, BsLinkedin } from "react-icons/bs";

const ContactUs = () => {
  return (
    <div className="h-screen w-full bg-black">
      <div className="text-beige-main flex justify-center pt-20 text-5xl">
        Contact Us ;)
      </div>
      <div className="flex mt-14 justify-center gap-5 relative">
        <div className=" bg-beige-main p-5 pr-20 w-1/4 h-48">
          <div className="text-2xl mb-12">Sukrit Sethi</div>
          <div className="flex text-lg">
            <FaPhoneAlt className="mt-1.5 mr-2" /> +91 7503232413
          </div>
          <div className="flex text-lg">
            <AiTwotoneMail className="mt-1.5 mr-2" /> sukritsethi18@gmail.com
          </div>
        </div>
        <div className=" bg-beige-main p-5 pl-20 w-1/4 h-48">
          <div className="text-2xl mb-12 border flex justify-center">
            Ayushman Khandelwal
          </div>
          <div className="flex text-lg justify-end">
            +91 7503232413
            <FaPhoneAlt className="mt-1.5 ml-2" />{" "}
          </div>
          <div className="flex text-lg justify-end">
            sukritsethi18@gmail.com
            <AiTwotoneMail className="mt-1.5 ml-2" />{" "}
          </div>
        </div>
        <div className="circle"></div>
      </div>
      <div className="text-beige-main flex justify-center gap-20 text-2xl mt-20">
        <a href="https://www.youtube.com/" target="_blank">
          <BsInstagram className="cursor-pointer transition duration-150 ease-in-out hover:scale-125" />
        </a>
        <a href="https://www.youtube.com/" target="_blank">
          <BsLinkedin className="cursor-pointer transition duration-150 ease-in-out hover:scale-125" />
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
