import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import "./navbar.css"
const Navbar = ({hidden}) => {
 const [open, setOpen] = useState(false)
  return (
    <div className={`navbar  ${hidden ? 'navbar-hidden' : ''}`} >
      <nav className="container mx-auto font-bold py-4 hidden md:flex justify-between items-center">
        <h1 className="text-4xl font-serif">E-Sekure</h1>
        <p className="text-xl hover:text-yellow-700">
          <NavLink to="/">Home</NavLink>
        </p>
        <p className="text-xl hover:text-yellow-700">
          <NavLink to="/about">About</NavLink> 
        </p>
        <p className="text-xl hover:text-yellow-700">
          <NavLink to="/services">Services</NavLink>
        </p>
        <p className="text-xl hover:text-yellow-700">
          <NavLink to="/clients">Clients/Certifications</NavLink>
        </p>
        <p className="text-xl hover:text-yellow-700">
          <NavLink to="/career">Career</NavLink>
        </p>
        <p className="text-xl hover:text-yellow-700">
          <NavLink to="/contact">Contact</NavLink>
        </p>
      </nav>

      <nav className="container mx-auto font-bold  py-2 md:hidden">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-serif">E-Sekure</h1>
          <div>
            <span onClick={() => setOpen((prev) => !prev)}>
              <i className="fa fa-bars text-2xl"></i>
            </span>
          </div>
        </div>
        <div className="menu">
          <ul className={`menu-list`} style={{ width: open ? "40vh" : "0" }}>
            <li
              onClick={() => setOpen((prev) => !prev)}
              className="menu-item hover:text-yellow-700"
            >
              <NavLink to="/">Home</NavLink>
            </li>
            <li
              onClick={() => setOpen((prev) => !prev)}
              className="menu-item hover:text-yellow-700"
            >
              <NavLink to="/about">About</NavLink>
            </li>
            <li
              onClick={() => setOpen((prev) => !prev)}
              className="menu-item hover:text-yellow-700"
            >
              <NavLink to="/services">Services</NavLink>
            </li>
            <li
              onClick={() => setOpen((prev) => !prev)}
              className="menu-item hover:text-yellow-700"
            >
              <NavLink to="/clients">Clients/Certifications</NavLink>
            </li>
            <li
              onClick={() => setOpen((prev) => !prev)}
              className="menu-item hover:text-yellow-700"
            >
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar