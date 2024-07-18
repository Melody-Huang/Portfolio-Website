'use client';
import React, { useState } from 'react';

// export default function Contact() {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' })

export default function ContactPage() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send this data to your backend.
    try {
        const response = await fetch('https://portfolio-worker.melody-hch.workers.dev', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        });
        console.log('Response status:', response.status);
        const result = await response.text();
        console.log(result);

        if (response.ok) {
          console.log('Success:', result);
          alert(result); // Or update state to show the success message
          setFormData({ name: '', email: '', message: '' }); // Clear the form
        } else {
          throw new Error('Form submission failed');
        }

      } catch (error) {
        console.error('Fetch error:', error);
        alert('An error occurred. Please try again.'); // Or update state to show the error message
      }
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
      <form onSubmit={handleSubmit} className="max-w-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows={4}
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Send Message
        </button>
      </form>
    </main>
  )
}