import React from "react";
import customer1 from "../section/customer1.jpeg";
import customer2 from "../section/customer2.svg";
import { FaStar } from "react-icons/fa";
function Customer() {
  return (
    <section className="max-container">
      <h3 className="font-Palanquin text-4xl text-center font-bold">
        What Our
        <span className="text-red-500"> Customers </span>
        Say?
      </h3>
      <p className="font-montserrat text-center mt-3 m-auto max-w-lg">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="flex mt-24 items-center justify-evenly max-lg:flex-col gap-14 ">
        <div className="flex justify-center flex-col items-center">
          <img
            src={customer1}
            alt=""
            className="rounded-full object-cover w-[120px] h-[120px]"
          />
          <p className="mt-6 text-center justify-center max-w-sm info-text font-montserrat">
            The attention to detail and the quality of the product exceeded my
            expectations. Highly recommended
          </p>
          <div className="flex mt-3 gap-2 justify-start text-yellow-500">
            <FaStar size={24} />
            <p className="font-montserrat text-gray-600">(4.5)</p>
          </div>
          <h3 className="mt-1 font-Palanquin font-bold text-center text-2xl">
            Morich Brown
          </h3>
        </div>
        <div className="flex justify-center flex-col items-center">
          <img
            src={customer2}
            alt=""
            className="rounded-full object-cover w-[120px] h-[120px]"
          />
          <p className="mt-6 text-center max-w-sm info-text font-montserrat">
            The product not only met but exceeded my expectations. I'll
            definitely be a returning customer!
          </p>
          <div className="flex mt-3 gap-2 justify-start text-yellow-500">
            <FaStar size={24} />
            <p className="font-montserrat text-gray-600">(4.5)</p>
          </div>
          <h3 className="mt-1 font-Palanquin font-bold text-center text-2xl">
            Anglena
          </h3>
        </div>
      </div>
    </section>
  );
}

export default Customer;
