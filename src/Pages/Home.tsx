import {ArrowRight } from 'lucide-react';
import { GraduationCap, Award, HomeIcon } from 'lucide-react';
import image1 from '../assets/IMG-20250730-WA0005.jpg'
import image2 from '../assets/IMG-20250730-WA0004.jpg'
import image6 from '../assets/Dunamis graduation 1.jpg'
import image7 from '../assets/Dunamis kings graduation 2.jpg'
import image9 from '../assets/istockphoto-2213167292-612x612.webp'
import image10 from '../assets/istockphoto-1770690435-612x612.webp'
import image11 from '../assets/photo-1744809482817-9a9d4fc280af.avif'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VideoPlayer from '../Components/VideoPlayer';
import StudentSection from '../Components/StudentSection';
import WelcomeSection from '../Components/WelcomeSection';
import NewsAndUpdate from '../Components/NewsAndUpdate';
import { Link } from 'react-router-dom';




 

const links = [
  {
    title: "Dunamis Kings Academy",
    image: image1,
  },
  {
    title: "Student Experience",
    image: image6,
  },
  {
    title: "Media Gallery",
    image: image11,
  }
];



const Home = () => {



   

    const lists = [
  " Dunamis Kings Creche",
  "Dunamis Kings Pre-Nursery",
  "Dunamis Kings Nursery",
  "Dunamis Kings Basic Classes"
];

 

  const features = [
    {
      title: "Get to Know Us",
      image: image9, // Replace with your real image path
      description: 
      'we are a nurturing community where young minds grow, explore, and thrive. Our mission is to provide a safe, supportive, and inspiring environment that lays a strong foundation for lifelong learning.',
      button: "Learn More",
      href: '/about',
    },
    {
      title: "DKA Core Value",
      image: image10,
      description:
        "our core values guide everything we do. We believe in Excellence, Integrity, Respect, Compassion, and Responsibility.",
      button: "Tour Our Campuses",
      href: "/admmission",
    },
    {
      title: "Projects & Innovations",
      image: image11,
      description:
        "At Dunamis Kings Academy, innovation is nurtured through dedicated projects and learning groups.",
      button: "Learn More",
      href: "#",
    },
  ];


  

 return (
  <>
    <section
      id="section"
      className={`bg-gradient-to-b from-[#f7f9ff] via-[#fffbee] to-[#f7f9ff] h-full `}
    >
  

      <main className="flex-grow flex flex-col items-center px-6 sm:px-10 max-w-7xl mx-auto w-full">
        <button
          type="button"
          className="mt-10 mb-6 flex items-center space-x-2 border border-indigo-600 text-indigo-600 text-xs rounded-full px-4 pr-1.5 py-1.5 hover:bg-indigo-50 transition"
        >
          <span>Dunamis Kings Academy</span>
          <span className="flex items-center justify-center size-6 p-1 rounded-full bg-indigo-400">
            <svg width="14" height="11" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 6.5h14M9.5 1 15 6.5 9.5 12" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>

        <h1 className="text-center text-gray-900 font-semibold text-3xl sm:text-4xl md:text-5xl max-w-2xl leading-tight">
          Empowering future leaders through 

{' '}
          <span className="text-indigo-600">quality Education</span>
        </h1>

        <p className="mt-4 text-center text-gray-600 max-w-md text-sm sm:text-base leading-relaxed">
           DunamisKings - Committed to excellence in every student journey
        </p>
         
         <Link to='/about' onClick={() => scrollTo(0,0)}>
        <button
          type="button"
          className="mt-8 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400 text-white px-6 pr-2.5 py-2.5 rounded-full text-sm font-medium flex items-center space-x-2 hover:bg-indigo-700 transition"
        >
          <span>Read About Us</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.821 11.999h13.43m0 0-6.714-6.715m6.715 6.715-6.715 6.715" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        </Link>

        <div aria-label="Photos of leaders" className="mt-12 flex max-md:overflow-x-auto gap-6 max-w-4xl w-full pb-6">
          {[
            image1,
            image2,
            image6,
            image7
          ].map((src, index) => (
            <img
              key={index}
              src={src}
              alt=""
              width="120"
              height="140"
              className="w-36 h-44 rounded-lg hover:-translate-y-1 transition duration-300 object-cover flex-shrink-0"
            />
          ))}
        </div>
      </main>
    </section>

    
   <WelcomeSection 
   text1='Welcome To'
   text2= 'Dunamis Kings Academy'
   aboutUs='About Us'
   contactManagement='Contact Management'
   text=' At Dunamis Kings Academy, we believe that every child is unique, full of potential, and deserving of a joyful, safe, and inspiring start to learning. We are a nuturing school dedicated to helping children grow academically, socially, and emotionlly in a loving and structured environment. from our caring teachers to our child-friendly learning spaces, every detail is designed to spark curiosity, confidence, and creativity. Whether it’s your child’s first step into shchool or their continued journey through the early years, we’re honored to be a part of it.'
   image={image1} />


    <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 py-10 px-4 rounded-md max-w-3xl md:mx-auto
     mt-12 mx-4">
      <h2 className="text-white text-2xl md:text-3xl font-bold mb-8 text-center">
        Dunamis Kings Academy 2025 / 2026 Admission Lists
      </h2>
      <div className="space-y-4">
        {lists.map((item, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center bg-white rounded-md px-5 py-4 hover:bg-gray-100 transition-all cursor-pointer"
          >
            <span className="text-sm md:text-base font-medium text-gray-700">
              {item}
            </span>
            <span className="text-blue-600 text-lg font-bold">&rarr;</span>
          </div>
        ))}
      </div>
    </section>


    <StudentSection />



     <section className="bg-white text-black py-16 px-6 md:px-20 -mt-5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Text Content */}
        <div className="flex-1 space-y-5">
          <span className="bg-white text-blue-800 text-xs font-semibold px-3 py-1 rounded-full inline-block shadow">
            💡 SPOTLIGHT
          </span>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Highlights from Our Graduation Ceremony
          </h2>
          <p className="text-lg text-black">
            Celebrate with us as we mark the achievements of our proud graduates! Here's a glimpse into the joy, color, and unforgettable memories from our recent gradution ceremony.
          </p>
          <p className="text-sm text-black">
            This vision is about raising excellent children who will not compromise standards. <br />
            We give God all the glory for this fulfillment.
          </p>
           
           <Link to='/media'>
          <button className="mt-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2 transition">
            Learn More <ArrowRight size={18} />
          </button>
          </Link>
        </div>

        {/* Video */}
        <div className="flex-1 w-full">
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg border-4 border-white">
           <VideoPlayer />
          </div>
        </div>
      </div>
    </section>

<section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center space-y-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">
          Leadership With Distinction
        </h2>
        <p className="text-lg text-blue-100 max-w-2xl mx-auto">
          We focus on dynamic education, holistic development, and building a brighter future for your child and our nation.
        </p>

        {/* Features */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white text-gray-800 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
            <div className="bg-pink-100 text-pink-600 w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-4">
              <GraduationCap size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Holistic Education</h3>
            <p className="text-sm text-gray-600">
              We nurture the whole child, focusing on academics, character, and spirituality.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white text-gray-800 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
            <div className="bg-purple-100 text-purple-700 w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-4">
              <Award size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Future-Ready</h3>
            <p className="text-sm text-gray-600">
              Our curriculum equips students for success in higher education and beyond.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white text-gray-800 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
            <div className="bg-pink-100 text-pink-600 w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-4">
              <HomeIcon size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Safe Haven</h3>
            <p className="text-sm text-gray-600">
              It's not just a school; it's a home away from home.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-10">
          <Link to='/about'>
          <button className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400 hover:bg-amber-700 text-white font-medium px-8 py-3 rounded-full transition">
            Learn More About Admissions At DKA
          </button>
          </Link>
        </div>
      </div>
    </section>


      <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-800 mb-2">DISCOVER DKA</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Learn more about us, our campuses, pioneering projects, and innovative educational approaches.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl overflow-hidden transition hover:shadow-xl"
          >
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-amber-600 mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm mb-4">{item.description}</p>
              <Link
              onClick={() => scrollTo(0,0)}
                to={item.href}
                className="inline-flex items-center gap-2 text-white bg-amber-600 hover:bg-amber-700 transition px-4 py-2 rounded-full text-sm"
              >
                {item.button} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>


   
   <NewsAndUpdate />

 <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
  <h2 className="text-3xl font-bold text-indigo-600 mb-8">Popular Links</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {links.map((link, index) => (
      <div
        key={index}
        className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
      >
        <img
          src={link.image}
          alt={link.title}
          className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* 🔧 Overlay with correct bg-opacity and z-index */}
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/50 flex items-end transition-all duration-300">
          <h3 className="text-white text-lg font-semibold p-4 z-10">{link.title}</h3>
        </div>
      </div>
    ))}
  </div>
</section>

    
    </>

    
  );
  
}

export default Home
