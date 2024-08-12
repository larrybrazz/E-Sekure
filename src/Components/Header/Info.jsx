import React from 'react'

const Info = () => {
  return (
    <div className="container mx-auto mb-6">
      <div className="text-xm text-zinc-600 md:flex justify-between hidden py-2 border-b-2 border-b-black  ">
        <div className="flex flex-wrap space-x-4">
          <p>
            <i className='fa fa-phone'></i> <span className="hover:text-palevioletred"> +447823719099</span>{" "}
          </p>
          <p>
            <i className='fa fa-envelope'></i>
            <span className="hover:text-palevioletred">
              {" "}
              info@gmail.com
            </span>{" "}
          </p>
          <p> <i className='fa fa-location-dot'></i> A. 23 Ama kip kip, Newcastle, United Kingdom</p>
        </div>

        <div className="flex space-x-4">
          <span>
            <i className="fa fa-facebook hover:text-blue-500 transition-all" />{" "}
          </span>
          <span>
            <i className="fa fa-instagram hover:text-black transition-all" />{" "}
          </span>
          <span>
            <i className="fa fa-snapchat hover:text-yellow-500 transition-all" />{" "}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Info