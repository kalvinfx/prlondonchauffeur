import React from "react";
import { motion } from "framer-motion";
import { Car, Phone, Mail } from "lucide-react";

export default function PrestigeRidesSite() {
  return (
    <div className="bg-gray-50 text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="bg-black text-white text-center py-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Prestige Rides London
        </motion.h1>
        <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-8">
          Discreet luxury chauffeur services for London & Middle Eastern elite.
        </p>
        <a
          href="https://wa.me/447000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-2xl shadow-lg"
        >
          Book Now on WhatsApp
        </a>
      </section>

      {/* Services */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-6 shadow-lg rounded-2xl">
            <Car className="h-12 w-12 text-black mb-4" />
            <h3 className="text-xl font-semibold mb-2">Airport Transfers</h3>
            <p>Seamless luxury transfers to and from all London airports.</p>
          </div>
          <div className="p-6 shadow-lg rounded-2xl">
            <Car className="h-12 w-12 text-black mb-4" />
            <h3 className="text-xl font-semibold mb-2">Corporate Travel</h3>
            <p>Professional chauffeur services for executives and events.</p>
          </div>
          <div className="p-6 shadow-lg rounded-2xl">
            <Car className="h-12 w-12 text-black mb-4" />
            <h3 className="text-xl font-semibold mb-2">Bespoke Journeys</h3>
            <p>Tailored travel experiences for VIPs and UHNW clients.</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-6 md:px-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">Enquire Now</h2>
        <form className="max-w-2xl mx-auto grid gap-6">
          <input type="text" placeholder="Full Name" className="p-3 rounded-lg border" />
          <input type="email" placeholder="Email Address" className="p-3 rounded-lg border" />
          <input type="tel" placeholder="Phone Number" className="p-3 rounded-lg border" />
          <textarea placeholder="Journey Details" rows="4" className="p-3 rounded-lg border" />
          <button className="bg-black text-white py-3 rounded-2xl hover:bg-gray-800">
            Submit Enquiry
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-6 mt-10">
        <p className="mb-2">&copy; {new Date().getFullYear()} Prestige Rides London</p>
        <p className="flex items-center justify-center gap-4">
          <a href="tel:+447000000000" className="flex items-center gap-2 hover:text-gray-400">
            <Phone className="h-4 w-4" /> +44 7000 000000
          </a>
          <a href="mailto:bookings@prlondonchauffeur.com" className="flex items-center gap-2 hover:text-gray-400">
            <Mail className="h-4 w-4" /> bookings@prlondonchauffeur.com
          </a>
        </p>
      </footer>
    </div>
  );
}
