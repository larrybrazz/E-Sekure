import React from 'react'
import "./Service.css"
import BookingForm from './BookingForm'

const Service = () => {
  return (
    <div>
      <div className='bg-orange-600 text-center mt-16 py-8'>
        <h1 className='text-3xl font-bold text-white'>Services</h1>
        <div></div>
      </div>
      <div className=''>
        <div className='flex items-center justify-center p-6'>
          <div className='bg-zinc-400 p-6 -mr-40 sm:w-[50%] text-center z-30'>
            <h1 className='tex-xl font-semibold'>Private Hire</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum quos fugiat praesentium quisquam culpa corporis, aut doloribus velit laboriosam perspiciatis error magni eaque tenetur labore blanditiis. Laudantium amet sunt suscipit.</p>
          </div>
          <img className=' w-[50%] h-[250px]' src="images/Esekure2.jpeg" alt="" />
        </div>

        <div className='bg-orange-600 flex items-center justify-center p-6'>
          <img className=' w-[50%] h-[250px]' src="images/Esekure2.jpeg" alt="" />
          <div className='bg-zinc-400 p-6 -ml-40 sm:w-[50%] text-center'>
            <h1 className='tex-xl font-semibold'>Private Hire</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum quos fugiat praesentium quisquam culpa corporis, aut doloribus velit laboriosam perspiciatis error magni eaque tenetur labore blanditiis. Laudantium amet sunt suscipit.</p>
          </div>
        </div>
        <div className='flex items-center justify-center p-6'>
          <div className='bg-zinc-400 p-6 -mr-40 sm:w-[50%] text-center z-30'>
            <h1 className='tex-xl font-semibold'>Private Hire</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum quos fugiat praesentium quisquam culpa corporis, aut doloribus velit laboriosam perspiciatis error magni eaque tenetur labore blanditiis. Laudantium amet sunt suscipit.</p>
          </div>
          <img className=' w-[50%] h-[250px]' src="images/Esekure2.jpeg" alt="" />
        </div>
         <div className='bg-orange-600 flex items-center justify-center p-6'>
          <img className=' w-[50%] h-[250px]' src="images/Esekure2.jpeg" alt="" />
          <div className='bg-zinc-400 p-6 -ml-40 sm:w-[50%] text-center'>
            <h1 className='tex-xl font-semibold'>Private Hire</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum quos fugiat praesentium quisquam culpa corporis, aut doloribus velit laboriosam perspiciatis error magni eaque tenetur labore blanditiis. Laudantium amet sunt suscipit.</p>
          </div>
        </div> 
        {/* What set us apart */}
        <div className='service text-white text-center p-4'>
          <h1 className='text-2xl font-semibold my-6'> What Set Us Apart From Our Counterparts</h1>
          <div className='grid grid-cols-2 sm:grid-cols-3'>
            <div className='p-4 border '>
              <i className="fa-solid fa-clock fa-2x "></i>
              <h3 className='text-lg font-bold'>Perfection </h3>
              <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit ametLorem ipsum dolor sit amet</p>
            </div>
            <div className='p-4 border '>
              <i className="fa-solid fa-clock fa-2x "></i>
              <h3 className='text-lg font-bold'>Perfection </h3>
              <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit ametLorem ipsum dolor sit amet</p>
            </div>
            <div className='p-4 border '>
              <i className="fa-solid fa-clock fa-2x "></i>
              <h3 className='text-lg font-bold'>Perfection </h3>
              <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit ametLorem ipsum dolor sit amet</p>
            </div>
            <div className='p-4 border '>
              <i className="fa-solid fa-clock fa-2x "></i>
              <h3 className='text-lg font-bold'>Perfection </h3>
              <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit ametLorem ipsum dolor sit amet</p>
            </div>
            <div className='p-4 border '>
              <i className="fa-solid fa-clock fa-2x "></i>
              <h3 className='text-lg font-bold'>Perfection </h3>
              <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit ametLorem ipsum dolor sit amet</p>
            </div>
            <div className='p-4 border '>
              <i className="fa-solid fa-clock fa-2x "></i>
              <h3 className='text-lg font-bold'>Perfection </h3>
              <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit ametLorem ipsum dolor sit amet</p>
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
            <div>
                <p className='font-semibold my-4'>Please fill out the form on this section to book a consultation with us and get quotes.<br/> Or call between 9:00 GMT and 6:00 GMT, <br />
                 Monday to  Friday</p>
                <div className='flex my-8'>
                    <span><i className="fa fa-phone-volume fa-3x mr-5"></i></span>
                    <span className='text-xl font-semibold'>Call  <br /> <span className='text-orange-600'>+44(0)7823719099</span> </span>   
                </div>
                <div className='flex my-8'>
                    <span><i className="fa fa-envelope fa-3x mr-5"></i></span>
                    <span className='text-xl font-semibold'> Email <br /> <span className='text-orange-600'><a href="mailto:lexzydavies@gmail.com?subject&body='Hello from Olanrewaju' &body='Just sating hi'">Larrybrazz70@gmail.com</a></span></span>   
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