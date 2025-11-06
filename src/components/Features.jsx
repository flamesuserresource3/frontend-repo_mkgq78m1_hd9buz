import { BarChart3, CalendarCheck2, NotebookPen, Layers } from 'lucide-react';

const features = [
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    desc: 'Edge ratio, expectancy, win rate, MAE/MFE, time-of-day and instrument performance — all visualized.',
  },
  {
    icon: CalendarCheck2,
    title: 'Structured Journaling',
    desc: 'Tag strategies, market regimes and emotions. Attach screenshots and notes for review.',
  },
  {
    icon: Layers,
    title: 'Multi‑Asset Ready',
    desc: 'Forex, Futures, Crypto and Stocks with unified PnL, currency conversion and fees handling.',
  },
  {
    icon: NotebookPen,
    title: 'Review Rituals',
    desc: 'Daily and weekly reviews with prompts that reinforce discipline and continuous improvement.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 -z-[1] bg-gradient-to-b from-white via-white to-neutral-50" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Designed for clarity, built for speed</h2>
          <p className="mt-2 text-neutral-700">Minimal UI, maximal insight. Everything you need to refine your edge.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="inline-flex items-center justify-center rounded-xl bg-neutral-900 text-white p-2">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-lg font-medium">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
