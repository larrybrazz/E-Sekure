import React, { useEffect } from 'react';

const AboutSection = () => {
  useEffect(() => {
    const aboutItems = document.querySelectorAll('.about-item');
    aboutItems.forEach((item, index) => {
      item.classList.add('slide-inAbout', 'staggered-animation');
    });
  }, []);

  return (
    <section className="about-page ">
      <div className="container mx-auto mt-20 text-center">
        <h1 className='text-2xl text-white font-bold py-6'>We are the leading security body to work with</h1>
         <div className='flex justify-center mt-2 mb-8'>
            <span className=" w-[100px] flex items-center  space-x-2">
          <p className="dash"></p> <p className="dot"></p>{" "}
          <p className="dash"></p>
        </span>
        </div>
        <div className="about-section flex flex-col md:flex-row gap-6 p-4">
          {/* Who We Are Section */}
          <div className="about-item bg-zinc-200 rounded-xl p-4">
            <div className="flex items-center space-x-4 md:space-x-8">
              <img className="h-[100px] rounded-full" src="images/who.gif" alt="Illustration of who we are" />
              <h2 className="text-2xl font-bold">Who We Are?</h2>
            </div>
            <div className="space-y-4 bg-zinc-100 p-4 rounded-b-lg hover:shadow-lg transition-shadow shadow-orange-400">
              <p>
                E-sekure Limited is a leading security services provider based in the UK, dedicated to
safeguarding what matters most to our clients. With years of industry experience, we
specialize in offering top-tier security solutions for residential, corporate, and special
event needs. Our team of professionals combines advanced technology with in-depth
knowledge to provide reliable, effective, and customized security services
              </p>
            </div>
          </div>
          
          {/* What We Do Section */}
          <div className="about-item bg-zinc-200 rounded-xl p-4">
            <div className="flex items-center space-x-4 md:space-x-8">
              <img className="h-[100px] rounded-full" src="images/question1.gif" alt="Illustration of what we do" />
              <h2 className="text-2xl font-bold">What We Do?</h2>
            </div>
            <div className="space-y-4 bg-zinc-100 p-4 rounded-b-lg hover:shadow-lg transition-shadow shadow-orange-400">
              <p>
                We offer a wide range of security services designed to meet the unique challenges of
modern safety needs. Our offerings include residential security solutions to protect
your home, corporate protection services for businesses, and bespoke security
strategies tailored to specific events or high-risk environments. At E-sekure Limited,
we focus on delivering exceptional security services that ensure your safety and
peace of mind at all times
              </p>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="about-item bg-zinc-200 rounded-xl p-4">
            <div className="flex items-center space-x-4 md:space-x-8">
              <img className="h-[100px] rounded-full" src="images/why.gif" alt="Illustration of why choose us" />
              <h2 className="text-2xl font-bold">Why Choose Us?</h2>
            </div>
            <div className="space-y-4 bg-zinc-100 p-4 rounded-b-lg hover:shadow-lg transition-shadow shadow-orange-400">
             
              <p>
At E-sekure Limited, we prioritize your safety and peace of mind with unmatched
expertise and dedication. Our team of highly trained security professionals delivers
personalized  solutions  tailored  to  your  specific   needs,  ensuring  comprehensive
protection for your home, business, or event. We stand out for our commitment to
excellence, transparency, and client satisfaction, making us the trusted choice for
security services across the UK.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
