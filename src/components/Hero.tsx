import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Zap, MessageSquare, ArrowRight, TrendingUp, Users, Target, Sparkles } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const springY1 = useSpring(y1, { stiffness: 100, damping: 30 });

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-charcoal"
    >
      {/* Dynamic Background Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-brand-orange/20 blur-[140px] rounded-full"
        />
        <motion.div
          animate={{
            scale: [1.5, 1, 1.5],
            opacity: [0.2, 0.5, 0.2],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-20%] right-[-10%] w-[80%] h-[80%] bg-brand-blue/10 blur-[140px] rounded-full"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            style={{ opacity, scale }}
            className="space-y-10 text-left"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-bold backdrop-blur-md text-brand-orange"
            >
              <Sparkles className="w-4 h-4 animate-pulse" />
              THE FUTURE OF DIGITAL GROWTH
            </motion.div>

            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] text-white"
              >
                STOP BEING <br />
                <span className="text-brand-orange italic">INVISIBLE.</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-xl md:text-2xl text-gray-400 max-w-xl leading-relaxed"
              >
                We build aggressive growth engines that bring customers to your door while you focus on running your business.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <a 
                href="/contact"
                className="group relative px-10 py-5 bg-brand-orange text-white font-black rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-brand-orange/40"
              >
                <span className="relative z-10 flex items-center gap-3 text-lg">
                  GET A FREE AUDIT
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-500" />
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-orange-600 to-brand-orange opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>
              <a 
                href="#scanner"
                className="px-10 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all flex items-center gap-3 backdrop-blur-xl group"
              >
                <Zap className="w-6 h-6 text-brand-orange group-hover:scale-110 transition-transform" />
                SCAN MY BUSINESS
              </a>
              <a 
                href="https://wa.me/2347063849067"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 font-bold rounded-2xl hover:bg-emerald-500/20 transition-all flex items-center gap-3 backdrop-blur-xl group"
              >
                <MessageSquare className="w-6 h-6 group-hover:scale-110 transition-transform" />
                WHATSAPP US
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="pt-10 flex gap-12 border-t border-white/10"
            >
              {[
                { label: 'Growth', value: '3.5x' },
                { label: 'Leads', value: '10k+' },
                { label: 'Managed', value: '₦2,000,000+' },
              ].map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-3xl font-black text-white">{stat.value}</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Prominent Hero Image with Parallax and Animations */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative perspective-1000"
          >
            <motion.div 
              style={{ y: springY1, rotate }}
              className="relative z-10 rounded-[2.5rem] overflow-hidden glass-card p-3 shadow-2xl shadow-black/50"
            >
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                  alt="Business Growth" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-charcoal via-transparent to-transparent opacity-60" />
                
                {/* Floating UI Elements inside image */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-10 right-10 p-4 glass-card backdrop-blur-2xl border-white/20 shadow-2xl"
                >
                  <TrendingUp className="w-8 h-8 text-emerald-400" />
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute bottom-10 left-10 p-4 glass-card backdrop-blur-2xl border-white/20 shadow-2xl"
                >
                  <Users className="w-8 h-8 text-brand-orange" />
                </motion.div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-orange/30 blur-[80px] rounded-full animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-blue/20 blur-[80px] rounded-full animate-pulse" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-gray-500"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] font-black">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-[2px] h-16 bg-linear-to-b from-brand-orange to-transparent rounded-full" 
        />
      </motion.div>
    </section>
  );
}
