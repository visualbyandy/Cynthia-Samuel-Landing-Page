/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { Instagram, Mail, MapPin, Globe, ArrowRight, ExternalLink, ChevronRight, Star } from "lucide-react";
import { useState, useEffect } from "react";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1771584050156-ebd4f4de5c01?w=1200&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1771584048375-99f8ad03fd13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NXx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1771584048714-ebef3cefc63e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D",
];

const STATS = [
  { label: "Reach", value: "2.4M+" },
  { label: "Engagement", value: "8.2%" },
  { label: "Countries", value: "15+" },
  { label: "Brands", value: "50+" },
];

const SERVICES = [
  { title: "Creative Direction", desc: "Crafting visual narratives that define luxury brands." },
  { title: "UGC Content", desc: "Authentic storytelling through a high-fashion lens." },
  { title: "Brand Ambassadorship", desc: "Representing global prestige in the Middle East." },
  { title: "Event Coverage", desc: "Immersive digital experiences for exclusive events." },
];

export default function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-luxury-cream selection:bg-luxury-teal selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 md:px-12 py-8 flex justify-between items-center mix-blend-difference text-white">
        <div className="flex items-center gap-8 ml-auto">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden lg:flex gap-12 text-[10px] uppercase tracking-[0.3em] font-bold"
          >
            <a href="#about" className="hover:opacity-50 transition-all">Identity</a>
            <a href="#work" className="hover:opacity-50 transition-all">Portfolio</a>
            <a href="#services" className="hover:opacity-50 transition-all">Services</a>
            <a href="#contact" className="hover:opacity-50 transition-all">Connect</a>
          </motion.div>
          
          <div className="flex items-center gap-4">
            <motion.a 
              href="mailto:hello@csam.com"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all"
            >
              <Mail className="w-4 h-4" />
            </motion.a>
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-50"
            >
              <span className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 z-[45] bg-luxury-ink flex flex-col justify-center items-center gap-8 text-white lg:hidden"
          >
            {[
              { label: "Identity", href: "#about" },
              { label: "Portfolio", href: "#work" },
              { label: "Services", href: "#services" },
              { label: "Connect", href: "#contact" }
            ].map((item) => (
              <a 
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-4xl font-serif italic hover:text-luxury-teal transition-colors"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section - Split Layout */}
      <section className="relative h-screen flex flex-col md:flex-row bg-white overflow-hidden">
        {/* Left: Text Content */}
        <div className="relative z-20 w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center px-8 md:px-16 pt-20 md:pt-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <p className="text-luxury-teal text-[11px] uppercase tracking-[0.4em] font-bold mb-6">Digital Creator • Dubai</p>
            <h1 className="text-luxury-ink text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif leading-[0.9] mb-10 tracking-tighter">
              Cynthia <br />
              <span className="italic font-light opacity-80">Samuel</span>
            </h1>
            <div className="flex items-center gap-6">
              <div className="w-10 h-[1px] bg-luxury-ink/20" />
              <p className="text-luxury-ink/60 text-xs md:text-sm max-w-xs leading-relaxed font-light">
                Bridging Canadian heritage and Lebanese roots through a high-fashion lens in the heart of the Middle East.
              </p>
            </div>
          </motion.div>

          {/* Vertical Rail Text */}
          <div className="absolute left-8 bottom-20 hidden lg:block">
            <p className="writing-mode-vertical text-[9px] uppercase tracking-[0.4em] text-luxury-ink/20 font-bold rotate-180">
              EST. 1996 • GLOBAL PERSPECTIVE
            </p>
          </div>
        </div>

        {/* Right: Image Carousel */}
        <div className="relative w-full md:w-1/2 h-1/2 md:h-full overflow-hidden">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentImage}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
              className="absolute inset-0"
            >
              <img 
                src={HERO_IMAGES[currentImage]} 
                alt="Cynthia Samuel" 
                className="w-full h-full object-cover grayscale-[20%] contrast-[110%]"
                referrerPolicy="no-referrer"
                decoding="async"
              />
              <div className="absolute inset-0 bg-luxury-ink/20" />
            </motion.div>
          </AnimatePresence>
          
          {/* Carousel Indicators */}
          <div className="absolute right-8 bottom-12 flex flex-col gap-4 z-30">
            {HERO_IMAGES.map((_, idx) => (
              <div 
                key={idx}
                className={`w-1 h-12 transition-all duration-500 ${idx === currentImage ? "bg-white" : "bg-white/20"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Prestige Grid */}
      <section className="py-20 bg-white border-b border-luxury-ink/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-0">
            {STATS.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col items-center text-center ${idx !== STATS.length - 1 ? "md:border-r border-luxury-ink/5" : ""}`}
              >
                <span className="text-5xl md:text-6xl font-serif mb-2">{stat.value}</span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-luxury-ink">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Editorial Layout */}
      <section id="about" className="py-32 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="relative z-10 aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1771584048411-05773e7aaa82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8fA%3D%3D" 
                  alt="Identity" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>
              {/* Decorative Element */}
              <div className="absolute -top-10 -left-10 w-40 h-40 border border-luxury-teal/20 rounded-full -z-0" />
            </div>

            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl md:text-7xl font-serif mb-12 leading-tight">
                  A <span className="italic">Global Soul</span> <br />
                  Refined in Dubai
                </h2>
                <div className="space-y-8 text-luxury-ink/70 text-xl leading-relaxed font-light">
                  <p>
                    Born in the serene landscapes of Canada and enriched by Lebanese heritage, Cynthia Samuel brings a unique multicultural perspective to the digital landscape.
                  </p>
                  <p className="font-serif italic text-3xl text-luxury-ink border-l-2 border-luxury-teal pl-8 py-4">
                    "Luxury is not just what you wear, but the story you tell through your presence."
                  </p>
                  <p>
                    At 29, she has established herself as a leading voice in Dubai's creative scene, collaborating with world-renowned fashion houses and lifestyle brands.
                  </p>
                </div>
                
                <div className="mt-16 flex flex-wrap gap-4">
                  {["Fashion", "Lifestyle", "Travel", "Culture"].map((tag) => (
                    <span key={tag} className="px-6 py-2 rounded-full border border-luxury-ink/10 text-[10px] uppercase tracking-widest font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section - Bento Grid */}
      <section id="work" className="py-32 bg-luxury-ink text-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <p className="text-white text-[10px] uppercase tracking-[0.4em] font-bold mb-4">Portfolio</p>
              <h2 className="text-6xl md:text-8xl font-serif">Selected <span className="italic">Works</span></h2>
            </div>
            <button className="flex items-center gap-4 text-[10px] uppercase tracking-widest font-bold hover:text-luxury-teal transition-colors group">
              View All Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-auto">
            {/* Large Feature */}
            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-3xl group cursor-pointer aspect-square md:aspect-auto md:h-[440px]"
            >
              <img src="https://images.unsplash.com/photo-1771600876989-138e25604f04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-10 left-10">
                <p className="text-xs uppercase tracking-widest mb-2 opacity-60">Campaign</p>
                <h3 className="text-4xl font-serif italic">Elle</h3>
              </div>
            </motion.div>

            {/* Tall Feature */}
            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="md:col-span-1 md:row-span-2 relative overflow-hidden rounded-3xl group cursor-pointer aspect-[3/4] md:aspect-auto md:h-[440px]"
            >
              <img src="https://images.unsplash.com/photo-1771600877247-d8b7be4d1c2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-10 left-10">
                <p className="text-xs uppercase tracking-widest mb-2 opacity-60">Editorial</p>
                <h3 className="text-3xl font-serif italic">Harper Bazaar Arabia</h3>
              </div>
            </motion.div>

            {/* Small Features */}
            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="md:col-span-1 md:row-span-1 relative overflow-hidden rounded-3xl group cursor-pointer aspect-square md:aspect-auto md:h-[210px]"
            >
              <img src="https://images.unsplash.com/photo-1771580483889-9e479dae2634?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Nnx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-xl font-serif italic">Vogue Arabia</h3>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="md:col-span-1 md:row-span-1 relative overflow-hidden rounded-3xl group cursor-pointer aspect-square md:aspect-auto md:h-[210px]"
            >
              <img src="https://images.unsplash.com/photo-1771584048073-c1a768840245?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-xl font-serif italic">Paris Fashion Week</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <p className="text-luxury-teal text-[10px] uppercase tracking-[0.4em] font-bold mb-4">Expertise</p>
              <h2 className="text-6xl md:text-7xl font-serif mb-12">What I <span className="italic">Offer</span></h2>
              <p className="text-luxury-ink/60 text-lg leading-relaxed max-w-md">
                Providing specialized creative services for luxury brands looking to expand their presence in the Middle Eastern market.
              </p>
            </div>
            <div className="space-y-12">
              {SERVICES.map((service, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="flex justify-between items-end mb-4">
                    <h3 className="text-3xl font-serif group-hover:text-luxury-teal transition-colors">{service.title}</h3>
                    <ChevronRight className="w-6 h-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                  </div>
                  <p className="text-luxury-ink/50 text-sm leading-relaxed pb-8 border-b border-luxury-ink/10">
                    {service.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Immersive */}
      <section id="contact" className="relative py-32 bg-luxury-ink text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-luxury-teal via-transparent to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center mb-24">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-7xl md:text-[12rem] font-serif leading-none mb-12"
            >
              Let's <span className="italic font-light">Talk</span>
            </motion.h2>
            <p className="text-[10px] uppercase tracking-[0.6em] font-bold text-luxury-teal">Available for Global Commissions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div whileHover={{ y: -10 }} className="p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
              <Instagram className="w-8 h-8 mx-auto mb-6 text-luxury-teal" />
              <p className="text-xs uppercase tracking-widest font-bold mb-4">Social</p>
              <p className="text-2xl font-serif italic">@cynthiasam</p>
            </motion.div>
            
            <motion.a 
              href="mailto:hello@csam.com"
              whileHover={{ y: -10 }} 
              className="p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm text-center block"
            >
              <Mail className="w-8 h-8 mx-auto mb-6 text-luxury-teal" />
              <p className="text-xs uppercase tracking-widest font-bold mb-4">Email</p>
              <p className="text-2xl font-serif italic">hello@csam.com</p>
            </motion.a>

            <motion.div whileHover={{ y: -10 }} className="p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
              <Globe className="w-8 h-8 mx-auto mb-6 text-luxury-teal" />
              <p className="text-xs uppercase tracking-widest font-bold mb-4">Location</p>
              <p className="text-2xl font-serif italic">Dubai, UAE</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <p className="text-[10px] uppercase tracking-widest text-luxury-ink/40">Digital Creator & Creative Director</p>
          </div>
          
          <div className="flex gap-12 text-[10px] uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-luxury-teal transition-colors">Instagram</a>
            <a href="#" className="hover:text-luxury-teal transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-luxury-teal transition-colors">TikTok</a>
          </div>

          <p className="text-[10px] uppercase tracking-widest text-luxury-ink/30">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
