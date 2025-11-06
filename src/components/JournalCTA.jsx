import { ArrowRight, NotebookText } from 'lucide-react';

export default function JournalCTA() {
  return (
    <section id="journal" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Make review a habit</h2>
            <p className="mt-3 text-neutral-700 max-w-xl">Capture every trade with context. Review by day, by strategy or by error type. Build a repeatable process that compounds your skill.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 rounded-lg bg-black text-white px-5 py-3 text-sm hover:bg-neutral-900 transition-colors">
                <NotebookText size={16} /> Start journaling
              </button>
              <button className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 bg-white px-5 py-3 text-sm hover:bg-neutral-50 transition-colors">
                Learn more <ArrowRight size={16} />
              </button>
            </div>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-xl bg-neutral-50 p-4">
                <div className="text-neutral-500">Win rate</div>
                <div className="mt-1 text-2xl font-semibold">57%</div>
              </div>
              <div className="rounded-xl bg-neutral-50 p-4">
                <div className="text-neutral-500">Expectancy</div>
                <div className="mt-1 text-2xl font-semibold">0.42 R</div>
              </div>
              <div className="rounded-xl bg-neutral-50 p-4">
                <div className="text-neutral-500">Avg hold time</div>
                <div className="mt-1 text-2xl font-semibold">2h 14m</div>
              </div>
              <div className="rounded-xl bg-neutral-50 p-4">
                <div className="text-neutral-500">Max DD</div>
                <div className="mt-1 text-2xl font-semibold">-3.1%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
