import React, { useEffect } from 'react'
import "./Service.css"
import BookingForm from './BookingForm'

const Service = () => {

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#booking-form") {
      const element = document.getElementById("booking-form");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
  return (
    <div>
      <div className='bg-orange-600 text-center mt-16 py-8'>
        <h1 className='text-3xl font-bold text-white'>Services</h1>
         <div className='flex justify-center mt-2 mb-8'>
            <span className=" w-[100px] flex items-center  space-x-2">
          <p className="dash"></p> <p className="dot"></p>{" "}
          <p className="dash"></p>
        </span>
        </div>
      </div>
      <div className=''>
        <div className='flex items-center justify-center p-6'>
          <div className='bg-zinc-400 p-6 -mr-40 sm:w-[50%] text-center z-30'>
            <h1 className='tex-xl font-semibold'>Retail Security</h1>
            <p>Protect your retail business from theft and loss with E-sekure Security Services' expert retail security solutions. Our vigilant security personnel are trained to deter shoplifting, manage crowd control, and ensure a safe shopping experience for your customers, helping you safeguard your assets and reputation.</p>
          </div>
          <img className=' w-[50%] h-[250px]' src="images/Esekure2.jpeg" alt="" />
        </div>

        <div className='bg-orange-600 flex items-center justify-center p-6'>
          <img className=' w-[50%] h-[250px]' src="images/Esekure2.jpeg" alt="" />
          <div className='bg-zinc-400 p-6 -ml-40 sm:w-[50%] text-center'>
            <h1 className='tex-xl font-semibold'>Event Supervision</h1>
            <p>Make your event a success with E-sekure Security Services' event supervision. Our experienced security team ensures a safe, organized, and enjoyable environment for all attendees. Whether it's a small gathering or a large-scale event, we provide customized security solutions to meet your specific needs.</p>
          </div>
        </div>
        <div className='flex items-center justify-center p-6'>
          <div className='bg-zinc-400 p-6 -mr-40 sm:w-[50%] text-center z-30'>
            <h1 className='tex-xl font-semibold'> Site and Mobile Security</h1>
            <p>Safeguard your property with our comprehensive site and mobile security services. E-secure Security Services offers around-the-clock protection, with regular patrols and rapid response to any incidents. Our team ensures your site is secure, whether it's a construction site, industrial facility, or residential area.</p>
          </div>
          <img className=' w-[50%] h-[250px]' src="images/Esekure2.jpeg" alt="" />
        </div>
         <div className='bg-orange-600 flex items-center justify-center p-6'>
          <img className=' w-[50%] h-[250px]' src="images/Esekure2.jpeg" alt="" />
          <div className='bg-zinc-400 p-6 -ml-40 sm:w-[50%] text-center'>
            <h1 className='tex-xl font-semibold'>Hotel Security</h1>
            <p>Provide your guests with peace of mind through E-secure Security Services' hotel security solutions. Our discreet and professional security personnel are trained to handle the unique challenges of the hospitality industry, ensuring a safe and secure environment without disrupting the guest experience.</p>
          </div>
        </div> 
        <div className='flex items-center justify-center p-6'>
          <div className='bg-zinc-400 p-6 -mr-40 sm:w-[50%] text-center z-30'>
            <h1 className='tex-xl font-semibold'> Specialist Security</h1>
            <p>E-secure Security Services offers tailored specialist security solutions to meet your unique needs. Whether it's close protection, high-risk asset protection, or sensitive information security, our experts are equipped with the skills and experience to handle complex security challenges effectively.</p>
          </div>
          <img className=' w-[50%] h-[250px]' src="images/Esekure2.jpeg" alt="" />
        </div>
         <div className='bg-orange-600 flex items-center justify-center p-6'>
          <img className=' w-[50%] h-[250px]' src="images/Esekure2.jpeg" alt="" />
          <div className='bg-zinc-400 p-6 -ml-40 sm:w-[50%] text-center'>
            <h1 className='tex-xl font-semibold'>Corporate Security</h1>
            <p>Maintain a secure and professional environment in your workplace with E-secure Security Services' corporate security solutions. Our security experts are trained to handle corporate settings, providing services such as access control, surveillance, and emergency response, ensuring the safety of your employees and assets.</p>
          </div>
        </div>
        <div className='flex items-center justify-center p-6'>
          <div className='bg-zinc-400 p-6 -mr-40 sm:w-[50%] text-center z-30'>
            <h1 className='tex-xl font-semibold'> Exceptional Training Programs</h1>
            <p>Equip your team with industry-leading security training through E-secure Security Services. Our excellent training programs cover a range of topics, including conflict management, first aid, and advanced security techniques, ensuring your staff is well-prepared to handle any security situation with confidence.</p>
          </div>
          <img className=' w-[50%] h-[250px]' src="images/Esekure2.jpeg" alt="" />
        </div>
        <div className='bg-orange-600 flex items-center justify-center p-6'>
          <img className=' w-[50%] h-[250px]' src="images/Esekure2.jpeg" alt="" />
          <div className='bg-zinc-400 p-6 -ml-40 sm:w-[50%] text-center'>
            <h1 className='tex-xl font-semibold'>Mobile Patrols</h1>
            <p>Deter potential threats with E-secure Security Services' mobile patrols. Our highly visible, random patrols are designed to prevent criminal activity and provide a rapid response to any incidents. Whether it's day or night, our mobile patrols ensure your property remains secure.</p>
          </div>
        </div>
        <div className='flex items-center justify-center p-6'>
          <div className='bg-zinc-400 p-6 -mr-40 sm:w-[50%] text-center z-30'>
            <h1 className='tex-xl font-semibold'> Health and Safety</h1>
            <p>Respond quickly to any security breaches with E-secure Security Services' keyholding and alarm response services. We offer 24/7 monitoring and rapid response to alarms, ensuring your property is protected at all times. Let us handle the security while you enjoy peace of mind.</p>
          </div>
          <img className=' w-[50%] h-[250px]' src="images/Esekure2.jpeg" alt="" />
        </div>
        <div className='bg-orange-600 flex items-center justify-center p-6'>
          <img className=' w-[50%] h-[250px]' src="images/Esekure2.jpeg" alt="" />
          <div className='bg-zinc-400 p-6 -ml-40 sm:w-[50%] text-center'>
            <h1 className='tex-xl font-semibold'>Keyholding and Alarm Response</h1>
            <p>Respond quickly to any security breaches with E-secure Security Services' keyholding and alarm response services. We offer 24/7 monitoring and rapid response to alarms, ensuring your property is protected at all times. Let us handle the security while you enjoy peace of mind.
            </p>
          </div>
        </div>
        {/* What set us apart */}
        <div className='service text-white text-center p-4'>
          <h1 className='text-2xl font-semibold my-6'> What Set Us Apart From Our Counterparts</h1>
          <div className='grid grid-cols-2 sm:grid-cols-3'>
            <div className='p-4 border '>
              <i className="fa-solid fa-diamond fa-2x "></i>
              <h3 className='text-lg font-bold'>Perfection </h3>
              <p>We strive for flawless execution in every aspect of our service, ensuring that no detail is overlooked.</p>
            </div>
            <div className='p-4 border '>
              <i className="fa-solid fa-lightbulb fa-2x "></i>
              <h3 className='text-lg font-bold'>Innovation </h3>
              <p>We constantly integrate the latest security technologies and methodologies, keeping our clients ahead of potential threats.</p>
            </div>
            <div className='p-4 border '>
              <i className="fa-solid fa-sliders fa-2x "></i>
              <h3 className='text-lg font-bold'>Customization </h3>
              <p>We provide tailored security solutions that fit the unique needs and challenges of each client.</p>
            </div>
            <div className='p-4 border '>
              <i className="fa-solid fa-clock fa-2x "></i>
              <h3 className='text-lg font-bold'>Proactive Approach </h3>
              <p>We anticipate and neutralize threats before they arise, offering peace of mind through preventive measures.</p>
            </div>
            <div className='p-4 border '>
              <i className="fa-solid fa-hat-cowboy fa-2x "></i>
              <h3 className='text-lg font-bold'>Expertise </h3>
              <p>Our team comprises industry veterans with extensive experience and specialized knowledge in security management.</p>
            </div>
            <div className='p-4 border '>
              <i className="fa-solid fa-handshake fa-2x "></i>
              <h3 className='text-lg font-bold'>Trust and Integrity </h3>
              <p>We build lasting relationships based on transparency, reliability, and a deep commitment to our clients' safety.</p>
            </div>

          </div>
        </div>
        {/* Booking Form */}
        <div>
          <div className='bg-zinc-500 container mx-auto text-white my-4 rounded-md'>
      <div className='text-center'>
        <p className='text-orange-600 text-xl py-4'>Book a Consultation Today!</p>
        <h2 className='text-3xl font-bold py-3'> Connect with Us with <br /> Confidence</h2>
        </div>
        <div className="grid md:grid-cols-2 grid-col p-4 mt-8">
            <div className='text-xl'>
                <p className='font-semibold my-4'>Please fill out the form on this section to book a consultation with us and get quotes.<br/> Or call between 9:00 GMT and 6:00 GMT, <br />
                 Monday to  Friday</p>
                <div className='flex my-8'>
                    <span><i className="fa fa-phone-volume fa-3x mr-5"></i></span>
                    <span className='text-xl font-semibold'>Call  <br /> <span className='text-orange-600'>+44(0)7740049748</span> </span>   
                </div>
                <div className='flex my-8'>
                    <span><i className="fa fa-envelope fa-3x mr-5"></i></span>
                    <span className='text-xl font-semibold'> Email <br /> <span className='text-orange-600'><a href="mailto:lexzydavies@gmail.com?subject&body='Hello from Olanrewaju' &body='Just saying hi'">e-sekure@hotmail.com</a></span></span>   
                </div>
            </div>
          <BookingForm/>
      </div>
 
    </div>
        </div>
   </div>
  </div>
  )
}

export default Service