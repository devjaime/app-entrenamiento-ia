'use client';

import { useState } from 'react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

type TimeFrame = 'daily' | 'weekly' | 'monthly';

const dailyData = [
  { day: 'Día 1', energia: 45, fuerza: 30, grasa: 28 },
  { day: 'Día 2', energia: 50, fuerza: 32, grasa: 27.8 },
  { day: 'Día 3', energia: 55, fuerza: 35, grasa: 27.6 },
  { day: 'Día 4', energia: 58, fuerza: 38, grasa: 27.4 },
  { day: 'Día 5', energia: 62, fuerza: 40, grasa: 27.2 },
  { day: 'Día 6', energia: 65, fuerza: 42, grasa: 27 },
  { day: 'Día 7', energia: 70, fuerza: 45, grasa: 26.8 },
];

const weeklyData = [
  { week: 'Sem 1', energia: 45, fuerza: 30, grasa: 28, peso: 85 },
  { week: 'Sem 2', energia: 58, fuerza: 38, grasa: 27, peso: 84 },
  { week: 'Sem 3', energia: 68, fuerza: 45, grasa: 25.5, peso: 83 },
  { week: 'Sem 4', energia: 75, fuerza: 52, grasa: 24, peso: 82 },
  { week: 'Sem 5', energia: 80, fuerza: 58, grasa: 23, peso: 81.5 },
  { week: 'Sem 6', energia: 85, fuerza: 65, grasa: 22, peso: 81 },
  { week: 'Sem 7', energia: 88, fuerza: 70, grasa: 21, peso: 80.5 },
  { week: 'Sem 8', energia: 92, fuerza: 75, grasa: 20, peso: 80 },
];

const monthlyData = [
  { month: 'Mes 1', energia: 45, fuerza: 30, grasa: 28, musculo: 30 },
  { month: 'Mes 2', energia: 65, fuerza: 50, grasa: 24, musculo: 33 },
  { month: 'Mes 3', energia: 78, fuerza: 68, grasa: 21, musculo: 36 },
  { month: 'Mes 4', energia: 85, fuerza: 80, grasa: 18, musculo: 39 },
  { month: 'Mes 5', energia: 90, fuerza: 88, grasa: 16, musculo: 41 },
  { month: 'Mes 6', energia: 95, fuerza: 95, grasa: 14, musculo: 43 },
];

export default function ProgressChart() {
  const [timeFrame, setTimeFrame] = useState<TimeFrame>('weekly');

  const getData = () => {
    switch (timeFrame) {
      case 'daily':
        return dailyData;
      case 'weekly':
        return weeklyData;
      case 'monthly':
        return monthlyData;
    }
  };

  const getXAxisKey = () => {
    switch (timeFrame) {
      case 'daily':
        return 'day';
      case 'weekly':
        return 'week';
      case 'monthly':
        return 'month';
    }
  };

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-900 dark:text-blue-100 font-medium mb-4">
            📊 Simulación de Progreso
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Tu Transformación Medible
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Visualización conceptual de cómo la app rastreará tu progreso día a día. Más fuerza, más energía, menos grasa.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            * Datos simulados con fines ilustrativos
          </p>
        </div>

        {/* Time Frame Selector */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setTimeFrame('daily')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              timeFrame === 'daily'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            📅 Diario
          </button>
          <button
            onClick={() => setTimeFrame('weekly')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              timeFrame === 'weekly'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            📊 Semanal
          </button>
          <button
            onClick={() => setTimeFrame('monthly')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              timeFrame === 'monthly'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            📈 Mensual
          </button>
        </div>

        {/* Chart */}
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
              <Area
                type="monotone"
                dataKey="energia"
                stroke="#3b82f6"
                fillOpacity={1}
                fill="url(#colorEnergia)"
                name="Energía Mental (%)"
              />
              <Area
                type="monotone"
                dataKey="fuerza"
                stroke="#8b5cf6"
                fillOpacity={1}
                fill="url(#colorFuerza)"
                name="Fuerza (%)"
              />
              <Area
                type="monotone"
                dataKey="grasa"
                stroke="#ef4444"
                fillOpacity={1}
                fill="url(#colorGrasa)"
                name="Grasa Corporal (%)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg">
            <div className="text-4xl mb-2">⚡</div>
            <div className="text-3xl font-bold mb-1">+110%</div>
            <div className="text-blue-100">Aumento de Energía Mental</div>
            <div className="text-sm text-blue-200 mt-2">en solo 6 meses</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg">
            <div className="text-4xl mb-2">💪</div>
            <div className="text-3xl font-bold mb-1">+217%</div>
            <div className="text-purple-100">Mejora en Fuerza</div>
            <div className="text-sm text-purple-200 mt-2">progreso constante</div>
          </div>
          <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-6 text-white shadow-lg">
            <div className="text-4xl mb-2">📉</div>
            <div className="text-3xl font-bold mb-1">-50%</div>
            <div className="text-red-100">Reducción Grasa Corporal</div>
            <div className="text-sm text-red-200 mt-2">de forma saludable</div>
          </div>
        </div>
      </div>
    </section>
  );
}
