'use client';

import { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

type TimeFrame = 'daily' | 'weekly' | 'monthly';

const dailyData = [
  { day: 'Day 1', energy: 45, strength: 30, fat: 28 },
  { day: 'Day 2', energy: 50, strength: 32, fat: 27.8 },
  { day: 'Day 3', energy: 55, strength: 35, fat: 27.6 },
  { day: 'Day 4', energy: 58, strength: 38, fat: 27.4 },
  { day: 'Day 5', energy: 62, strength: 40, fat: 27.2 },
  { day: 'Day 6', energy: 65, strength: 42, fat: 27 },
  { day: 'Day 7', energy: 70, strength: 45, fat: 26.8 },
];

const weeklyData = [
  { week: 'Wk 1', energy: 45, strength: 30, fat: 28 },
  { week: 'Wk 2', energy: 58, strength: 38, fat: 27 },
  { week: 'Wk 3', energy: 68, strength: 45, fat: 25.5 },
  { week: 'Wk 4', energy: 75, strength: 52, fat: 24 },
  { week: 'Wk 5', energy: 80, strength: 58, fat: 23 },
  { week: 'Wk 6', energy: 85, strength: 65, fat: 22 },
  { week: 'Wk 7', energy: 88, strength: 70, fat: 21 },
  { week: 'Wk 8', energy: 92, strength: 75, fat: 20 },
];

const monthlyData = [
  { month: 'Mo 1', energy: 45, strength: 30, fat: 28 },
  { month: 'Mo 2', energy: 65, strength: 50, fat: 24 },
  { month: 'Mo 3', energy: 78, strength: 68, fat: 21 },
  { month: 'Mo 4', energy: 85, strength: 80, fat: 18 },
  { month: 'Mo 5', energy: 90, strength: 88, fat: 16 },
  { month: 'Mo 6', energy: 95, strength: 95, fat: 14 },
];

export default function ProgressChart() {
  const [timeFrame, setTimeFrame] = useState<TimeFrame>('weekly');

  const getData = () => {
    switch (timeFrame) {
      case 'daily': return dailyData;
      case 'weekly': return weeklyData;
      case 'monthly': return monthlyData;
    }
  };

  const getXAxisKey = () => {
    switch (timeFrame) {
      case 'daily': return 'day';
      case 'weekly': return 'week';
      case 'monthly': return 'month';
    }
  };

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-900 dark:text-blue-100 font-medium mb-4">
            📊 Progress Simulation
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Your Measurable Transformation
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Conceptual visualization of how the app will track your progress day by day. More strength, more energy, less fat.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            * Simulated data for illustrative purposes
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setTimeFrame('daily')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              timeFrame === 'daily'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            📅 Daily
          </button>
          <button
            onClick={() => setTimeFrame('weekly')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              timeFrame === 'weekly'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            📊 Weekly
          </button>
          <button
            onClick={() => setTimeFrame('monthly')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              timeFrame === 'monthly'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            📈 Monthly
          </button>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 shadow-xl">
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={getData()}>
              <defs>
                <linearGradient id="colorEnergia" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorFuerza" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorGrasa" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#ccc" opacity={0.3} />
              <XAxis dataKey={getXAxisKey()} stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  border: '1px solid #ccc',
                  borderRadius: '8px',
                  padding: '12px'
                }}
              />
              <Legend />
              <Area type="monotone" dataKey="energy" stroke="#3b82f6" fillOpacity={1} fill="url(#colorEnergia)" name="Mental Energy (%)" />
              <Area type="monotone" dataKey="strength" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorFuerza)" name="Strength (%)" />
              <Area type="monotone" dataKey="fat" stroke="#ef4444" fillOpacity={1} fill="url(#colorGrasa)" name="Body Fat (%)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg">
            <div className="text-4xl mb-2">⚡</div>
            <div className="text-3xl font-bold mb-1">+110%</div>
            <div className="text-blue-100">Mental Energy Increase</div>
            <div className="text-sm text-blue-200 mt-2">in just 6 months</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg">
            <div className="text-4xl mb-2">💪</div>
            <div className="text-3xl font-bold mb-1">+217%</div>
            <div className="text-purple-100">Strength Improvement</div>
            <div className="text-sm text-purple-200 mt-2">consistent progress</div>
          </div>
          <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-6 text-white shadow-lg">
            <div className="text-4xl mb-2">📉</div>
            <div className="text-3xl font-bold mb-1">-50%</div>
            <div className="text-red-100">Body Fat Reduction</div>
            <div className="text-sm text-red-200 mt-2">in a healthy way</div>
          </div>
        </div>
      </div>
    </section>
  );
}
