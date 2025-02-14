"use client"

import { useState, useEffect } from "react"
import { Menu, X, Leaf, Users, Globe, Linkedin, ChevronRight, Check } from "lucide-react"
import bigFourImage from './images/big4.png'

console.log('Image path:', bigFourImage);

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <a href="#" className={`font-serif text-2xl font-bold ${
              isScrolled ? 'text-text' : 'text-white'
            }`}>
              tax & purpose
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden rounded-md p-2 ${
                isScrolled 
                  ? 'text-text hover:bg-primary/10' 
                  : 'text-white hover:bg-white/10'
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
                  className={`text-sm font-medium transition-colors ${
                    isScrolled
                      ? 'text-text hover:text-accent'
                      : 'text-white hover:text-primary'
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
              className={`hidden lg:inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md ${
                isScrolled
                  ? 'bg-accent text-white hover:bg-primary'
                  : 'bg-white text-accent hover:bg-primary/10'
              }`}
            >
              Schedule Consultation
            </a>
          </div>
        </div>

        {/* Mobile menu - update colors */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm shadow-md">
            <div className="space-y-1 px-4 pb-3 pt-2">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-text hover:bg-primary/10 hover:text-accent"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="https://calendly.com/contact-taxandpurpose/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 w-full rounded-md bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-primary transition-all duration-300"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section - refined gradients and colors */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3"
            alt="Background"
            className="h-full w-full object-cover filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-text/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-text/30 via-transparent to-text/30"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            {/* Text content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-background bg-accent/90 rounded-full backdrop-blur-sm shadow-lg">
                  International Tax Consulting
                </span>
                <h1 className="text-5xl font-bold tracking-tight sm:text-6xl text-background">
                  <span className="block font-serif">
                    Empowering Social &
                  </span>
                  <span className="block text-accent font-serif">
                    Sustainable Business
                  </span>
                  <span className="block mt-2 text-background/90 text-3xl sm:text-4xl font-sans">
                    Through Expert Tax Advice
                  </span>
                </h1>
                <p className="text-xl text-background/80 max-w-2xl font-light">
                  Combining 30 years of international tax expertise with a passion for social entrepreneurship and
                  sustainability to drive meaningful change.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="https://calendly.com/contact-taxandpurpose/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-base font-medium text-white hover:bg-primary transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
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
              <div className="absolute -right-8 -bottom-8 w-64 h-64 bg-[radial-gradient(#e8bde6_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.15] rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos - darker background */}
      <section className="py-24 relative bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(#e8bde6_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-background bg-accent/90 rounded-full backdrop-blur-sm shadow-lg">
              Trusted Partners
            </span>
            <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl text-text font-serif">
              Trusted by Industry Leaders
            </h2>
            <p className="mt-4 text-lg text-text/70 max-w-2xl mx-auto font-light">
              Working with organizations committed to sustainable and social impact
            </p>
          </div>
          
          {/* Updated partner grid with better hover effects */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-full relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl"></div>
                <div className="relative bg-white/50 backdrop-blur-sm rounded-xl p-8 border border-primary/10 hover:border-accent/20 transition-all duration-500 hover:shadow-lg">
                  <div className="absolute top-0 left-0 h-full w-1 bg-accent/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                  <div className="h-20 flex items-center justify-center">
                    <img
                      src={bigFourImage}
                      alt={`Partner logo ${i}`}
                      className="max-h-12 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with glassmorphism design */}
      <section id="services" className="py-24 relative overflow-hidden bg-gradient-to-br from-text/95 to-text/80">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[500px] h-[500px] -top-32 -left-32 bg-primary/30 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute w-[500px] h-[500px] -bottom-32 -right-32 bg-accent/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center p-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-4">
              <span className="px-4 py-1 rounded-full text-sm font-medium text-white bg-accent/80">
                Our Expertise
              </span>
            </div>
            <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl text-white font-serif">
              Comprehensive Tax Services
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto font-light">
              Expert tax consulting tailored to your sustainable and social impact goals
            </p>
          </div>

          {/* Services grid */}
          <div className="grid gap-8 lg:grid-cols-3">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Glass card */}
                <div className="relative h-full backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 transition-all duration-500 hover:bg-white/20">
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 via-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  {/* Content wrapper */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="inline-flex p-4 rounded-2xl bg-white/20 text-white backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-all duration-500">
                      {service.icon}
                    </div>

                    {/* Title and description */}
                    <h3 className="mt-6 text-2xl font-semibold text-white group-hover:text-accent transition-colors duration-300 font-serif">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-white/70 font-light leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features list */}
                    <ul className="mt-8 space-y-4">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-white/70 group/item">
                          <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-white/20 text-white border border-white/20 group-hover/item:bg-accent/20 transition-all duration-300">
                            <Check className="h-4 w-4" />
                          </div>
                          <span className="ml-3 group-hover/item:text-white transition-colors duration-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Learn more link */}
                    <div className="mt-8 pt-6 border-t border-white/10">
                      <a
                        href="#"
                        className="inline-flex items-center text-white group/link"
                      >
                        <span className="relative">
                          Learn more
                          <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-accent to-transparent scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300"></span>
                        </span>
                        <ChevronRight className="h-4 w-4 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with modern office background */}
      <section id="about" className="py-24 relative bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(#e8bde6_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-8">
              <div>
                <span className="inline-block px-3 py-1 text-sm font-medium text-text bg-primary/30 rounded-full">About Us</span>
                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl text-text">Expertise Meets Purpose</h2>
              </div>

              <p className="text-lg text-text/70">
                With 30 years of experience in international tax consulting, including 17.5 years with the "big four", I
                bring deep expertise to help businesses achieve both economic success and positive social impact.
              </p>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-text">Our Mission</h3>
                <ul className="space-y-4">
                  {[
                    "Strive for both economic success and positive social impact",
                    "Want to promote sustainable business practices",
                    "Are considering alternative business models",
                    "Need expertise in international tax matters",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start group">
                      <span className="flex-shrink-0 p-1 rounded-full bg-primary/30 text-text mt-1 group-hover:scale-110 transition-transform duration-300">
                        <Check className="h-5 w-5" />
                      </span>
                      <span className="ml-4 text-text/70">{item}</span>
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
                <div className="group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl"></div>
                  <div className="relative bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-primary/10 hover:border-accent/20 transition-all duration-300">
                    <div className="text-5xl font-bold text-accent group-hover:scale-110 transition-transform duration-300 font-serif">
                      {stat.number}
                    </div>
                    <div className="mt-2 text-sm font-medium text-text/70 uppercase tracking-wider">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section with cityscape background */}
      <section id="insights" className="py-24 relative bg-gradient-to-b from-background to-white">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/30 text-text text-sm font-medium mb-3">
              Latest Updates
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-text">
              Featured Insights
            </h2>
            <p className="text-lg text-text/70 max-w-2xl mx-auto">
              Expert perspectives on sustainable tax practices and social entrepreneurship
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {insights.map((insight, index) => (
              <div
                key={index}
                className="group bg-white/50 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden animate-slide-up border border-primary/10 hover:border-accent/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-text/90 via-text/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block px-3 py-1 text-xs font-medium text-background bg-accent/90 backdrop-blur-sm rounded-full shadow-lg">
                      {insight.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-text group-hover:text-accent transition-colors duration-300">
                    {insight.title}
                  </h3>
                  <p className="text-text/70">{insight.description}</p>
                  <a
                    href="#"
                    className="inline-flex items-center text-accent hover:text-primary font-medium group/link"
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
      <section className="py-24 relative bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(#e8bde6_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-text text-sm font-medium mb-3">
              Testimonials
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-text">
              What Our Clients Say
            </h2>
            <p className="text-lg text-text/70 max-w-2xl mx-auto">
              Hear from organizations we've helped achieve their sustainable and social impact goals
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl"></div>
                <div className="relative bg-white/50 backdrop-blur-sm rounded-xl p-8 border border-primary/10 hover:border-accent/20 transition-all duration-500">
                  <div className="absolute -top-4 -left-4">
                    <div className="w-8 h-8 bg-accent shadow-lg rounded-full flex items-center justify-center">
                      <span className="text-background text-xl">"</span>
                    </div>
                  </div>
                  <blockquote className="relative">
                    <p className="text-lg text-text/80 italic leading-relaxed">{testimonial.quote}</p>
                    <footer className="mt-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-all duration-300">
                          <span className="text-text font-serif text-xl">
                            {testimonial.author[0]}
                          </span>
                        </div>
                        <div>
                          <cite className="not-italic font-medium text-text block">{testimonial.author}</cite>
                          <span className="text-sm text-text/60">{testimonial.position}</span>
                        </div>
                      </div>
                    </footer>
                  </blockquote>
                </div>
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
            <span className="text-accent font-medium">FAQ</span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-text">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-text/70 max-w-2xl mx-auto">
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
              <div key={index} className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-primary/20 hover:border-accent/20">
                <h3 className="text-lg font-semibold mb-2 text-text">{faq.question}</h3>
                <p className="text-text/70">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with impactful background */}
      <section className="py-24 relative bg-primary">
        <div className="absolute inset-0 bg-[radial-gradient(#eb98e2_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl mb-4">Ready to make an impact?</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-text/80 mb-8">
            Let's work together to create sustainable value for your business and society.
          </p>
          <a
            href="https://calendly.com/contact-taxandpurpose/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-base font-medium text-white hover:bg-primary transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>

      {/* Footer - darkest background */}
      <footer className="relative bg-text text-background">
        <div className="absolute inset-0 bg-[radial-gradient(#e8bde6_1px,transparent_1px)] [background-size:32px_32px] opacity-10"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-primary">tax & purpose</h3>
              <p className="text-sm text-secondary">
                Expert tax consulting for social entrepreneurship and sustainable projects
              </p>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-primary hover:text-accent transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
            <div className="lg:col-span-2 grid gap-8 sm:grid-cols-2">
              <div className="space-y-4">
                <h4 className="text-base font-medium">Quick Links</h4>
                <ul className="space-y-2 text-sm text-secondary">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="hover:text-primary transition-colors">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-base font-medium">Contact</h4>
                <ul className="space-y-2 text-sm text-secondary">
                  <li>Dr. Leila Momen</li>
                  <li>Jülicher Straße 72a</li>
                  <li>52070 Aachen</li>
                  <li>
                    <a href="tel:+4915144508604" className="hover:text-primary transition-colors">
                      +49 151 4450 8604
                    </a>
                  </li>
                  <li>
                    <a href="mailto:contact@tax4purpose.com" className="hover:text-primary transition-colors">
                      contact@tax4purpose.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-primary/20 pt-8 text-center text-sm text-secondary">
            © {new Date().getFullYear()} tax & purpose. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

