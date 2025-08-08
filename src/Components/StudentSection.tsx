import { useEffect, useState } from 'react'
import image4 from '../assets/IMG-20250730-WA0008.jpg'
import image5 from '../assets/IMG-20250730-WA0015.jpg'
import image13 from '../assets/Dunamis Kings Academy furtune photo.jpg'
import { Link } from 'react-router-dom';





const students = [
  {
    name: "Dunamis Kings Presentation",
    
    img: image5, // Replace with your actual image path
  },
  {
    name: "Dunamis Kings Presentation",
    
    img: image4,
  },
  {
    name: "One of our Best graduating Student",
    
    img: image13,
  },
];

const StudentSection = () => {
          const [currentIndex, setCurrentIndex] = useState(0);

          useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % students.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

    
  return (
       <section className="bg-white py-10 px-4 md:px-10 mt-11">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Carousel */}
        <div className="w-full md:w-1/2">
          <h3 className="text-sm text-yellow-600 font-semibold uppercase">
            Celebrating Excellence:
          </h3>
          <h2 className="text-2xl md:text-4xl font-bold text-black mt-1 mb-3">
            Building strong foundations today for a brighter tommorrow.
          </h2>
          <h4 className="text-lg text-gray-800 mb-3">Dunamis Kings Academy</h4>
          <p className="text-gray-700 leading-relaxed mb-6">
            We are proud of the steady progress our student make academically, socially and emotionlly. We believe that every child learns at their own pace, and our dedicated teachers work closely with each student to ensure continuous growth and improvement.Through a well balaced curriculum, engaging classroom activities, and regular assessments, we track every child's developmet to help them reach their full potential. <br/> Our students are not only gaining knowledge they're building confidence, discovering talents, and developing critical life skills that prepare them for the next stage of their education.
          </p>
          <Link to='/admission'>
          <button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-2 rounded-full transition">
            Learn More &rarr;
          </button>
          </Link>
        </div>

        {/* Image Slider */}
        <div className="w-full md:w-1/2 relative">
          <div className="w-full overflow-hidden rounded-lg border-2 border-blue-900">
            <div
              className="flex transition-transform duration-700"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {students.map((student, idx) => (
                <div
                  key={idx}
                  className="min-w-full flex flex-col items-center bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-6 px-4"
                >
                  <img
                    src={student.img}
                    alt={student.name}
                    className="h-48 w-36 object-cover rounded shadow-md mb-3 border-4 border-white"
                  />
                  <p className="font-bold text-lg mt-2">{student.name}</p>
                  <p className="text-pink-400 font-semibold mt-1"> <span className="text-yellow-400 text-xl"></span></p>
                </div>
              ))}
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {students.map((_, idx) => (
              <div
                key={idx}
                className={`h-2 w-2 rounded-full ${idx === currentIndex ? 'bg-blue-800' : 'bg-gray-400'}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default StudentSection
