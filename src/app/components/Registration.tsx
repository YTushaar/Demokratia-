'use client';
import { useState } from 'react';

export default function Registration() {
  const [activeTab, setActiveTab] = useState<'delegate' | 'observer'>('delegate');

  return (
    <section className="py-24 bg-black relative" id="register">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Secure Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Spot</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Join the most anticipated youth parliament event. Choose your registration type below.
          </p>

          {/* Tab Toggle */}
          <div className="inline-flex p-1 bg-zinc-900/80 border border-white/10 rounded-2xl backdrop-blur-md mb-12">
            <button
              onClick={() => setActiveTab('delegate')}
              className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                activeTab === 'delegate'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Register as Delegate
            </button>
            <button
              onClick={() => setActiveTab('observer')}
              className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                activeTab === 'observer'
                  ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Register as Observer
            </button>
          </div>
        </div>
        
        {activeTab === 'delegate' ? (
          <div className="relative group animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Form border glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative bg-zinc-900/90 rounded-[2rem] p-1 border border-white/10 shadow-2xl overflow-hidden min-h-[600px] h-[80vh] md:h-[800px] w-full backdrop-blur-xl">
              <iframe 
                src="https://forms.fillout.com/t/79X1cph98Xus" 
                width="100%" 
                height="100%" 
                className="rounded-[1.8rem] border-none"
                title="Registration Form"
              ></iframe>
            </div>
          </div>
        ) : (
          /* Observer Registration Card */
          <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-amber-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
              <div className="relative bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-12 text-center">
                <div className="w-20 h-20 bg-yellow-500/20 text-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Register as an <span className="text-yellow-400">Observer</span></h3>
                <p className="text-gray-400 mb-10 text-lg leading-relaxed max-w-xl mx-auto">
                  Witness the power of diplomacy and the art of leadership from the front row. Join us as an observer and be part of an extraordinary parliamentary experience.
                </p>
                <button 
                  disabled
                  className="inline-flex items-center justify-center px-10 py-5 font-bold text-gray-500 bg-white/5 border border-white/10 rounded-full cursor-not-allowed transition-all duration-300"
                >
                  Registration Opening Soon
                  <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

