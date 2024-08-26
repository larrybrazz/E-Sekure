import React from 'react';

const Testimonial = () => {
  return (
    <div className='testimonial-container'>
      <div className='container mx-auto space-y-8 py-8'>
        <h1 className='text-2xl font-semibold text-white'>
          What our previous clients have to say...
        </h1>
        
        <div className='grid grid-cols-1 mx-4 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {Array(4)
            .fill('')
            .map((_, index) => (
              <div
                key={index}
                className='flex flex-col justify-between items-center bg-zinc-400 rounded-xl shadow-lg overflow-hidden'
              >
                <img
                  className='w-[150px] h-[150px] object-cover rounded-full mt-4'
                  src={`images/person${index + 1}.webp`}
                  alt={`Client ${index + 1}`}
                />
                <div className='text-center bg-orange-400 text-white p-4 w-full'>
                  <h3 className='text-black font-semibold mb-2'>Elisabeth Erik</h3>
                  <p className='text-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus tempora voluptas cum nisi? Excepturi omnis iusto veniam,
                    ullam cumque laudantium quos incidunt.
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
