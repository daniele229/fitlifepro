'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/custom/navbar';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, TrendingDown, Target, Calendar, Award, Flame } from 'lucide-react';
import { UserProfile } from '@/lib/types';
import { estimateTimeToGoal } from '@/lib/fitness-calculator';

export default function ProgressoPage() {
  const router = useRouter();
  const [profile, setProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    const savedProfile = localStorage.getItem('userProfile');
    if (!savedProfile) {
      router.push('/quiz');
      return;
    }
    setProfile(JSON.parse(savedProfile));
  }, [router]);

  if (!profile) {
    return null;
  }

  const goalLabels = {
    lose: 'Perder Peso',
    maintain: 'Manter Peso',
    gain: 'Ganhar Massa',
  };

  const goalIcons = {
    lose: TrendingDown,
    maintain: Target,
    gain: TrendingUp,
  };

  const GoalIcon = goalIcons[profile.goal];

  const weeksToGoal = profile.targetWeight
    ? estimateTimeToGoal(profile.weight, profile.targetWeight, profile.goal)
    : 0;

  const activityLabels = {
    sedentary: 'Sedentário',
    light: 'Levemente Ativo',
    moderate: 'Moderadamente Ativo',
    active: 'Muito Ativo',
    'very-active': 'Extremamente Ativo',
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20 md:pb-8 md:pt-20">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Seu Progresso
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Acompanhe sua jornada fitness
          </p>
        </div>

        {/* Perfil do Usuário */}
        <Card className="p-6 mb-6 bg-gradient-to-br from-[#0072CE] to-[#0062B8] text-white">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold mb-1">{profile.name}</h2>
              <p className="text-sm opacity-90">
                {profile.age} anos • {profile.gender === 'male' ? 'Masculino' : 'Feminino'}
              </p>
            </div>
            <div className="bg-white/20 p-3 rounded-full">
              <GoalIcon className="w-6 h-6" />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div>
              <p className="text-sm opacity-90 mb-1">Peso Atual</p>
              <p className="text-2xl font-bold">{profile.weight} kg</p>
            </div>
            <div>
              <p className="text-sm opacity-90 mb-1">Altura</p>
              <p className="text-2xl font-bold">{profile.height} cm</p>
            </div>
          </div>
        </Card>

        {/* Objetivo */}
        <Card className="p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full">
              <Target className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Objetivo: {goalLabels[profile.goal]}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {activityLabels[profile.activityLevel]}
              </p>
            </div>
          </div>

          {profile.targetWeight && (
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Peso Atual</span>
                <span className="font-medium text-gray-900 dark:text-white">{profile.weight} kg</span>
              </div>
              <Progress
                value={
                  profile.goal === 'lose'
                    ? ((profile.weight - profile.targetWeight) / (profile.weight - profile.targetWeight)) * 100
                    : ((profile.targetWeight - profile.weight) / (profile.targetWeight - profile.weight)) * 100
                }
                className="h-2"
              />
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Meta</span>
                <span className="font-medium text-[#0072CE]">{profile.targetWeight} kg</span>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-5 h-5 text-[#0072CE]" />
                  <span className="font-medium text-gray-900 dark:text-white">
                    Tempo Estimado
                  </span>
                </div>
                <p className="text-2xl font-bold text-[#0072CE]">
                  {weeksToGoal} semanas
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Para atingir {profile.targetWeight} kg
                </p>
              </div>
            </div>
          )}
        </Card>

        {/* Plano Nutricional */}
        <Card className="p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-orange-100 dark:bg-orange-900 p-3 rounded-full">
              <Flame className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Plano Nutricional Diário
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-[#0072CE] to-[#0062B8] p-4 rounded-lg text-white text-center">
              <p className="text-3xl font-bold mb-1">{profile.dailyCalories}</p>
              <p className="text-sm opacity-90">Calorias</p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
              <p className="text-3xl font-bold text-blue-600 mb-1">{profile.protein}g</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Proteínas</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
              <p className="text-3xl font-bold text-green-600 mb-1">{profile.carbs}g</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Carboidratos</p>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg text-center">
              <p className="text-3xl font-bold text-orange-600 mb-1">{profile.fats}g</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Gorduras</p>
            </div>
          </div>
        </Card>

        {/* Dicas Personalizadas */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
              <Award className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Dicas para Seu Objetivo
            </h3>
          </div>

          <div className="space-y-3">
            {profile.goal === 'lose' && (
              <>
                <div className="flex gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <span className="text-[#0072CE]">💧</span>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Beba pelo menos 2 litros de água por dia para acelerar o metabolismo
                  </p>
                </div>
                <div className="flex gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <span className="text-[#0072CE]">🥗</span>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Priorize proteínas magras e vegetais para manter a saciedade
                  </p>
                </div>
                <div className="flex gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <span className="text-[#0072CE]">🏃</span>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Combine dieta com exercícios aeróbicos 3-4x por semana
                  </p>
                </div>
              </>
            )}

            {profile.goal === 'maintain' && (
              <>
                <div className="flex gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <span className="text-[#0072CE]">⚖️</span>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Mantenha uma rotina consistente de alimentação e exercícios
                  </p>
                </div>
                <div className="flex gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <span className="text-[#0072CE]">🥑</span>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Foque em alimentos nutritivos e equilibrados
                  </p>
                </div>
                <div className="flex gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <span className="text-[#0072CE]">📊</span>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Monitore seu peso semanalmente para ajustes finos
                  </p>
                </div>
              </>
            )}

            {profile.goal === 'gain' && (
              <>
                <div className="flex gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <span className="text-[#0072CE]">🍗</span>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Consuma proteínas de alta qualidade em todas as refeições
                  </p>
                </div>
                <div className="flex gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <span className="text-[#0072CE]">🍚</span>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Carboidratos complexos são essenciais para energia e crescimento
                  </p>
                </div>
                <div className="flex gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <span className="text-[#0072CE]">💪</span>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Treine com pesos 4-5x por semana para maximizar ganhos
                  </p>
                </div>
              </>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
