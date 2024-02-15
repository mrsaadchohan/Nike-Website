import React from "react";
import bigShoe1 from "../section/bigShoe1.png";

function Hero() {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 p-5 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  ml-3 max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer collections
        </p>

        <h1 className="mt-10 font-Palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <button className="flex justify-center -mt-7  items-center gap-2 border text-lg leading-normal px-6 py-2 text-white font-serif bg-red-400 rounded-full">
          Shop Now
        </button>
      </div>

      <div className="relative flex-1 flex justify-center  items-center xl:min-h-screen  max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoe1}
          alt="shoe colletion"
          width={610}
          height={502}
          className="object-contain relative z-10 hidden xl:block"
        />
      </div>
    </section>
  );
}

export default Hero;
