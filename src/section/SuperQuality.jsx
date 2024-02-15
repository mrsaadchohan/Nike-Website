import React from "react";
import shoe8 from "../section/shoe8.svg";
function SuperQuality() {
  return (
    <section
      id="aboutus"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full"
    >
      <div className="flex flex-1 flex-col ">
        <h2 className="font-Palanquin capitalize leading-snug text-4xl lg:max-w-lg font-bold">
          We Provide You
          <span className="text-red-500 "> Super </span>
          <br />
          <span className="text-red-500 ">Quality </span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg font-montserrat leading-7">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg font-montserrat">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-4">
          <button className="flex justify-center items-center gap-2 border text-lg leading-normal px-6 py-2 text-white font-serif bg-red-400 rounded-full w-[150px]">
            View Details
          </button>
        </div>
      </div>
      <div>
        <img src={shoe8} alt="" width={560} height={510} />
      </div>
    </section>
  );
}

export default SuperQuality;
