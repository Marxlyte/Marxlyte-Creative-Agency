import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, TrendingUp, Wallet, Users } from 'lucide-react';
import { cn } from '../lib/utils';

export default function ROICalculator() {
  const [adSpend, setAdSpend] = useState(200000);
  const [avgLeadValue, setAvgLeadValue] = useState(50000);
  const [conversionRate, setConversionRate] = useState(5); // %

  const estimatedLeads = Math.round(adSpend / 500); // Assuming ₦500 per lead for calculation
  const estimatedSales = Math.round(estimatedLeads * (conversionRate / 100));
  const estimatedRevenue = estimatedSales * avgLeadValue;
  const roas = adSpend > 0 ? (estimatedRevenue / adSpend).toFixed(1) : "0.0";

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section className="py-24 px-6 bg-dark-gray/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Interactive <span className="text-brand-orange">ROI Calculator</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">See the potential impact of a professional marketing strategy on your bottom line.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="glass-card p-8 space-y-8">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <label className="text-sm font-medium text-gray-300">Monthly Ad Spend (₦)</label>
                  <span className="text-brand-orange font-bold">{formatCurrency(adSpend)}</span>
                </div>
                <input
                  type="range"
                  min="50000"
                  max="5000000"
                  step="50000"
                  value={adSpend}
                  onChange={(e) => setAdSpend(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-orange"
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <label className="text-sm font-medium text-gray-300">Average Customer Value (₦)</label>
                  <span className="text-brand-orange font-bold">{formatCurrency(avgLeadValue)}</span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="1000000"
                  step="5000"
                  value={avgLeadValue}
                  onChange={(e) => setAvgLeadValue(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-orange"
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <label className="text-sm font-medium text-gray-300">Conversion Rate (%)</label>
                  <span className="text-brand-orange font-bold">{conversionRate}%</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  step="0.5"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-orange"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Est. Monthly Leads', value: estimatedLeads, icon: Users, color: 'text-blue-400' },
              { label: 'Est. Monthly Sales', value: estimatedSales, icon: TrendingUp, color: 'text-emerald-400' },
              { label: 'Est. Revenue', value: formatCurrency(estimatedRevenue), icon: Wallet, color: 'text-brand-orange' },
              { label: 'Target ROAS', value: `${roas}x`, icon: Calculator, color: 'text-purple-400' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-6 flex flex-col items-center text-center space-y-3"
              >
                <div className={cn("p-3 rounded-xl bg-white/5", stat.color)}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <span className="text-2xl font-bold">{stat.value}</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
