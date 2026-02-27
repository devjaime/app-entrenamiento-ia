// Componentes UI para el dashboard de bienestar
"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// ============ METRIC CARD ============
interface MetricCardProps {
  title: string;
  value: string | number;
  unit?: string;
  icon: string;
  color: string;
  trend?: "up" | "down" | "stable";
  subtitle?: string;
}

export function MetricCard({ title, value, unit, icon, color, trend, subtitle }: MetricCardProps) {
  const colors: Record<string, string> = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    purple: "bg-purple-500",
    orange: "bg-orange-500",
    pink: "bg-pink-500",
    yellow: "bg-yellow-500"
  };
  
  const trendIcons = {
    up: "↑",
    down: "↓",
    stable: "→"
  };
  
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md border border-gray-100 dark:border-gray-700"
    >
      <div className="flex items-start justify-between mb-2">
        <span className="text-2xl">{icon}</span>
        <span className={`text-xs px-2 py-1 rounded-full ${
          trend === "up" ? "bg-green-100 text-green-700" :
          trend === "down" ? "bg-red-100 text-red-700" :
          "bg-gray-100 text-gray-600"
        }`}>
          {trend && trendIcons[trend]}
        </span>
      </div>
      <div className="text-2xl font-bold text-gray-800 dark:text-white">
        {value} <span className="text-sm font-normal text-gray-500">{unit}</span>
      </div>
      <div className="text-sm text-gray-500 dark:text-gray-400">{title}</div>
      {subtitle && <div className="text-xs text-gray-400 mt-1">{subtitle}</div>}
    </motion.div>
  );
}

// ============ PROGRESS BAR ============
interface ProgressBarProps {
  label: string;
  value: number;
  max: number;
  color?: string;
}

export function ProgressBar({ label, value, max, color = "bg-blue-500" }: ProgressBarProps) {
  const percentage = Math.min((value / max) * 100, 100);
  
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span className="text-gray-600 dark:text-gray-300">{label}</span>
        <span className="font-medium">{value} / {max}</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`h-full ${color} rounded-full`}
        />
      </div>
    </div>
  );
}

// ============ MOOD SLIDER ============
interface MoodSliderProps {
  label: string;
  value: number;
  icon: string;
  onChange?: (value: number) => void;
  readonly?: boolean;
}

export function MoodSlider({ label, value, icon, onChange, readonly = false }: MoodSliderProps) {
  const colors = [
    "bg-red-500", // 1
    "bg-orange-500",
    "bg-yellow-500",
    "bg-lime-500", // 4
    "bg-green-500" // 5
  ];
  
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-600 dark:text-gray-300">{icon} {label}</span>
        <span className="font-bold text-lg">{value}/10</span>
      </div>
      <input
        type="range"
        min="1"
        max="10"
        value={value}
        onChange={(e) => onChange?.(parseInt(e.target.value))}
        disabled={readonly}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
      />
    </div>
  );
}

// ============ DAY FEED CARD ============
import { DailyEntry, UserProfile } from "@/lib/mock-data";

interface DayFeedCardProps {
  entry: DailyEntry;
  user: UserProfile;
}

