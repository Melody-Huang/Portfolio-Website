'use client';
import React, { useState } from 'react';
import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ subsets: ['latin'] })

export default function ContactPage() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
      const { name, value } = e.target
      setFormData(prevData => ({ ...prevData, [name]: value }))
    }

    const handleSubmit = async (e) => {
      e.preventDefault()
      setSubmitStatus('submitting');
      try {
        const response = await fetch('https://portfolio-worker.melody-hch.workers.dev', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        });
        const result = await response.text();

        if (response.ok) {
          setSubmitStatus('success');
          setFormData({ name: '', email: '', message: '' });
        } else {
          throw new Error('Form submission failed');
        }
      } catch (error) {
        console.error('Fetch error:', error);
        setSubmitStatus('error');
      }
    }

    return (
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
          <div className="bg-emerald-600 px-6 py-4">
            <h1 className={`${playfair.className} text-4xl font-bold text-white`}>Contact Me</h1>
          </div>
          <div className="p-6">
            <p className={`${inter.className} text-gray-600 mb-8`}>I'd love to hear from you! Whether you have a question or just want to say hi, feel free to drop me a message.</p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-emerald-500 text-white px-4 py-3 rounded-md hover:bg-emerald-600 transition duration-300"
                  disabled={submitStatus === 'submitting'}
                >
                  {submitStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
            {submitStatus === 'success' && (
              <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
                Thank you for your message! I'll get back to you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md">
                An error occurred. Please try again later.
              </div>
            )}
          </div>
        </div>
      </main>
    )
}