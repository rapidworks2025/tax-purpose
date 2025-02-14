"use client"

import { useState, useEffect } from "react"
import { Menu, X, Leaf, Users, Globe, Linkedin, ChevronRight, Check } from "lucide-react"
import bigFourImage from './images/big4.png'
import { translations } from './translations'

console.log('Image path:', bigFourImage);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [lang, setLang] = useState('de')
  const t = translations[lang]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
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
      title: t.services.cards.social.title,
      description: t.services.cards.social.description,
      features: t.services.cards.social.features,
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: t.services.cards.sustainability.title,
      description: t.services.cards.sustainability.description,
      features: t.services.cards.sustainability.features,
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: t.services.cards.international.title,
      description: t.services.cards.international.description,
      features: t.services.cards.international.features,
    },
  ]

  const insightImages = {
    sustainable: "https://images.unsplash.com/photo-1618044733300-9472054094ee",
    crossBorder: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e",
    social: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f"
  }

  return (
    <div className="min-h-screen">
      {/* Header - more subtle transparency */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background shadow-md backdrop-blur-sm" : "bg-transparent"
      }`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-24 items-center justify-between">
            {/* Logo */}
            <a href="#" className="font-serif text-2xl font-bold text-text tracking-tight">
              tax & purpose
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:gap-8">
              <nav className="flex gap-16">
                {navigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-text hover:text-accent transition-colors duration-300 relative group"
                  >
                    {t.nav[item.name.toLowerCase()]}
                    <span className="absolute -bottom-1 left-0 w-full h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </a>
                ))}
              </nav>

              {/* Schedule Button */}
              <a
                href="https://calendly.com/contact-taxandpurpose/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium bg-accent/90 text-white hover:bg-accent transition-all duration-300 shadow-sm hover:shadow-md"
              >
                {t.nav.schedule}
              </a>

              {/* Language Switcher with flags - showing current language flag and name */}
              <button 
                onClick={() => setLang(lang === 'en' ? 'de' : 'en')}
                className="text-sm font-medium text-text hover:text-accent transition-colors duration-300 flex items-center gap-2"
              >
                {lang === 'de' ? (
                  <>
                    <span className="w-5 h-5 rounded-full overflow-hidden">
                      <img src="https://flagcdn.com/de.svg" alt="Deutsch" className="w-full h-full object-cover" />
                    </span>
                    DE
                  </>
                ) : (
                  <>
                    <span className="w-5 h-5 rounded-full overflow-hidden">
                      <img src="https://flagcdn.com/gb.svg" alt="English" className="w-full h-full object-cover" />
                    </span>
                    EN
                  </>
                )}
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden rounded-full p-2 text-text hover:bg-accent/10"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {/* Mobile menu panel */}
            {isMenuOpen && (
              <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-primary/10 shadow-lg">
                <div className="p-4 space-y-3">
                  {navigation.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-base font-medium text-text hover:text-accent rounded-lg hover:bg-accent/5 transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t.nav[item.name.toLowerCase()]}
                    </a>
                  ))}
                  <a
                    href="https://calendly.com/contact-taxandpurpose/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-4 px-4 py-2 text-center rounded-full bg-accent text-white hover:bg-primary transition-all duration-300"
                  >
                    {t.nav.schedule}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section - improved contrast and overlay */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-background to-white">
        {/* Add floating calculator icons */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-[15%] w-64 h-64 opacity-[0.03] rotate-[12deg]">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-accent">
              <path d="M4 2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v16h16V4H4zm2 2h12v2H6V6zm0 4h2v2H6v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm-8 4h2v2H6v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm-8 4h2v2H6v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z"/>
            </svg>
          </div>
          <div className="absolute bottom-20 right-[10%] w-48 h-48 opacity-[0.03] -rotate-[12deg]">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-accent">
              <path d="M5 2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v16h14V4H5zm2 2h10v2H7V6zm0 4h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zM7 14h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z"/>
            </svg>
          </div>
        </div>
        {/* Existing grid pattern with improved opacity */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(232,189,230,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(232,189,230,0.15)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div className="space-y-10">
              <div className="space-y-8">
                <span className="inline-flex px-4 py-1.5 text-sm font-medium bg-accent/90 text-white rounded-full shadow-sm">
                  {t.hero.tag}
                </span>
                <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
                  <span className="block text-text font-serif">
                    {t.hero.title.line1}
                  </span>
                  <span className="block text-accent font-serif">
                    {t.hero.title.line2}
                  </span>
                  <span className="block mt-4 text-text/80 text-2xl sm:text-3xl font-sans font-light">
                    {t.hero.title.line3}
                  </span>
                </h1>
                <p className="text-xl text-text/70 max-w-2xl font-light leading-relaxed">
                  {t.hero.description}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://calendly.com/contact-taxandpurpose/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-medium bg-accent text-white hover:bg-accent/90 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  {t.hero.cta.schedule}
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-medium text-text border-2 border-accent/20 hover:bg-accent/5 transition-all duration-300"
                >
                  {t.hero.cta.learn}
                </a>
              </div>
            </div>

            {/* Right side - temporary placeholder using the coffee workspace image */}
            <div className="relative aspect-w-16 aspect-h-9 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1497215842964-222b430dc094"
                alt={t.partners.workspace}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent mix-blend-multiply"></div>
              {/* Decorative elements suggesting sustainability */}
              <div className="absolute -right-8 -bottom-8 w-64 h-64 bg-[radial-gradient(#e8bde6_1px,transparent_1px)] [background-size:12px_12px] opacity-[0.15] rounded-full"></div>
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
              {t.partners.tag}
            </span>
            <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl text-text font-serif">
              {t.partners.title}
            </h2>
            <p className="mt-4 text-lg text-text/70 max-w-2xl mx-auto font-light">
              {t.partners.description}
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
                      alt={`${t.partners.logoAlt} ${i}`}
                      className="max-h-12 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - improved contrast and visual hierarchy */}
      <section id="services" className="py-24 relative bg-white overflow-hidden">
        {/* Add floating numbers and symbols */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-40 left-10 text-[120px] font-serif opacity-[0.03] rotate-[-12deg] text-accent">
            §
          </div>
          <div className="absolute bottom-20 right-10 text-[160px] font-serif opacity-[0.03] rotate-[8deg] text-accent">
            €
          </div>
          <div className="absolute top-1/3 right-1/4 text-[140px] font-serif opacity-[0.03] rotate-[-5deg] text-accent">
            $
          </div>
        </div>
        {/* More organic, leaf-like pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(232,189,230,0.15)_2px,transparent_2px),linear-gradient(90deg,rgba(232,189,230,0.15)_2px,transparent_2px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-flex px-4 py-1.5 text-sm font-medium bg-accent/90 text-white rounded-full shadow-sm">
              {t.services.tag}
            </span>
            <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl text-text font-serif">
              {t.services.title}
            </h2>
            <p className="mt-4 text-lg text-text/70 max-w-2xl mx-auto font-light">
              {t.services.description}
            </p>
          </div>

          {/* Services grid with more sustainable design */}
          <div className="grid gap-8 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-background/50 rounded-3xl p-8 hover:bg-background transition-all duration-500"
              >
                {/* Organic decorative element */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                {/* Icon with organic animation */}
                <div className="relative">
                  <div className="absolute -inset-1 bg-accent/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative inline-flex p-4 rounded-2xl bg-accent/10 text-accent group-hover:scale-110 transition-all duration-500">
                    {service.icon}
                  </div>
                  </div>

                <h3 className="mt-6 text-2xl font-semibold text-text group-hover:text-accent transition-colors duration-300 font-serif">
                    {service.title}
                  </h3>
                <p className="mt-4 text-text/70 font-light leading-relaxed">
                    {service.description}
                  </p>

                {/* Features list with organic hover effect */}
                  <ul className="mt-8 space-y-4">
                    {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-text/70 group/item">
                      <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-accent/10 text-accent group-hover:bg-accent/20 transition-all duration-300">
                          <Check className="h-4 w-4" />
                        </div>
                      <span className="ml-3 group-hover:text-text transition-all duration-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                {/* Learn more link with organic animation */}
                <div className="mt-8 pt-6 border-t border-primary/10">
                  <a href="#" className="inline-flex items-center text-accent group/link">
                    {t.services.learnMore}
                    <ChevronRight className="h-4 w-4 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                    </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with modern office background */}
      <section id="about" className="py-24 relative bg-background overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(232,189,230,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(232,189,230,0.2)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          <div className="absolute top-20 right-20 w-96 h-96 opacity-[0.02]">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-accent">
              <path d="M4 2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v16h16V4H4zm2 2h12v2H6V6zm0 4h2v2H6v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm-8 4h2v2H6v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm-8 4h2v2H6v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z"/>
            </svg>
          </div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-text text-sm font-medium mb-3">
              {t.about.tag}
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-text">
              {t.about.title}
            </h2>
            <p className="text-lg text-text/70 max-w-2xl mx-auto">
              {t.about.description}
            </p>
          </div>
          
          {/* Stats section */}
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              t.about.stats.experience,
              t.about.stats.countries,
              t.about.stats.clients,
              t.about.stats.savings,
            ].map((stat, index) => (
              <div key={index} className="group relative overflow-hidden">
                <div className="relative bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-primary/10 hover:border-accent/20 transition-all duration-300">
                  <div className="text-5xl font-bold text-accent group-hover:scale-110 transition-transform duration-300 font-serif">
                    {stat.number}
                  </div>
                  <div className="mt-2 text-sm font-medium text-text/70 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Section with cityscape background */}
      <section id="insights" className="py-24 relative bg-gradient-to-b from-background to-white">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/30 text-text text-sm font-medium mb-3">
              {t.insights.tag}
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-text">
              {t.insights.title}
            </h2>
            <p className="text-lg text-text/70 max-w-2xl mx-auto">
              {t.insights.description}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[t.insights.articles.sustainable, t.insights.articles.crossBorder, t.insights.articles.social].map((article, index) => (
              <div
                key={index}
                className="group bg-white/50 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden animate-slide-up border border-primary/10 hover:border-accent/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                  <img
                    src={insightImages[Object.keys(t.insights.articles)[index]]}
                    alt={article.title}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-text/90 via-text/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block px-3 py-1 text-xs font-medium text-background bg-accent/90 backdrop-blur-sm rounded-full shadow-lg">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-text group-hover:text-accent transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-text/70">{article.description}</p>
                  <a
                    href="#"
                    className="inline-flex items-center text-accent hover:text-primary font-medium group/link"
                  >
                    {t.insights.readMore}
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
              {t.testimonials.tag}
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-text">
              {t.testimonials.title}
            </h2>
            <p className="text-lg text-text/70 max-w-2xl mx-auto">
              {t.testimonials.description}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[t.testimonials.quotes.first, t.testimonials.quotes.second, t.testimonials.quotes.third].map((testimonial, index) => (
              <div key={index} className="group relative">
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

      {/* FAQ Section - improved readability */}
      <section className="py-24 relative bg-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(232,189,230,0.1)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(232,189,230,0.1)_1.5px,transparent_1.5px)] bg-[size:32px_32px]"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-accent font-medium">{t.faq.tag}</span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-text">
              {t.faq.title}
            </h2>
            <p className="text-lg text-text/70 max-w-2xl mx-auto">
              {t.faq.description}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {[t.faq.questions.sustainable, t.faq.questions.industries, t.faq.questions.updates, t.faq.questions.scope]
              .map((faq, index) => (
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
          <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl mb-4">{t.cta.title}</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-text/80 mb-8">
            {t.cta.description}
          </p>
          <a
            href="https://calendly.com/contact-taxandpurpose/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-base font-medium text-white hover:bg-primary transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
          >
            {t.cta.button}
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
                {t.footer.description}
              </p>
            </div>
            <div className="lg:col-span-2 grid gap-8 sm:grid-cols-2">
              <div className="space-y-4">
                <h4 className="text-base font-medium">{t.footer.quickLinks}</h4>
                <ul className="space-y-2 text-sm text-secondary">
                  <li>
                    <a href="#" className="hover:text-primary transition-colors">
                      {t.nav.home}
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="hover:text-primary transition-colors">
                      {t.nav.services}
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="hover:text-primary transition-colors">
                      {t.nav.about}
                    </a>
                  </li>
                  <li>
                    <a href="#insights" className="hover:text-primary transition-colors">
                      {t.nav.insights}
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="hover:text-primary transition-colors">
                      {t.nav.contact}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-base font-medium">{t.footer.contact}</h4>
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
            © {new Date().getFullYear()} tax & purpose. {t.footer.rights}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

