import image2 from '../assets/IMG-20250730-WA0004.jpg'

const NewsLetter = () => {
  return (
     <section className="bg-white py-16 px-6 md:px-20 -mt-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <h5 className="text-sm font-medium text-gray-600 uppercase tracking-wider">
            {/* {text1} */}
          </h5>
          <h2 className="text-3xl font-bold text-black leading-snug">
            First Term Begins with Excitement!
          </h2>
          <p className="text-gray-700 leading-relaxed text-base">
            The new academic term has officially begun at [Your School Name], and the energy around the school is truly inspiring! Pupils returned eager and ready to learn, and our teachers are excited to guide them through a term full of fun, growth, and discovery.

            This term, we will focus on building strong reading and writing skills, creative arts, hands-on science activities, and character development. We also look forward to our upcoming events such as Cultural Day, Spelling Bee, and the Mid-Term Open Day.

             Parents are encouraged to stay involved and connected through regular updates and classroom communication.

            Here’s to a successful and productive term ahead!
          </p>
          <p className="text-gray-700 leading-relaxed text-base">
            
          </p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap pt-2">
             <button className="bg-amber-500 text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-amber-300 transition flex items-center gap-2">
                              {/* {aboutUs} <ArrowRight size={16} /> */}
                </button>
            
            <button className="bg-amber-100 text-amber-700 px-5 py-3 rounded-full text-sm font-medium hover:bg-pink-200 transition flex items-center gap-2">
              {/* {contactManagement} <ArrowRight size={16} /> */}
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="w-full">
          <div className="rounded-3xl overflow-hidden shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
            <img
              src={image2} // Replace with real image URL or local import
              alt="DLHS student"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed text-base">
            We encourage parents to ensure punctuality and full attendance as we begin academic work immediately. Timetables and other important updates will be shared with pupils during the first week of resumption.

             Let’s work together to make this term a successful and impactful one for every child. Welcome back!
          </p>
      </div>
    </section>
  )
}

export default NewsLetter
