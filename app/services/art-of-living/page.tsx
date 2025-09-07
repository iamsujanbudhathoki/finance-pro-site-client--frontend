'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  TrendingUp, 
  Target, 
  Brain, 
  ArrowRight, 
  CheckCircle, 
  BarChart3,
  Users,
  Calendar,
  Trophy,
  Zap,
  Star,
  Play,
  ChevronRight,
  DollarSign,
  BookOpen,
  PieChart,
  Lightbulb,
  Shield,
  Clock,
  Sparkles,
  Award,
  TrendingDown
} from 'lucide-react';

const philosophies = [
  {
    id: 1,
    title: "Multi-Handed Income",
    subtitle: "Diversified Revenue Streams",
    icon: BarChart3,
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-600",
    iconBg: "bg-emerald-100",
    borderColor: "border-emerald-200",
    description: "Build multiple income sources to create financial stability and accelerate wealth building through strategic diversification.",
    keyPoints: [
      "Primary income optimization",
      "Side business development", 
      "Investment portfolio growth",
      "Passive income creation"
    ],
    benefits: [
      "Reduced financial risk through diversification",
      "Accelerated wealth building potential", 
      "Enhanced career and lifestyle flexibility",
      "Economic recession protection shield"
    ],
    stats: { value: "5+", label: "Average Income Streams" }
  },
  {
    id: 2,
    title: "10% | 3 Rules | 3 Goals",
    subtitle: "Systematic Life Framework",
    icon: Target,
    color: "from-blue-600 to-blue-700",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    iconBg: "bg-blue-100",
    borderColor: "border-blue-200",
    description: "A proven systematic approach that simplifies decision-making and ensures consistent progress toward your most important objectives.",
    keyPoints: [
      "10% consistent savings and investment rate",
      "3 non-negotiable life rules for discipline",
      "3 focused annual goals for clarity",
      "Quarterly review and adjustment system"
    ],
    benefits: [
      "Simplified decision making process",
      "Consistent progress tracking system",
      "Reduced overwhelm and mental clarity",
      "Compound growth over extended periods"
    ],
    stats: { value: "90%", label: "Goal Achievement Rate" }
  },
  {
    id: 3,
    title: "Self-Improvement",
    subtitle: "Continuous Growth Mindset",
    icon: Brain,
    color: "from-yellow-500 to-orange-500", 
    bgColor: "bg-yellow-50",
    textColor: "text-yellow-600",
    iconBg: "bg-yellow-100",
    borderColor: "border-yellow-200",
    description: "Develop yourself holistically across physical, mental, and emotional dimensions to unlock your full potential and life satisfaction.",
    keyPoints: [
      "Daily learning and skill development habits",
      "Physical fitness and wellness routine",
      "Mental health and mindfulness practices",
      "Progress tracking and milestone celebration"
    ],
    benefits: [
      "Enhanced personal and professional capabilities",
      "Significantly improved life satisfaction",
      "Increased resilience and adaptability",
      "Greater opportunities and life possibilities"
    ],
    stats: { value: "1%", label: "Daily Growth Compound" }
  }
];

const features = [
  {
    icon: Shield,
    title: "Risk Mitigation",
    description: "Multiple income streams protect against economic uncertainty and job market volatility",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50"
  },
  {
    icon: Clock,
    title: "Time Optimization", 
    description: "Systematic approach maximizes productivity and results while minimizing wasted effort",
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description: "Structured self-improvement accelerates personal growth and opens new opportunities",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50"
  }
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Tech Entrepreneur & Investor",
    content: "The multi-handed income philosophy completely transformed my financial life. I went from one income source to six different streams within 18 months. The systematic approach made it achievable and sustainable.",
    rating: 5,
    avatar: "SC",
    achievement: "+400% income increase"
  },
  {
    name: "Michael Rodriguez",
    role: "Marketing Director & Coach", 
    content: "The 10% rule and 3-goal focus changed everything for me. Instead of being overwhelmed by endless objectives, I achieved more meaningful progress in 2 years than the previous decade combined.",
    rating: 5,
    avatar: "MR",
    achievement: "3x goal achievement rate"
  }
];

const stats = [
  { value: "15,247", label: "Lives Transformed", icon: Users, color: "text-emerald-600" },
  { value: "92%", label: "Success Rate", icon: Trophy, color: "text-blue-600" }, 
  { value: "$12M+", label: "Wealth Created", icon: TrendingUp, color: "text-yellow-600" },
  { value: "3.2x", label: "Average Income Growth", icon: BarChart3, color: "text-emerald-600" }
];

