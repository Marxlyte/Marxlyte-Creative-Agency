import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS } from '../constants';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">What Our <span className="text-brand-orange">Partners Say</span></h2>
          <p className="text-gray-400">Real results from businesses that stopped being invisible.</p>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="glass-card p-8 md:p-16 relative"
            >
              <Quote className="absolute top-8 left-8 w-12 h-12 text-brand-orange/20" />
              
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="shrink-0">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-brand-orange/20">
                    <img src={TESTIMONIALS[index].image} alt={TESTIMONIALS[index].name} className="w-full h-full object-cover" />
                  </div>
                </div>
                
                <div className="space-y-6 text-center md:text-left">
                  <p className="text-xl md:text-2xl italic leading-relaxed text-gray-200">
                    "{TESTIMONIALS[index].content}"
                  </p>
                  
                  <div>
                    <h4 className="text-xl font-bold">{TESTIMONIALS[index].name}</h4>
                    <p className="text-gray-500">{TESTIMONIALS[index].role}, {TESTIMONIALS[index].company}</p>
                  </div>

                  <div className="inline-block px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-brand-orange font-bold">
                    {TESTIMONIALS[index].outcome}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={() => setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => setIndex((prev) => (prev + 1) % TESTIMONIALS.length)}
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
