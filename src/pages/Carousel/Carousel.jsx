// @ts-nocheck
import { useState, useEffect, useRef, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const {slides} = useContext(AuthContext)




  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };
//   const prevSlide = () => {
//     setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

  // Use a ref to store the interval ID so we can clear it when the component unmounts
  const intervalRef = useRef();

  // Start the automatic sliding when the component mounts
  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 5000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalRef.current);
  }, []);
  // Reset the interval every time the active slide changes
  useEffect(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(nextSlide, 8000);
  }, [activeSlide]);

 
  return (
    <div className="relative h-96">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`${
            index === activeSlide ? "opacity-100 z-[-1]" : "opacity-0 z-0"
          } absolute top-0 left-0 w-full h-full transition-opacity ease-in duration-500`}
        >
          <img
            src={slide.sliderUrl}
            alt=''
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-y-0  w-full flex flex-col bg-black/50 ">
            <div className="mx-auto mt-10 md:mt-20 mb-4 ">
                <h2 className="text-white font-bold text-3xl md:text-4xl text-center  ">{slide.caption}</h2>
                <p className="text-white text-center text-xs md:text-sm">{slide.description}</p>
            </div>

            
          </div>
        </div>
      ))}
      
    </div>
  );
};

export default Carousel;
