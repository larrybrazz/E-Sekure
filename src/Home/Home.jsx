import React from 'react'
import Notification from '../Components/Header/Info'
import Carousel from '../Components/Herosection/Carousel'
import Aboutsection from './Aboutsection'
import Servicessection from './Servicessection'
import Testimonial from '../Components/Testimonials/Testimonial'
import Clients from '../Components/Clients/Clients'
import Certifications from '../Components/Certifications/Certifications'


const Home = () => {
  return (
    <div> 
          <Carousel />
          <Aboutsection />
          <Servicessection />
          <Testimonial />
          <Clients />
          <Certifications/>
      {/* <Newsletter/> */}
    </div>
  )
}

export default Home