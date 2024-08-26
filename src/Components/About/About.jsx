import React from 'react'
import "./about.css"
const About = () => {
  return (
    <div className='about-header mt-16 ' >
      <div className=' bg-orange-500 text-white text-center p-8'>
        <h1 className='text-center font-bold text-3xl  pt-8'>About Us</h1>
        <div className='flex justify-center mt-2 mb-8'>
            <span className=" w-[100px] flex items-center  space-x-2">
          <p className="dash"></p> <p className="dot"></p>{" "}
          <p className="dash"></p>
        </span>
        </div>
         
        <div className='grid sm:grid-cols-2 gap-8'> 
         <img className='h-[95vh] w-full ' src="/images/Esekure1.jpeg" alt="" />
          <div className='p-4 bg-zinc-400'>
              <p>
          At E-sekure Limited, your safety is our top priority. As a leading provider of bespoke
security solutions, we are dedicated to delivering the highest level of protection for
both individuals and businesses across the UK. Our mission is to ensure peace of mind
through unparalleled service, advanced technology, and a commitment to excellence
in everything we do.
With years of experience in the security industry, E-sekure Limited specializes in a
wide range of services, including residential security, corporate protection, and
tailored solutions designed to meet the unique needs of each client. Our team of
highly trained professionals brings expertise, reliability, and a deep understanding of
the latest security protocols to every project, ensuring that our clients receive the
best possible protection.
We believe that trust is earned through transparency and consistent performance.
That’s why we proudly showcase our successful track record through detailed case
studies   and   client   testimonials,   reflecting   our   dedication   to   quality   and
professionalism. Our website is designed to provide clear, comprehensive information
about our services, making it easy for you to request quotes, manage your security
needs, and connect with us directly.
At E-sekure Limited, we are committed to continuous improvement and staying ahead
of industry trends. Our website is not only a reflection of our brand but also a tool to
enhance client engagement and streamline the service experience. Whether you’re
seeking security for your home, business, or a special event, you can count on E-
sekure Limited to deliver reliable and effective solutions that safeguard what matters
most to you.
Explore our services, get to know our team, and discover how E-sekure Limited can
provide you with the security solutions you need to thrive in an uncertain world. Your
security is our business.
        </p>
          </div> 
        </div>
       
      </div>
      <div className='container mx-auto grid md:grid-cols-2 text-center gap-4 my-6 '>
        
          <div className='bg-zinc-400 text-white '>
              <h2 className='text-2xl font-bold p-4 bg-orange-400'>Vision</h2>
          <p className=' p-4 rounded'>
  Our vision is to be the most trusted and innovative provider of security solutions in the
UK, empowering individuals and businesses with unparalleled protection, peace of
mind, and a commitment to excellence that sets the standard in the security industry.

          </p>
          </div>
          <div className='bg-zinc-400 text-white '>
              <h2 className='text-2xl font-bold p-4 bg-orange-400'>Mision</h2>
          <p className=' p-4 rounded'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id ipsam laboriosam laborum recusandae sequi, veniam enim fugit architecto. Quia magni ratione doloribus beatae voluptates debitis hic magnam tempore dolorum aliquid.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id ipsam laboriosam laborum recusandae sequi, veniam enim fugit architecto. Quia magni ratione doloribus beatae voluptates debitis hic magnam tempore dolorum aliquid.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id ipsam laboriosam laborum recusandae sequi, veniam enim fugit architecto. Quia magni ratione doloribus beatae voluptates debitis hic magnam tempore dolorum aliquid.
          </p>
          </div>
      </div>
      <div className='bg-orange-500 text-white text-center p-8'>

      </div>
      
    </div>
  )
}

export default About