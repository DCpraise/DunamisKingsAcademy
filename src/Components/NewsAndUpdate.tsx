import image7 from '../assets/Dunamis kings graduation 2.jpg'
import image12 from '../assets/istockphoto-803141126-612x612.webp'
import image8 from '../assets/istockphoto-1481374672-612x612.webp'
import image11 from '../assets/photo-1744809482817-9a9d4fc280af.avif'

import Slider from 'react-slick';
import type { Settings } from 'react-slick';



const newsData = [
  {
    title: "We sincerely thank all parents, staff, students, and guests who made our graduation ceremony a memorable success. Your support and presence meant so much to us!",
    image: image7, // Replace with actual image
  },
  {
    title: "As we begin a new term, we’re excited to continue our journey of learning, growth, and excellence. We look forward to another season of discovery, creativity, and achievement with our amazing pupils. Let’s make this term our best one yet!",
    image: image12,
  },
  {
    title: "We are excited to announce the introduction of computers into our classrooms! This step marks a new phase in our commitment to providing quality, modern education. With access to digital tools, our pupils will explore, create, and learn in more engaging and interactive ways — preparing them for the future.",
    image: image8,
  },
  {
    title: "learning goes beyond textbooks. Our classrooms are warm, engaging, and interactive — where pupils feel safe, heard, and inspired to ask questions, explore ideas, and enjoy every step of their learning journey.",
    image: image11,
  },
];


const NewsAndUpdate = () => {




    const settings: Settings = {
      dots: false,
      infinite: true,
      speed: 800,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1, // ✅ Required to avoid TS error
          },
        },
      ],
    };
  return (
     <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-indigo-600">DKA <span className="text-gray-800">News & Updates</span></h2>
            <a
              href="#"
              className="bg-amber-600 text-white px-5 py-2 rounded-full text-sm hover:bg-amber-700 transition"
            >
              View More →
            </a>
          </div>
    
          <Slider {...settings}>
            {newsData.map((item, index) => (
              <div key={index} className="px-2">
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
                  <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <p className="text-sm text-gray-700">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </section>
  )
}

export default NewsAndUpdate
