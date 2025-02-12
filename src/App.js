"use client"

import { useState, useEffect } from "react"
import { Menu, X, Leaf, Users, Globe, Linkedin, ChevronRight, Check } from "lucide-react"

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Insights", href: "#insights" },
    { name: "Contact", href: "#contact" },
  ]

  const insights = [
    {
      title: "The Future of Sustainable Tax Practices",
      description: "Explore how businesses are integrating sustainability into their tax strategies.",
      image: "https://images.unsplash.com/photo-1618044733300-9472054094ee",
      category: "Sustainability"
    },
    {
      title: "Navigating Cross-Border Tax Challenges",
      description: "Key considerations for businesses expanding internationally in the post-pandemic era.",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e",
      category: "International Tax"
    },
    {
      title: "Social Impact: Measuring What Matters",
      description: "How to quantify and report on your organization's social impact for stakeholders.",
      image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f",
      category: "Social Impact"
    },
  ]

  const testimonials = [
    {
      quote: "tax & purpose has been instrumental in helping us navigate complex international tax issues while maintaining our commitment to social responsibility.",
      author: "Jane Doe",
      position: "CEO, GreenTech Innovations",
    },
    {
      quote: "Their expertise in sustainable tax practices has allowed us to maximize our impact while staying compliant. Highly recommended!",
      author: "John Smith",
      position: "CFO, EcoSolutions Inc.",
    },
    {
      quote: "Working with tax & purpose has been a game-changer for our non-profit. They truly understand the unique challenges we face.",
      author: "Emily Brown",
      position: "Executive Director, Global Change Foundation",
    },
  ]

  const services = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Social Entrepreneurship",
      description: "Tax expertise for social enterprises and non-profit organizations.",
      features: ["Non-profit tax compliance", "Social impact measurement", "Grant and funding strategies"],
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Sustainability",
      description: "Tax advice for environmental projects and sustainable infrastructure.",
      features: ["Green tax incentives", "Carbon credit accounting", "ESG reporting support"],
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "International Tax",
      description: "Cross-border tax consulting with a focus on Belgium and Netherlands.",
      features: ["Transfer pricing", "Global mobility solutions", "International tax structuring"],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Header - more subtle transparency */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
          }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <a href="#" className={`font-serif text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              tax & purpose
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden rounded-md p-2 ${isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                }`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {/* Desktop menu */}
            <nav className="hidden lg:flex lg:gap-8">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${isScrolled
                    ? 'text-gray-700 hover:text-emerald-600'
                    : 'text-white hover:text-emerald-400'
                    }`}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Consultation button */}
            <a
              href="https://calendly.com/contact-taxandpurpose/30min"
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden lg:inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md ${isScrolled
                ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                : 'bg-white text-emerald-600 hover:bg-emerald-50'
                }`}
            >
              Schedule Consultation
            </a>
          </div>
        </div>

        {/* Mobile menu - update colors */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md">
            <div className="space-y-1 px-4 pb-3 pt-2">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-emerald-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="https://calendly.com/contact-taxandpurpose/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 w-full rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 transition-all duration-300"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section - refined gradients and colors */}
      <section className="relative h-screen flex items-center">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
            alt="Background"
            className="h-full w-full object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-transparent"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            {/* Text content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <span className="inline-block text-emerald-400 font-medium">International Tax Consulting</span>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white">
                  <span className="block">
                    Empowering Social &
                  </span>
                  <span className="block text-emerald-400">
                    Sustainable Business
                  </span>
                  <span className="block mt-2 text-white/90">
                    Through Expert Tax Advice
                  </span>
                </h1>
                <p className="text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0">
                  Combining 30 years of international tax expertise with a passion for social entrepreneurship and
                  sustainability to drive meaningful change and positive social impact.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="https://calendly.com/contact-taxandpurpose/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-6 py-3 text-base font-medium text-white hover:bg-emerald-700 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                >
                  Schedule a Consultation
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center justify-center rounded-md border-2 border-white/20 px-6 py-3 text-base font-medium text-white hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Right side - temporary placeholder using the coffee workspace image */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[450px]">
                <img
                  src="https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Workspace with laptop and coffee"
                  className="h-full w-full object-cover object-center"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-slate-900/20 to-transparent"></div>
              </div>
              {/* Decorative dot pattern - adjusted position */}
              <div className="absolute -right-8 -bottom-8 w-64 h-64 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.15] rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos - darker background */}
      <section className="py-24 relative bg-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-medium">Trusted Partners</span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-slate-900">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Working with organizations committed to sustainable and social impact
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-full h-32 relative group">
                <div className="absolute inset-0 bg-white rounded-xl shadow-sm group-hover:shadow-md transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                <div className="relative h-full flex items-center justify-center p-8">
                  <img
                    src={`https://placehold.co/200x80?text=Partner+${i}`}
                    alt={`Partner logo ${i}`}
                    className="max-h-12 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with background image */}
      <section id="services" className="py-24 relative overflow-hidden">
        {/* Background with animated gradient */}
        <div className="absolute inset-0 bg-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-emerald-400/5 to-transparent animate-pulse-slow"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-emerald-400 bg-emerald-900/50 rounded-full">
              <span className="w-1 h-1 mr-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Our Expertise
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-white">
              Comprehensive Tax Services
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Expert tax consulting tailored to your sustainable and social impact goals
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Decorative gradient border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Content wrapper */}
                <div className="relative">
                  {/* Icon */}
                  <div className="inline-flex p-3 rounded-xl bg-emerald-900/50 text-emerald-400 group-hover:scale-110 transition-all duration-500">
                    {service.icon}
                  </div>

                  {/* Title and description */}
                  <h3 className="mt-6 text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-slate-300">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="mt-8 space-y-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-slate-300 group/item">
                        <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-emerald-900/50 text-emerald-400 mr-3 group-hover/item:bg-emerald-800/50 transition-colors duration-300">
                          <Check className="h-4 w-4" />
                        </div>
                        <span className="group-hover/item:text-emerald-400 transition-colors duration-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Learn more link */}
                  <div className="mt-8 pt-6 border-t border-slate-700/50">
                    <a
                      href="#"
                      className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-medium group/link"
                    >
                      Learn more
                      <span className="ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300">
                        <ChevronRight className="h-4 w-4" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with modern office background */}
      <section id="about" className="py-24 relative bg-slate-50">
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-8">
              <div>
                <span className="inline-block px-3 py-1 text-sm font-medium text-emerald-700 bg-emerald-100 rounded-full">About Us</span>
                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">Expertise Meets Purpose</h2>
              </div>

              <p className="text-lg text-slate-600">
                With 30 years of experience in international tax consulting, including 17.5 years with the "big four", I
                bring deep expertise to help businesses achieve both economic success and positive social impact.
              </p>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-slate-900">Our Mission</h3>
                <ul className="space-y-4">
                  {[
                    "Strive for both economic success and positive social impact",
                    "Want to promote sustainable business practices",
                    "Are considering alternative business models",
                    "Need expertise in international tax matters",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start group">
                      <span className="flex-shrink-0 p-1 rounded-full bg-emerald-100 text-emerald-600 mt-1 group-hover:scale-110 transition-transform duration-300">
                        <Check className="h-5 w-5" />
                      </span>
                      <span className="ml-4 text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Stats grid with more engaging hover effects */}
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                { number: "30+", label: "Years Experience" },
                { number: "3", label: "Countries Expertise" },
                { number: "100+", label: "Satisfied Clients" },
                { number: "50M+", label: "Tax Savings" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  <div className="relative">
                    <div className="text-4xl font-bold text-emerald-600 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="mt-2 text-sm font-medium text-slate-600">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section with cityscape background */}
      <section id="insights" className="py-24 relative bg-gradient-to-b from-white to-slate-50">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <span className="inline-block px-4 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-3">
              Latest Updates
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-slate-900">
              Featured Insights
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Expert perspectives on sustainable tax practices and social entrepreneurship
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {insights.map((insight, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 via-slate-900/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block px-3 py-1 text-xs font-medium text-emerald-400 bg-emerald-900/30 backdrop-blur-sm rounded-full">
                      {insight.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-slate-900 group-hover:text-emerald-600 transition-colors duration-300">
                    {insight.title}
                  </h3>
                  <p className="text-slate-600 mb-4">{insight.description}</p>
                  <a
                    href="#"
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium group/link"
                  >
                    Read more
                    <ChevronRight className="h-4 w-4 ml-1 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials with modern workspace background */}
      <section className="py-24 relative bg-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <span className="inline-block px-4 py-1 rounded-full bg-emerald-900/50 text-emerald-400 text-sm font-medium mb-3">
              Testimonials
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-white">
              What Our Clients Say
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Hear from organizations we've helped achieve their sustainable and social impact goals
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative bg-white rounded-xl p-8 shadow-lg animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">"</span>
                  </div>
                </div>
                <blockquote className="relative">
                  <p className="text-slate-700 mb-6 italic">{testimonial.quote}</p>
                  <footer className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                      <span className="text-emerald-600 font-medium text-lg">
                        {testimonial.author[0]}
                      </span>
                    </div>
                    <div>
                      <cite className="not-italic font-medium text-slate-900">{testimonial.author}</cite>
                      <div className="text-sm text-slate-500">{testimonial.position}</div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section with light overlay */}
      <section className="py-24 relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3"
            alt="Background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-white/95"></div>
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-20"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-medium">FAQ</span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Find answers to common questions about our services and approach
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                question: "How can sustainable tax practices benefit my business?",
                answer:
                  "Sustainable tax practices can lead to long-term cost savings, improved reputation, and better alignment with global sustainability goals. They can also help you identify new opportunities for tax incentives related to green initiatives.",
              },
              {
                question: "What industries do you specialize in?",
                answer:
                  "We specialize in a wide range of industries, with a particular focus on social enterprises, non-profits, green technology, and businesses with international operations. Our expertise allows us to provide tailored solutions for each sector.",
              },
              {
                question: "How do you stay updated with changing tax laws?",
                answer:
                  "Our team continuously monitors global tax developments and participates in professional development programs. We also maintain close relationships with tax authorities and industry bodies to stay ahead of changes.",
              },
              {
                question: "Can you help with both domestic and international tax issues?",
                answer:
                  "Absolutely. We have extensive experience in both domestic and international tax matters, with a particular focus on cross-border transactions and operations in Belgium and the Netherlands.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100">
                <h3 className="text-lg font-semibold mb-2 text-slate-900">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with impactful background */}
      <section className="py-24 relative bg-emerald-700">
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">Ready to make an impact?</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-emerald-100 mb-8">
            Let's work together to create sustainable value for your business and society.
          </p>
          <a
            href="https://calendly.com/contact-taxandpurpose/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-medium text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>

      {/* Footer - darkest background */}
      <footer className="relative bg-slate-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-25"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">tax & purpose</h3>
              <p className="text-sm text-gray-400">
                Expert tax consulting for social entrepreneurship and sustainable projects
              </p>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
            <div className="lg:col-span-2 grid gap-8 sm:grid-cols-2">
              <div className="space-y-4">
                <h4 className="text-base font-medium">Quick Links</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="hover:text-white transition-colors">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-base font-medium">Contact</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Leila Momen</li>
                  <li>Jülicher Straße 72a</li>
                  <li>52070 Aachen</li>
                  <li>
                    <a href="tel:+4915144508604" className="hover:text-white transition-colors">
                      +49 151 4450 8604
                    </a>
                  </li>
                  <li>
                    <a href="mailto:contact@tax4purpose.com" className="hover:text-white transition-colors">
                      contact@tax4purpose.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} tax & purpose. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

