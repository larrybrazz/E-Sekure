import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  useEffect(() => {
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach((item, index) => {
      item.classList.add('slideUpServices', 'staggered-animationServices');
    });
  }, []);

  return (
    <div className="services-page py-20">
      <h1 className="text-center font-bold text-3xl text-orange-700 mb-8">Our Services</h1>
       <div className='flex justify-center mt-2 mb-8 text-orange-600'>
            <span className=" w-[100px] flex items-center  space-x-2">
          <p className="dash"></p> <p className="dot"></p>{" "}
          <p className="dash"></p>
        </span>
      </div>
      <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        
        {/* Service 1 */}
        <div className="service-item p-6 bg-zinc-200 space-y-8 rounded-3xl">
          <div className="flex space-x-4 items-center text-2xl font-semibold border-b border-zinc-400">
            <img className="w-[80px]" src="images/policeman.gif" alt="Occasion Security Guard" />
            <h2>Occasion Security Guard</h2>
          </div>
          <p>
            Protect your assets with E-sekure Security Services' professional security guards. Our guards are highly trained, reliable, and equipped to handle a wide range of security challenges. From access control to emergency response, we provide the strong presence needed to keep your premises safe.
          </p>
          <button className="rounded-lg bg-orange-400 p-2 hover:text-white hover:font-bold hover:bg-orange-300"
           onClick={() => window.location.href = "/services#booking-form"}>
            Contact Us
          </button>
        </div>
        
        {/* Service 2 */}
        <div className="service-item p-6 bg-zinc-200 space-y-8 rounded-3xl">
          <div className="flex space-x-4 items-center text-2xl font-semibold border-b border-zinc-400">
            <img className="w-[80px]" src="images/policeman.gif" alt="Occasion Security Guard" />
            <h2> Hotel Security</h2>
          </div>
          <p>
            Provide your guests with peace of mind through E-sekure Security Services' hotel security solutions. Our discreet and professional security personnel are trained to handle the unique challenges of the hospitality industry, ensuring a safe and secure environment without disrupting the guest experience.
          </p>
          <button className="rounded-lg bg-orange-400 p-2 hover:text-white hover:font-bold hover:bg-orange-300"
           onClick={() => window.location.href = "/services#booking-form"}>
            Contact Us
          </button>
        </div>
        
        {/* Service 3 */}
        <div className="service-item p-6 bg-zinc-200 space-y-8 rounded-3xl">
          <div className="flex space-x-4 items-center text-2xl font-semibold border-b border-zinc-400">
            <img className="w-[80px]" src="images/policeman.gif" alt="Occasion Security Guard" />
            <h2>Door Supervision</h2>
          </div>
          <p>
           Ensure the safety and security of your venue with our professional door supervision services. E-sekure Security Services provides highly trained door supervisors who excel in maintaining order, managing entry, and ensuring that your guests enjoy a secure environment. Trust us to make your venue a safe place for everyone
          </p>
          <button className="rounded-lg bg-orange-400 p-2 hover:text-white hover:font-bold hover:bg-orange-300"
           onClick={() => window.location.href = "/services#booking-form"}>
               Contact Us
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default ServicesSection;
