import React from 'react';

const Contact = () => {
  return (
    <div>
      <div className='bg-orange-500 py-10 my-16 space-y-6'>
        <h1 className='text-center text-2xl font-bold text-white'>Contact</h1>
               <div className='flex justify-center mt-2 mb-8 text-orange-600'>
            <span className=" w-[100px] flex items-center  space-x-2">
          <p className="dash"></p> <p className="dot"></p>{" "}
          <p className="dash"></p>
        </span>
        </div>
        <div className='relative mx-24 flex justify-center'>
          <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-6 -mb-20 relative z-10'>
            <div className='text-center p-4 rounded-xl bg-white space-y-6 shadow-2xl h-[200px]'>
              <i className='fa fa-location-dot fa-xl'></i>
              <h3 className='text-lg font-bold'>Address</h3>
              <p>38, Regents Street, Blyth, NE24 1LS</p>
            </div>
            <div className='text-center p-4 rounded-xl bg-white space-y-6 shadow-2xl h-[200px]'>
              <i className='fa fa-phone fa-xl'></i>
              <h3 className='text-lg font-bold'>Phone Number</h3>
              <p>+44(0)7740049748</p>
            </div>
            <div className='text-center p-4 rounded-xl bg-white space-y-6 shadow-2xl h-[200px]'>
              <i className='fa fa-fax fa-xl'></i>
              <h3 className='text-lg font-bold'>Fax Number</h3>
              <p>xxxxxxxxxx</p>
            </div>
            <div className='text-center p-4 rounded-xl bg-white space-y-6 shadow-2xl h-[200px]'>
              <i className='fa fa-envelope fa-xl'></i>
              <h3 className='text-lg font-bold'>Email</h3>
              <p>e-sekure@hotmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white relative z-0 pt-20'>
        <div className='grid md:grid-cols-2 gap-6 container mx-auto'>
          <div className='space-y-6 p-8'>
            <h1 className='text-orange-500 text-2xl font-bold'>Get In Touch</h1>
            <p className='text-lg'>Have questions or need a customized security solution?</p>
            <p> We're here to help. At Esekure, your safety and peace of mind are our top priorities. <br /> Reach out to us today, and let’s discuss how we can protect what matters most to you.</p>
            <div className='space-x-4'>
              <i className='fa fa-facebook text-blue-500 fa-xl'></i>
              <i className='fa fa-instagram fa-xl'></i>
              <i className='fa fa-x fa-xl'></i>
              <i className='fa fa-snapchat text-yellow-500 fa-xl'></i>
            </div>
          </div>
          <form action="" className='p-6 space-y-8'>
            <div className='flex flex-wrap justify-between items-center'>
              <div className=''>
                <label htmlFor="" className='font-bold'>Full Name</label> <br />
                <input className='outline-none border border-b-black bg-orange-500 p-2' type="text" name="" id="" placeholder='Full Name' />
              </div>
              <div className=''>
                <label htmlFor="" className='font-bold'>Phone</label> <br />
                <input className='outline-none border border-b-black bg-orange-500 p-2' type="number" name="" id="" placeholder='Phone Number' />
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
            <button className='w-full rounded-lg py-2 bg-orange-500 shadow-xl font-bold text-xl text-white '> Submit </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
