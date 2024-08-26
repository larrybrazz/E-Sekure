import React from 'react';

const Contact = () => {
  return (
    <div>
      <div className='bg-orange-500 py-10 my-16 space-y-6'>
        <h1 className='text-center text-2xl font-bold text-white'>Contact</h1>
        <div className='relative mx-24 flex justify-center'>
          <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-6 -mb-20 relative z-10'>
            <div className='text-center p-4 rounded-xl bg-white space-y-6 shadow-2xl h-[200px]'>
              <i className='fa fa-location-dot fa-xl'></i>
              <h3 className='text-lg font-bold'>Address</h3>
              <p>St Mary College, Fenham Newcastle, United Kingdom, NE4 9YH</p>
            </div>
            <div className='text-center p-4 rounded-xl bg-white space-y-6 shadow-2xl h-[200px]'>
              <i className='fa fa-phone fa-xl'></i>
              <h3 className='text-lg font-bold'>Phone Number</h3>
              <p>+4478075678898</p>
            </div>
            <div className='text-center p-4 rounded-xl bg-white space-y-6 shadow-2xl h-[200px]'>
              <i className='fa fa-fax fa-xl'></i>
              <h3 className='text-lg font-bold'>Fax Number</h3>
              <p>2345678901234567</p>
            </div>
            <div className='text-center p-4 rounded-xl bg-white space-y-6 shadow-2xl h-[200px]'>
              <i className='fa fa-envelope fa-xl'></i>
              <h3 className='text-lg font-bold'>Email</h3>
              <p>awsedrfghjkl@hotmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white relative z-0 pt-20'>
        <div className='grid md:grid-cols-2 gap-6 container mx-auto'>
          <div className='space-y-6 p-8'>
            <h1 className='text-orange-500 text-2xl font-bold'>Get In Touch</h1>
            <p className='text-lg'>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit, amet cons officia nobis quas qui rem doloremque omnis natus.</p>
            <div>
              <i className='fa fa-facebook text-blue-500 fa-xl'></i>
              <i className='fa fa-instagram fa-xl'></i>
              <i className='fa fa-x fa-xl'></i>
              <i className='fa fa-snapchat text-yellow-500 fa-xl'></i>
            </div>
          </div>
          <form action="" className='p-6 space-y-8'>
            <div className='flex justify-between items-center'>
              <div className=''>
                <label htmlFor="" className='font-bold'>Full Name</label> <br />
                <input className='outline-none border border-b-black bg-orange-500 p-2' type="text" name="" id="" placeholder='Full Name' />
              </div>
              <div className=''>
                <label htmlFor="" className='font-bold'>Email</label> <br />
                <input className='outline-none border border-b-black bg-orange-500 p-2' type="text" name="" id="" placeholder='Email' />
              </div>
            </div>
            <div>
              <label className='font-bold' htmlFor="">Message</label> <br />
              <textarea className='w-full outline-none border border-b-black bg-orange-500 p-2' name="" id="" placeholder='Enter Your message'></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
