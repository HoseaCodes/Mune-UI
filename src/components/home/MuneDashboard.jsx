import React, { useState, useEffect } from 'react';
import { Sparkles, Building2, Mic, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';

const MuneDashboard = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [showTransferSuccess, setShowTransferSuccess] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
    // Simulate transfer success after 3 seconds
    const timer = setTimeout(() => {
      setShowTransferSuccess(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const stockIcons = [
    { symbol: 'G', color: 'bg-blue-500' },
    { symbol: 'M', color: 'bg-blue-600' },
    { symbol: 'V', color: 'bg-purple-500' },
    { symbol: 'T', color: 'bg-red-500' },
    { symbol: 'A', color: 'bg-gray-800' },
  ];

  return (
    <div className="min-h-screen p-6 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Investment Card */}
          <div className={`bg-white rounded-3xl p-8 shadow-lg border border-slate-200/50 transform transition-all duration-700 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            
            {/* Header */}
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl">
                <Sparkles className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-slate-900 leading-tight">
                  Let Mun-e grow your money for you — 
                  <span className="text-emerald-500"> automatically</span>
                </h2>
                <p className="text-slate-600 mt-2 font-medium">
                  Invest smarter without lifting a finger.
                </p>
              </div>
            </div>

            {/* Suggestion Card */}
            <div className="bg-gradient-to-r from-purple-100 to-violet-100 rounded-2xl p-6 mb-6 border border-purple-200/50">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span className="font-semibold text-purple-700">Mun-e suggests</span>
              </div>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Increasing your VTI auto-invest by <span className="font-bold">$250/month</span> can help you reach your goal 10x faster!
              </p>
              <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-xl font-semibold transition-colors duration-200">
                Increase auto-invest
              </button>
            </div>

            {/* Stocks Section */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="font-semibold text-slate-700">Stocks</span>
                <div className="flex gap-1">
                  {stockIcons.map((stock, index) => (
                    <div 
                      key={stock.symbol}
                      className={`w-8 h-8 ${stock.color} rounded-full flex items-center justify-center text-white text-sm font-bold transform transition-transform duration-300 hover:scale-110`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {stock.symbol}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-slate-900">$119,885</span>
                <div className="flex items-center gap-1 text-emerald-600">
                  <TrendingUp className="w-4 h-4" />
                  <span className="font-semibold">$5.2k</span>
                </div>
              </div>
            </div>

            {/* Chart Area */}
            <div className="relative h-32 mb-6">
              <svg className="w-full h-full" viewBox="0 0 400 120">
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.05" />
                  </linearGradient>
                </defs>
                <path
                  d="M 0,80 Q 50,60 100,50 T 200,40 T 300,25 T 400,20"
                  stroke="#10b981"
                  strokeWidth="3"
                  fill="none"
                  className="animate-pulse"
                />
                <path
                  d="M 0,80 Q 50,60 100,50 T 200,40 T 300,25 T 400,20 L 400,120 L 0,120 Z"
                  fill="url(#chartGradient)"
                />
              </svg>
            </div>

            {/* Chat Bubble */}
            <div className="flex items-end gap-3">
              <div className="bg-emerald-500 text-white rounded-2xl rounded-bl-md p-4 max-w-xs shadow-lg">
                <p className="font-medium">
                  Hey Mun-e! Increase auto-invest so I can reach my goal faster!
                </p>
              </div>
              <button className="p-3 bg-emerald-100 hover:bg-emerald-200 rounded-full transition-colors duration-200">
                <Mic className="w-5 h-5 text-emerald-600" />
              </button>
            </div>
          </div>

          {/* Savings Card */}
          <div className={`bg-white rounded-3xl p-8 shadow-lg border border-slate-200/50 transform transition-all duration-700 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ animationDelay: '200ms' }}>
            
            {/* Header */}
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-gradient-to-br from-slate-100 to-gray-100 rounded-2xl">
                <Building2 className="w-6 h-6 text-slate-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-slate-900 leading-tight">
                  Smart savings that stay on track — 
                  <span className="text-emerald-500"> automatically</span>
                </h2>
                <p className="text-slate-600 mt-2 font-medium">
                  AI helps you hit your goals faster and adapts when life changes.
                </p>
              </div>
            </div>

            {/* Retirement Fund */}
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <span className="font-semibold text-slate-700">Retirement Fund</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </div>
              
              {/* Progress Circle */}
              <div className="flex items-center justify-center mb-6 relative">
                <div className="relative w-32 h-32">
                  <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                    <circle
                      cx="60"
                      cy="60"
                      r="45"
                      stroke="#e5e7eb"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r="45"
                      stroke="url(#progressGradient)"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={`${45 * 2 * Math.PI}`}
                      strokeDashoffset={`${45 * 2 * Math.PI * (1 - 0.97)}`}
                      className="transition-all duration-1000 ease-out"
                    />
                    <defs>
                      <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#059669" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-sm font-semibold text-emerald-600">$242,150</div>
                      <div className="text-xs text-slate-500">/$250,000</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Suggestion */}
              <div className="bg-gradient-to-r from-purple-100 to-violet-100 rounded-2xl p-6 mb-6 border border-purple-200/50">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-purple-600" />
                  <span className="font-semibold text-purple-700">Mun-e suggests</span>
                </div>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  You&#39;re <span className="font-bold">$150 ahead</span> of schedule. Want to boost your retirement fund?
                </p>
                <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-xl font-semibold transition-colors duration-200">
                  Boost Goal
                </button>
              </div>

              <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 px-6 rounded-xl font-semibold mb-6 transition-colors duration-200">
                🚀 Boost Goal
              </button>
            </div>

            {/* Chat Interaction */}
            <div className="space-y-4">
              <div className="flex justify-end">
                <div className="bg-emerald-500 text-white rounded-2xl rounded-br-md p-4 max-w-xs shadow-lg">
                  <p className="font-medium">
                    Hey Mun-e! Transfer $100 to my retirement account.
                  </p>
                </div>
              </div>
              
              {showTransferSuccess && (
                <div className="flex items-start gap-3 animate-fade-in">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div className="bg-gray-100 text-slate-700 rounded-2xl rounded-bl-md p-4 max-w-xs">
                    <p className="font-medium">
                      Got it! $100 has been transferred to your Retirement account. Great work!
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default MuneDashboard;