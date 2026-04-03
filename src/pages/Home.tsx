import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import BusinessGrowthScanner from '../components/BusinessGrowthScanner';
import ROICalculator from '../components/ROICalculator';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import { motion } from 'motion/react';
import { TrendingDown, AlertCircle, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-0">
      <Hero />
      
      <section className="py-32 px-6 bg-charcoal text-white relative overflow-hidden border-y border-white/5">
        {/* Background Texture/Image */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1920" 
            alt="Data Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-b from-charcoal via-transparent to-charcoal" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85]">
              YOUR BUSINESS <br /> IS <span className="text-brand-orange italic underline decoration-brand-orange/30">INVISIBLE.</span>
            </h2>
            <p className="text-2xl font-medium text-gray-400 leading-relaxed max-w-xl">
              While you work, your competitors are getting the attention you deserve. Every day you wait is a day of lost leads and revenue.
            </p>
            <motion.div 
              whileHover={{ x: 10 }}
              className="flex items-center gap-6 p-6 bg-white/5 rounded-[2rem] border border-white/10 backdrop-blur-md w-fit"
            >
              <div className="w-20 h-20 rounded-2xl bg-brand-orange text-white flex items-center justify-center shadow-2xl shadow-brand-orange/20">
                <TrendingDown className="w-10 h-10" />
              </div>
              <div>
                <p className="text-2xl font-black tracking-tight text-brand-orange">Invisibility = Zero Growth</p>
                <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">Market Reality Check</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="glass-card bg-white/5 border-white/10 p-12 space-y-8 rounded-[3rem] shadow-2xl backdrop-blur-2xl">
              <div className="flex items-center gap-4 text-brand-orange">
                <AlertCircle className="w-8 h-8 animate-bounce" />
                <span className="font-black uppercase tracking-[0.3em] text-sm">Market Warning</span>
              </div>
              <div className="space-y-2">
                <p className="text-5xl md:text-6xl font-black tracking-tighter italic">6 Months of Silence</p>
                <p className="text-xl text-gray-400 leading-relaxed">Ignoring marketing for 6 months leads to a 40% drop in brand recall and a permanent loss of market share to aggressive competitors.</p>
              </div>
              <div className="space-y-4">
                <div className="h-4 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: "100%" }}
                    whileInView={{ width: "20%" }}
                    transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
                    className="h-full bg-brand-orange shadow-[0_0_20px_rgba(255,107,0,0.8)]" 
                  />
                </div>
                <div className="flex justify-between text-sm font-black tracking-widest uppercase">
                  <span className="text-gray-400">Visibility Decay</span>
                  <span className="text-brand-orange">Critical Level</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Services />
      <BusinessGrowthScanner />

      <section className="py-32 px-6 bg-dark-gray relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
              THE <span className="text-brand-orange">MARXLYTE</span> JOURNEY
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">How we take you from invisible to industry leader.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Audit', desc: 'We scan your business for leaks and missed opportunities.' },
              { step: '02', title: 'Strategy', desc: 'We build an aggressive visibility and lead gen roadmap.' },
              { step: '03', title: 'Execution', desc: 'Our team handles the content, ads, and management.' },
              { step: '04', title: 'Growth', desc: 'You focus on operations while the customers roll in.' },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-card p-10 space-y-6 relative group hover:bg-white/5 transition-all duration-500 rounded-[2.5rem] border-white/5 hover:border-brand-orange/30"
              >
                <span className="text-7xl font-black text-white/5 group-hover:text-brand-orange/10 transition-colors absolute top-6 right-8 pointer-events-none">{item.step}</span>
                <div className="w-12 h-12 rounded-xl bg-white/10 text-brand-orange flex items-center justify-center font-black text-xl">
                  {item.step}
                </div>
                <h3 className="text-3xl font-black tracking-tight">{item.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ROICalculator />

      {/* Marketing Myths Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">Marketing <span className="text-brand-orange">Myths vs Truth</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { myth: "Posting randomly is enough", truth: "Consistency and strategy win the market share." },
              { myth: "Only big businesses need marketing", truth: "Small brands need it even more to survive." },
              { myth: "Social media is just for likes", truth: "Social media is a lead and revenue engine." },
            ].map((item, idx) => (
              <div key={idx} className="glass-card p-8 space-y-6 border-l-4 border-l-red-500 hover:border-l-brand-orange transition-all">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-red-500 uppercase tracking-widest">The Myth</span>
                  <p className="text-xl font-bold text-gray-400 line-through">{item.myth}</p>
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest">The Truth</span>
                  <p className="text-xl font-bold">{item.truth}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Tips Feed */}
      <section className="py-12 bg-white/5 border-y border-white/10 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[
            "Consistency is the key to visibility.",
            "Your website is your 24/7 salesperson.",
            "Paid ads are an investment, not an expense.",
            "Branding is what people say when you're not in the room.",
            "Leads are the lifeblood of your business.",
          ].map((tip, idx) => (
            <div key={idx} className="flex items-center gap-4 px-12">
              <Zap className="w-5 h-5 text-brand-orange" />
              <span className="text-lg font-bold uppercase tracking-tighter">{tip}</span>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {[
            "Consistency is the key to visibility.",
            "Your website is your 24/7 salesperson.",
            "Paid ads are an investment, not an expense.",
            "Branding is what people say when you're not in the room.",
            "Leads are the lifeblood of your business.",
          ].map((tip, idx) => (
            <div key={idx + 10} className="flex items-center gap-4 px-12">
              <Zap className="w-5 h-5 text-brand-orange" />
              <span className="text-lg font-bold uppercase tracking-tighter">{tip}</span>
            </div>
          ))}
        </div>
      </section>
      
      <Testimonials />
      <Contact />
    </div>
  );
}
