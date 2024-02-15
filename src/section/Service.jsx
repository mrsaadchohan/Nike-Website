import React from "react";
import support from "../section/support.svg";
import shieldtick from "../section/shieldtick.svg";
import truckfast from "../section/truckfast.svg";

function Service() {
  return (
    <section className=" flex gap-5 flex-wrap justify-center ">
      <div class="sm:w-[350px] sm:min-w-[350px] w-full p-6 bg-white border border-gray-200 rounded-lg shadow-2xl">
        <div className="w-11 h-11 flex justify-center items-center bg-red-500 rounded-full">
          <img src={truckfast} width={24} height={24} />
        </div>
        <h3 className="mt-5 font-Palanquin text-2xl leading-normal font-bold">
          Free shipping
        </h3>
        <p className="mt-3 break-words font-montserrat  leading-normal text-gray-600">
          Enjoy seamless shopping with our complimentary shipping service.
        </p>
      </div>

      <div class="sm:w-[350px] sm:min-w-[350px] w-full p-6 bg-white border border-gray-200 rounded-lg shadow-2xl">
        <div className="w-11 h-11 flex justify-center items-center bg-red-500 rounded-full">
          <img src={shieldtick} width={24} height={24} />
        </div>
        <h3 className="mt-5 font-Palanquin text-2xl leading-normal font-bold">
          Secure Payment
        </h3>
        <p className="mt-3 break-words font-montserrat  leading-normal text-gray-600">
          Experience worry-free transactions with our secure payment options.
        </p>
      </div>

      <div class="sm:w-[350px] sm:min-w-[350px] w-full p-6 bg-white border border-gray-200 rounded-lg shadow-2xl">
        <div className="w-11 h-11 flex justify-center items-center bg-red-500 rounded-full">
          <img src={support} width={24} height={24} />
        </div>
        <h3 className="mt-5 font-Palanquin text-2xl leading-normal font-bold">
          Love to help you
        </h3>
        <p className="mt-3 break-words font-montserrat  leading-normal text-gray-600">
          Our dedicated team is here to assist you every step of the way
        </p>
      </div>
    </section>
  );
}

export default Service;
