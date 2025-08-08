
import Footer from './Components/Footer'
import Header from './Components/Header'
import About from './Pages/About'
import Admission from './Pages/Admission'
import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom'
import Media from './Pages/Media'
import NewsLetter from './Pages/NewsLetter'
import ContactUs from './Pages/ContactUs'




function App() {

  
  return (
    <>
    <Header />
    <Routes>
      <Route  path='/' element= {<Home />} />
      <Route  path='/about' element = {<About/>} />
      <Route path= '/admission' element = {<Admission />} />
      <Route path= '/media' element = {<Media />} />
      <Route path= '/newsletter' element = {<NewsLetter />} />
      <Route path= '/contactus' element = {<ContactUs />} />
    </Routes>

    <Footer />
    </>
  )
}

export default App
