import WelcomeSection from '../Components/WelcomeSection'
import NewsAndUpdate from '../Components/NewsAndUpdate'
import image2 from '../assets/IMG-20250730-WA0004.jpg'
import image7 from '../assets/Dunamis kings graduation 2.jpg'




const About = () => {

  
  return (
    <>
    <div className='bg-black h-80 flex items-center justify-center  '>
      <div className='flex flex-col text-white gap-3'>
          <p className='text-center'>ABOUT US</p>
          <h2 className='text-center'>LEADERSHIP WITH DISTINCTION</h2>
          <p className='text-center'>DKA is a mission co-educational boarding school committed to provideng all-round and qualitative education with empnasis on academic and moral excellece.</p>
          <div className="mt-8 animate-bounce text-white text-2xl text-center">↓</div>
      </div>
    </div>
    <WelcomeSection 
    text1='Welcome To'
    text2='Dunamis Kings Academy'
    aboutUs=''
    contactManagement=''
    text=' At Dunamis Kings Academy, we believe that every child is unique, full of potential, and deserving of a joyful, safe, and inspiring start to learning. We are a nuturing school dedicated to helping children grow academically, socially, and emotionlly in a loving and structured environment. from our caring teachers to our child-friendly learning spaces, every detail is designed to spark curiosity, confidence, and creativity. <br/> Whether it’s your child’s first step into shchool or their continued journey through the early years, we’re honored to be a part of it.
    We believe that education should be joyful, engaging, and meaningful. That’s why our passionate and experienced educators create a warm, safe, and stimulating atmosphere where every child can explore, ask questions, and grow at their own pace.'
    image={image2} />
 
    <WelcomeSection  
    
    text1=''
    text2=''
    aboutUs=''
    contactManagement=''  
    text='Our values – love, respect, curiosity, and responsibility – are at the heart of everything we do. Through hands-on learning, moral instruction, and close teacher-parent partnerships, we help each child develop confidence, independence, and a strong sense of self-worth.

We are more than just a school — we are a family. Whether in the classroom, the playground, or during school events, we are committed to providing a wholesome experience that prepares our pupils not only for higher education but also for life.

Come grow with us at Dunamis Kings Academy — where learning begins with love and ends in excellence.
    
    
    ' 
    image={image7}/>

    <NewsAndUpdate />
    

     </>
  )
}

export default About
