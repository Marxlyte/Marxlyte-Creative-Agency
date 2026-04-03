import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
                READY TO STOP <br />
                <span className="text-brand-orange">BEING INVISIBLE?</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-md">
                Stop losing customers to your competitors. Let's build your growth engine today.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:text-brand-orange transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest">Email Us</p>
                  <p className="text-xl font-bold">marxlyte@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-emerald-500/10 group-hover:text-emerald-500 transition-all">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest">WhatsApp</p>
                  <p className="text-xl font-bold">+2347063849067</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-brand-blue/10 group-hover:text-brand-blue transition-all">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest">Office</p>
                  <p className="text-xl font-bold">Digital Hub, Innovation St.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 md:p-12">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-brand-orange/50 focus:outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@company.com"
                    className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-brand-orange/50 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Service Needed</label>
                <select className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-brand-orange/50 focus:outline-none transition-all appearance-none">
                  <option className="bg-charcoal">Social Media Management</option>
                  <option className="bg-charcoal">Paid Advertising</option>
                  <option className="bg-charcoal">Website Design</option>
                  <option className="bg-charcoal">PR & Branding</option>
                  <option className="bg-charcoal">Full Growth Package</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your business goals..."
                  className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-brand-orange/50 focus:outline-none transition-all resize-none"
                />
              </div>

              <button className="w-full py-4 bg-brand-orange text-white font-bold rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
