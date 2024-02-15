import React from "react";
import offer from "../section/offer.svg";

function Specialoffers() {
  return (
    <section className="flex items-center max-xl:flex-col-reverse gap-10">
      <div className="flex-1">
        <img src={offer} width={773} height={687} className="w-full" />
      </div>
      <div className="flex flex-1 flex-col ">
        <h2 className="font-Palanquin capitalize leading-snug text-4xl lg:max-w-lg font-bold">
          Special <span className="text-red-500 ">Offers </span>
        </h2>
        <p className="mt-4 lg:max-w-lg font-montserrat leading-7">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 lg:max-w-lg font-montserrat">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-4 flex flex-wrap gap-5">
          <button className="flex justify-center items-center gap-2 border text-lg leading-normal px-6 py-2 text-white font-serif bg-red-400 rounded-full w-[150px]">
            View Details
          </button>
          <button className="flex justify-center items-center gap-2 bg-white border text-lg leading-normal px-6 py-2 text-gray-500 border-gray-500 font-serif  rounded-full w-[150px]">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Specialoffers;
