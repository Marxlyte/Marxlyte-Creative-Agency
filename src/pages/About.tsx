import React from 'react';
import { motion } from 'motion/react';
import { Shield, Target, Zap, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
              WE ARE NOT JUST <br />
              <span className="text-brand-orange">ANOTHER AGENCY.</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Marxlyte was born from a simple observation: most businesses are invisible. We don't just "do marketing" — we build growth engines that allow business owners to focus on what they do best while we handle the visibility.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-bold text-brand-orange">50+</div>
                <div className="text-sm text-gray-500 uppercase tracking-widest">Clients Scaled</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-brand-orange">24/7</div>
                <div className="text-sm text-gray-500 uppercase tracking-widest">Growth Focus</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden glass-card p-2">
              <img 
                src="https://picsum.photos/seed/agency/800/800" 
                alt="Marxlyte Team" 
                className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 p-6 glass-card glow-orange">
              <Zap className="w-12 h-12 text-brand-orange" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Shield, title: 'Trust', desc: 'We treat your business as our own, focusing on real ROI over vanity metrics.' },
            { icon: Target, title: 'Precision', desc: 'Every campaign is data-driven and targeted to your ideal customer profile.' },
            { icon: Users, title: 'Partnership', desc: 'We work as an extension of your team, not just an outside vendor.' },
          ].map((item, idx) => (
            <div key={idx} className="glass-card p-8 space-y-4">
              <div className="p-3 rounded-xl bg-white/5 w-fit">
                <item.icon className="w-6 h-6 text-brand-orange" />
              </div>
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
