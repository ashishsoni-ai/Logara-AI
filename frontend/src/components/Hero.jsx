import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center text-center">

      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-8">
        <span className="flex h-2 w-2 rounded-full bg-indigo-400" />
        Now in Public Beta
      </div>

      <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8 leading-[1.1]">
        Log Intelligence.
        <span className="block bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
          Powered by AI.
        </span>
      </h1>

      <p className="max-w-2xl text-lg md:text-xl text-neutral-400 mb-12">
        Detect anomalies, summarize issues, and perform root cause analysis with actionable fixes.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">

        <button
          onClick={() => navigate('/dashboard')}
          className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl"
        >
          Deploy Locally →
        </button>

        <button
          onClick={() => navigate('/docs')}
          className="px-8 py-4 bg-neutral-900 text-white font-bold rounded-2xl border border-neutral-800"
        >
          Read the Docs
        </button>

      </div>
    </div>
  );
};

export default Hero;