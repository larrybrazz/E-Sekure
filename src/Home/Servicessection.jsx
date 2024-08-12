import React, { useEffect } from 'react';

const ServicesSection = () => {
  useEffect(() => {
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach((item, index) => {
      item.classList.add('slideUpServices', 'staggered-animationServices');
    });
  }, []);

  return (
    <div className="services-page">
      <h1 className="text-center font-bold text-3xl text-white mb-8">Our Services</h1>
      <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        
        {/* Service 1 */}
        <div className="service-item p-6 bg-zinc-200 space-y-8 rounded-3xl">
          <div className="flex space-x-4 items-center text-2xl font-semibold border-b border-zinc-400">
            <img className="w-[80px]" src="images/policeman.gif" alt="Occasion Security Guard" />
            <h2>Occasion Security Guard</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ea quisquam cum, sunt labore dolores vel voluptatum sint soluta minus voluptate quos aliquid doloremque corrupti error tempora aut repellendus obcaecati!
          </p>
          <button className="rounded-lg bg-orange-400 p-2 hover:text-white hover:font-bold hover:bg-orange-300">
            Contact Us
          </button>
        </div>
        
        {/* Service 2 */}
        <div className="service-item p-6 bg-zinc-200 space-y-8 rounded-3xl">
          <div className="flex space-x-4 items-center text-2xl font-semibold border-b border-zinc-400">
            <img className="w-[80px]" src="images/policeman.gif" alt="Occasion Security Guard" />
            <h2>Occasion Security Guard</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ea quisquam cum, sunt labore dolores vel voluptatum sint soluta minus voluptate quos aliquid doloremque corrupti error tempora aut repellendus obcaecati!
          </p>
          <button className="rounded-lg bg-orange-400 p-2 hover:text-white hover:font-bold hover:bg-orange-300">
            Contact Us
          </button>
        </div>
        
        {/* Service 3 */}
        <div className="service-item p-6 bg-zinc-200 space-y-8 rounded-3xl">
          <div className="flex space-x-4 items-center text-2xl font-semibold border-b border-zinc-400">
            <img className="w-[80px]" src="images/policeman.gif" alt="Occasion Security Guard" />
            <h2>Occasion Security Guard</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ea quisquam cum, sunt labore dolores vel voluptatum sint soluta minus voluptate quos aliquid doloremque corrupti error tempora aut repellendus obcaecati!
          </p>
          <button className="rounded-lg bg-orange-400 p-2 hover:text-white hover:font-bold hover:bg-orange-300">
            Contact Us
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default ServicesSection;
