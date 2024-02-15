import React from "react";
import Hero from "./section/Hero";
import SuperQuality from "./section/SuperQuality";
import Specialoffers from "./section/Specialoffers";
import Service from "./section/Service";
import Customer from "./section/Customer";
import Footer from "./section/Footer";
import Nav from "./section/Nav";
import Products from "./section/Products";
import Subscribe from "./section/Subscribe";
const App=()=>
{
    return(
      <main className="relative">
        <Nav/>
        <section className="xl:padding-1 wide:padding-r padding:b">
          <Hero/>
        </section>
        <section className="padding">
         <Products></Products>
        </section>
        <section className="padding ">
         <SuperQuality/>
        </section>
        <section className="padding">
          <Service/>
        </section>
        <section className="padding">
          <Specialoffers/>
        </section>
        <section className="bg-blue-100 padding">
          <Customer/>
        </section> 
        <section className="padding">
          <Subscribe/>
        </section> 
         <section className="padding-x padding-t bg-black pb-8">
          <Footer/>
        </section> 
      
      </main>


    )
}
export default App;
