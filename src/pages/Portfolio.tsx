import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    { title: 'Luxe Interiors', category: 'Social Media Management', image: 'https://picsum.photos/seed/luxe/600/400', results: '+300% Leads' },
    { title: 'TechFlow', category: 'Paid Advertising', image: 'https://picsum.photos/seed/tech/600/400', results: '2.4x Revenue' },
    { title: 'Nova Beauty', category: 'PR & Branding', image: 'https://picsum.photos/seed/beauty/600/400', results: '50k Followers' },
    { title: 'FitLife', category: 'Content Creation', image: 'https://picsum.photos/seed/fit/600/400', results: '1M+ Reach' },
    { title: 'EcoHome', category: 'Website Design', image: 'https://picsum.photos/seed/home/600/400', results: '15% Conv. Rate' },
    { title: 'Global SaaS', category: 'Lead Generation', image: 'https://picsum.photos/seed/saas/600/400', results: '500+ MQLs' },
  ];

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter">OUR <span className="text-brand-orange">WORK.</span></h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Cinematic visuals, aggressive strategies, and measurable outcomes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden glass-card"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-charcoal via-charcoal/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="text-xs font-bold text-brand-orange uppercase tracking-widest mb-2">{project.category}</div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-emerald-400">{project.results}</span>
                  <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
