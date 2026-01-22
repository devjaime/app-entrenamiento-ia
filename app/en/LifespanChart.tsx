'use client';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';

const lifespanData = [
  { age: 30, withAI: 95, withoutAI: 85, average: 75 },
  { age: 40, withAI: 96, withoutAI: 78, average: 68 },
  { age: 50, withAI: 94, withoutAI: 67, average: 58 },
  { age: 60, withAI: 91, withoutAI: 52, average: 45 },
  { age: 70, withAI: 87, withoutAI: 36, average: 32 },
  { age: 80, withAI: 81, withoutAI: 21, average: 20 },
  { age: 90, withAI: 73, withoutAI: 10, average: 10 },
  { age: 100, withAI: 63, withoutAI: 3, average: 3 },
  { age: 110, withAI: 50, withoutAI: 0, average: 0 },
  { age: 120, withAI: 35, withoutAI: 0, average: 0 },
];

export default function LifespanChart() {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-900 dark:text-purple-100 font-medium mb-4">
            🔬 Conceptual Projection
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            The Vision: Living to 120+ Years
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              With Fulfillment and Quality of Life
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Based on longevity research: it's not just about living more years, but living those years with
            <span className="font-semibold text-purple-600 dark:text-purple-400"> energy, vitality, and health</span>.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            * Projection based on longevity studies and healthy habits - Seeks scientific validation with medical partners
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl mb-12">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Quality of Life Projection
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Compare how your quality of life can stay high with AI-optimized habits
            </p>
          </div>

          <ResponsiveContainer width="100%" height={500}>
            <AreaChart data={lifespanData}>
              <defs>
                <linearGradient id="colorWithAI" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.2}/>
                </linearGradient>
                <linearGradient id="colorWithoutAI" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.6}/>
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="colorAverage" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#94a3b8" stopOpacity={0.05}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#ccc" opacity={0.2} />
              <XAxis dataKey="age" stroke="#666" label={{ value: 'Age (years)', position: 'insideBottom', offset: -5 }} />
              <YAxis stroke="#666" label={{ value: 'Quality of Life (%)', angle: -90, position: 'insideLeft' }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.98)',
                  border: '2px solid #8b5cf6',
                  borderRadius: '12px',
                  padding: '16px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}
                formatter={(value) => [`${value ?? 0}%`, '']}
              />
              <Legend wrapperStyle={{ paddingTop: '20px' }} iconType="line" />
              <ReferenceLine y={50} stroke="#666" strokeDasharray="3 3" />

              <Area type="monotone" dataKey="average" stroke="#94a3b8" strokeWidth={2} fillOpacity={1} fill="url(#colorAverage)" name="Population Average" />
              <Area type="monotone" dataKey="withoutAI" stroke="#ef4444" strokeWidth={2} fillOpacity={1} fill="url(#colorWithoutAI)" name="Without Optimization" />
              <Area type="monotone" dataKey="withAI" stroke="#8b5cf6" strokeWidth={3} fillOpacity={1} fill="url(#colorWithAI)" name="With Personalized AI ⭐" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              The Goal: 120 Active Years
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              With AI-optimized habits, you can maintain a quality of life above 80% until age 80,
              and remain active and healthy until 120+.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <span className="w-3 h-3 rounded-full bg-purple-500"></span>
                <span className="text-gray-700 dark:text-gray-300">At 60: 91% quality of life (vs 52% average)</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-3 h-3 rounded-full bg-purple-500"></span>
                <span className="text-gray-700 dark:text-gray-300">At 80: 81% quality of life (vs 20% average)</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-3 h-3 rounded-full bg-purple-500"></span>
                <span className="text-gray-700 dark:text-gray-300">At 100: 63% quality of life (active and vital)</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-8 text-white shadow-lg">
            <div className="text-5xl mb-4">🧬</div>
            <h3 className="text-2xl font-bold mb-3">
              How We Achieve It
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>Nutrition plans based on your real medical data</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>Personalized exercise that evolves with your age</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>Optimization of sleep, stress, and mental energy</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>Daily AI adjustments based on your metrics</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>Proactive prevention of chronic diseases</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Your Life Across the Decades
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">30-50</div>
              <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Peak Performance</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Building lifelong habits</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">50-70</div>
              <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Active Maintenance</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Sustained energy and vitality</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">70-90</div>
              <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Full Life</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Enjoying with health and mobility</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">90-120+</div>
              <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Active Longevity</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Breaking limits with AI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
