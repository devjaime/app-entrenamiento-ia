// Datos mock para el tracker de bienestar tipo red social
//陆续 evolving hacia datos reales desde Apple Health, Google Fit, etc.

export interface UserProfile {
  id: string;
  name: string;
  avatar: string;
  height: number; // cm
  weight: number; // kg
  goalWeight: number;
  birthDate: string;
}

export interface DailyEntry {
  id: string;
  date: string;
  userId: string;
  
  // Sueño
  sleepHours: number;
  sleepQuality: 1 | 2 | 3 | 4 | 5; // 1=malo, 5=excelente
  
  // Actividad
  sedentaryHours: number;
  walkingMinutes: number;
  exerciseMinutes: number;
  steps: number;
  
  // Estudio/Trabajo
  studyHours: number;
  
  // Alimentación
  meals: {
    breakfast: boolean;
    lunch: boolean;
    dinner: boolean;
    snacks: number;
    waterLiters: number;
    calories?: number;
  };
  
  // Estado anímico/motivacional (1-10)
  mood: number;
  energyLevel: number;
  motivation: number;
  
  // Progreso físico
  weight?: number;
  
  // Notas
  notes?: string;
  
  // Tags
  tags: string[];
}

// Tu perfil - ajusta según tus datos reales
export const currentUser: UserProfile = {
  id: "user-1",
  name: "Jaime",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jaime",
  height: 175,
  weight: 78,
  goalWeight: 75,
  birthDate: "1990-01-15"
};

// Generar entradas de los últimos 7 días con datos mock realistas
export function generateMockEntries(): DailyEntry[] {
  const entries: DailyEntry[] = [];
  const today = new Date();
  
  const baseData = {
    sleepHours: [6.5, 7, 7.5, 6, 8, 7, 7.2],
    sleepQuality: [3, 4, 4, 2, 5, 4, 4] as const,
    sedentaryHours: [8, 9, 7, 10, 8, 9, 8.5],
    walkingMinutes: [30, 45, 20, 60, 35, 40, 25],
    exerciseMinutes: [45, 0, 60, 30, 90, 45, 0],
    steps: [4500, 6200, 3800, 8000, 5200, 5800, 4000],
    studyHours: [2, 4, 3, 5, 4, 3, 2],
    mood: [7, 8, 6, 9, 7, 8, 7],
    energyLevel: [6, 8, 5, 9, 7, 8, 6],
    motivation: [7, 8, 6, 9, 8, 7, 7]
  };
  
  const mealsBase = [
    { breakfast: true, lunch: true, dinner: true, snacks: 2, waterLiters: 2 },
    { breakfast: true, lunch: true, dinner: true, snacks: 3, waterLiters: 1.8 },
    { breakfast: false, lunch: true, dinner: true, snacks: 1, waterLiters: 2.2 },
    { breakfast: true, lunch: true, dinner: true, snacks: 2, waterLiters: 2.5 },
    { breakfast: true, lunch: true, dinner: true, snacks: 1, waterLiters: 2 },
    { breakfast: true, lunch: true, dinner: true, snacks: 2, waterLiters: 1.9 },
    { breakfast: true, lunch: true, dinner: false, snacks: 3, waterLiters: 1.5 }
  ];
  
  const tags = [
    ["💪 Gym", "📚 Estudio"],
    ["🚶 Caminata"],
    ["🎯 Meta"],
    ["🥗 Saludable"],
    ["⚡ Productivo"],
    ["😴 Descanso"],
    ["🔥 Intensivo"]
  ];
  
  const notes = [
    "Buen día de entrenamiento. Sentí mucha energía.",
    "Dormí mal, pero compensé con una caminata larga.",
    "Día productivo en el estudio de Go.",
    "Nueva marca personal en press de banca!",
    "Me siento muy motivado con el proyecto.",
    "Necesito descansar más horas.",
    "Media semana fuerte, manteniendo el ritmo."
  ];
  
  for (let i = 6; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    const dayIndex = 6 - i;
    
    entries.push({
      id: `entry-${i}`,
      date: date.toISOString().split('T')[0],
      userId: "user-1",
      
      sleepHours: baseData.sleepHours[dayIndex],
      sleepQuality: baseData.sleepQuality[dayIndex],
      sedentaryHours: baseData.sedentaryHours[dayIndex],
      walkingMinutes: baseData.walkingMinutes[dayIndex],
      exerciseMinutes: baseData.exerciseMinutes[dayIndex],
      steps: baseData.steps[dayIndex],
      studyHours: baseData.studyHours[dayIndex],
      
      meals: mealsBase[dayIndex],
      
      mood: baseData.mood[dayIndex],
      energyLevel: baseData.energyLevel[dayIndex],
      motivation: baseData.motivation[dayIndex],
      
      weight: 78 - (i * 0.1) + Math.random() * 0.3,
      
      notes: notes[dayIndex],
      tags: tags[dayIndex]
    });
  }
  
  return entries;
}

// Función para calcular promedio de la semana
export function calculateWeeklyStats(entries: DailyEntry[]) {
  const avgSleep = entries.reduce((a, e) => a + e.sleepHours, 0) / entries.length;
  const avgMood = entries.reduce((a, e) => a + e.mood, 0) / entries.length;
  const avgEnergy = entries.reduce((a, e) => a + e.energyLevel, 0) / entries.length;
  const avgMotivation = entries.reduce((a, e) => a + e.motivation, 0) / entries.length;
  const totalSteps = entries.reduce((a, e) => a + e.steps, 0);
  const totalExercise = entries.reduce((a, e) => a + e.exerciseMinutes, 0);
  const totalStudy = entries.reduce((a, e) => a + e.studyHours, 0);
  const avgWater = entries.reduce((a, e) => a + e.meals.waterLiters, 0) / entries.length;
  
  return {
    avgSleep: avgSleep.toFixed(1),
    avgMood: avgMood.toFixed(1),
    avgEnergy: avgEnergy.toFixed(1),
    avgMotivation: avgMotivation.toFixed(1),
    totalSteps,
    totalExercise,
    totalStudy,
    avgWater: avgWater.toFixed(1),
    daysTracked: entries.length
  };
}