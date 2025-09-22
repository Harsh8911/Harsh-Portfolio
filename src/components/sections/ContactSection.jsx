import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, RefreshCw, MessageCircle, Clock, CheckCircle, Sparkles, BookOpen } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
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

  const contactInfo = [
    {
      icon: <Mail className="w-4 h-4 lg:w-5 lg:h-5" />,
      label: 'Email',
      value: 'harshumeshgavali@gmail.com',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      icon: <Phone className="w-4 h-4 lg:w-5 lg:h-5" />,
      label: 'Phone',
      value: '+91 8010545025',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      icon: <MapPin className="w-4 h-4 lg:w-5 lg:h-5" />,
      label: 'Location',
      value: 'Nashik, Maharashtra, India',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    }
  ];

  const quickStats = [
    { label: 'Response Time', value: '< 24h', icon: Clock },
    { label: 'Projects Completed', value: '10+', icon: CheckCircle },
    { label: 'Happy Clients', value: '100%', icon: MessageCircle },
  ];

  // Different Gita Shlok
  const gitaShlok = {
    sanskrit: "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय।\nसिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते॥",
    transliteration: "Yogasthah kuru karmani sangam tyaktva dhananjaya,\nSiddhyasiddhyoh samo bhutva samatvam yoga uchyate.",
    translation: "Perform your duty equipoised, O Arjuna, abandoning all attachment to success or failure. Such equanimity is called yoga.",
    chapter: "Bhagavad Gita 2.48",
    meaning: "This verse teaches us to work with dedication while maintaining inner balance, regardless of outcomes. This philosophy guides my approach to software development - giving my best effort while staying detached from results."
  };

  return (
    <div className="min-h-full p-2 lg:p-3">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6 lg:mb-8">
          <div className="flex items-center gap-2 mb-3">
            <MessageCircle className="w-6 h-6 lg:w-8 lg:h-8 text-blue-500 dark:text-blue-400 animate-bounce" />
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white font-playfair">
                Get In Touch
              </h1>
              <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400 mt-1">
                Let's discuss your next project or collaboration opportunity
              </p>
            </div>
          </div>
          <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-4 mb-6 lg:mb-8">
          {quickStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-3 lg:p-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-lg lg:rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 transition-all duration-300 hover:shadow-xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon className="w-6 h-6 lg:w-8 lg:h-8 mx-auto mb-2 text-blue-600 dark:text-blue-400 animate-pulse" />
                <div className="text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-1 font-playfair">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-xs lg:text-sm">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Column - Contact Info and Map */}
          <div className="space-y-4 lg:space-y-6">
            {/* Contact Info Cards */}
            <div className="space-y-3 lg:space-y-4">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-3 lg:mb-4 font-playfair">Contact Information</h3>
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className={`${info.bgColor} p-3 lg:p-4 rounded-lg lg:rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 transition-all duration-300 hover:shadow-xl group`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-center gap-2 lg:gap-3">
                    <div className={`p-2 bg-gradient-to-r ${info.color} text-white rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-0.5">
                        {info.label}
                      </div>
                      <div className="text-sm lg:text-base font-semibold text-gray-900 dark:text-white">
                        {info.value}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="relative">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-3 lg:mb-4 font-playfair">Find Me Here</h3>
              <div className="relative w-full h-48 lg:h-56 rounded-lg lg:rounded-xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120073.05403591095!2d73.71041345932416!3d20.00571159742478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeba0fbe5a1af%3A0xc5c2a36e766e58c7!2sNashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1705456163399!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="hover:scale-105 transition-transform duration-500"
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="space-y-4 lg:space-y-6">
            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 dark:text-white font-playfair">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-3 lg:space-y-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-lg lg:rounded-xl p-3 lg:p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-3 lg:space-y-4 glass-3d rounded-lg lg:rounded-xl p-3 lg:p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-xl card-3d particle-zone">
              <div className="space-y-3 lg:space-y-4">
                <div className="group">
                  <label className="block text-xs lg:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 lg:p-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600 text-xs lg:text-sm"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="group">
                  <label className="block text-xs lg:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 lg:p-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600 text-xs lg:text-sm"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div className="group">
                  <label className="block text-xs lg:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-2 lg:p-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600 resize-none text-xs lg:text-sm"
                    rows={3}
                    placeholder="Tell me about your project or just say hello..."
                    required
                  />
                </div>
              </div>
              
              {submitStatus && (
                <div className={`p-2 lg:p-3 rounded-lg text-center font-medium text-xs lg:text-sm ${
                  submitStatus === 'success' 
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' 
                    : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                }`}>
                  {submitStatus === 'success' 
                    ? '✅ Message sent successfully! I\'ll get back to you soon.' 
                    : '❌ Failed to send message. Please try again.'
                  }
                </div>
              )}

              <div className="flex gap-2 lg:gap-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex-1 py-2 lg:py-3 px-3 lg:px-4 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 text-gray-700 dark:text-gray-300 flex items-center justify-center gap-1 font-medium hover:scale-105 text-xs lg:text-sm"
                  disabled={isSubmitting}
                >
                  <RefreshCw size={14} />
                  Reset Form
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 lg:py-3 px-3 lg:px-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-1 disabled:opacity-50 font-medium shadow-lg hover:shadow-xl text-xs lg:text-sm"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  ) : (
                    <>
                      <Send size={14} />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Gita Shlok */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 rounded-lg lg:rounded-xl p-3 lg:p-4 border border-orange-200 dark:border-orange-800">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-4 h-4 lg:w-5 lg:h-5 text-orange-600 dark:text-orange-400" />
                <h4 className="text-sm lg:text-base font-bold text-orange-800 dark:text-orange-400 font-playfair">
                  Daily Wisdom - Bhagavad Gita
                </h4>
              </div>
              <div className="space-y-2 lg:space-y-3">
                <div className="text-center">
                  <p className="text-xs lg:text-sm font-medium text-orange-700 dark:text-orange-300 italic leading-relaxed">
                    {gitaShlok.sanskrit}
                  </p>
                  <p className="text-xs text-orange-600 dark:text-orange-400 mt-1 italic">
                    {gitaShlok.transliteration}
                  </p>
                </div>
                <div className="border-t border-orange-200 dark:border-orange-700 pt-2">
                  <p className="text-xs lg:text-sm text-orange-700 dark:text-orange-300 mb-1">
                    <strong>Translation:</strong> {gitaShlok.translation}
                  </p>
                  <p className="text-xs text-orange-600 dark:text-orange-400 italic">
                    {gitaShlok.meaning}
                  </p>
                  <p className="text-xs text-orange-500 dark:text-orange-500 font-medium mt-1">
                    - {gitaShlok.chapter}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
