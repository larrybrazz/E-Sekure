import React from 'react'
import "./about.css"
const About = () => {
  return (
    <div className='about-header mt-16 ' >
      <div className=' bg-orange-500 text-white text-center p-8'>
      <h1 className='text-center font-bold text-3xl  py-8'>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quos! Laboriosam porro numquam inventore dolor, exercitationem facere id neque esse beatae repellendus error assumenda quam repellat at accusantium sunt qui.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quos! Laboriosam porro numquam inventore dolor, exercitationem facere id neque esse beatae repellendus error assumenda quam repellat at accusantium sunt qui.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quos! Laboriosam porro numquam inventore dolor, exercitationem facere id neque esse beatae repellendus error assumenda quam repellat at accusantium sunt qui.
        </p>  
      </div>
      <div className='container mx-auto grid md:grid-cols-2 text-center gap-4 my-6 '>
        <img className='h-[95vh] w-full ' src="/images/Esekure1.jpeg" alt="" />
        <div className='text-center rounded-t-xl space-y-4 flex-1'>
          <div className='bg-zinc-400 text-white '>
              <h2 className='text-2xl font-bold p-4 bg-orange-400'>Vision</h2>
          <p className=' p-4 rounded'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id ipsam laboriosam laborum recusandae sequi, veniam enim fugit architecto. Quia magni ratione doloribus beatae voluptates debitis hic magnam tempore dolorum aliquid.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id ipsam laboriosam laborum recusandae sequi, veniam enim fugit architecto. Quia magni ratione doloribus beatae voluptates debitis hic magnam tempore dolorum aliquid.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id ipsam laboriosam laborum recusandae sequi, veniam enim fugit architecto. Quia magni ratione doloribus beatae voluptates debitis hic magnam tempore dolorum aliquid.
          </p>
          </div>
          <div className='bg-zinc-400 text-white '>
              <h2 className='text-2xl font-bold p-4 bg-orange-400'>Vision</h2>
          <p className=' p-4 rounded'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id ipsam laboriosam laborum recusandae sequi, veniam enim fugit architecto. Quia magni ratione doloribus beatae voluptates debitis hic magnam tempore dolorum aliquid.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id ipsam laboriosam laborum recusandae sequi, veniam enim fugit architecto. Quia magni ratione doloribus beatae voluptates debitis hic magnam tempore dolorum aliquid.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id ipsam laboriosam laborum recusandae sequi, veniam enim fugit architecto. Quia magni ratione doloribus beatae voluptates debitis hic magnam tempore dolorum aliquid.
          </p>
          </div>
          
        </div>
      </div>
      <div className='bg-orange-500 text-white text-center p-8'>

      </div>
      
    </div>
  )
}

export default About