import Spline from '@splinetool/react-spline';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl py-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs text-neutral-700 backdrop-blur">
            <Sparkles className="text-amber-500" size={14} />
            Minimalist fintech for serious traders
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900">
            Trade smarter with a focused journal and advanced analytics
          </h1>
          <p className="mt-4 text-neutral-700 max-w-xl">
            Log trades across Forex, Futures and Crypto. Get performance breakdowns, risk analysis and actionable insights — all in a clean, distraction‑free interface.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-black text-white px-5 py-3 text-sm hover:bg-neutral-900 transition-colors">
              Get Started
              <ArrowRight size={16} />
            </button>
            <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-300 bg-white px-5 py-3 text-sm hover:bg-neutral-50 transition-colors">
              <ShieldCheck size={16} />
              Privacy-first, your data — your edge
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
