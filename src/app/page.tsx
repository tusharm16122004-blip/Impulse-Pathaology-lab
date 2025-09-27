"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center py-20 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Your Health, Our Priority
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Accurate Diagnostics. Trusted Results. Fast Service.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100">
            Book a Test
          </button>
          <button className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-700">
            View Services
          </button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Why Choose Us?</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { title: "Advanced Equipment", icon: "🔬" },
            { title: "Fast Results", icon: "⏱️" },
            { title: "Certified Experts", icon: "👨‍⚕️" },
            { title: "Affordable Packages", icon: "✅" },
          ].map((point, i) => (
            <div key={i} className="p-6 bg-white rounded-lg shadow">
              <div className="text-4xl mb-3">{point.icon}</div>
              <h3 className="text-lg font-semibold">{point.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">What Our Patients Say</h2>
        <div className="space-y-6">
          {[
            "Excellent service! Got my reports within hours.",
            "The staff is very professional and caring.",
            "Booking a test online was so easy and quick.",
          ].map((feedback, i) => (
            <p
              key={i}
              className="p-6 bg-blue-50 border-l-4 border-blue-600 rounded-lg text-gray-700 italic"
            >
              “{feedback}”
            </p>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="mb-4">📍 123 Lab Street, City, Country</p>
        <p className="mb-4">📞 +91 98765 43210</p>
        <p className="mb-6">✉️ support@impulselab.com</p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
          Contact Us
        </button>
      </section>
    </main>
  );
}
