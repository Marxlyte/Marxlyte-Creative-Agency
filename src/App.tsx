import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './components/Services'; // Reusing component as page for now
import Portfolio from './pages/Portfolio';
import CaseStudies from './pages/CaseStudies';
import Contact from './components/Contact'; // Reusing component as page for now
import { motion, AnimatePresence } from 'motion/react';
import { Zap } from 'lucide-react';

function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/10 bg-charcoal">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-brand-orange flex items-center justify-center">
            <Zap className="w-6 h-6 text-white fill-white" />
          </div>
          <span className="text-2xl font-black tracking-tighter">MARXLYTE</span>
        </div>
        <p className="text-gray-500 text-sm">© 2026 Marxlyte Digital Agency. All rights reserved.</p>
        <div className="flex gap-6 text-gray-400 text-sm">
          <a href="#" className="hover:text-brand-orange transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-brand-orange transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-charcoal text-white font-sans">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<div className="pt-20"><ServicesPage /></div>} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/contact" element={<div className="pt-20"><Contact /></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
