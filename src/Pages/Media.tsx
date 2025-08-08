
import React, { useRef, useEffect, useState } from 'react';
import image1 from '../assets/IMG-20250730-WA0005.jpg'
import image2 from '../assets/IMG-20250730-WA0004.jpg'
import image3 from '../assets/IMG-20250730-WA0006.jpg'
import image4 from '../assets/IMG-20250730-WA0008.jpg'
import image5 from '../assets/IMG-20250730-WA0015.jpg'


const Media: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
const slideIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);


  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
  ];

  const totalSlides = images.length;

  const goToSlide = (index: number) => {
    const slider = sliderRef.current;
    if (!slider) return;
    const slideWidth = slider.children[0].clientWidth;
    slider.style.transform = `translateX(-${index * slideWidth}px)`;
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const resetAutoSlide = () => {
    if (slideIntervalRef.current) clearInterval(slideIntervalRef.current);
    slideIntervalRef.current = setInterval(nextSlide, 3000);
  };

  // Set up auto slide and resize handler
  useEffect(() => {
    slideIntervalRef.current = setInterval(nextSlide, 3000);
    window.addEventListener('resize', () => goToSlide(currentSlide));

    return () => {
      if (slideIntervalRef.current) clearInterval(slideIntervalRef.current);
      window.removeEventListener('resize', () => goToSlide(currentSlide));
    };
  }, []);

  // Slide transition on slide change
  useEffect(() => {
    goToSlide(currentSlide);
  }, [currentSlide]);

  return (
    <>
    <div className='px-4 '>
      <h1 className='font-bold text-2xl'>View Pictures of just concluded graduation</h1>
     <p className="text-gray-700 leading-relaxed text-base mb-5">
        At Dunamis Kings Academy, every day is filled with learning, laughter, and unforgettable memories. Browse through our photo gallery to catch a glimpse of the vibrant life within our classrooms, playgrounds, and school events.    
      </p>
    <div className="flex items-center mb-10">
      <button
        onClick={() => {
          prevSlide();
          resetAutoSlide();
        }}
        className="md:p-2 p-1 bg-black/30 md:mr-6 mr-2 rounded-full hover:bg-black/50"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div className="w-full max-w-3xl overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          ref={sliderRef}
        >
          {images.map((src, index) => (
            <img key={index} src={src} className="w-full flex-shrink-0" alt={`Slide ${index + 1}`} />
          ))}
        </div>
      </div>

      <button
        onClick={() => {
          nextSlide();
          resetAutoSlide();
        }}
        className="p-1 md:p-2 bg-black/30 md:ml-6 ml-2 rounded-full hover:bg-black/50"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
    </div>
    </>
  );
};

export default Media;
