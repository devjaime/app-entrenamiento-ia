'use client';

import { useState } from 'react';

type Screen = 'onboarding' | 'dashboard' | 'tracking' | 'ai';

export default function Demo() {
  const [activeScreen, setActiveScreen] = useState<Screen>('dashboard');

  return (
    <section className="py-24 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-orange-100 dark:bg-orange-900/30 rounded-full text-orange-900 dark:text-orange-100 font-medium mb-4">
            🚧 Concepto de Producto - MVP en Desarrollo
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Así Funcionaría la App
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Visualización conceptual de la experiencia de usuario.
            <span className="block mt-2 text-base text-gray-500">
              Este es un proyecto piloto que busca validación científica y socios para su desarrollo.
            </span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Phone Mockup */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-[340px] h-[680px] bg-gray-900 rounded-[3rem] shadow-2xl p-4 relative">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-10"></div>

                {/* Screen */}
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {activeScreen === 'onboarding' && (
                    <div className="p-6 h-full flex flex-col">
                      <div className="text-sm text-gray-500 mb-2">Paso 2 de 4</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Datos Médicos</h3>
                      <div className="space-y-4 flex-1">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Glucosa (mg/dL)</label>
                          <input type="number" placeholder="95" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Colesterol Total</label>
                          <input type="number" placeholder="180" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Grasa Corporal (%)</label>
                          <input type="number" placeholder="22" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <div className="text-xs text-blue-900 font-medium">💡 Tip</div>
                          <div className="text-xs text-blue-700 mt-1">
                            Estos datos permitirán a la IA crear un plan totalmente personalizado
                          </div>
                        </div>
                      </div>
                      <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold mt-4">
                        Continuar
                      </button>
                    </div>
                  )}

                  {activeScreen === 'dashboard' && (
                    <div className="h-full bg-gradient-to-br from-blue-50 to-indigo-50">
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-6">
                          <div>
                            <div className="text-sm text-gray-600">Hola, Usuario</div>
                            <div className="text-2xl font-bold text-gray-900">Dashboard</div>
                          </div>
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full"></div>
                        </div>

                        {/* Daily Goals */}
                        <div className="bg-white rounded-2xl p-4 shadow-lg mb-4">
                          <div className="text-sm font-semibold text-gray-900 mb-3">Objetivos de Hoy</div>
                          <div className="space-y-3">
                            <div>
                              <div className="flex justify-between text-xs mb-1">
                                <span className="text-gray-600">Pasos</span>
                                <span className="text-gray-900 font-medium">7,245 / 10,000</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-blue-500 h-2 rounded-full" style={{width: '72%'}}></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-xs mb-1">
                                <span className="text-gray-600">Calorías</span>
                                <span className="text-gray-900 font-medium">1,450 / 2,000</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-green-500 h-2 rounded-full" style={{width: '73%'}}></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-xs mb-1">
                                <span className="text-gray-600">Proteínas</span>
                                <span className="text-gray-900 font-medium">85g / 120g</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-purple-500 h-2 rounded-full" style={{width: '71%'}}></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Today's Plan */}
                        <div className="bg-white rounded-2xl p-4 shadow-lg mb-4">
                          <div className="text-sm font-semibold text-gray-900 mb-3">Plan del Día</div>
                          <div className="space-y-2">
                            <div className="flex items-center gap-3 p-2 bg-green-50 rounded-lg">
                              <div className="text-xl">✓</div>
                              <div className="flex-1 text-xs text-gray-700">Desayuno: Avena + Proteína</div>
                            </div>
                            <div className="flex items-center gap-3 p-2 bg-blue-50 rounded-lg">
                              <div className="text-xl">⏰</div>
                              <div className="flex-1 text-xs text-gray-700">Cardio 30 min (13:00)</div>
                            </div>
                            <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                              <div className="text-xl">○</div>
                              <div className="flex-1 text-xs text-gray-700">Fuerza: Tren superior</div>
                            </div>
                          </div>
                        </div>

                        {/* AI Suggestion */}
                        <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-4 shadow-lg text-white">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="text-xl">🤖</div>
                            <div className="text-xs font-semibold">Sugerencia IA</div>
                          </div>
                          <div className="text-xs leading-relaxed">
                            "Basándome en tu nivel de energía de hoy (8/10), te sugiero aumentar la intensidad del cardio en 10%"
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeScreen === 'tracking' && (
                    <div className="p-6 h-full">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Tracking Diario</h3>
                      <div className="space-y-4">
                        <div className="bg-blue-50 rounded-2xl p-4">
                          <div className="font-semibold text-gray-900 mb-3">Actividad Física</div>
                          <div className="space-y-2">
                            <input type="number" placeholder="Pasos hoy" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
                            <input type="number" placeholder="Minutos cardio" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
                          </div>
                        </div>

                        <div className="bg-green-50 rounded-2xl p-4">
                          <div className="font-semibold text-gray-900 mb-3">Alimentación</div>
                          <textarea placeholder="¿Qué tienes para comer hoy?" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" rows={3}></textarea>
                          <button className="mt-2 w-full bg-green-600 text-white py-2 rounded-lg text-sm font-medium">
                            Pedir Sugerencias IA
                          </button>
                        </div>

                        <div className="bg-purple-50 rounded-2xl p-4">
                          <div className="font-semibold text-gray-900 mb-3">Bienestar</div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-700">Energía Mental</span>
                              <span className="text-sm font-bold text-purple-600">7/10</span>
                            </div>
                            <input type="range" min="1" max="10" defaultValue="7" className="w-full" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeScreen === 'ai' && (
                    <div className="h-full bg-gradient-to-br from-purple-50 to-pink-50 p-6">
                      <div className="flex items-center gap-2 mb-6">
                        <div className="text-3xl">🤖</div>
                        <div>
                          <div className="text-xs text-gray-600">Asistente IA</div>
                          <div className="text-xl font-bold text-gray-900">AI Health Coach</div>
                        </div>
                      </div>

                      <div className="space-y-4 mb-4">
                        <div className="bg-white rounded-2xl p-4 shadow">
                          <div className="text-xs text-gray-500 mb-1">Tú</div>
                          <div className="text-sm text-gray-900">
                            Tengo pollo, brócoli y arroz integral. ¿Qué me recomiendas?
                          </div>
                        </div>

                        <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-4 shadow text-white">
                          <div className="text-xs text-purple-100 mb-1">IA</div>
                          <div className="text-sm leading-relaxed">
                            Perfecto! Basándome en tu plan (120g proteína, bajo en grasa), te sugiero:
                            <br/><br/>
                            🍗 150g pollo a la plancha<br/>
                            🥦 200g brócoli al vapor<br/>
                            🍚 100g arroz integral<br/>
                            <br/>
                            Macros: 45g proteína, 50g carbos, 8g grasa<br/>
                            ✓ Cumple objetivos del día
                          </div>
                        </div>
                      </div>

                      <input
                        type="text"
                        placeholder="Pregunta algo..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-[3rem] blur-3xl opacity-20 -z-10"></div>
            </div>
          </div>

          {/* Screen Selector */}
          <div className="space-y-6">
            <button
              onClick={() => setActiveScreen('onboarding')}
              className={`w-full text-left p-6 rounded-2xl transition-all ${
                activeScreen === 'onboarding'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:shadow-lg'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">📋</div>
                <div>
                  <div className="font-bold text-lg mb-1">1. Cuestionario Inicial</div>
                  <div className={`text-sm ${activeScreen === 'onboarding' ? 'text-blue-100' : 'text-gray-600 dark:text-gray-400'}`}>
                    Datos personales, médicos y fotos de contextura para personalización total
                  </div>
                </div>
              </div>
            </button>

            <button
              onClick={() => setActiveScreen('dashboard')}
              className={`w-full text-left p-6 rounded-2xl transition-all ${
                activeScreen === 'dashboard'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:shadow-lg'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">📊</div>
                <div>
                  <div className="font-bold text-lg mb-1">2. Dashboard Personalizado</div>
                  <div className={`text-sm ${activeScreen === 'dashboard' ? 'text-blue-100' : 'text-gray-600 dark:text-gray-400'}`}>
                    Objetivos diarios, plan de entrenamiento y sugerencias de la IA
                  </div>
                </div>
              </div>
            </button>

            <button
              onClick={() => setActiveScreen('tracking')}
              className={`w-full text-left p-6 rounded-2xl transition-all ${
                activeScreen === 'tracking'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:shadow-lg'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">✍️</div>
                <div>
                  <div className="font-bold text-lg mb-1">3. Tracking Diario</div>
                  <div className={`text-sm ${activeScreen === 'tracking' ? 'text-blue-100' : 'text-gray-600 dark:text-gray-400'}`}>
                    Registra actividad, comidas y bienestar para ajustes automáticos
                  </div>
                </div>
              </div>
            </button>

            <button
              onClick={() => setActiveScreen('ai')}
              className={`w-full text-left p-6 rounded-2xl transition-all ${
                activeScreen === 'ai'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:shadow-lg'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">🤖</div>
                <div>
                  <div className="font-bold text-lg mb-1">4. Asistente IA 24/7</div>
                  <div className={`text-sm ${activeScreen === 'ai' ? 'text-blue-100' : 'text-gray-600 dark:text-gray-400'}`}>
                    Pregunta lo que quieras: recetas, consejos, ajustes al plan
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
