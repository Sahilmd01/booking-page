import { useState } from 'react';
import {
  FaTooth,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaBars,
  FaTimes,
  FaQuoteLeft,
  FaStar,
  FaPhoneAlt,
  FaEnvelope
} from 'react-icons/fa';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const services = [
    {
      title: "Teeth Whitening",
      description: "Professional teeth whitening for a brighter smile.",
      icon: <FaTooth className="text-blue-500 text-3xl" />
    },
    {
      title: "Dental Implants",
      description: "Premium quality implants for natural-looking results.",
      icon: <FaTooth className="text-blue-500 text-3xl" />
    },
    {
      title: "Orthodontics",
      description: "Luxurious braces and aligner treatments.",
      icon: <FaTooth className="text-blue-500 text-3xl" />
    },
    {
      title: "Pediatric Dentistry",
      description: "Gentle care for our youngest patients.",
      icon: <FaTooth className="text-blue-500 text-3xl" />
    }
  ];

  const testimonials = [
    {
      name: "Premakumar Premakumar",
      role: "Google Reviewer",
      content: `I had an incredible experience with Dr.Sarfullah Ansari during my root canal treatment.
       From the moment I sat in the chair, doctor made sure I was fully informed and at ease about the entire process.
        Their professionalism, expertise, and calm demeanor really helped me feel comfortable and confident throughout the procedure. 
        I was amazed at how painless the treatment was and how well everything went. He took great care to ensure I was as relaxed as 
        possible, and I truly appreciated that.

        I highly recommend him for anyone needing dental work. Their skill and attention to detail are unmatched. Thank you for making an otherwise stressful procedure so smooth!`,
      rating: 5
    },
    {
      name: "shabarish reddy",
      role: "Google Reviewer",
      content: `I have consulted Al Hasena dental Clinic. Dentist is very skilled, polite and explained each and every thing in detail.
                I had very complex cavity issue and need to do root canal.
                The cavity was spread very deeper I was sleepless was many day .l,within a span of a week my teeth was replaced with cap.
                The cap and teeth structural looks very natural I doesn't feel like it is replaced.`,
      rating: 5
    },
    {
      name: "Ankit Kumar",
      role: "Local Guide Google Reviewer",
      content: `After visiting other high fi clinic i came here by referral of my uncle for RCT and zirconia cap here 
      I found everything is very nice better than any corporate clinic in Bangalore RCT was single visit painless and 
      cap was very aesthetic looking natural . Cost is normal. doctor is very experienced with excellent hand working . 
      I must recommend to my all IT friends. Thank you doctor for good service and good treatment.`,
      rating: 5
    }
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <FaTooth className="text-blue-400 text-2xl mr-2" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 text-transparent bg-clip-text">
                AL Hasina Dental Clinic
              </span>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-800 focus:outline-none"
              >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-blue-600 font-medium">Home</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600">Testimonials</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
              <a
                href="/Not-Found"// ===============website link====================
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 underline hover:text-blue-700 transition duration-300"
              >
                Visit website for all services
              </a>
            </div>

            <div className="hidden md:block">
              <a
                href="/book"
                className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300"
              >
                Book Appointment
              </a>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <a href="#home" className="block py-2 text-blue-600 font-medium">Home</a>
              <a href="#about" className="block py-2 text-gray-600">About</a>
              <a href="#testimonials" className="block py-2 text-gray-600">Testimonials</a>
              <a href="#contact" className="block py-2 text-gray-600">Contact</a>
              <a
                href="/book"
                className="block mt-2 bg-blue-600 text-white px-4 py-2 rounded-full text-center"
              >
                Book Appointment
              </a>
              <p className="mt-4 text-sm text-center text-blue-600 underline">
                <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
                  Visit website for all services
                </a>
              </p>
            </div>
          )}
        </div>
      </nav>


      {/* Hero Section */}
      <section id="home" className="relative pt-28 pb-20 bg-gradient-to-r from-blue-50 to-indigo-50 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-indigo-100 rounded-full filter blur-3xl opacity-20 animate-float-delay"></div>
          <div className="absolute top-1/3 left-1/2 w-72 h-72 bg-purple-100 rounded-full filter blur-3xl opacity-15 animate-float"></div>
        </div>

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxIj48cGF0aCBkPSJNMjkuNSA1OS41aDFWMGgtMXoiLz48cGF0aCBkPSJNNTkuNSAzMC41djFIMHYtMXoiLz48L2c+PC9zdmc+')]"></div>

        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center relative z-10">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="mb-3 flex items-center">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-medium text-indigo-600 tracking-wider">WELCOME ! TO THE APPOINTMENT PAGE</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
              Al Hasina Dental <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-500 animate-text-shine">
                Where Every Smile Matters
              </span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              14+ Years of Dental Excellence, Trusted by 5000+ Smiles
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="/book" className="relative group">
                {/* Glow layer hidden on mobile, visible on sm and up */}
                <div className="hidden sm:block absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-all duration-300"></div>

                <button className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-center font-medium">
                  Book Appointment
                  <span className="absolute top-0 right-0 flex h-3 w-3 -mt-1 -mr-1">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-300 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-100"></span>
                  </span>
                </button>
              </a>

              <a href="/Not-Found" className="relative group">
                <div className="hidden sm:block absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-all duration-300"></div>

                <button className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-center font-medium">
                  Visit Our Website
                  <span className="absolute top-0 right-0 flex h-3 w-3 -mt-1 -mr-1">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-300 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-100"></span>
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-white via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Background blobs (optional) */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-20 animate-float"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-20 animate-float-delay"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: '5000+', label: 'Happy Patients' },
              { value: '14+', label: 'Years Experience' },
              { value: '25+', label: 'Dental Services' },
              { value: '4.9/5', label: 'Google Ratting' },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-60 backdrop-blur rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mb-3">
                  {stat.value}
                </h3>
                <p className="text-gray-800 font-medium">{stat.label}</p>
                <div className="mt-3 h-1 w-12 bg-gradient-to-r from-blue-200 to-indigo-200 mx-auto rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white relative overflow-hidden">
        {/* Floating background visuals (optional) */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-10 left-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-20 animate-float"></div>
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-indigo-100 rounded-full blur-3xl opacity-20 animate-float-delay"></div>
        </div>

        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center relative z-10">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <img
              src="/profile.jpg"
              alt="About Al Hasina Dental Clinic"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mb-6 animate-text-shine">
              Why Choose Al Hasina Dental Clinic?
            </h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              At Al Hasina Dental Clinic, we redefine dental care by combining cutting-edge technology with unparalleled luxury.
              Our clinic is designed to provide a serene, spa-like environment where your comfort is our top priority.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <FaTooth className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-800">Friendly dentists with BDS & training</span>
              </li>
              <li className="flex items-start">
                <FaTooth className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-800">Premium materials and the latest dental technology</span>
              </li>
              <li className="flex items-start">
                <FaTooth className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-800">Personalized treatment plans for each patient</span>
              </li>
              <li className="flex items-start">
                <FaTooth className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-800">Clean and peaceful clinic environment with excellence amenities</span>
              </li>
            </ul>
            <a
              href="/book"
              className="relative inline-block group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full blur opacity-75 group-hover:opacity-100 transition-all duration-300"></div>
              <button className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-3 rounded-full hover:shadow-xl transition duration-300 font-medium">
                Book Your Appointment Now
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Hear from our valued patients about their exceptional experiences at Al Hasina Dental Clinic.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-md relative">
              <FaQuoteLeft className="text-blue-100 text-5xl absolute top-6 left-6" />
              <div className="relative z-10">
                <p className="text-lg text-gray-700 mb-6">
                  {testimonials[activeTestimonial].content}
                </p>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`${i < testimonials[activeTestimonial].rating ? 'text-yellow-400' : 'text-gray-300'} text-xl`}
                    />
                  ))}
                </div>
                <h4 className="font-bold text-gray-800">{testimonials[activeTestimonial].name}</h4>
                <p className="text-gray-600">{testimonials[activeTestimonial].role}</p>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${activeTestimonial === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-white via-blue-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Reach out to doctor for any inquiries or to schedule your visit.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg p-8 text-center transition-all duration-300">
              <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <FaPhone className="text-blue-600 text-xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Phone</h3>
              <p className="text-gray-700">+91 89511 46370</p>
              <p className="text-gray-700">+91 89719 73785</p>
            </div>

            {/* Address */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg p-8 text-center transition-all duration-300">
              <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <FaMapMarkerAlt className="text-blue-600 text-xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Address</h3>
              <p className="text-gray-700">Al Hasina Dental Clinic</p>
              <p className="text-gray-700">1018, 16th Main Rd, near Udupi Garden, Tavarekere, Aicobo Nagar, 1st Stage, BTM 1st Stage, Bengaluru, Karnataka 560029</p>
            </div>

            {/* Working Hours */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg p-8 text-center transition-all duration-300">
              <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <FaClock className="text-blue-600 text-xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Working Hours</h3>
              <p className="text-gray-700">Monday - Saturday: 09:00 AM - 9:00 PM</p>
              <p className="text-red-700">Sunday: Emergency 24/7</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <div className="h-96 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7777.638190116016!2d77.61042359999996!3d12.919345899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14fe9b881df3%3A0x40f6d190aeca695b!2sAL%20HASINA%20DENTAL%20CLINIC!5e0!3m2!1sen!2sin!4v1752402646412!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Al Hasina Dental Clinic Location"
        ></iframe>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

            {/* Brand Column */}
            <div className="space-y-4">
              <div className="flex items-center">
                <FaTooth className="text-blue-400 text-2xl mr-2" />
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 text-transparent bg-clip-text">
                  Al Hasina Dental
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                Friendly dental care with personalized attention and exceptional results.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                {['Home', 'About', 'Testimonials', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-blue-400 transition-colors block py-1"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Contact</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <FaMapMarkerAlt className="text-blue-400 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-400">1018, 16th Main Rd, near Udupi Garden, Tavarekere, Aicobo Nagar, 1st Stage, BTM 1st Stage, Bengaluru, Karnataka 560029</span>
                </li>
                <li className="flex items-start">
                  <FaPhoneAlt className="text-blue-400 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-400">+91 89511 46370</span>
                </li>
                <li className="flex items-start">
                  <FaEnvelope className="text-blue-400 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-400">alhasinadentalsignature2016@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider & CTA */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <a
              href="https://yourwebsite.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Visit Full Website
            </a>
            <p className="text-gray-400 text-xs mt-2 max-w-md">
              Explore our complete range of dental services and advanced treatments
            </p>
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Al Hasina Dental Clinic. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Developed by{' '}
              <a
                href="https://www.linkedin.com/in/codewithkinu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-white transition"
              >
                Sahil
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;