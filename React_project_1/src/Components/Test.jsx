import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, ShoppingBag, User } from 'lucide-react'

const CloudAnimation = () => (
  <motion.div
    className="absolute inset-0 z-0 opacity-20"
    initial={{ opacity: 0 }}
    animate={{
      opacity: [0.2, 0.3, 0.2],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  >
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#E0E0E0"
        d="M41.5,-70.3C54.9,-62.8,67.3,-53.4,75.7,-40.6C84.1,-27.8,88.5,-11.7,87.4,3.9C86.3,19.5,79.7,34.5,70.1,47.1C60.5,59.7,47.9,69.8,33.8,75.2C19.6,80.6,3.9,81.3,-12.5,79.1C-28.9,77,-46,72.1,-59.1,62C-72.2,52,-81.2,37,-85.1,20.7C-89,4.3,-87.8,-13.3,-81.5,-28.3C-75.2,-43.3,-63.8,-55.6,-50.3,-63C-36.8,-70.4,-21.2,-72.9,-5.8,-64.5C9.6,-56.1,28.1,-77.8,41.5,-70.3Z"
        transform="translate(100 100)"
      />
    </svg>
  </motion.div>
)

export default function LuxuryCloudKitchen() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#1E1E1E] font-sans">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-serif font-bold text-[#1C3D6B]">Cloud Gourmet</h1>
          <div className="hidden md:flex space-x-8">
            {['Menu', 'About', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[#1C3D6B] hover:text-[#FFD700] transition-colors duration-300">{item}</a>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <ShoppingBag className="w-6 h-6 text-[#1C3D6B] cursor-pointer hover:text-[#FFD700] transition-colors duration-300" />
            <User className="w-6 h-6 text-[#1C3D6B] cursor-pointer hover:text-[#FFD700] transition-colors duration-300" />
            <Menu className="w-6 h-6 text-[#1C3D6B] cursor-pointer md:hidden" />
          </div>
        </div>
      </nav>

      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <CloudAnimation />
        <CloudAnimation />
        <div className="relative z-10 text-center">
          <motion.h2
            className="text-4xl md:text-6xl font-serif font-bold text-[#1C3D6B] mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Gourmet, from the clouds to your plate
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-[#1E1E1E] mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Experience luxury dining, delivered
          </motion.p>
          <motion.button
            className="bg-[#FFD700] text-[#1C3D6B] px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#1C3D6B] hover:text-[#FFD700] transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Order Now
          </motion.button>
        </div>
        <div className="absolute inset-0 z-0">
          <img
            src="/placeholder.svg?height=1080&width=1920"
            alt="Gourmet dishes"
            className="object-cover w-full h-full opacity-50"
          />
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section id="menu" className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-[#1C3D6B] mb-8">Our Exquisite Menu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={`/placeholder.svg?height=300&width=400`} alt={`Dish ${item}`} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Gourmet Dish {item}</h3>
                  <p className="text-gray-600 mb-4">A delectable creation from our cloud kitchen</p>
                  <button className="bg-[#1C3D6B] text-white px-4 py-2 rounded hover:bg-[#FFD700] hover:text-[#1C3D6B] transition-colors duration-300">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-[#1C3D6B] mb-8">About Cloud Gourmet</h2>
          <p className="text-lg leading-relaxed mb-8">
            Cloud Gourmet brings the finest dining experience directly to your doorstep. Our virtual kitchen combines culinary excellence with the convenience of modern technology, ensuring each dish is crafted to perfection and delivered with care.
          </p>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold mb-4">Our Commitment</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Sourcing the finest ingredients</li>
              <li>Innovative culinary techniques</li>
              <li>Eco-friendly packaging</li>
              <li>Punctual and reliable delivery</li>
            </ul>
          </div>
        </section>

        <section id="contact" className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-[#1C3D6B] mb-8">Get in Touch</h2>
          <form className="bg-white rounded-lg shadow-md p-8">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1C3D6B]" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1C3D6B]" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1C3D6B]"></textarea>
            </div>
            <button type="submit" className="bg-[#1C3D6B] text-white px-6 py-3 rounded-full hover:bg-[#FFD700] hover:text-[#1C3D6B] transition-colors duration-300">Send Message</button>
          </form>
        </section>
      </main>

      <footer className="bg-[#1C3D6B] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <h3 className="text-2xl font-serif font-bold mb-4">Cloud Gourmet</h3>
              <p>Elevating your dining experience, one cloud at a time.</p>
            </div>
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#menu" className="hover:text-[#FFD700] transition-colors duration-300">Menu</a></li>
                <li><a href="#about" className="hover:text-[#FFD700] transition-colors duration-300">About</a></li>
                <li><a href="#contact" className="hover:text-[#FFD700] transition-colors duration-300">Contact</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="text-xl font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-[#FFD700] transition-colors duration-300">Facebook</a>
                <a href="#" className="hover:text-[#FFD700] transition-colors duration-300">Instagram</a>
                <a href="#" className="hover:text-[#FFD700] transition-colors duration-300">Twitter</a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2023 Cloud Gourmet. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}