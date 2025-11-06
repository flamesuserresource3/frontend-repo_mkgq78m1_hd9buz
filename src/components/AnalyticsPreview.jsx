import { useMemo } from 'react';
import { TrendingUp, Clock, Activity } from 'lucide-react';

const sampleEquity = Array.from({ length: 30 }, (_, i) => ({
  x: i,
  value: 10000 + Math.round(600 * Math.sin(i / 3) + i * 40 + (Math.random() - 0.5) * 120),
}));

const sampleWinLossByHour = Array.from({ length: 8 }, (_, i) => ({
  label: `${(i + 6).toString().padStart(2, '0')}:00`,
  value: Math.round(200 * Math.sin(i / 1.7) + (Math.random() - 0.5) * 80),
}));

function useMinMax(values) {
  return useMemo(() => {
    const min = Math.min(...values);
    const max = Math.max(...values);
    return { min, max };
  }, [values]);
}

function SparkArea({ data, stroke = '#111827', fill = 'rgba(17,24,39,0.25)' }) {
  const width = 600;
  const height = 220;
  const padding = 16;
  const xs = data.map((d) => d.x);
  const ys = data.map((d) => d.value);
  const { min: xmin, max: xmax } = useMinMax(xs);
  const { min: ymin, max: ymax } = useMinMax(ys);
  const scaleX = (x) => padding + ((x - xmin) / (xmax - xmin || 1)) * (width - padding * 2);
  const scaleY = (y) => height - padding - ((y - ymin) / (ymax - ymin || 1)) * (height - padding * 2);

  const linePath = data.map((d, i) => `${i === 0 ? 'M' : 'L'} ${scaleX(d.x)} ${scaleY(d.value)}`).join(' ');
  const areaPath = `${linePath} L ${scaleX(data[data.length - 1].x)} ${height - padding} L ${scaleX(data[0].x)} ${height - padding} Z`;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-56">
      <defs>
        <linearGradient id="equityFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={fill} />
          <stop offset="100%" stopColor="rgba(17,24,39,0)" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill="url(#equityFill)" />
      <path d={linePath} fill="none" stroke={stroke} strokeWidth="2" />
    </svg>
  );
}

function SparkLine({ data, stroke = '#2563eb' }) {
  const width = 600;
  const height = 220;
  const padding = 16;
  const xs = data.map((_, i) => i);
  const ys = data.map((d) => d.value);
  const xmin = 0;
  const xmax = xs.length - 1;
  const ymin = Math.min(...ys);
  const ymax = Math.max(...ys);
  const scaleX = (x) => padding + ((x - xmin) / (xmax - xmin || 1)) * (width - padding * 2);
  const scaleY = (y) => height - padding - ((y - ymin) / (ymax - ymin || 1)) * (height - padding * 2);

  const linePath = data.map((d, i) => `${i === 0 ? 'M' : 'L'} ${scaleX(i)} ${scaleY(d.value)}`).join(' ');

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-56">
      <path d={linePath} fill="none" stroke={stroke} strokeWidth="2" />
    </svg>
  );
}

export default function AnalyticsPreview() {
  const growthPct = useMemo(() => {
    const start = sampleEquity[0].value;
    const end = sampleEquity[sampleEquity.length - 1].value;
    return (((end - start) / start) * 100).toFixed(1);
  }, []);

  return (
    <section id="analytics" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Insightful, not overwhelming</h2>
          <p className="mt-2 text-neutral-700">A crisp overview of your edge with flexible drill‑downs when you need them.</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm lg:col-span-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <TrendingUp size={16} /> Equity Curve
              </div>
              <div className="text-sm font-medium">Total growth: <span className="text-emerald-600">{growthPct}%</span></div>
            </div>
            <div className="mt-2">
              <SparkArea data={sampleEquity} />
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-sm text-neutral-600">
              <Clock size={16} /> Time‑of‑day performance
            </div>
            <div className="mt-2">
              <SparkLine data={sampleWinLossByHour} />
              <div className="mt-2 grid grid-cols-4 gap-1 text-[10px] text-neutral-500">
                {sampleWinLossByHour.map((d) => (
                  <span key={d.label} className="truncate text-center">{d.label}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2 text-sm text-neutral-600">
            <Activity size={16} /> Strategy tags and filters
          </div>
          <p className="mt-2 text-sm text-neutral-600">Slice performance by instrument, session, setup, direction, R multiple and more to reveal where your edge truly lives.</p>
        </div>
      </div>
    </section>
  );
}
