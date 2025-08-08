import image1 from '../assets/IMG-20250730-WA0005.jpg'


const Admission = () => {
  return (
     <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <h5 className="text-sm font-medium text-gray-600 uppercase tracking-wider">
            Admissions

          </h5>
          <h2 className="text-3xl font-bold text-black leading-snug">
            Who Can Apply?
          </h2>
          <p className="text-gray-700 leading-relaxed text-base">
            admission
          </p>
          <p className="text-gray-700 leading-relaxed text-base">
            We’re excited that you’re considering Dunamis Kings Academy as the starting point of your child’s educational journey. Choosing the right school is one of the most important decisions a parent can make — and we’re here to support you every step of the way.

           At [Your School Name], we welcome children into a nurturing, safe, and stimulating environment where they can grow academically, socially, and emotionally. Our admissions process is simple, friendly, and designed to give you all the information you need to make the best choice for your family.
          <br/> <br/>
          We accept applications for:

          Crèche (if applicable)

          Nursery (Ages 2–5)

           Primary (Grades 1–6)

            Children are admitted based on their age and readiness for each level. We ensure that every child is placed in the right class to maximize learning and development.
          </p>

          <h2 className="text-3xl font-bold text-black leading-snug">
            Admission Process
          </h2>
          <p className="text-gray-700 leading-relaxed text-base">
            Visit the School – Book a tour or attend our Open Day to explore our classrooms and meet our team.

          Pick Up an Application Form – Forms are available at the school office or can be downloaded online.

           Submit Required Documents – Along with the completed form, kindly submit:

          Birth certificate

           Passport photograph

           Immunization/health record

         Previous school report (if transferring)

          Interview/Assessment – Your child may be invited for a simple readiness assessment or observation.

           Admission Offer – Once successful, you will receive an admission letter with details on fees, uniforms, and start dates.
           </p>

          <h2 className="text-3xl font-bold text-black leading-snug">
            Why Choose Us
          </h2>

          <p className="text-gray-700 leading-relaxed text-base"> Safe and child-friendly environment

            Qualified and caring teachers

            Balanced curriculum (academic, moral, creative)

            Strong home-school relationship

            Affordable and flexible payment plans 
            </p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap pt-2">
             {/* <button className="bg-amber-500 text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-amber-300 transition flex items-center gap-2">
                              {aboutUs} <ArrowRight size={16} />
                </button> */}
            
            {/* <button className="bg-amber-100 text-amber-700 px-5 py-3 rounded-full text-sm font-medium hover:bg-pink-200 transition flex items-center gap-2">
              {contactManagement} <ArrowRight size={16} />
            </button> */}
          </div>
        </div>

        {/* Image */}
        <div className="w-full">
          <div className="rounded-3xl overflow-hidden shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
            <img
              src={image1} // Replace with real image URL or local import
              alt="DLHS student"
              className="w-full h-auto object-cover"
            />
          </div> <br/>
          <p className="text-gray-700 leading-relaxed text-base"> Safe and child-friendly environment <br/>

           <span className='font-bold text-2xl'>Visit or Contact Us</span><br/>
            We invite you to visit us, meet our team, and see what makes [Your School Name] a special place to learn and grow. <br/> <br/>

            📞 Phone:  08063481541, 07065212099 <br/>
             📧 Email: dunamiskingsacademy@gamil.com<br/>
               📍 Address: #1 Osuachala Close, Opposite Okwadike Filling Station, Melsanah Junction, Akpuoga Nike along Abakaliki Road, Enugu, Enugu State <br/>

               We can’t wait to welcome your child into our school family!


            </p>
        </div>
      </div>
    </section>
  )
}

export default Admission
