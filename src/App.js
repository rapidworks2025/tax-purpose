"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X, Leaf, Users, Globe, Linkedin, ChevronRight, Check } from "lucide-react"
import bigFourImage from './images/big4.png'
import { translations } from './translations'

console.log('Image path:', bigFourImage);

const colors = {
  background: "#f9e9ea",
  text: "#393639",
  primary: "#dcafa5",
  secondary: "#ebcfc8",
  accent: "#478841"
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [lang, setLang] = useState('de')
  const t = translations[lang]

  const useIntersectionObserver = (options = {}) => {
    const [elements, setElements] = useState([]);
    const [entries, setEntries] = useState([]);

    const observer = useRef(null);

    useEffect(() => {
      if (elements.length) {
        observer.current = new IntersectionObserver((observedEntries) => {
          setEntries(observedEntries);
        }, options);
        
        elements.forEach((element) => observer.current.observe(element));
      }
      
      return () => {
        if (observer.current) {
          observer.current.disconnect();
        }
      };
    }, [elements, options]);

    return [setElements, entries];
  };

  const [setElements, entries] = useIntersectionObserver({ threshold: 0.1 });

  useEffect(() => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    setElements(animatedElements);
  }, [setElements]);

  useEffect(() => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
      }
    });
  }, [entries]);

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

  const partners = [
    { 
      name: "DigitalHUB Aachen e.V.", 
      representatives: "Iris Wilhelmi, Udo Glaser",
      logo: `https://placehold.co/200x100/f3e7e7/3e3b3e?text=${encodeURIComponent("DigitalHUB")}` 
    },
    { 
      name: "ecoHUB Aachen", 
      representatives: "",
      logo: `https://placehold.co/200x100/f3e7e7/3e3b3e?text=${encodeURIComponent("ecoHUB")}` 
    },
    { 
      name: "Zakat Deutschland e.V.", 
      representatives: "Khurrem",
      logo: `https://placehold.co/200x100/f3e7e7/3e3b3e?text=${encodeURIComponent("Zakat")}` 
    },
    { 
      name: "Bischöfliche Akademie Aachen", 
      representatives: "Angela Reinders",
      logo: `https://placehold.co/200x100/f3e7e7/3e3b3e?text=${encodeURIComponent("Bischöfliche Akademie")}` 
    },
    { 
      name: "Stiftung Verantwortungseigentum", 
      representatives: "",
      logo: `https://placehold.co/200x100/f3e7e7/3e3b3e?text=${encodeURIComponent("Stiftung")}` 
    },
    { 
      name: "PwC", 
      representatives: "Rainer Kroker",
      logo: `https://placehold.co/200x100/f3e7e7/3e3b3e?text=${encodeURIComponent("PwC")}` 
    },
    { 
      name: "Qualitec", 
      representatives: "",
      logo: `https://placehold.co/200x100/f3e7e7/3e3b3e?text=${encodeURIComponent("Qualitec")}` 
    },
    { 
      name: "Inaia", 
      representatives: "",
      logo: `https://placehold.co/200x100/f3e7e7/3e3b3e?text=${encodeURIComponent("Inaia")}` 
    }
  ];

  return (
    <div className="min-h-screen font-sans text-text bg-background">
      {/* Header - more subtle transparency */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background shadow-md backdrop-blur-sm" : "bg-transparent"
        }`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-24 items-center justify-between">
            {/* Logo */}
            <a href="#" className="font-serif text-2xl font-extrabold text-text tracking-tight">
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
              <div className="lg:hidden fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-300">
                <div className="absolute top-24 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-[#e4bfbf]/10 shadow-lg max-h-[80vh] overflow-y-auto transform transition-transform duration-300">
                  <div className="p-6 space-y-4">
                    {navigation.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-3 text-base font-medium text-text hover:text-accent rounded-lg hover:bg-accent/5 transition-colors duration-300"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {t.nav[item.name.toLowerCase()]}
                      </a>
                    ))}
                    <div className="pt-4 border-t border-[#e4bfbf]/10">
                      <a
                        href="https://calendly.com/contact-taxandpurpose/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full px-4 py-3 text-center rounded-lg bg-accent text-white hover:bg-accent/90 transition-all duration-300"
                      >
                        {t.nav.schedule}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section - add gradient and improve typography */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-white to-primary/10">
        {/* Add floating calculator icons */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-[15%] w-64 h-64 opacity-[0.03] rotate-[12deg]">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-accent">
              <path d="M4 2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v16h16V4H4zm2 2h12v2H6V6zm0 4h2v2H6v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm-8 4h2v2H6v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm-8 4h2v2H6v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z" />
            </svg>
          </div>
          <div className="absolute bottom-20 right-[10%] w-48 h-48 opacity-[0.03] -rotate-[12deg]">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-accent">
              <path d="M5 2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v16h14V4H5zm2 2h10v2H7V6zm0 4h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm-8 4h2v2H6v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm-8 4h2v2H6v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z" />
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
                  <span className="block text-[#393639] font-serif leading-tight">
                    {t.hero.title.line1}
                  </span>
                  <span className="block text-[#478841] font-serif leading-tight">
                    {t.hero.title.line2}
                  </span>
                  <span className="block mt-6 text-[#393639]/90 text-2xl sm:text-3xl font-sans font-light leading-relaxed">
                    {t.hero.title.line3}
                  </span>
                </h1>
                <p className="text-xl text-[#393639]/90 max-w-2xl font-light leading-relaxed">
                  {lang === 'de' ? (
                    <>
                      30 Jahre internationale Steuerexpertise kombiniert mit der Leidenschaft für 
                      <span className="text-[#dcafa5] font-medium"> soziales </span> 
                      Unternehmertum und 
                      <span className="text-[#478841] font-medium"> Nachhaltigkeit</span>, 
                      um bedeutsame gesellschaftliche Veränderungen zu bewirken.
                    </>
                  ) : (
                    <>
                      Combining 30 years of international tax expertise with a passion for 
                      <span className="text-[#dcafa5] font-medium"> social entrepreneurship </span> 
                      and 
                      <span className="text-[#478841] font-medium"> sustainability </span> 
                      to drive meaningful change.
                    </>
                  )}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://calendly.com/contact-taxandpurpose/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-medium bg-accent text-white hover:bg-accent/90 hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-xl"
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

        {/* Add decorative elements to the hero section */}
        <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-primary/10 mix-blend-multiply blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 rounded-full bg-accent/10 mix-blend-multiply blur-3xl animate-blob animation-delay-2000"></div>
      </section>

      {/* Simplified Partners Section */}
      <section className="py-24 relative bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(#e8bde6_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-text font-serif">
              {t.partners.title}
            </h2>
          </div>

          {/* Simple logo grid with no descriptions or names */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {partners.map((partner, i) => (
              <div key={i} className="w-full relative group">
                <div className="relative bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-primary/10 hover:border-accent/20 transition-all duration-500 hover:shadow-lg">
                  <div className="h-16 flex items-center justify-center">
                    <img
                      src={partner.logo || bigFourImage}
                      alt={`${partner.name} logo`}
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
      <section id="services" className="py-32 relative bg-white overflow-hidden">
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
          <div className="text-center mb-16">
            <span className="inline-flex px-4 py-1.5 text-sm font-medium bg-accent text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
              {t.services.tag}
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-text font-serif relative">
              {t.services.title}
              <div className="absolute -inset-1 bg-primary/5 blur-3xl rounded-full opacity-50"></div>
            </h2>
            <p className="mt-4 text-lg text-text/90 max-w-2xl mx-auto font-light">
              {t.services.description}
            </p>
          </div>

          {/* Services grid with more sustainable design */}
          <div className="grid gap-8 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 hover:bg-white hover:shadow-xl transition-all duration-500 border border-[#e4bfbf]/30 overflow-hidden"
              >
                {/* Add a decorative element that appears on hover */}
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-accent/5 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-700"></div>
                
                {/* Card content */}
                <div className="relative">
                  <div className="inline-flex p-4 rounded-2xl bg-[#478841]/10 text-[#478841] group-hover:scale-110 transition-all duration-500">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="mt-6 text-2xl font-semibold text-[#393639] group-hover:text-[#478841] transition-colors duration-300 font-serif">
                  {service.title}
                </h3>
                
                <p className="mt-4 text-[#393639]/70">
                  {service.description}
                </p>
                
                <ul className="mt-6 space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full bg-accent/10 text-accent mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="ml-3 text-sm text-[#393639]/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with modern office background */}
      <section id="about" className="py-32 relative bg-background overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(232,189,230,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(232,189,230,0.2)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          <div className="absolute top-20 right-20 w-96 h-96 opacity-[0.02]">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-accent">
              <path d="M4 2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v16h16V4H4zm2 2h12v2H6V6zm0 4h2v2H6v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm-8 4h2v2H6v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm-8 4h2v2H6v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z" />
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
            <p className="text-lg text-text/90 max-w-2xl mx-auto">
              {t.about.description}
            </p>
            </div>

          {/* Stats section without zoom effect */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-16">
              {[
              t.about.stats.experience,
              t.about.stats.countries,
              t.about.stats.clients,
              t.about.stats.savings,
              ].map((stat, index) => (
              <div key={index} className="group relative overflow-hidden">
                <div className="relative bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-primary/10 hover:border-accent/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="text-5xl font-bold text-accent font-serif relative">
                    <span className="relative z-10">{stat.number}</span>
                    <div className="absolute inset-0 bg-primary/5 blur-2xl rounded-full"></div>
                    </div>
                  <div className="mt-2 text-text/70">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-[#478841]/5 blur-3xl"></div>
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
            <p className="text-lg text-text/90 max-w-2xl mx-auto">
              {t.testimonials.description}
            </p>
            
            {/* Optional: Add a notice about pending approval */}
            {/* <p className="text-sm text-accent italic mt-2">
              * Testimonials pending approval
            </p> */}
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {[t.testimonials.quotes.first, t.testimonials.quotes.second, t.testimonials.quotes.third].map((testimonial, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#dcafa5]/5 via-[#478841]/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl"></div>
                <div className="relative bg-white rounded-xl p-8 border border-[#dcafa5]/20 hover:border-[#478841]/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                  <div className="absolute -top-4 -left-4 transform group-hover:scale-110 transition-transform duration-300">
                    <div className="w-8 h-8 bg-[#478841] shadow-lg rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">"</span>
                    </div>
                  </div>
                  <blockquote className="relative">
                    <p className="text-lg text-text/80 italic leading-relaxed">{testimonial.quote}</p>
                    <footer className="mt-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-all duration-300">
                          <span className="text-text font-serif text-xl">
                            {testimonial.author.split(' ')[0][0]}
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

      {/* Contact Section */}
      <section id="contact" className="py-24 relative bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(#e8bde6_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-text text-sm font-medium mb-3">
              {t.nav.contact}
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-text font-serif">
              {t.contact.title}
            </h2>
            <p className="text-lg text-text/90 max-w-2xl mx-auto">
              {t.contact.description}
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-8 md:grid-cols-5">
              <div className="md:col-span-2 bg-white/50 backdrop-blur-sm rounded-xl p-8 border border-primary/10 shadow-lg">
                <h3 className="text-xl font-medium mb-6 text-text">{t.contact.info.title}</h3>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-accent/10 text-accent">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-text">{t.contact.info.email}</p>
                      <a href="mailto:contact@taxandpurpose.com" className="text-text/70 hover:text-accent transition-colors">
                        contact@taxandpurpose.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-accent/10 text-accent">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-text">{t.contact.info.phone}</p>
                      <a href="tel:+4915144508604" className="text-text/70 hover:text-accent transition-colors">
                        +49 151 4450 8604
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-accent/10 text-accent">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-text">{t.contact.info.address}</p>
                      <p className="text-text/70">
                        Jülicher Straße 72a<br />
                        52070 Aachen<br />
                        Germany
                      </p>
                    </div>
                  </li>
                </ul>
                
                <div className="mt-8 pt-8 border-t border-primary/10">
                  <h4 className="text-lg font-medium mb-4 text-text">{t.contact.schedule.title}</h4>
                  <a
                    href="https://calendly.com/contact-taxandpurpose/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md bg-accent w-full px-6 py-3 text-base font-medium text-white hover:bg-accent/90 transition-all duration-300 shadow-md hover:shadow-xl"
                  >
                    {t.nav.schedule}
                  </a>
                </div>
              </div>
              
              <div className="md:col-span-3 rounded-xl overflow-hidden h-[400px] shadow-lg">
                {/* Add a map or image of Aachen */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2522.3846910328835!2d6.0772!3d50.7753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0995d4a4a1b1d%3A0x9b1fd1e6d3f3b5b0!2sJ%C3%BClicher%20Str.%2072a%2C%2052070%20Aachen%2C%20Germany!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                  title="Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with impactful background */}
      <section className="py-24 relative bg-[#e4bfbf]/30">
        <div className="absolute inset-0 bg-[radial-gradient(#657c62_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#393639] sm:text-4xl mb-4">{t.cta.title}</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-[#393639]/90 mb-8">
            {t.cta.description}
          </p>
          <a
            href="https://calendly.com/contact-taxandpurpose/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-[#478841] px-8 py-4 text-base font-medium text-white hover:bg-[#478841]/90 transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1"
          >
            {t.cta.button}
          </a>
        </div>
      </section>

      {/* Footer - add subtle texture and improve contrast */}
      <footer className="relative bg-[#393639] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(#e4bfbf_1px,transparent_1px)] [background-size:32px_32px] opacity-5"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-medium text-primary">tax & purpose</h3>
              <p className="text-sm text-secondary/80 max-w-md">
                {t.footer.description}
              </p>
              <div className="flex space-x-4 pt-4">
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary/20 transition-colors duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
                {/* Add other social media icons as needed */}
              </div>
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
                    <a href="mailto:contact@taxandpurpose.com" className="hover:text-primary transition-colors">
                      contact@taxandpurpose.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-[#e4bfbf]/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-[#f3e7e7]/60">
            © {new Date().getFullYear()} tax & purpose. {t.footer.rights}
            <div className="mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <span className="mx-2">|</span>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

