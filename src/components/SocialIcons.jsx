import React from "react";
import {BsInstagram, BsWhatsapp} from "react-icons/bs";
import {AiOutlineYoutube} from "react-icons/ai"
import {FaAmazonPay} from "react-icons/fa"

const SocialIcons = ({ Icons }) => {
  return (
    <div className="text-teal-500">
        <div className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 ">
        <BsInstagram size={20}  />
        </div>
        
        <div className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 ">
        <AiOutlineYoutube size={20}  />
        </div>

        <div className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 ">
        <BsWhatsapp size={20}  />
        </div>

        <div className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 ">
        <FaAmazonPay size={20}  />
        </div>
          
    </div>
  );
};

export default SocialIcons;