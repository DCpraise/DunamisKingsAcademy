import { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/photoLogo_Dunamis-removebg-preview.png'


const Header = () => {
        const [isMenuOpen, setIsMenuOpen] = useState(false);
    
  return (
    <section className={`bg-gradient-to-b from-[#f7f9ff] via-[#fffbee] to-[#f7f9ff] h-full ${
        isMenuOpen ? 'overflow-hidden' : ''
      }`}>
        <header className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-6 w-full">
        <Link to="/">
          <img
           width={145}
           height={40}
            src={logo}
            alt="Dunamis Kings Logo"
          />
        </Link>
        <nav
          id="menu"
          className={`${
            isMenuOpen ? 'max-md:w-full' : 'max-md:w-0'
          } max-md:absolute max-md:top-0 max-md:left-0 max-md:overflow-hidden items-center justify-center max-md:h-full transition-[width] max-md:bg-white/50 backdrop-blur flex-col md:flex-row flex gap-8 text-gray-900 text-sm font-normal`}
        >
         <Link className="hover:text-indigo-600" onClick={() => setIsMenuOpen(false)} to='/' >Home</Link>
          <Link className="hover:text-indigo-600" onClick={() => setIsMenuOpen(false)} to='/about' >About Us</Link>
          <Link className="hover:text-indigo-600" onClick={() => setIsMenuOpen(false)} to='/admission' >Admission</Link>
          <Link className="hover:text-indigo-600" onClick={() => setIsMenuOpen(false)} to= '/newsletter'>NewsLetter</Link>
          <Link className="hover:text-indigo-600" onClick={() => setIsMenuOpen(false)} to= '/media'>Media</Link>
          <Link className="hover:text-indigo-600" onClick={() => setIsMenuOpen(false)} to='/contactus'>Contact Us</Link>

          <button
            onClick={() => setIsMenuOpen(false)}
            className="md:hidden text-gray-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </nav>
        <div className="hidden md:flex space-x-4">
          <a className="text-indigo-600 bg-indigo-100 px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-200 transition" href="#">Login</a>
          <a className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition" href="#">Sign up</a>
        </div>
        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden text-gray-600"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>
      </section>
  )
}

export default Header
