// src/components/ContactUs.tsx
// import React, { useRef, useState } from 'react';
// //import emailjs from '@emailjs/browser';

// const ContactUs: React.FC = () => {
//   const formRef = useRef<HTMLFormElement>(null);
//   const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

//   // const sendEmail = (e: React.FormEvent) => {
//   //   e.preventDefault();
//   //   setStatus('sending');

//   //   if (!formRef.current) return;

//   //   emailjs.sendForm(
//   //     'your_service_id',   // Replace with your EmailJS Service ID
//   //     'your_template_id',  // Replace with your EmailJS Template ID
//   //     formRef.current,
//   //     'your_public_key'    // Replace with your EmailJS Public Key
//   //   ).then(
//   //     () => {
//   //       setStatus('success');
//   //       formRef.current?.reset();
//   //     },
//   //     () => setStatus('error')
//   //   );
//   // };

//   return (
//     <section className="py-12 px-6 bg-white text-gray-800 max-w-4xl mx-auto">
//       <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
//       <p className="text-center mb-10 text-gray-600">Have a question or message? We'd love to hear from you.</p>

//       <form ref={formRef} onSubmit={sendEmail} className="grid grid-cols-1 gap-6">
//         <div>
//           <label className="block text-sm font-medium mb-1">Your Name</label>
//           <input type="text" name="user_name" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
//         </div>
//         <div>
//           <label className="block text-sm font-medium mb-1">Your Email</label>
//           <input type="email" name="user_email" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
//         </div>
//         <div>
//           <label className="block text-sm font-medium mb-1">Subject</label>
//           <input type="text" name="subject" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
//         </div>
//         <div>
//           <label className="block text-sm font-medium mb-1">Message</label>
//           <textarea name="message" rows={5} required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
//         </div>
//         <button
//           type="submit"
//           disabled={status === 'sending'}
//           className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//         >
//           {status === 'sending' ? 'Sending...' : 'Send Message'}
//         </button>

//         {status === 'success' && <p className="text-green-600">Message sent successfully!</p>}
//         {status === 'error' && <p className="text-red-600">Oops! Something went wrong. Try again.</p>}
//       </form>
//     </section>
//   );
// };

// export default ContactUs;


// src/components/ContactInfo.tsx
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const ContactUs: React.FC = () => {
  return (
    <section className="bg-white py-12 px-6 text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-10">We'd love to hear from you! Reach us through any of the channels below.</p>

        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="flex items-start space-x-4">
            <FaPhoneAlt className="text-blue-600 mt-1" />
            <div>
              <h4 className="font-semibold">Phone</h4>
              <p>+234 806 348 1541</p>
              <p>+234 706 521 2099</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaEnvelope className="text-blue-600 mt-1" />
            <div>
              <h4 className="font-semibold">Email</h4>
              <p>dunamiskingsacademy@gmail.com</p>
              <p>dunamiskingsacademy@yahoo.com</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaMapMarkerAlt className="text-blue-600 mt-1" />
            <div>
              <h4 className="font-semibold">Address</h4>
              <p>#1, Osuachala Close, Opposite Okwadike filling Station, Melsanah Junction, Akpuoga Nike along Abakaliki Express Road, Enugum Enugu State,</p>
              <p>Nigeria</p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h4 className="font-semibold mb-3">Follow Us</h4>
          <div className="flex justify-center space-x-6 text-blue-600 text-xl">
            <a href="https://facebook.com/yourschool" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://instagram.com/yourschool" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com/yourschool" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
