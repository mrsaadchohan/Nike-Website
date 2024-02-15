import React from "react";
// import { products } from "../constants";
import shoe5 from "../section/shoe5.svg";
import shoe4 from "../section/shoe4.svg";
import shoe6 from "../section/shoe6.svg";
import shoe7 from "../section/shoe7.svg";
import { FaStar } from "react-icons/fa";

function Products() {
  return (
    <section id="products " className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start">
        <h1 className="text-4xl font-Palanquin font-bold">
          Our <span className="text-red-400">Popular</span> Products
        </h1>
        <p className="lg:max-w-lg mt-2 text-gray-500 font-montserrat ">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>

      <div className="flex justify-center">
        <div
          className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 
          sm:gap-6   gap-14"
        >
          <div>
            <img src={shoe5} />
            <div className="flex mt-6 gap-2 justify-start text-yellow-500">
              <FaStar size={24} />
              <p className="font-montserrat text-gray-600">(4.5)</p>
            </div>
            <h3 className="font-Palanquin mt-2 font-semibold text-2xl">
              Nike Air Shoes
            </h3>
            <p className="mt-2 font-semibold font-montserrat text-red-400  leading-normal">
              $200
            </p>
          </div>

          <div>
            <img src={shoe4} />
            <div className="flex mt-6 gap-2 justify-start text-yellow-500">
              <FaStar size={24} />
              <p className="font-montserrat text-gray-600">(4.5)</p>
            </div>
            <h3 className="font-Palanquin mt-2 font-semibold text-2xl">
              Nike Air Shoes
            </h3>
            <p className="mt-2 font-semibold font-montserrat text-red-400  leading-normal">
              $200
            </p>
          </div>
          <div>
            <img src={shoe6} />
            <div className="flex mt-6 gap-2 justify-start text-yellow-500">
              <FaStar size={24} />
              <p className="font-montserrat text-gray-600">(4.5)</p>
            </div>
            <h3 className="font-Palanquin mt-2 font-semibold text-2xl">
              Nike Air Shoes
            </h3>
            <p className="mt-2 font-semibold font-montserrat text-red-400  leading-normal">
              $200
            </p>
          </div>
          <div>
            <img src={shoe7} />
            <div className="flex mt-6 gap-2 justify-start text-yellow-500">
              <FaStar size={24} />
              <p className="font-montserrat text-gray-600">(4.5)</p>
            </div>
            <h3 className="font-Palanquin mt-2 font-semibold text-2xl">
              Nike Air Shoes
            </h3>
            <p className="mt-2 font-semibold font-montserrat text-red-400  leading-normal">
              $200
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