export function DayFeedCard({ entry, user }: DayFeedCardProps) {
  const date = new Date(entry.date);
  const dayName = date.toLocaleDateString('es-CL', { weekday: 'long' });
  const fullDate = date.toLocaleDateString('es-CL', { day: 'numeric', month: 'long' });
  
  const getMoodEmoji = (mood: number) => {
    if (mood >= 8) return "😊";
    if (mood >= 6) return "🙂";
    if (mood >= 4) return "😐";
    if (mood >= 2) return "😕";
    return "😢";
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden mb-6"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
        <div className="flex items-center gap-3">
          <img 
            src={user.avatar} 
            alt={user.name} 
            className="w-10 h-10 rounded-full border-2 border-white"
          />
          <div>
            <div className="font-bold">{user.name}</div>
            <div className="text-sm opacity-90 capitalize">{dayName} - {fullDate}</div>
          </div>
          <div className="ml-auto text-3xl">
            {getMoodEmoji(entry.mood)}
          </div>
        </div>
      </div>
      
      {/* Métricas principales */}
      <div className="p-4 grid grid-cols-2 gap-4">
        {/* Sueño */}
        <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-3">
          <div className="text-2xl mb-1">😴</div>
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{entry.sleepHours}h</div>
          <div className="text-xs text-gray-500">Sueño ({entry.sleepQuality}/5)</div>
        </div>
        
        {/* Ejercicio */}
        <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-3">
          <div className="text-2xl mb-1">💪</div>
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">{entry.exerciseMinutes}m</div>
          <div className="text-xs text-gray-500">Ejercicio</div>
        </div>
        
        {/* Pasos */}
        <div className="bg-purple-50 dark:bg-purple-900/30 rounded-lg p-3">
          <div className="text-2xl mb-1">🚶</div>
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{entry.steps.toLocaleString()}</div>
          <div className="text-xs text-gray-500">Pasos</div>
        </div>
        
        {/* Estudio */}
        <div className="bg-orange-50 dark:bg-orange-900/30 rounded-lg p-3">
          <div className="text-2xl mb-1">📚</div>
          <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">{entry.studyHours}h</div>
          <div className="text-xs text-gray-500">Estudio</div>
        </div>
      </div>
      
      {/* Estado anímico */}
      <div className="px-4 pb-4">
        <div className="grid grid-cols-3 gap-2 mb-3">
          <div className="text-center">
            <div className="text-lg">😊</div>
            <div className="text-xs text-gray-500">Ánimo</div>
            <div className="font-bold">{entry.mood}/10</div>
          </div>
          <div className="text-center">
            <div className="text-lg">⚡</div>
            <div className="text-xs text-gray-500">Energía</div>
            <div className="font-bold">{entry.energyLevel}/10</div>
          </div>
          <div className="text-center">
            <div className="text-lg">🎯</div>
            <div className="text-xs text-gray-500">Motivación</div>
            <div className="font-bold">{entry.motivation}/10</div>
          </div>
        </div>
        
        {/* Notas */}
        {entry.notes && (
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 mb-3">
            <p className="text-sm text-gray-700 dark:text-gray-300">{entry.notes}</p>
          </div>
        )}
        
        {/* Tags */}
        {entry.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {entry.tags.map((tag, i) => (
              <span key={i} className="text-xs bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

// ============ STATS SUMMARY ============
interface StatsSummaryProps {
  stats: {
    avgSleep: string;
    avgMood: string;
    avgEnergy: string;
    avgMotivation: string;
    totalSteps: number;
    totalExercise: number;
    totalStudy: number;
    avgWater: string;
    daysTracked: number;
  };
  user: UserProfile;
}

export function StatsSummary({ stats, user }: StatsSummaryProps) {
  const weightDiff = user.weight - user.goalWeight;
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg mb-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">📊 Resumen Semanal</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="text-center">
          <div className="text-3xl mb-1">😴</div>
          <div className="text-2xl font-bold">{stats.avgSleep}h</div>
          <div className="text-xs text-gray-500">Prom. sueño</div>
        </div>
        <div className="text-center">
          <div className="text-3xl mb-1">🚶</div>
          <div className="text-2xl font-bold">{(stats.totalSteps / 1000).toFixed(1)}k</div>
          <div className="text-xs text-gray-500">Pasos total</div>
        </div>
        <div className="text-center">
          <div className="text-3xl mb-1">💪</div>
          <div className="text-2xl font-bold">{Math.round(stats.totalExercise / 60 * 10) / 10}h</div>
          <div className="text-xs text-gray-500">Ejercicio</div>
        </div>
        <div className="text-center">
          <div className="text-3xl mb-1">📚</div>
          <div className="text-2xl font-bold">{stats.totalStudy}h</div>
          <div className="text-xs text-gray-500">Estudio</div>
        </div>
      </div>
      
      {/* Progreso de peso */}
      <div className="border-t pt-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-600 dark:text-gray-300">Peso actual</span>
          <span className="font-bold">{user.weight} kg</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-600 dark:text-gray-300">Meta</span>
          <span className="font-bold">{user.goalWeight} kg</span>
        </div>
        <ProgressBar 
          label="Progreso hacia meta" 
          value={user.weight} 
          max={user.weight + weightDiff} 
          color={weightDiff > 0 ? "bg-orange-500" : "bg-green-500"}
        />
        <div className="text-center mt-2 text-sm text-gray-500">
          {weightDiff > 0 ? `Faltan ${weightDiff.toFixed(1)} kg` : "🎉 ¡Meta alcanzada!"}
        </div>
      </div>
    </div>
  );
}