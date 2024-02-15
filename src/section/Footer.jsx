import React from "react";
import footerlogo from "../section/footerlogo.svg";
import facebook from "../section/facebook.svg";
import instagram from "../section/instagram.svg";
import twitter from "../section/twitter.svg";

function Footer() {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <img src={footerlogo} alt="" width={115} height={46} />
          <p className="font-montserrat mt-6 text-base leading-7 text-white sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full ">
              <img src={facebook} alt="" width={24} height={24} />
            </div>
            <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full ">
              <img src={instagram} alt="" width={24} height={24} />
            </div>
            <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full ">
              <img src={twitter} alt="" width={24} height={24} />
            </div>
          </div>
        </div>
        <div className="flex flex-1 justify-between gap-20 lg:gap-10 flex-wrap">
          <div>
            <h4 className="text-white font-montserrat font-medium leading-normal mb-6 text-2xl">
              {" "}
              Products
            </h4>
            <ul>
              <li className="mt-3 font-montserrat leading-normal text-white">
                Air Force 1
              </li>
              <li className="mt-3 font-montserrat leading-normal text-white">
                Air Max 1
              </li>
              <li className="mt-3 font-montserrat leading-normal text-white">
                Air Jordan 1
              </li>
              <li className="mt-3 font-montserrat leading-normal text-white">
                Air Force 2
              </li>
              <li className="mt-3 font-montserrat leading-normal text-white ">
                Nike Waffle Racer
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-1 justify-between gap-20 lg:gap-10 flex-wrap">
          <div>
            <h4 className="text-white font-montserrat font-medium leading-normal mb-6 text-2xl">
              {" "}
              Help
            </h4>
            <ul>
              <li className="mt-3 font-montserrat leading-normal text-white">
                About us
              </li>
              <li className="mt-3 font-montserrat leading-normal text-white">
                FAQs
              </li>
              <li className="mt-3 font-montserrat leading-normal text-white">
                How it works
              </li>
              <li className="mt-3 font-montserrat leading-normal text-white">
                Privacy policy
              </li>
              <li className="mt-3 font-montserrat leading-normal text-white ">
                Payment policy
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-1 justify-between gap-20 lg:gap-10 flex-wrap">
          <div>
            <h4 className="text-white font-montserrat font-medium leading-normal mb-6 text-2xl">
              {" "}
              Get in Touch
            </h4>
            <ul>
              <li className="mt-3 font-montserrat leading-normal text-white">
                customer@nike.com
              </li>
              <li className="mt-3 font-montserrat leading-normal text-white">
                +92554862354
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
