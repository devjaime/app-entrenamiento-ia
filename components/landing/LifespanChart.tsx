'use client';

import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';

const lifespanData = [
  { age: 30, withAI: 95, withoutAI: 85, average: 75 },
  { age: 35, withAI: 96, withoutAI: 82, average: 72 },
  { age: 40, withAI: 96, withoutAI: 78, average: 68 },
  { age: 45, withAI: 95, withoutAI: 73, average: 63 },
  { age: 50, withAI: 94, withoutAI: 67, average: 58 },
  { age: 55, withAI: 93, withoutAI: 60, average: 52 },
  { age: 60, withAI: 91, withoutAI: 52, average: 45 },
  { age: 65, withAI: 89, withoutAI: 44, average: 38 },
  { age: 70, withAI: 87, withoutAI: 36, average: 32 },
  { age: 75, withAI: 84, withoutAI: 28, average: 26 },
  { age: 80, withAI: 81, withoutAI: 21, average: 20 },
  { age: 85, withAI: 77, withoutAI: 15, average: 15 },
  { age: 90, withAI: 73, withoutAI: 10, average: 10 },
  { age: 95, withAI: 68, withoutAI: 6, average: 6 },
  { age: 100, withAI: 63, withoutAI: 3, average: 3 },
  { age: 105, withAI: 57, withoutAI: 1, average: 1 },
  { age: 110, withAI: 50, withoutAI: 0, average: 0 },
  { age: 115, withAI: 42, withoutAI: 0, average: 0 },
  { age: 120, withAI: 35, withoutAI: 0, average: 0 },
];

export default function LifespanChart() {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-900 dark:text-purple-100 font-medium mb-4">
            🔬 Proyección Conceptual
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            La Visión: Vivir hasta 120+ Años
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Con Plenitud y Calidad de Vida
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Basado en investigaciones sobre longevidad: no se trata solo de vivir más años, sino de vivir esos años con
            <span className="font-semibold text-purple-600 dark:text-purple-400"> energía, vitalidad y salud</span>.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            * Proyección basada en estudios de longevidad y hábitos saludables - Busca validación científica con socios médicos
          </p>
        </div>

        {/* Main Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl mb-12">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Proyección de Calidad de Vida
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Compara cómo tu calidad de vida puede mantenerse alta con hábitos optimizados por IA
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
              <XAxis
                dataKey="age"
                stroke="#666"
                label={{ value: 'Edad (años)', position: 'insideBottom', offset: -5 }}
              />
              <YAxis
                stroke="#666"
                label={{ value: 'Calidad de Vida (%)', angle: -90, position: 'insideLeft' }}
              />
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
              <Legend
                wrapperStyle={{ paddingTop: '20px' }}
                iconType="line"
              />
              <ReferenceLine y={50} stroke="#666" strokeDasharray="3 3" />

              <Area
                type="monotone"
                dataKey="average"
                stroke="#94a3b8"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorAverage)"
                name="Promedio Población"
              />
              <Area
                type="monotone"
                dataKey="withoutAI"
                stroke="#ef4444"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorWithoutAI)"
                name="Sin Optimización"
              />
              <Area
                type="monotone"
                dataKey="withAI"
                stroke="#8b5cf6"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorWithAI)"
                name="Con IA Personalizada ⭐"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Key Insights */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              El Objetivo: 120 Años Activos
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Con hábitos optimizados por IA, puedes mantener una calidad de vida superior al 80% hasta los 80 años,
              y seguir activo y saludable hasta los 120+.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <span className="w-3 h-3 rounded-full bg-purple-500"></span>
                <span className="text-gray-700 dark:text-gray-300">A los 60: 91% de calidad de vida (vs 52% promedio)</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-3 h-3 rounded-full bg-purple-500"></span>
                <span className="text-gray-700 dark:text-gray-300">A los 80: 81% de calidad de vida (vs 20% promedio)</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-3 h-3 rounded-full bg-purple-500"></span>
                <span className="text-gray-700 dark:text-gray-300">A los 100: 63% de calidad de vida (activo y vital)</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-8 text-white shadow-lg">
            <div className="text-5xl mb-4">🧬</div>
            <h3 className="text-2xl font-bold mb-3">
              Cómo lo Logramos
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>Planes de nutrición basados en tus datos médicos reales</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>Ejercicio personalizado que evoluciona con tu edad</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>Optimización de sueño, estrés y energía mental</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>Ajustes diarios con IA basados en tus métricas</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>Prevención proactiva de enfermedades crónicas</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Age Milestones */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Tu Vida a lo Largo de las Décadas
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">30-50</div>
              <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Peak Performance</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Construyendo hábitos para toda la vida</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">50-70</div>
              <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Mantenimiento Activo</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Energía y vitalidad sostenidas</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">70-90</div>
              <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Vida Plena</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Disfrutando con salud y movilidad</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">90-120+</div>
              <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Longevidad Activa</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Superando límites con IA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
