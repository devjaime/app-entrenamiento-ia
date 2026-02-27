// Dashboard de Bienestar - Página principal
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { currentUser, generateMockEntries, calculateWeeklyStats, DailyEntry, UserProfile } from "@/lib/mock-data";
import { MetricCard, DayFeedCard, StatsSummary } from "@/components/dashboard/Metrics";

export default function Dashboard() {
  const [entries, setEntries] = useState<DailyEntry[]>([]);
  const [stats, setStats] = useState<ReturnType<typeof calculateWeeklyStats> | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simular carga de datos
    const loadData = async () => {
      await new Promise(resolve => setTimeout(resolve, 500)); // Fake loading
      const mockEntries = generateMockEntries();
      setEntries(mockEntries);
      setStats(calculateWeeklyStats(mockEntries));
      setLoading(false);
    };
    
    loadData();
  }, []);
  
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-500">Cargando tus datos...</p>
        </div>
      </div>
    );
  }
  
  const today = entries[entries.length - 1];
  const user = currentUser;
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={user.avatar} 
              alt={user.name} 
              className="w-12 h-12 rounded-full border-2 border-white"
            />
            <div>
              <h1 className="text-xl font-bold">{user.name}'s Wellness</h1>
              <p className="text-sm opacity-90">Tu tracker diario de bienestar</p>
            </div>
          </div>
          <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm">
            + Nueva entrada
          </button>
        </div>
      </header>
      
      <main className="max-w-2xl mx-auto p-4 space-y-6">
        {/* Métricas del día de hoy */}
        <section>
          <h2 className="text-lg font-bold mb-3 text-gray-800 dark:text-white">📅 Hoy</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <MetricCard 
              title="Sueño"
              value={today.sleepHours}
              unit="h"
              icon="😴"
              color="blue"
              subtitle={`Calidad: ${today.sleepQuality}/5`}
            />
            <MetricCard 
              title="Pasos"
              value={today.steps.toLocaleString()}
              icon="🚶"
              color="green"
              trend={today.steps > 5000 ? "up" : "down"}
            />
            <MetricCard 
              title="Ejercicio"
              value={today.exerciseMinutes}
              unit="min"
              icon="💪"
              color="purple"
              trend={today.exerciseMinutes > 30 ? "up" : "stable"}
            />
            <MetricCard 
              title="Estudio"
              value={today.studyHours}
              unit="h"
              icon="📚"
              color="orange"
            />
          </div>
        </section>
        
        {/* Estado anímico del día */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md">
          <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">❤️ Estado del Día</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-3xl mb-2">😊</div>
              <div className="text-3xl font-bold text-blue-600">{today.mood}</div>
              <div className="text-sm text-gray-500">Ánimo</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">⚡</div>
              <div className="text-3xl font-bold text-yellow-600">{today.energyLevel}</div>
              <div className="text-sm text-gray-500">Energía</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🎯</div>
              <div className="text-3xl font-bold text-purple-600">{today.motivation}</div>
              <div className="text-sm text-gray-500">Motivación</div>
            </div>
          </div>
        </section>
        
        {/* Resumen semanal */}
        {stats && <StatsSummary stats={stats} user={user} />}
        
        {/* Feed tipo red social - Últimos días */}
        <section>
          <h2 className="text-lg font-bold mb-3 text-gray-800 dark:text-white">📝 Historial Reciente</h2>
          {[...entries].reverse().map((entry, index) => (
            <DayFeedCard key={entry.id} entry={entry} user={user} />
          ))}
        </section>
        
        {/* Footer info */}
        <div className="text-center py-8 text-gray-400 text-sm">
          <p>🚀 Próximamente: Integración con Apple Health, Google Fit</p>
          <p className="mt-2">💡 Versión con datos mock - Evolucionando hacia datos reales</p>
        </div>
      </main>
    </div>
  );
}