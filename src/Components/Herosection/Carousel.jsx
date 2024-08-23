import React, { useEffect, useRef, useState } from "react";
import "./carousel.scss";

const Carousel = () => {
  const carouselData = [
    {
      img: "images/360_F_813997721_JyDp9WbmecLbpxRNxIkc71mf7YvLUXDY.jpg",
      title: "Dream Space",
      info: ` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi in
            voluptates voluptatum blanditiis aliquid voluptatem nam pariatur,
            doloribus saepe illum totam inventore beatae, incidunt impedit.`,
    },
    {
      img: "images/istockphoto-1618820974-170667a.webp",
      title: "Dream Space",
      info: ` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi in
            voluptates voluptatum blanditiis aliquid voluptatem nam pariatur,
            doloribus saepe illum totam inventore beatae, incidunt impedit.`,
    },
    {
      img: "images/stock-photo-data-security-concept.png",
      title: "Dream Space",
      info: ` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi in
            voluptates voluptatum blanditiis aliquid voluptatem nam pariatur,
            doloribus saepe illum totam inventore beatae, incidunt impedit.`,
    },
    {
      img: "images/istockphoto-1311088386-170667a.webp",
      title: "Dream Space",
      info: ` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi in
            voluptates voluptatum blanditiis aliquid voluptatem nam pariatur,
            doloribus saepe illum totam inventore beatae, incidunt impedit.`,
    },
  ];
  const carouselRef = useRef(null);
  const [currentState, setCurrenState] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentState === carouselData.length - 1) {
        setCurrenState(0);
      } else {
        setCurrenState(currentState + 1);
      }
    }, 5000);
    updateTextClasses();
    return () => clearTimeout(timer);
  }, [currentState]);

  const updateTextClasses = () => {
    if (carouselRef.current) {
      const textElements = carouselRef.current.querySelectorAll(
        ".carousel-text h1, .carousel-text p, .carousel-text .button"
      );

      textElements.forEach((element, index) => {
        if (currentState === 0) {
          element.classList.add("active");

          // Remove the "active class after 3 seconds"
          setTimeout(() => {
            element.classList.remove("active");
          }, 3000);
        }
      });
      textElements.forEach((element, index) => {
        if (currentState) {
          element.classList.add("active");

          // Remove the 'active'class after 3seconds
          setTimeout(() => {
            element.classList.remove("active");
          }, 3000);
        }
      });
    }
  };
  return (
    <div className="carousel">
      <div className="relative">
        <div className="grid grid-cols-2 sm:block">
          <img
            className="h-[80vh] w-[100%] slide-right"
            src={carouselData[currentState].img}
            alt=""
          />
        </div>
        <div
          ref={carouselRef}
          className=" carousel-text absolute top-28 md:top-80 bottom-0 left-0 right-0 space-y-6 "
        >
          <h1 className="slide-up">{carouselData[currentState].title}</h1>
          <p className="fade-in">{carouselData[currentState].info} </p>
          <div className="button slide-left">
          <button className="btn border rounded-lg p-2 font-semibold bg-orange-400 text-white ">Book Consultation Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Carousel;
