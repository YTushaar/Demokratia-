'use client';
import { useState } from 'react';

export default function Registration() {
  const [activeTab, setActiveTab] = useState<'delegate' | 'observer'>('delegate');

  return (
    <section className="py-24 bg-black relative overflow-hidden" id="register">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,20,50,1)_0%,rgba(0,0,0,1)_100%)]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.05]"></div>
      
      {/* Decorative Glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md text-blue-400 text-xs font-bold tracking-[0.2em] uppercase mb-6 animate-fade-in">
            Registration Portal
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
            Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500">Dialogue</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Select your role and begin your journey into the world of diplomacy and parliamentary excellence.
          </p>
        </div>

        {/* Tab Selection Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-zinc-900/50 border border-white/5 rounded-2xl backdrop-blur-2xl shadow-2xl">
            <button
              onClick={() => setActiveTab('delegate')}
              className={`flex items-center gap-2 px-8 py-4 rounded-xl font-bold transition-all duration-500 ${
                activeTab === 'delegate'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] scale-105'
                  : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Delegate
            </button>
            <button
              onClick={() => setActiveTab('observer')}
              className={`flex items-center gap-2 px-8 py-4 rounded-xl font-bold transition-all duration-500 ${
                activeTab === 'observer'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-[0_0_20px_rgba(245,158,11,0.3)] scale-105'
                  : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Observer
            </button>
          </div>
        </div>
        
        {/* Registration Content Area */}
        <div className="relative min-h-[500px]">
          {activeTab === 'delegate' ? (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                    Apply as a <span className="text-blue-400">Delegate</span>
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Represent a nation, debate critical global issues, and craft resolutions that shape the future. The Delegate experience is the heart of Demokratia.
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Access to all committee sessions',
                      'Delegate Kit and certificates',
                      'Networking with experts',
                      'Eligibility for awards'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-300">
                        <div className="flex-shrink-0 w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-6">
                    <a 
                      href="https://forms.fillout.com/t/79X1cph98Xus" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all duration-300 hover:scale-105 shadow-xl shadow-blue-600/20"
                    >
                      Apply
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
                
                <div className="relative group hidden md:block">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
                  <div className="relative bg-zinc-900/50 border border-white/10 rounded-[2rem] p-4 aspect-[4/5] overflow-hidden backdrop-blur-xl flex flex-col items-center justify-center text-center">
                    <div className="w-20 h-20 bg-blue-500/10 text-blue-400 rounded-3xl flex items-center justify-center mb-6">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Fast-Track Application</h4>
                    <p className="text-gray-500 px-8">Fill out your details in the specialized delegate portal.</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative group order-2 md:order-1 hidden md:block">
                  <div className="absolute -inset-4 bg-gradient-to-r from-amber-600/20 to-orange-600/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
                  <div className="relative bg-zinc-900/50 border border-white/10 rounded-[2rem] p-4 aspect-[4/5] overflow-hidden backdrop-blur-xl flex flex-col items-center justify-center text-center">
                    <div className="w-20 h-20 bg-amber-500/10 text-amber-400 rounded-3xl flex items-center justify-center mb-6">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Observation Access</h4>
                    <p className="text-gray-500 px-8">Secure your seat to witness the proceedings of the DYP.</p>
                  </div>
                </div>

                <div className="space-y-6 order-1 md:order-2">
                  <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                    Join as an <span className="text-amber-400">Observer</span>
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Witness the power of diplomacy and the art of leadership from the front row. Perfect for those who want to experience the intensity of debate without active participation.
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Access to all committee sessions',
                      'Observer certificate',
                      'Insight into parliamentary procedure',
                      'Participation in guest lectures'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-300">
                        <div className="flex-shrink-0 w-5 h-5 bg-amber-500/20 rounded-full flex items-center justify-center text-amber-400">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-6">
                    <a 
                      href="https://docs.google.com/forms/d/e/1FAIpQLSf3SwZZIsRZvsaXQjiB-hgak4gEQEQOFuWdMcB2szE1X9e2dA/viewform" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold rounded-2xl transition-all duration-300 hover:scale-105 shadow-xl shadow-amber-600/20"
                    >
                      Apply
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}


