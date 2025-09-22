import React from 'react';
import {
  Trophy, Star, Award, Calendar, MapPin, Users,
  Target, Sparkles, Medal, Crown
} from 'lucide-react';

const AchievementsSection = () => {
  const achievements = [
    {
      title: 'Selected for University Level of AAVISHKAR 2024 - SPPU',
      description: 'Selected to represent at the university level for AAVISHKAR 2024, a prestigious research and innovation competition organized by Savitribai Phule Pune University.',
      icon: <Crown className="w-5 h-5 lg:w-6 lg:h-6" />,
      category: 'Academic Excellence',
      date: '2024',
      location: 'SPPU, Pune',
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-indigo-900/30 dark:to-blue-800/20',
      textColor: 'text-indigo-800 dark:text-indigo-200',
      impact: 'University Level Selection',
      participants: '1000+ participants',
      achievement_type: 'Selection',
      rank: 'University Level'
    },
    {
      title: 'Participated in Mumbai Hacks 2.0 (2024)',
      description: 'Actively participated in Mumbai Hacks 2.0, a major hackathon organized by Mumbai Tech Team & Made in Mumbai. Demonstrated exceptional collaborative development skills.',
      icon: <Medal className="w-5 h-5 lg:w-6 lg:h-6" />,
      category: 'Hackathon',
      date: '2024',
      location: 'Mumbai',
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-900/30 dark:to-teal-800/20',
      textColor: 'text-emerald-800 dark:text-emerald-200',
      impact: 'Innovation & Collaboration',
      participants: '500+ developers',
      achievement_type: 'Participation',
      rank: 'Participant'
    },
    {
      title: 'Top 10 - NASA International Space Apps Challenge',
      description: 'Achieved Top 10 position in the NASA International Space Apps Challenge at local level. This prestigious achievement demonstrates exceptional problem-solving skills.',
      icon: <Trophy className="w-5 h-5 lg:w-6 lg:h-6" />,
      category: 'Space Technology',
      date: '2024',
      location: 'Local Level',
      color: 'from-rose-500 to-pink-600',
      bgColor: 'bg-gradient-to-br from-pink-50 to-rose-100 dark:from-pink-900/30 dark:to-rose-800/20',
      textColor: 'text-rose-800 dark:text-rose-200',
      impact: 'Top 10 Local Ranking',
      participants: '200+ local participants',
      achievement_type: 'Ranking',
      rank: 'Top 10'
    }
  ];

  const stats = [
    { label: 'Competitions', value: '3', icon: Trophy, color: 'text-indigo-600' },
    { label: 'Local Ranking', value: 'Top 10', icon: Star, color: 'text-rose-600' },
    { label: 'Recognition Level', value: 'University', icon: Award, color: 'text-emerald-600' },
    { label: 'Total Participants', value: '1700+', icon: Users, color: 'text-amber-600' }
  ];

  return (
    <div className="min-h-full p-2 lg:p-3">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6 lg:mb-8">
          <div className="flex items-center gap-2 mb-3">
            <Trophy className="w-6 h-6 lg:w-8 lg:h-8 text-violet-500 dark:text-violet-400 animate-bounce" />
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white font-playfair">
                Achievements & Recognition
              </h1>
              <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400 mt-1">
                Recognition and accomplishments in competitions and events
              </p>
            </div>
          </div>
          <div className="w-12 h-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full"></div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-3 mb-6 lg:mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-3 lg:p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-zinc-900/20 dark:to-zinc-800/10 backdrop-blur-sm rounded-lg border border-zinc-200/40 dark:border-zinc-700/50 hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                <Icon className={`w-5 h-5 lg:w-6 lg:h-6 mx-auto mb-2 ${stat.color} animate-pulse`} />
                <div className="text-base lg:text-lg font-bold text-gray-900 dark:text-white mb-1 font-playfair">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium text-xs lg:text-sm">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Achievements Cards */}
        <div className="space-y-4 lg:space-y-5">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`group relative ${achievement.bgColor} rounded-xl p-4 lg:p-5 border hover:shadow-xl transition-all duration-500 overflow-hidden card-3d particle-zone`}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              <div className="relative">
                <div className="flex flex-col lg:flex-row gap-4 mb-3">
                  {/* Icon + Tag */}
                  <div className="flex items-center gap-3 lg:flex-col lg:items-center">
                    <div className={`w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-r ${achievement.color} text-white rounded-xl flex items-center justify-center shadow-lg`}>
                      {achievement.icon}
                    </div>
                    <div className="mt-2 text-center">
                      <div className={`text-xs font-bold px-2 py-1 rounded-full ${achievement.textColor} ${achievement.bgColor}`}>
                        {achievement.category}
                      </div>
                      <div className={`text-xs font-semibold mt-1 ${achievement.textColor}`}>
                        {achievement.rank}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg lg:text-xl font-bold text-gray-900 dark:text-white font-playfair mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                      {achievement.description}
                    </p>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 text-xs text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1"><Calendar size={12} /> {achievement.date}</div>
                      <div className="flex items-center gap-1"><MapPin size={12} /> {achievement.location}</div>
                      <div className="flex items-center gap-1"><Target size={12} /> {achievement.impact}</div>
                      <div className="flex items-center gap-1"><Users size={12} /> {achievement.participants}</div>
                    </div>

                    {/* Badge */}
                    <div className="mt-4 flex items-center justify-between">
                      <div className={`text-white px-3 py-1 text-xs rounded-lg font-bold bg-gradient-to-r ${achievement.color}`}>
                        <Trophy size={12} className="inline mr-1" />
                        Achievement Unlocked
                      </div>
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping" />
                        <div className="w-1.5 h-1.5 bg-rose-500 rounded-full animate-ping delay-200" />
                        <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-ping delay-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA - NEW COLOR SCHEME */}
        <div className="mt-10 text-center">
          <div className="bg-gradient-to-r from-cyan-500 via-sky-600 to-violet-600 text-white rounded-2xl p-6 shadow-lg relative overflow-hidden">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 lg:w-6 lg:h-6 animate-pulse text-white" />
              <h3 className="text-xl lg:text-2xl font-bold font-playfair">Ready for New Challenges</h3>
              <Sparkles className="w-5 h-5 lg:w-6 lg:h-6 animate-pulse text-white" />
            </div>
            <p className="text-white/90 text-sm lg:text-base max-w-2xl mx-auto mb-4">
              Always looking for opportunities to participate in competitions and showcase innovative solutions.
              Let’s collaborate and build impactful projects together!
            </p>
            <button className="bg-white text-cyan-700 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-violet-500 font-semibold px-5 py-2 lg:px-6 lg:py-3 rounded-lg text-sm lg:text-base shadow-md transition-all duration-300 hover:scale-105">
              Let's Collaborate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;
