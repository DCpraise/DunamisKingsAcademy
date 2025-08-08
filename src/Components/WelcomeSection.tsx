import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'


const WelcomeSection = ({text1, text2, text, image, aboutUs, contactManagement}: {text1:String, text2:String, text:String, image:any, aboutUs:String, contactManagement:String}) => {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <h5 className="text-sm font-medium text-gray-600 uppercase tracking-wider">
            {text1}
          </h5>
          <h2 className="text-2xl font-bold text-black leading-snug">
            {text2}
          </h2>
          <p className="text-gray-700 leading-relaxed text-base">
            {text}
          </p>
          <p className="text-gray-700 leading-relaxed text-base">
            
          </p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap pt-2">
            <Link to='/about' onClick={() => scrollTo(0,0)}>
             <button className="bg-amber-500 text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-amber-300 transition flex items-center gap-2">
                {aboutUs} <ArrowRight size={16} />
                </button>
                </Link>
            

            <Link to='/ContactUs' onClick={() => scrollTo(0,0)}>
            <button className="bg-amber-100 text-amber-700 px-5 py-3 rounded-full text-sm font-medium hover:bg-pink-200 transition flex items-center gap-2">
              {contactManagement} <ArrowRight size={16} />
            </button>
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="w-full">
          <div className="rounded-3xl overflow-hidden shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
            <img
              src={image} // Replace with real image URL or local import
              alt="DLHS student"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WelcomeSection
