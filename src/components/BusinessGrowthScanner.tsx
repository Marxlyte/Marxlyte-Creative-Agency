import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SCANNER_QUESTIONS } from '../constants';
import { ScannerResult } from '../types';
import { cn } from '../lib/utils';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip } from 'recharts';
import { CheckCircle2, AlertTriangle, Zap, ArrowRight, RefreshCcw } from 'lucide-react';

export default function BusinessGrowthScanner() {
  const [step, setStep] = useState<'intro' | 'questions' | 'loading' | 'results'>('intro');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [results, setResults] = useState<ScannerResult | null>(null);
  const [loadingText, setLoadingText] = useState("");

  const loadingMessages = [
    "Analyzing your business visibility...",
    "Checking your online presence...",
    "Calculating growth potential...",
    "Scanning for missed opportunities...",
    "Generating your custom report..."
  ];

  useEffect(() => {
    if (step === 'loading') {
      let i = 0;
      const interval = setInterval(() => {
        setLoadingText(loadingMessages[i % loadingMessages.length]);
        i++;
        if (i >= loadingMessages.length * 2) {
          clearInterval(interval);
          calculateResults();
        }
      }, 800);
      return () => clearInterval(interval);
    }
  }, [step]);

  const handleAnswer = (score: number) => {
    const newAnswers = { ...answers, [currentQuestion]: score };
    setAnswers(newAnswers);

    if (currentQuestion < SCANNER_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setStep('loading');
    }
  };

  const calculateResults = () => {
    const categories = {
      visibility: 0,
      leads: 0,
      branding: 0,
      social: 0,
      website: 0
    };

    SCANNER_QUESTIONS.forEach((q, idx) => {
      const score = answers[idx] || 0;
      const category = q.options[0].category; // Simplified for this logic
      categories[category] = (categories[category] + score) / (categories[category] ? 2 : 1);
    });

    const overallScore = Object.values(categories).reduce((a, b) => a + b, 0) / 5;

    setResults({ overallScore, categories });
    setStep('results');
  };

  const chartData = results ? [
    { name: 'Visibility', score: results.categories.visibility },
    { name: 'Leads', score: results.categories.leads },
    { name: 'Branding', score: results.categories.branding },
    { name: 'Social', score: results.categories.social },
    { name: 'Website', score: results.categories.website },
  ] : [];

  const getScoreColor = (score: number) => {
    if (score < 40) return '#ef4444'; // red
    if (score < 70) return '#f59e0b'; // amber
    return '#10b981'; // green
  };

  const getStatusText = (score: number) => {
    if (score < 40) return 'CRITICAL';
    if (score < 60) return 'WEAK';
    if (score < 80) return 'GROWING';
    return 'STRONG';
  };

  return (
    <section id="scanner" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          {step === 'intro' && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-orange text-sm font-medium">
                <Zap className="w-4 h-4" />
                <span>Free Instant Audit</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                Business Growth <span className="text-brand-orange">Scanner</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Discover the hidden gaps in your marketing strategy. Our AI-powered scanner analyzes your visibility, branding, and lead generation in seconds.
              </p>
              <button
                onClick={() => setStep('questions')}
                className="group relative px-8 py-4 bg-brand-orange text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Scanning Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-orange-600 to-brand-orange opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </motion.div>
          )}

          {step === 'questions' && (
            <motion.div
              key="questions"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="glass-card p-8 md:p-12"
            >
              <div className="mb-8">
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>Question {currentQuestion + 1} of {SCANNER_QUESTIONS.length}</span>
                  <span>{Math.round(((currentQuestion + 1) / SCANNER_QUESTIONS.length) * 100)}% Complete</span>
                </div>
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-brand-orange"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentQuestion + 1) / SCANNER_QUESTIONS.length) * 100}%` }}
                  />
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-8">
                {SCANNER_QUESTIONS[currentQuestion].question}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {SCANNER_QUESTIONS[currentQuestion].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(option.score)}
                    className="p-6 text-left rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-brand-orange/50 transition-all group"
                  >
                    <span className="text-lg font-medium group-hover:text-brand-orange transition-colors">
                      {option.label}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 'loading' && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center space-y-12 py-20"
            >
              <div className="relative w-32 h-32 mx-auto">
                <motion.div
                  className="absolute inset-0 border-4 border-brand-orange/20 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-0 border-4 border-t-brand-orange rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Zap className="w-12 h-12 text-brand-orange animate-pulse" />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gradient">{loadingText}</h3>
                <p className="text-gray-500">Our AI is processing your data points...</p>
              </div>
            </motion.div>
          )}

          {step === 'results' && results && (
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 glass-card p-8">
                  <h3 className="text-2xl font-bold mb-6">Growth Potential Analysis</h3>
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={chartData}>
                        <XAxis dataKey="name" stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis hide domain={[0, 100]} />
                        <Tooltip
                          contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                          itemStyle={{ color: '#fff' }}
                        />
                        <Bar dataKey="score" radius={[4, 4, 0, 0]}>
                          {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={getScoreColor(entry.score)} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="glass-card p-8 flex flex-col items-center justify-center text-center space-y-4">
                  <span className="text-sm font-medium text-gray-500 uppercase tracking-widest">Overall Score</span>
                  <div className="relative">
                    <svg className="w-32 h-32">
                      <circle
                        cx="64"
                        cy="64"
                        r="58"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="8"
                        className="text-white/5"
                      />
                      <motion.circle
                        cx="64"
                        cy="64"
                        r="58"
                        fill="none"
                        stroke={getScoreColor(results.overallScore)}
                        strokeWidth="8"
                        strokeDasharray={364.4}
                        initial={{ strokeDashoffset: 364.4 }}
                        animate={{ strokeDashoffset: 364.4 - (364.4 * results.overallScore) / 100 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl font-bold">{Math.round(results.overallScore)}</span>
                    </div>
                  </div>
                  <span className={cn(
                    "px-4 py-1 rounded-full text-xs font-bold tracking-tighter",
                    results.overallScore < 40 ? "bg-red-500/20 text-red-500" :
                    results.overallScore < 70 ? "bg-white/10 text-brand-orange" :
                    "bg-emerald-500/20 text-emerald-500"
                  )}>
                    {getStatusText(results.overallScore)}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-card p-8 space-y-6">
                  <h4 className="text-xl font-bold flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-500" />
                    Estimated Monthly Losses
                  </h4>
                  <ul className="space-y-4">
                    {results.overallScore < 60 && (
                      <li className="flex gap-3 text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                        <span>You may be missing up to 30-50 leads every month due to low visibility.</span>
                      </li>
                    )}
                    {results.categories.branding < 60 && (
                      <li className="flex gap-3 text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                        <span>Weak branding is likely costing your business trust and premium positioning.</span>
                      </li>
                    )}
                    <li className="flex gap-3 text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                      <span>Without automated follow-up, you are leaving money on the table daily.</span>
                    </li>
                  </ul>
                </div>

                <div className="glass-card p-8 space-y-6">
                  <h4 className="text-xl font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    Recommended Action Plan
                  </h4>
                  <div className="space-y-3">
                    {results.categories.social < 70 && (
                      <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-sm">
                        Implement a consistent 7-day content strategy
                      </div>
                    )}
                    {results.categories.leads < 70 && (
                      <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-sm">
                        Launch ROI-focused paid advertising campaigns
                      </div>
                    )}
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-sm">
                      Optimize website for high-conversion lead capture
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center pt-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Your Business Has More Potential Than You Think</h3>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  Do not keep losing customers because of weak marketing. Let Marxlyte build a strategy that helps you grow faster.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a 
                    href="https://wa.me/2347063849067?text=I%20just%20completed%20the%20Marxlyte%20Business%20Growth%20Scanner%20and%20I%20want%20my%20full%20strategy."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-brand-orange text-white font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2"
                  >
                    Get My Full Strategy
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <button
                    onClick={() => {
                      setStep('intro');
                      setCurrentQuestion(0);
                      setAnswers({});
                    }}
                    className="px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-colors flex items-center gap-2"
                  >
                    <RefreshCcw className="w-4 h-4" />
                    Scan Again
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