export default function NewArtOfLiving() {
  const [activeTab, setActiveTab] = useState(1);

  const activePhilosophy = philosophies.find(p => p.id === activeTab);

  return (
    <div className="pt-16 sm:pt-20 font-sans">
      {/* Hero Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-emerald-50/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.1),transparent_50%)]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Logo Section */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="relative group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105 overflow-hidden">
                  <Image 
                    src="/art_of_living.jpg" 
                    alt="New Art of Living" 
                    width={112} 
                    height={112} 
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-emerald-500 to-yellow-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
            </div>

            <div className="max-w-5xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-blue-900 mb-4 lg:mb-6 leading-tight">
                New Art of{' '}
                <span className="bg-gradient-to-r from-emerald-500 via-blue-600 to-yellow-500 bg-clip-text text-transparent">
                  Living
                </span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 lg:mb-12 leading-relaxed max-w-4xl mx-auto">
                Master three revolutionary philosophies to build{' '}
                <span className="text-emerald-600 font-semibold">multiple income streams</span>,{' '}
                <span className="text-blue-600 font-semibold">systematic growth</span>, and{' '}
                <span className="text-yellow-600 font-semibold">continuous self-improvement</span>
              </p>
            </div>

            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto mb-8 sm:mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="group bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:-translate-y-2">
                  <stat.icon className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 ${stat.color} mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform`} />
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-1 sm:mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center max-w-2xl mx-auto">
              <Link 
                href="/get-started" 
                className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-bold rounded-xl sm:rounded-2xl hover:from-emerald-600 hover:to-blue-700 transition-all duration-300 shadow-2xl hover:shadow-emerald-500/25 transform hover:-translate-y-1 text-base sm:text-lg"
              >
                <Users className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 group-hover:scale-110 transition-transform" />
                Start Your Transformation
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Link>
              <Link 
                href="/resources" 
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-300 text-gray-700 font-bold rounded-xl sm:rounded-2xl hover:bg-gray-50 transition-all duration-300 text-base sm:text-lg group"
              >
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                Download Free Guide
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Three Philosophies Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-gradient-to-br from-gray-50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-500 to-yellow-500 rounded-full mb-4 sm:mb-6">
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-blue-900 mb-4 sm:mb-6 leading-tight">
              Three Pillars of{' '}
              <span className="bg-gradient-to-r from-emerald-500 to-yellow-500 bg-clip-text text-transparent">
                Transformation
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Each philosophy synergistically amplifies the others, creating a powerful system 
              for comprehensive life transformation and sustainable success
            </p>
          </div>

          {/* Enhanced Philosophy Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12 md:mb-16">
            {philosophies.map((philosophy) => (
              <button
                key={philosophy.id}
                onClick={() => setActiveTab(philosophy.id)}
                className={`group flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 text-xs sm:text-sm md:text-base lg:text-lg ${
                  activeTab === philosophy.id
                    ? `bg-gradient-to-r ${philosophy.color} text-white shadow-2xl transform scale-105`
                    : `bg-white text-gray-700 hover:bg-gradient-to-r ${philosophy.color} hover:text-white border-2 ${philosophy.borderColor} hover:border-transparent shadow-lg hover:shadow-2xl hover:scale-105`
                }`}
              >
                <philosophy.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">{philosophy.title}</span>
                <span className="sm:hidden font-bold">{philosophy.id}</span>
              </button>
            ))}
          </div>

          {/* Enhanced Active Philosophy Content */}
          {activePhilosophy && (
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start">
                {/* Left Content */}
                <div className="space-y-6 sm:space-y-8">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 ${activePhilosophy.iconBg} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                      <activePhilosophy.icon className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 ${activePhilosophy.textColor}`} />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900">
                        {activePhilosophy.title}
                      </h3>
                      <p className="text-base sm:text-lg md:text-xl text-gray-500 mt-1 sm:mt-2">
                        {activePhilosophy.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                    {activePhilosophy.description}
                  </p>

                  <div className="space-y-4 sm:space-y-6">
                    <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900">
                      Core Implementation Strategy:
                    </h4>
                    <div className="grid gap-3 sm:gap-4">
                      {activePhilosophy.keyPoints.map((point, index) => (
                        <div key={index} className="group flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-lg sm:rounded-xl shadow-sm border-l-4 border-l-emerald-500 hover:shadow-lg transition-all duration-300">
                          <div className={`w-6 h-6 sm:w-8 sm:h-8 ${activePhilosophy.iconBg} rounded-full flex items-center justify-center mt-1 flex-shrink-0 group-hover:scale-110 transition-transform`}>
                            <CheckCircle className={`w-4 h-4 sm:w-5 sm:h-5 ${activePhilosophy.textColor}`} />
                          </div>
                          <span className="text-gray-800 font-medium text-sm sm:text-base md:text-lg leading-relaxed">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Enhanced Right Content */}
                <div className={`${activePhilosophy.bgColor} rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl border ${activePhilosophy.borderColor}`}>
                  <div className="text-center mb-6 sm:mb-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-r ${activePhilosophy.color} rounded-xl sm:rounded-2xl text-white text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 shadow-lg`}>
                      {activePhilosophy.stats.value}
                    </div>
                    <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 mb-2 sm:mb-3">
                      Expected Outcome
                    </h4>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 font-medium">
                      {activePhilosophy.stats.label}
                    </p>
                  </div>

                  <div className="space-y-3 sm:space-y-4 md:space-y-6">
                    <h5 className="font-bold text-blue-900 text-base sm:text-lg md:text-xl text-center mb-4 sm:mb-6">
                      Transformational Benefits:
                    </h5>
                    {activePhilosophy.benefits.map((benefit, index) => (
                      <div key={index} className="group bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 shadow-sm hover:shadow-lg border-l-4 border-l-emerald-500 transition-all duration-300 hover:-translate-y-1">
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div className={`w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r ${activePhilosophy.color} rounded-full flex-shrink-0 mt-2 group-hover:scale-125 transition-transform`}></div>
                          <span className="text-gray-800 font-medium text-sm sm:text-base md:text-lg leading-relaxed">{benefit}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Why It Works Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4 sm:mb-6 leading-tight">
              Why This{' '}
              <span className="bg-gradient-to-r from-emerald-500 to-yellow-500 bg-clip-text text-transparent">
                System Works
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our scientifically-backed integrated approach addresses the three fundamental 
              pillars of sustainable life success and wealth building
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 ${feature.bgColor} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${feature.color}`} />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 mb-3 sm:mb-4 group-hover:text-emerald-500 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-500 to-emerald-500 rounded-full mb-4 sm:mb-6">
              <Award className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4 sm:mb-6 leading-tight">
              Real Success{' '}
              <span className="bg-gradient-to-r from-emerald-500 to-yellow-500 bg-clip-text text-transparent">
                Stories
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how professionals like you have transformed their lives using the New Art of Living
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <div className="flex flex-wrap items-center gap-2 mb-4 sm:mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500 fill-current" />
                  ))}
                  <span className="ml-2 px-2 sm:px-3 py-1 bg-gradient-to-r from-emerald-500 to-yellow-500 text-white text-xs sm:text-sm font-semibold rounded-full">
                    {testimonial.achievement}
                  </span>
                </div>
                <blockquote className="text-gray-800 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg italic leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-xl sm:rounded-2xl flex items-center justify-center text-white font-bold text-sm sm:text-lg shadow-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-blue-900 text-base sm:text-lg">{testimonial.name}</div>
                    <div className="text-gray-500 text-xs sm:text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-gradient-to-br from-blue-600 via-emerald-500 to-yellow-500 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl mb-6 sm:mb-8">
              <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight">
              Ready to Master the{' '}
              <span className="text-yellow-300">
                New Art of Living?
              </span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-8 sm:mb-10 lg:mb-12 leading-relaxed">
              Join over 15,000+ high achievers who have transformed their financial future, 
              simplified their success system, and unlocked continuous growth. 
              Your extraordinary life starts today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center max-w-2xl mx-auto">
              <Link 
                href="/get-started" 
                className="group inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-white text-blue-600 font-bold rounded-xl sm:rounded-2xl hover:bg-yellow-50 transition-all duration-300 shadow-2xl hover:shadow-white/25 transform hover:-translate-y-1 text-base sm:text-lg"
              >
                <Users className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 group-hover:scale-110 transition-transform" />
                Start Your Transformation
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 ml-2 text-yellow-500" />
              </Link>
              <Link 
                href="/resources" 
              
                className="inline-flex items-center justify-center px-10 py-5 border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 text-lg group"
              >
                <BookOpen className="w-6 h-6 mr-3" />
                Download Free Masterclass
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}