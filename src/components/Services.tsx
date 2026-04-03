import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import * as Icons from 'lucide-react';
import { cn } from '../lib/utils';

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
        >
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]">
              DOMINATING THE <br />
              <span className="text-brand-orange">DIGITAL LANDSCAPE</span>
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              We don't just offer services. We build aggressive growth engines that work while you focus on your business.
            </p>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all font-black tracking-widest text-sm backdrop-blur-md"
          >
            VIEW ALL SERVICES
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => {
            const Icon = (Icons as any)[service.icon] || Icons.Zap;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -15, rotateY: 5 }}
                className={cn(
                  "group p-10 glass-card rounded-[2.5rem] border-white/5 hover:border-brand-orange/30 transition-all duration-700 relative overflow-hidden perspective-1000",
                  service.featured && "border-brand-orange/20 bg-white/5"
                )}
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative z-10">
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.8, ease: "anticipate" }}
                    className="mb-8 inline-flex p-5 rounded-2xl bg-white/5 group-hover:bg-white/10 group-hover:text-brand-orange transition-all duration-500 shadow-xl"
                  >
                    <Icon className="w-10 h-10" />
                  </motion.div>
                  <h3 className="text-3xl font-black mb-4 tracking-tight group-hover:text-brand-orange transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-lg group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>
                  <div className="mt-10 flex items-center gap-3 text-sm font-black tracking-widest text-brand-orange opacity-0 group-hover:opacity-100 translate-x-[-20px] group-hover:translate-x-0 transition-all duration-700">
                    LEARN MORE <Icons.ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
