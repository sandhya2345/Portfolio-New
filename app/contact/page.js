"use client"
import { Apple, CircleCheckBig, Contact2, Flame, HeadphonesIcon, Instagram, Mail, MapPin, MapPinCheck, MessageSquare, Phone, Send, ShoppingCart, Star, Truck } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Contact = () => {
  

  return (
    <div className='min-h-screen py-12  bg-white'>
      <section className=''>
        <div className='max-w-4xl mx-auto px-4 text-center'>
          <div className="inline-flex items-center backdrop-blur-sm mb-4 bg-white border border-black font-medium hover:bg-black hover:text-white transition px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm shadow-sm">
            <Flame className='mr-2' />

            Contact Me
          </div>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4'>How Can I Help?</h1>
          <p className="text-xl text-gray-600 mb-8">
            Let's connect! Whether you have a project, a question, or just want to chat about tech and design, feel free to reach out — I’d love to hear from you.
          </p>

          <div className='flex flex-wrap items-center justify-center text-sm text-gray-600 gap-6'>
            <div className='flex items-center gap-2'>
              <CircleCheckBig className='text-green-600 h-4 w-4' />

              <span>24/7 Support</span>

            </div>

            <div className='flex items-center gap-2'>
              <Star className='text-yellow-400 h-4 w-4' />
              <span>4.9/5 Rating</span>

            </div>

          </div>

        </div>

      </section>

      {/* next section starts here */}

      <section className='py-12 bg-white'>
        <div className='max-w-6xl mx-auto px-4'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            <Link href="https://whatsapp" className="group bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg hover:border-green-300 transition-all duration-300">
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-green-100 transition-colors'>
                  <Instagram />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Instagram</h3>
                  <p className="text-green-500 font-medium">Sandhya Timalsena</p>
                  <p className="text-sm text-gray-500">Reach Out!</p>
                </div>


              </div>

            </Link>

            <Link href="https://facebook.com" className="group bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg hover:border-green-300 transition-all duration-300">
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-green-100 transition-colors'>
                  <Mail />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                  <p className="text-green-500 font-medium">sandhyatimalsena29@gmail.com</p>
                  <p className="text-sm text-gray-500">Quick Response</p>
                </div>

              </div>
            </Link>
            
          </div>
        </div>
      </section>

      {/* next section starts here */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-lg p-8 sm:p-10">
           
            <div className="text-center mb-10">
              <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-2">
                Send a Message
              </h1>
              <p className="text-gray-600 text-medium">
                We'll get back to you within 24 hours. Let's make something great together!
              </p>
            </div>

            <form className="space-y-6">
            
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="font-medium text-gray-700">Name *</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="w-full px-4 py-2 mt-2 rounded-xl border transition-all text-gray-800 bg-white focus:border-red-500 focus:ring-red-200 focus:outline-none focus:ring-2"
                  />
                </div>
                <div>
                  <label className="font-medium text-gray-700">Email *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    className="w-full px-4 py-2 mt-2 rounded-xl border transition-all text-gray-800 bg-white focus:border-red-500 focus:ring-red-200 focus:outline-none focus:ring-2"
                  />
                </div>
              </div>

             
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="font-medium text-gray-700">Phone (optional)</label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Your phone number"
                    className="w-full px-4 py-2 mt-2 rounded-xl border transition-all text-gray-800 bg-white focus:border-red-500 focus:ring-red-200 focus:outline-none focus:ring-2"
                  />
                </div>
                <div>
                  <label className="font-medium text-gray-700">Subject *</label>
                  <select
                    name="subject"
                    className="w-full px-4 py-2 mt-2 rounded-xl border transition-all text-gray-800 bg-white focus:border-red-500 focus:ring-red-200 focus:outline-none focus:ring-2"
                  >
                    <option value="">Select a topic</option>
                    <option value="project">Project Collaboration</option>
                    <option value="quote">Get a Quote</option>
                    <option value="feedback">Feedback</option>
                    <option value="support">Support</option>
                  </select>
                </div>
              </div>

            
              <div>
                <label className="font-medium text-gray-700">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell us how we can help you..."
                  className="w-full px-4 py-3 rounded-xl mt-2 border transition-all resize-none text-gray-900 bg-white placeholder:text-gray-500 border-gray-300 focus:border-red-500 focus:ring-red-200 focus:outline-none focus:ring-2"
                ></textarea>
              </div>

            
              <button
                type="submit"
                className="bg-gray-900 hover:bg-red-800 mt-6 font-semibold text-white px-6 py-4 rounded-xl flex gap-3 w-full items-center justify-center transition-all"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>


            </form>
          </div>
        </div>
      </section>



    </div>
  )
}

export default Contact