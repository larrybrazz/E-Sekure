import axios from 'axios';
import React, { useState } from 'react'

const Career = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      file: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('file', formData.file);

    axios.post('/send-cv', data)
      .then((response) => {
        alert('Your CV has been sent successfully!');
        setFormData({
          name: '',
          email: '',
          file: null,
        });
      })
      .catch((error) => {
        console.error('There was an error sending the email!', error);
        alert('Failed to send your CV. Please try again.');
      });
  };
  return (
    <div>
    <div style={{backgroundImage: `url("images/dream-job.jpg")`, height: "20vh", backgroundSize: "cover", backgroundPosition: "center"}}>
      <h1 className='text-center text-2xl font-bold text-white pt-20'> Career</h1>
      </div>
      <div className='py-6 bg-orange-500'>
      </div>
      <div className='w-11/12 mx-auto text-center p-6 bg-zinc-400 my-10 space-y-4' >
        <h2 className='text-2xl text-orange-500 font-bold'>Join the E-Sekure Team!</h2>
        <h5 className='text-lg font-bold font-mono text-white'>Secure Your Future with Us</h5>
        <p className='font-sans font-semibold'>At Esekure, we’re always on the lookout for dedicated professionals to join our growing team. If you’re passionate about a career in security and ready to make a difference, we want to hear from you.</p>
      </div>
      <div className='py-4 bg-orange-500'>

      </div>
      <div className='bg-orange-500'>
        <div className='w-11/12 mx-auto grid md:grid-cols-2 gap-4 bg-white'>
          <div className='m-6 bg-orange-500 p-4 space-y-4 shadow-xl md:h-[60vh]' >
              <h1 className='text-lg font-bold text-white '>Think You Have What It Takes?</h1>
          <h3 className='font-bold text-zinc-700'>E-Sekure Wants YOU!</h3>
            <p className='text-zinc-700'>We’re expanding rapidly, and we want you to be a part of our success. Join our elite team of security experts, serving clients across the region and beyond. We’re seeking accredited professionals with drive, enthusiasm, and a commitment to excellence. If you’re eager to succeed and thrive in a supportive team environment, Esekure is the place for you.</p>
            <img className='w-full h-[150px]' src="images/handshake2.webp" alt="" />
          </div>
          <div className='m-6 shadow-xl md:h-[60vh]'>
            <img src="images/security1.jpg" alt="" />
          </div>
          <div className='m-6 shadow-xl '>
            <img className='h-full w-full' src="images/security5.webp" alt="" />
          </div>
          <div className='m-6 space-y-4  shadow-xl p-4 bg-orange-500 '>
            <h2 className='text-xl text-white font-bold'>Why E-Sekure!</h2>
          <ul className='text-zinc-800'>
            <li>Be a part of a leading security company</li>
            <li>Work with a suvccessfull and dynamic team</li>
            <li>Enjoy competitive pay and benefits</li>
            <li>Receive ongoing career development</li>
            <li>Join a company that values</li>
          </ul>
          <h3 className='font-semibold text-lg'>Your safety is our success</h3>
          <p className='font-bold'>
            Get in Touch Today
          </p>
          <p className='text-white'>Ready to take the next step? Send us your CV today!</p>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full px-2 py-4 rounded-lg outline-none mb-3"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full px-2 py-4 rounded-lg outline-none mb-3"
        />
        <input
          type="file"
          name="file"
          onChange={handleFileChange}
          required
          className="w-full px-2 py-4 rounded-lg outline-none mb-3"
        />
        <button type="submit" className="btn border rounded-lg p-2 font-semibold bg-orange-400 text-white">
          Send Your CV
        </button>
      </form>
          </div>
       </div>
      </div>
      <div className='py-6 bg-orange-500'>
      </div>
    </div>
  )
}

export default Career