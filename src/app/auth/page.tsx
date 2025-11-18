'use client';

import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Apple, TrendingUp, Target, Activity, Utensils } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface QuizData {
  age: string;
  gender: string;
  weight: string;
  height: string;
  goal: string;
  activityLevel: string;
  dietPreference: string;
}

export default function AuthPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [quizData, setQuizData] = useState<QuizData | null>(null);
  const [analysis, setAnalysis] = useState<any>(null);

  useEffect(() => {
    // Carregar dados do quiz
    const storedQuizData = localStorage.getItem('quizData');
    if (storedQuizData) {
      const data = JSON.parse(storedQuizData);
      setQuizData(data);
      calculateAnalysis(data);
    } else {
      // Se não tem dados do quiz, redireciona para home
      router.push('/');
      return;
    }

    // Verificar se usuário já está logado
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (session) {
        // Salvar dados do quiz no banco antes de redirecionar
        if (storedQuizData) {
          await saveQuizDataToDatabase(session.user.id, JSON.parse(storedQuizData));
          localStorage.removeItem('quizData');
        }
        router.push('/dashboard');
      } else {
        setLoading(false);
      }
    });

    // Escutar mudanças de autenticação
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session) {
        // Salvar dados do quiz no banco
        if (storedQuizData) {
          await saveQuizDataToDatabase(session.user.id, JSON.parse(storedQuizData));
          localStorage.removeItem('quizData');
        }
        router.push('/dashboard');
      }
    });

    return () => subscription.unsubscribe();
  }, [router]);

  const calculateAnalysis = (data: QuizData) => {
    const weight = parseFloat(data.weight);
    const height = parseFloat(data.height) / 100; // converter para metros
    const age = parseInt(data.age);
    const isMale = data.gender === 'male';

    // Calcular IMC
    const bmi = weight / (height * height);

    // Calcular TMB (Taxa Metabólica Basal) usando fórmula de Harris-Benedict
    let bmr;
    if (isMale) {
      bmr = 88.362 + (13.397 * weight) + (4.799 * height * 100) - (5.677 * age);
    } else {
      bmr = 447.593 + (9.247 * weight) + (3.098 * height * 100) - (4.330 * age);
    }

    // Multiplicador de atividade
    const activityMultipliers: { [key: string]: number } = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      very_active: 1.9,
    };

    const tdee = bmr * activityMultipliers[data.activityLevel];

    // Ajustar calorias baseado no objetivo
    let targetCalories = tdee;
    let targetWeight = weight;

    if (data.goal === 'lose_weight') {
      targetCalories = tdee - 500; // Déficit de 500 calorias
      targetWeight = weight - 10; // Meta de perder 10kg
    } else if (data.goal === 'gain_muscle') {
      targetCalories = tdee + 300; // Superávit de 300 calorias
      targetWeight = weight + 5; // Meta de ganhar 5kg
    }

    // Distribuição de macros
    const protein = data.goal === 'gain_muscle' ? weight * 2 : weight * 1.6;
    const fats = (targetCalories * 0.25) / 9;
    const carbs = (targetCalories - (protein * 4) - (fats * 9)) / 4;

    setAnalysis({
      bmi: bmi.toFixed(1),
      bmiCategory: getBMICategory(bmi),
      bmr: Math.round(bmr),
      tdee: Math.round(tdee),
      targetCalories: Math.round(targetCalories),
      targetWeight: targetWeight.toFixed(1),
      protein: Math.round(protein),
      carbs: Math.round(carbs),
      fats: Math.round(fats),
      waterIntake: Math.round(weight * 35), // ml por kg
    });
  };

  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return 'Abaixo do peso';
    if (bmi < 25) return 'Peso normal';
    if (bmi < 30) return 'Sobrepeso';
    return 'Obesidade';
  };

  const saveQuizDataToDatabase = async (userId: string, data: QuizData) => {
    const weight = parseFloat(data.weight);
    const height = parseFloat(data.height) / 100;
    const bmi = weight / (height * height);
    
    let targetWeight = weight;
    if (data.goal === 'lose_weight') {
      targetWeight = weight - 10;
    } else if (data.goal === 'gain_muscle') {
      targetWeight = weight + 5;
    }

    // Salvar meta fitness
    await supabase.from('fitness_goals').insert([
      {
        user_id: userId,
        goal_type: data.goal,
        current_weight: weight,
        target_weight: targetWeight,
        daily_calories: analysis?.targetCalories || 2000,
      },
    ]);
  };

  const getGoalLabel = (goal: string) => {
    const labels: { [key: string]: string } = {
      lose_weight: 'Perder Peso',
      maintain: 'Manter Peso',
      gain_muscle: 'Ganhar Massa Muscular',
    };
    return labels[goal] || goal;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0072CE]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800 px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-[#0072CE] p-4 rounded-3xl shadow-2xl">
              <Apple className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Sua Análise Personalizada
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Baseado nas suas respostas, criamos um plano completo para você
          </p>
        </div>

        {/* Analysis Results */}
        {analysis && quizData && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Left Column - Analysis */}
            <div className="space-y-6">
              {/* IMC Card */}
              <Card className="p-6 bg-white dark:bg-gray-800">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Índice de Massa Corporal
                  </h3>
                  <Activity className="w-6 h-6 text-[#0072CE]" />
                </div>
                <div className="text-center py-4">
                  <div className="text-5xl font-bold text-[#0072CE] mb-2">
                    {analysis.bmi}
                  </div>
                  <div className="text-lg text-gray-600 dark:text-gray-400">
                    {analysis.bmiCategory}
                  </div>
                </div>
              </Card>

              {/* Goal Card */}
              <Card className="p-6 bg-white dark:bg-gray-800">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Seu Objetivo
                  </h3>
                  <Target className="w-6 h-6 text-[#0072CE]" />
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                      Meta
                    </p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      {getGoalLabel(quizData.goal)}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                        Peso Atual
                      </p>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">
                        {quizData.weight} kg
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                        Peso Meta
                      </p>
                      <p className="text-2xl font-bold text-[#0072CE]">
                        {analysis.targetWeight} kg
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Calories Card */}
              <Card className="p-6 bg-white dark:bg-gray-800">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Plano Calórico
                  </h3>
                  <Utensils className="w-6 h-6 text-[#0072CE]" />
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                      Calorias Diárias Recomendadas
                    </p>
                    <p className="text-3xl font-bold text-[#0072CE]">
                      {analysis.targetCalories} kcal
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="text-center">
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                        Proteína
                      </p>
                      <p className="text-xl font-bold text-gray-900 dark:text-white">
                        {analysis.protein}g
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                        Carboidratos
                      </p>
                      <p className="text-xl font-bold text-gray-900 dark:text-white">
                        {analysis.carbs}g
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                        Gorduras
                      </p>
                      <p className="text-xl font-bold text-gray-900 dark:text-white">
                        {analysis.fats}g
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Hydration Card */}
              <Card className="p-6 bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">Hidratação Diária</h3>
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div className="text-center py-2">
                  <div className="text-4xl font-bold mb-2">
                    {analysis.waterIntake} ml
                  </div>
                  <div className="text-sm opacity-90">
                    Aproximadamente {Math.round(analysis.waterIntake / 250)} copos de água
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Column - Auth Form */}
            <div className="space-y-6">
              <Card className="p-8 bg-white dark:bg-gray-800">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Crie sua conta para continuar
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Salve sua análise e comece a monitorar seu progresso hoje mesmo
                  </p>
                </div>

                <Auth
                  supabaseClient={supabase}
                  appearance={{
                    theme: ThemeSupa,
                    variables: {
                      default: {
                        colors: {
                          brand: '#0072CE',
                          brandAccent: '#0062B8',
                        },
                      },
                    },
                    className: {
                      container: 'space-y-4',
                      button: 'bg-[#0072CE] hover:bg-[#0062B8] text-white font-medium py-2 px-4 rounded-lg transition-colors',
                      input: 'w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#0072CE] focus:border-transparent dark:bg-gray-700 dark:text-white',
                      label: 'text-gray-700 dark:text-gray-300 font-medium',
                    },
                  }}
                  providers={[]}
                  localization={{
                    variables: {
                      sign_in: {
                        email_label: 'Email',
                        password_label: 'Senha',
                        button_label: 'Entrar',
                        loading_button_label: 'Entrando...',
                        social_provider_text: 'Entrar com {{provider}}',
                        link_text: 'Já tem uma conta? Entre',
                      },
                      sign_up: {
                        email_label: 'Email',
                        password_label: 'Senha',
                        button_label: 'Criar conta',
                        loading_button_label: 'Criando conta...',
                        social_provider_text: 'Cadastrar com {{provider}}',
                        link_text: 'Não tem uma conta? Cadastre-se',
                      },
                      forgotten_password: {
                        email_label: 'Email',
                        button_label: 'Enviar instruções',
                        loading_button_label: 'Enviando...',
                        link_text: 'Esqueceu sua senha?',
                      },
                    },
                  }}
                />
              </Card>

              {/* Benefits */}
              <Card className="p-6 bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                <h3 className="text-xl font-bold mb-4">
                  O que você ganha ao criar sua conta:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Plano personalizado baseado em suas respostas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Acompanhamento diário de refeições e exercícios</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Gráficos de progresso e estatísticas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Acesso a 500+ receitas fitness</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        )}

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => {
              localStorage.removeItem('quizData');
              router.push('/');
            }}
            className="text-[#0072CE] hover:text-[#0062B8] font-medium transition-colors"
          >
            ← Refazer avaliação
          </button>
        </div>
      </div>
    </div>
  );
}
