import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, RefreshCw } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    emailjs.init("7ggrs2l62s-4molEi");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        'service_ydoi4vi',
        'template_a446hvr',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'harshumeshgavali@gmail.com'
        }
      );
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Email send failed:', error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    setSubmitStatus(null);
  };

  return (
    <section id="contact" className="py-16 bg-white dark:bg-gray-900 min-h-screen transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8 bg-white dark:bg-gray-800 shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Contact Me
          </h2>
         
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Contact Info and Map */}
            <div className="space-y-6">
              {/* Contact Info Cards */}
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 p-6 rounded-xl shadow-lg flex items-center gap-4 hover:transform hover:scale-105 transition-all">
                  <Mail className="text-blue-600 dark:text-blue-400" size={24} />
                  <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">harshumeshgawali@gmail.com</span>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 p-6 rounded-xl shadow-lg flex items-center gap-4 hover:transform hover:scale-105 transition-all">
                  <Phone className="text-blue-600 dark:text-blue-400" size={24} />
                  <span className="text-gray-700 dark:text-gray-300">+91 8010502405</span>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 p-6 rounded-xl shadow-lg flex items-center gap-4 hover:transform hover:scale-105 transition-all">
                  <MapPin className="text-blue-600 dark:text-blue-400" size={24} />
                  <span className="text-gray-700 dark:text-gray-300">Nashik, Maharashtra, India</span>
                </div>
              </div>

              {/* Map */}
              <div className="w-full h-64 sm:h-80 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120073.05403591095!2d73.71041345932416!3d20.00571159742478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeba0fbe5a1af%3A0xc5c2a36e766e58c7!2sNashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1705456163399!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
           
            {/* Right Column - Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                  rows={4}
                  placeholder="Write your message"
                  required
                />
              </div>
              
              {submitStatus && (
                <div className={`text-sm ${submitStatus === 'success' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                  {submitStatus === 'success' ? 'Message sent successfully!' : 'Failed to send message. Please try again.'}
                </div>
              )}

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex-1 py-3 px-4 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300 flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                >
                  <RefreshCw size={20} /> Reset
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 px-4 bg-blue-500 dark:bg-blue-600 text-white rounded-xl hover:bg-blue-600 dark:hover:bg-blue-500 transition-all transform hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    <>
                      <Send size={20} /> Send
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;