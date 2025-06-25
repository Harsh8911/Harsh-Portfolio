import React from 'react';
import { Users, MessageCircle, Share2, HelpCircle, ExternalLink, Sparkles, Heart, Star, Zap } from 'lucide-react';

const CommunitySection = () => {
  const features = [
    {
      icon: <MessageCircle className="w-5 h-5 lg:w-6 lg:h-6" />,
      title: 'Daily Discussions',
      description: 'Engage in tech discussions and share knowledge',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      icon: <Share2 className="w-5 h-5 lg:w-6 lg:h-6" />,
      title: 'Project Showcases',
      description: 'Share your projects and get valuable feedback',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
      icon: <HelpCircle className="w-5 h-5 lg:w-6 lg:h-6" />,
      title: 'Quick Help',
      description: 'Get instant help with coding challenges',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    }
  ];

  const socialPlatforms = [
    {
      name: 'Instagram',
      handle: '@dev_._clan',
      followers: '0',
      icon: (
        <svg className="w-5 h-5 lg:w-6 lg:h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      link: 'https://www.instagram.com/dev_._clan/',
      color: 'from-pink-500 to-purple-600',
      bgColor: 'bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900/20 dark:to-purple-900/20'
    },
    {
      name: 'WhatsApp',
      handle: 'Dev Clan Community',
      followers: '5+',
      icon: (
        <svg className="w-5 h-5 lg:w-6 lg:h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      ),
      link: 'https://chat.whatsapp.com/CboDpES9lKKB6rdBtkBj9j',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20'
    }
  ];

  const stats = [
    { label: 'Members', value: '10+', icon: Users },
    { label: 'Projects Shared', value: '15+', icon: Share2 },
    { label: 'Daily Active', value: '5+', icon: MessageCircle },
  ];

  return (
    <div className="min-h-full p-3 lg:p-5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 lg:mb-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Users className="w-8 h-8 lg:w-10 lg:h-10 text-blue-500 dark:text-blue-400 animate-bounce" />
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white font-playfair">
              Community
            </h1>
          </div>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4"></div>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-3 font-playfair">
            Connect & Grow Together
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Join our thriving community of developers where knowledge sharing, collaboration, and growth happen every day.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-10 lg:mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bgColor} p-6 lg:p-8 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 transition-all duration-300 hover:shadow-xl group`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`p-3 lg:p-4 bg-gradient-to-r ${feature.color} text-white rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-base lg:text-lg font-bold text-gray-900 dark:text-white mb-3 font-playfair">
                  {feature.title}
                </h3>
                <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Connect With Me Section */}
        <div className="mb-10 lg:mb-12">
          <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-6 lg:mb-8 text-center font-playfair">
            Connect With Me
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {socialPlatforms.map((platform, index) => (
              <div
                key={index}
                className={`${platform.bgColor} p-6 lg:p-8 rounded-2xl lg:rounded-3xl border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 transition-all duration-300 hover:shadow-xl group`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center justify-between mb-4 lg:mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 lg:p-4 bg-gradient-to-r ${platform.color} text-white rounded-xl lg:rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {platform.icon}
                    </div>
                    <div>
                      <h4 className="text-base lg:text-lg font-bold text-gray-900 dark:text-white font-playfair">
                        {platform.name}
                      </h4>
                      <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400">
                        {platform.handle}
                      </p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white font-playfair">
                      {platform.followers}
                    </div>
                    <div className="text-xs lg:text-sm text-gray-600 dark:text-gray-400">
                      Followers
                    </div>
                  </div>
                </div>
                <a
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2 py-3 lg:py-4 bg-gradient-to-r ${platform.color} text-white rounded-xl lg:rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm lg:text-base font-medium`}
                >
                  <ExternalLink size={18} />
                  Join {platform.name}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Community Impact */}
        <div className="mb-10 lg:mb-12">
          <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-6 lg:mb-8 text-center font-playfair">
            Community Impact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 lg:p-8 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 transition-all duration-300 hover:shadow-xl"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon className="w-8 h-8 lg:w-10 lg:h-10 mx-auto mb-3 text-blue-600 dark:text-blue-400 animate-pulse" />
                  <div className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2 font-playfair">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm lg:text-base">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl lg:rounded-3xl p-8 lg:p-10 text-white relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-6 right-6 w-10 h-10 bg-white/20 rounded-full animate-bounce"></div>
            <div className="absolute bottom-6 left-6 w-8 h-8 bg-white/20 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-white/20 rounded-full animate-ping"></div>
            
            <div className="relative">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Sparkles className="w-6 h-6 lg:w-8 lg:h-8 animate-pulse" />
                <h3 className="text-xl lg:text-2xl font-bold font-playfair">Ready to Level Up?</h3>
                <Sparkles className="w-6 h-6 lg:w-8 lg:h-8 animate-pulse" />
              </div>
              <p className="text-blue-100 mb-8 text-sm lg:text-base max-w-2xl mx-auto">
                Join thousands of developers in our amazing community! Share your projects, learn new technologies, and grow together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://chat.whatsapp.com/CboDpES9lKKB6rdBtkBj9j"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-3 lg:px-8 lg:py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 text-sm lg:text-base shadow-lg"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Join WhatsApp Community
                </a>
                <a
                  href="https://www.instagram.com/dev_._clan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/20 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-xl font-bold hover:bg-white/30 transition-all duration-300 hover:scale-105 text-sm lg:text-base border border-white/30"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Follow on Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;