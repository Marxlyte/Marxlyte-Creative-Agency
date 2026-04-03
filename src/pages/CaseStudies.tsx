import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function CaseStudies() {
  const cases = [
    {
      title: 'Scaling a Local Service Business',
      problem: 'Zero online presence, relying entirely on word-of-mouth.',
      strategy: 'Full SMM overhaul + Targeted Meta Ads + Lead Gen Funnel.',
      results: 'Generated 120+ qualified leads in the first 30 days.',
      image: 'https://picsum.photos/seed/case1/800/400'
    },
    {
      title: 'E-commerce Brand Explosion',
      problem: 'High traffic but low conversion and weak brand trust.',
      strategy: 'Premium Content Creation + PR Campaign + Website Optimization.',
      results: 'Conversion rate jumped from 1.2% to 4.5% in 60 days.',
      image: 'https://picsum.photos/seed/case2/800/400'
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter">CASE <span className="text-brand-orange">STUDIES.</span></h1>
          <p className="text-xl text-gray-400">Deep dives into how we solve complex growth problems.</p>
        </div>

        <div className="space-y-12">
          {cases.map((c, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="glass-card overflow-hidden"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img src={c.image} alt={c.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="p-8 md:p-12 space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold">{c.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-2">
                    <h4 className="text-sm font-bold text-red-500 uppercase tracking-widest">The Problem</h4>
                    <p className="text-gray-400">{c.problem}</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-bold text-brand-blue uppercase tracking-widest">The Strategy</h4>
                    <p className="text-gray-400">{c.strategy}</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-bold text-emerald-500 uppercase tracking-widest">The Results</h4>
                    <p className="text-gray-400">{c.results}</p>
                  </div>
                </div>
                <button className="flex items-center gap-2 text-brand-orange font-bold group">
                  Read Full Case Study <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
