// Funções para cálculo de calorias e macronutrientes

import { UserProfile } from './types';

// Calcula Taxa Metabólica Basal (TMB) usando fórmula de Mifflin-St Jeor
export function calculateBMR(weight: number, height: number, age: number, gender: 'male' | 'female'): number {
  if (gender === 'male') {
    return 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    return 10 * weight + 6.25 * height - 5 * age - 161;
  }
}

// Multiplica TMB pelo nível de atividade
export function calculateTDEE(bmr: number, activityLevel: string): number {
  const multipliers: Record<string, number> = {
    'sedentary': 1.2,
    'light': 1.375,
    'moderate': 1.55,
    'active': 1.725,
    'very-active': 1.9
  };
  return bmr * (multipliers[activityLevel] || 1.2);
}

// Ajusta calorias baseado no objetivo
export function adjustCaloriesForGoal(tdee: number, goal: 'lose' | 'maintain' | 'gain'): number {
  switch (goal) {
    case 'lose':
      return Math.round(tdee - 500); // Déficit de 500 cal para perder ~0.5kg/semana
    case 'gain':
      return Math.round(tdee + 300); // Superávit de 300 cal para ganhar massa
    case 'maintain':
    default:
      return Math.round(tdee);
  }
}

// Calcula macronutrientes baseado nas calorias e objetivo
export function calculateMacros(calories: number, goal: 'lose' | 'maintain' | 'gain') {
  let proteinPercent = 0.30;
  let carbsPercent = 0.40;
  let fatsPercent = 0.30;

  if (goal === 'lose') {
    proteinPercent = 0.35; // Mais proteína para preservar massa muscular
    carbsPercent = 0.35;
    fatsPercent = 0.30;
  } else if (goal === 'gain') {
    proteinPercent = 0.30;
    carbsPercent = 0.45; // Mais carboidratos para energia
    fatsPercent = 0.25;
  }

  return {
    protein: Math.round((calories * proteinPercent) / 4), // 4 cal por grama
    carbs: Math.round((calories * carbsPercent) / 4),
    fats: Math.round((calories * fatsPercent) / 9) // 9 cal por grama
  };
}

// Calcula perfil completo do usuário
export function calculateUserProfile(data: {
  name: string;
  age: number;
  gender: 'male' | 'female';
  weight: number;
  height: number;
  activityLevel: 'sedentary' | 'light' | 'moderate' | 'active' | 'very-active';
  goal: 'lose' | 'maintain' | 'gain';
  targetWeight?: number;
}): UserProfile {
  const bmr = calculateBMR(data.weight, data.height, data.age, data.gender);
  const tdee = calculateTDEE(bmr, data.activityLevel);
  const dailyCalories = adjustCaloriesForGoal(tdee, data.goal);
  const macros = calculateMacros(dailyCalories, data.goal);

  return {
    ...data,
    dailyCalories,
    ...macros
  };
}

// Estima tempo para atingir objetivo (em semanas)
export function estimateTimeToGoal(currentWeight: number, targetWeight: number, goal: 'lose' | 'gain'): number {
  const weightDiff = Math.abs(targetWeight - currentWeight);
  const weeklyChange = goal === 'lose' ? 0.5 : 0.3; // kg por semana
  return Math.ceil(weightDiff / weeklyChange);
}

// Calcula percentual de progresso diário
export function calculateDailyProgress(consumed: number, target: number): number {
  return Math.round((consumed / target) * 100);
}
