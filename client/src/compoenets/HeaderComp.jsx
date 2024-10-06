/* eslint-disable react/prop-types */
import React from "react";
import LogoImage from "../assets/bd886d7ccc6f8dd8db17e841233c9656.jpg";
const HeaderComp = ({ activeTable }) => {
  const headerInfo = {
    watersoluble: {
      name: "watersoluble",
    },
    organicacid: {
      name: "organicacid",
    },
    carotenoids: {
      name: "carotenoids",
    },
    starch: {
      name: "starch",
    },
  };

  // Get the current header info based on the active table
  const currentInfo = headerInfo[activeTable];
  return (
    <div className="h-[13vh] sm:h-[20vh] flex md:flex-row justify-between items-center p-4 bg-gray-200">
      <div>
        <img
          src={LogoImage}
          alt="College Logo"
          className="rounded-lg w-20 h-16 sm:w-20 sm:h-14 md:w-28 md:h-28"
        />
      </div>
      <div className="text-center md:text-left text-[14px] md:text-xl">
        <p>{currentInfo.name}</p>
        {/* <p>{currentInfo.email}</p>
        <p>{currentInfo.phone}</p> */}
      </div>
      <div className="text-center md:text-left text-[11px] md:text-xl">
        {" "}
        {/* <p>{currentInfo.address}</p>
        <p>{currentInfo.pincode}</p> */}
      </div>
    </div>
  );
};

export default HeaderComp;
