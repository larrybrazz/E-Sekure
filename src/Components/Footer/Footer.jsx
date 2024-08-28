import React from 'react'
import { Link } from 'react-router-dom';

import "./footer.css"

const Footer = () => {
  return (
    <div className="footer grid sm:grid-cols-2 md:grid-cols-4 bg-zinc-900 py-4 text-white">
      <div className="flex items-center sm:border-r-2 border-r-palevioletred">
        <div className="  px-2 space-y-4">
          <h1 className="font-bold text-3xl"> <Link to={"/"}>
              E-Sekure
            </Link></h1>
          <div className="text-zinc-400 flex justify-between">
            <span>
              <i className="fa fa-facebook hover:text-blue-500"></i>
            </span>
            <span>
              <i className="fa fa-twitter  hover:text-blue-500"></i>
            </span>
            <span>
              <i className="fa fa-snap  hover:text-orange-500"></i>
            </span>
            <span>
              <i className="fa fa-instagram  hover:text-orange"></i>
            </span>
          </div>
        </div>
      </div>
       <div className="about sm:border-r-2 border-r-palevioletred p-4 space-y-4">
        <h1 className="font-bold text-xl uppercase"> Quick Links</h1>
        <ul className="space-y-4">
          <li>
            <Link to={"/about"} >About Us</Link>
          </li>
          <li >
            <Link onClick={() => window.location.href = "/services#booking-form"}>Book Consultation for Free </Link>
          </li>

          <li>
            <Link to={"/clients"}>Certifications</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
      <div className="about sm:border-r-2 border-r-palevioletred p-4 space-y-4">
        <h1 className="font-bold text-xl uppercase"> Services</h1>
        <ul className="space-y-4">
          <li>
            <Link to={"/services"}>Specailty Security</Link>
          </li>
          <li>
            <Link to={"/services"}>Corporate Security</Link>
          </li>
          <li>
            <Link to={"/services"}>Event Supervision</Link>
          </li>
          <li>
            <Link to={"/services"}>Site and Mobile Security</Link>
          </li>
         
        </ul>
      </div>
      <div className="about sm:border-r-2 p-4 space-y-4">
        <h1 className="font-bold text-xl uppercase"> Contact</h1>
        <ul className="space-y-4">
          <li className="flex items-center space-x-4 text-sm">
            <span>
              <i className="fa fa-location-dot"></i>
            </span>
            <span>38, Regents Street, Blyth, NE24 1LS</span>
          </li>

          <li className="flex items-center space-x-4 text-sm">
            <span>
              <i className="fa fa-phone"></i>
            </span>
            <span>+44(0)7740049748</span>
          </li>

          <li className="flex items-center space-x-4">
            <span>
              <i className="fa fa-message"></i>
            </span>{" "}
            
            <span style={{ whiteSpace: "nowrap" }}>
              e-sekure@hotmail.com
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer