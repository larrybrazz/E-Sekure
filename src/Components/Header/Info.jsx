import React from 'react'

const Info = () => {
  return (
    <div className="container mx-auto mb-6">
      <div className="text-xm text-zinc-600 md:flex justify-between hidden py-2 border-b-2 border-b-black  ">
        <div className="flex flex-wrap space-x-4">
          <p>
            <i className='fa fa-phone'></i> <span className="hover:text-palevioletred"> +44(0)7740049748</span>{" "}
          </p>
          <p>
            <i className='fa fa-envelope'></i>
            <span className="hover:text-palevioletred">
              {" "}
              e-sekure@hotmail.com
            </span>{" "}
          </p>
          <p> <i className='fa fa-location-dot'></i> 38, Regents Street, Blyth, NE24 1LS</p>
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