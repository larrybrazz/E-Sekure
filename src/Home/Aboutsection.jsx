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
        <div className="about-section flex flex-col md:flex-row gap-6 p-4">
          {/* Who We Are Section */}
          <div className="about-item bg-zinc-200 rounded-xl p-4">
            <div className="flex items-center space-x-4 md:space-x-8">
              <img className="h-[100px] rounded-full" src="images/who.gif" alt="Illustration of who we are" />
              <h2 className="text-2xl font-bold">Who We Are?</h2>
            </div>
            <div className="space-y-4 bg-zinc-100 p-4 rounded-b-lg hover:shadow-lg transition-shadow shadow-orange-400">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quas consectetur eos placeat esse minima ipsam mollitia architecto earum similique, soluta quaerat amet laudantium sint cumque vero quod veritatis explicabo.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, distinctio sint! Dicta necessitatibus laboriosam maxime sint eum, quae nisi quasi quis ex quisquam alias aliquam minima amet quibusdam accusantium ipsum?
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quas consectetur eos placeat esse minima ipsam mollitia architecto earum similique, soluta quaerat amet laudantium sint cumque vero quod veritatis explicabo.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, distinctio sint! Dicta necessitatibus laboriosam maxime sint eum, quae nisi quasi quis ex quisquam alias aliquam minima amet quibusdam accusantium ipsum?
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quas consectetur eos placeat esse minima ipsam mollitia architecto earum similique, soluta quaerat amet laudantium sint cumque vero quod veritatis explicabo.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, distinctio sint! Dicta necessitatibus laboriosam maxime sint eum, quae nisi quasi quis ex quisquam alias aliquam minima amet quibusdam accusantium ipsum?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
