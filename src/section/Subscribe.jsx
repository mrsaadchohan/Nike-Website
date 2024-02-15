import React from "react";

function Subscribe() {
  return (
    <section id="subscribe">
      <div className="flex justify-center items-center text-center max-lg:flex-col gap-10">
        <h3 className="text-4xl leading-[68px] font-Palanquin font-bold">
          Sign Up For <span className="text-red-500">Updates</span> & Newsletter
        </h3>
        <div className="lg:max-w-[40%] w-full flex items-center gap-5 p-2.5 sm:border sm:border-slate-400 rounded-full">
          <input
            type="text"
            placeholder="Subscribes"
            className="sm:flex-1 max-sm:w-full text-base leading-normal text-gray pl-5 max-sm:p-5 outline-none sm:border-none border max-sm:border-gray-400 max-sm:rounded-full"
          />
          <div className="flex max-sm:justify-end items-center max-sm:w-full">
            <button className="flex justify-center items-center gap-2 border text-lg leading-normal px-6 py-2 text-white bg-red-400 font-serif  rounded-full w-[150px]">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
