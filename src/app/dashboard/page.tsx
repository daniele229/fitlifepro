'use client';

export const dynamic = 'force-dynamic';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Apple,
  LogOut,
  Plus,
  TrendingUp,
  Activity,
  Utensils,
  Dumbbell,
  Target,
} from 'lucide-react';

interface Meal {
  id: string;
  meal_name: string;
  meal_type: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  meal_date: string;
}

interface Exercise {
  id: string;
  exercise_name: string;
  duration_minutes: number;
  calories_burned: number;
  exercise_type: string;
  exercise_date: string;
}

interface FitnessGoal {
  id: string;
  goal_type: string;
  current_weight: number;
  target_weight: number;
  daily_calories: number;
}

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [meals, setMeals] = useState<Meal[]>([]);
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [fitnessGoal, setFitnessGoal] = useState<FitnessGoal | null>(null);
  const [showAddMeal, setShowAddMeal] = useState(false);
  const [showAddExercise, setShowAddExercise] = useState(false);

  // Estados para novo meal
  const [newMeal, setNewMeal] = useState({
    meal_name: '',
    meal_type: 'breakfast',
    calories: 0,
    protein: 0,
    carbs: 0,
    fats: 0,
  });

  // Estados para novo exercício
  const [newExercise, setNewExercise] = useState({
    exercise_name: '',
    duration_minutes: 0,
    calories_burned: 0,
    exercise_type: 'cardio',
  });

  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    if (!isSupabaseConfigured()) {
      router.push('/');
      return;
    }

    const {
      data: { session },
    } = await supabase!.auth.getSession();

    if (!session) {
      router.push('/auth');
      return;
    }

    setUser(session.user);
    await loadData(session.user.id);
    setLoading(false);
  }

  async function loadData(userId: string) {
    if (!isSupabaseConfigured()) return;

    // Carregar refeições de hoje
    const today = new Date().toISOString().split('T')[0];
    const { data: mealsData } = await supabase!
      .from('meals')
      .select('*')
      .eq('user_id', userId)
      .eq('meal_date', today)
      .order('created_at', { ascending: false });

    if (mealsData) setMeals(mealsData);

    // Carregar exercícios de hoje
    const { data: exercisesData } = await supabase!
      .from('exercises')
      .select('*')
      .eq('user_id', userId)
      .eq('exercise_date', today)
      .order('created_at', { ascending: false });

    if (exercisesData) setExercises(exercisesData);

    // Carregar meta fitness
    const { data: goalData } = await supabase!
      .from('fitness_goals')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (goalData) setFitnessGoal(goalData);
  }

  async function handleSignOut() {
    if (!isSupabaseConfigured()) return;
    await supabase!.auth.signOut();
    router.push('/');
  }

  async function addMeal() {
    if (!user || !newMeal.meal_name || !isSupabaseConfigured()) return;

    const { error } = await supabase!.from('meals').insert([
      {
        user_id: user.id,
        ...newMeal,
        meal_date: new Date().toISOString().split('T')[0],
      },
    ]);

    if (!error) {
      await loadData(user.id);
      setShowAddMeal(false);
      setNewMeal({
        meal_name: '',
        meal_type: 'breakfast',
        calories: 0,
        protein: 0,
        carbs: 0,
        fats: 0,
      });
    }
  }

  async function addExercise() {
    if (!user || !newExercise.exercise_name || !isSupabaseConfigured()) return;

    const { error } = await supabase!.from('exercises').insert([
      {
        user_id: user.id,
        ...newExercise,
        exercise_date: new Date().toISOString().split('T')[0],
      },
    ]);

    if (!error) {
      await loadData(user.id);
      setShowAddExercise(false);
      setNewExercise({
        exercise_name: '',
        duration_minutes: 0,
        calories_burned: 0,
        exercise_type: 'cardio',
      });
    }
  }

  const totalCalories = meals.reduce((sum, meal) => sum + meal.calories, 0);
  const totalCaloriesBurned = exercises.reduce(
    (sum, ex) => sum + ex.calories_burned,
    0
  );
  const netCalories = totalCalories - totalCaloriesBurned;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0072CE]"></div>
      </div>
    );
  }

  if (!isSupabaseConfigured()) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800 px-4">
        <Card className="p-8 max-w-md text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Configuração Necessária
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            As variáveis de ambiente do Supabase não estão configuradas. 
            Por favor, configure-as para continuar.
          </p>
          <button
            onClick={() => router.push('/')}
            className="text-[#0072CE] hover:text-[#0062B8] font-medium"
          >
            ← Voltar para o início
          </button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-[#0072CE] p-2 rounded-xl">
                <Apple className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                FitLife Pro
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600 dark:text-gray-300">
                {user?.email}
              </span>
              <Button
                onClick={handleSignOut}
                variant="outline"
                size="sm"
                className="flex items-center space-x-2"
              >
                <LogOut className="w-4 h-4" />
                <span>Sair</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-white dark:bg-gray-800">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Calorias Consumidas
                </p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  {totalCalories}
                </p>
              </div>
              <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
                <Utensils className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-white dark:bg-gray-800">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Calorias Queimadas
                </p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  {totalCaloriesBurned}
                </p>
              </div>
              <div className="bg-orange-100 dark:bg-orange-900 p-3 rounded-full">
                <Activity className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-white dark:bg-gray-800">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Balanço Calórico
                </p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  {netCalories}
                </p>
              </div>
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-white dark:bg-gray-800">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Meta Diária
                </p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  {fitnessGoal?.daily_calories || 2000}
                </p>
              </div>
              <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full">
                <Target className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
          </Card>
        </div>

        {/* Meals and Exercises */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Meals Section */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center space-x-2">
                <Utensils className="w-6 h-6" />
                <span>Refeições de Hoje</span>
              </h2>
              <Button
                onClick={() => setShowAddMeal(!showAddMeal)}
                size="sm"
                className="bg-[#0072CE] hover:bg-[#0062B8]"
              >
                <Plus className="w-4 h-4 mr-2" />
                Adicionar
              </Button>
            </div>

            {showAddMeal && (
              <Card className="p-6 mb-4 bg-white dark:bg-gray-800">
                <div className="space-y-4">
                  <div>
                    <Label>Nome da Refeição</Label>
                    <Input
                      value={newMeal.meal_name}
                      onChange={(e) =>
                        setNewMeal({ ...newMeal, meal_name: e.target.value })
                      }
                      placeholder="Ex: Frango com batata doce"
                    />
                  </div>
                  <div>
                    <Label>Tipo</Label>
                    <select
                      value={newMeal.meal_type}
                      onChange={(e) =>
                        setNewMeal({ ...newMeal, meal_type: e.target.value })
                      }
                      className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                    >
                      <option value="breakfast">Café da Manhã</option>
                      <option value="lunch">Almoço</option>
                      <option value="dinner">Jantar</option>
                      <option value="snack">Lanche</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Calorias</Label>
                      <Input
                        type="number"
                        value={newMeal.calories}
                        onChange={(e) =>
                          setNewMeal({
                            ...newMeal,
                            calories: parseInt(e.target.value) || 0,
                          })
                        }
                      />
                    </div>
                    <div>
                      <Label>Proteína (g)</Label>
                      <Input
                        type="number"
                        value={newMeal.protein}
                        onChange={(e) =>
                          setNewMeal({
                            ...newMeal,
                            protein: parseFloat(e.target.value) || 0,
                          })
                        }
                      />
                    </div>
                    <div>
                      <Label>Carboidratos (g)</Label>
                      <Input
                        type="number"
                        value={newMeal.carbs}
                        onChange={(e) =>
                          setNewMeal({
                            ...newMeal,
                            carbs: parseFloat(e.target.value) || 0,
                          })
                        }
                      />
                    </div>
                    <div>
                      <Label>Gorduras (g)</Label>
                      <Input
                        type="number"
                        value={newMeal.fats}
                        onChange={(e) =>
                          setNewMeal({
                            ...newMeal,
                            fats: parseFloat(e.target.value) || 0,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      onClick={addMeal}
                      className="flex-1 bg-[#0072CE] hover:bg-[#0062B8]"
                    >
                      Salvar
                    </Button>
                    <Button
                      onClick={() => setShowAddMeal(false)}
                      variant="outline"
                      className="flex-1"
                    >
                      Cancelar
                    </Button>
                  </div>
                </div>
              </Card>
            )}

            <div className="space-y-4">
              {meals.length === 0 ? (
                <Card className="p-8 text-center bg-white dark:bg-gray-800">
                  <p className="text-gray-500 dark:text-gray-400">
                    Nenhuma refeição registrada hoje
                  </p>
                </Card>
              ) : (
                meals.map((meal) => (
                  <Card
                    key={meal.id}
                    className="p-4 bg-white dark:bg-gray-800"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {meal.meal_name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {meal.meal_type === 'breakfast' && 'Café da Manhã'}
                          {meal.meal_type === 'lunch' && 'Almoço'}
                          {meal.meal_type === 'dinner' && 'Jantar'}
                          {meal.meal_type === 'snack' && 'Lanche'}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-[#0072CE]">
                          {meal.calories}
                        </p>
                        <p className="text-xs text-gray-500">calorias</p>
                      </div>
                    </div>
                    <div className="mt-3 grid grid-cols-3 gap-2 text-sm">
                      <div className="text-center">
                        <p className="text-gray-600 dark:text-gray-400">
                          Proteína
                        </p>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {meal.protein}g
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-600 dark:text-gray-400">
                          Carboidratos
                        </p>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {meal.carbs}g
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-600 dark:text-gray-400">
                          Gorduras
                        </p>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {meal.fats}g
                        </p>
                      </div>
                    </div>
                  </Card>
                ))
              )}
            </div>
          </div>

          {/* Exercises Section */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center space-x-2">
                <Dumbbell className="w-6 h-6" />
                <span>Exercícios de Hoje</span>
              </h2>
              <Button
                onClick={() => setShowAddExercise(!showAddExercise)}
                size="sm"
                className="bg-[#0072CE] hover:bg-[#0062B8]"
              >
                <Plus className="w-4 h-4 mr-2" />
                Adicionar
              </Button>
            </div>

            {showAddExercise && (
              <Card className="p-6 mb-4 bg-white dark:bg-gray-800">
                <div className="space-y-4">
                  <div>
                    <Label>Nome do Exercício</Label>
                    <Input
                      value={newExercise.exercise_name}
                      onChange={(e) =>
                        setNewExercise({
                          ...newExercise,
                          exercise_name: e.target.value,
                        })
                      }
                      placeholder="Ex: Corrida"
                    />
                  </div>
                  <div>
                    <Label>Tipo</Label>
                    <select
                      value={newExercise.exercise_type}
                      onChange={(e) =>
                        setNewExercise({
                          ...newExercise,
                          exercise_type: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                    >
                      <option value="cardio">Cardio</option>
                      <option value="strength">Musculação</option>
                      <option value="flexibility">Flexibilidade</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Duração (min)</Label>
                      <Input
                        type="number"
                        value={newExercise.duration_minutes}
                        onChange={(e) =>
                          setNewExercise({
                            ...newExercise,
                            duration_minutes: parseInt(e.target.value) || 0,
                          })
                        }
                      />
                    </div>
                    <div>
                      <Label>Calorias Queimadas</Label>
                      <Input
                        type="number"
                        value={newExercise.calories_burned}
                        onChange={(e) =>
                          setNewExercise({
                            ...newExercise,
                            calories_burned: parseInt(e.target.value) || 0,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      onClick={addExercise}
                      className="flex-1 bg-[#0072CE] hover:bg-[#0062B8]"
                    >
                      Salvar
                    </Button>
                    <Button
                      onClick={() => setShowAddExercise(false)}
                      variant="outline"
                      className="flex-1"
                    >
                      Cancelar
                    </Button>
                  </div>
                </div>
              </Card>
            )}

            <div className="space-y-4">
              {exercises.length === 0 ? (
                <Card className="p-8 text-center bg-white dark:bg-gray-800">
                  <p className="text-gray-500 dark:text-gray-400">
                    Nenhum exercício registrado hoje
                  </p>
                </Card>
              ) : (
                exercises.map((exercise) => (
                  <Card
                    key={exercise.id}
                    className="p-4 bg-white dark:bg-gray-800"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {exercise.exercise_name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {exercise.exercise_type === 'cardio' && 'Cardio'}
                          {exercise.exercise_type === 'strength' &&
                            'Musculação'}
                          {exercise.exercise_type === 'flexibility' &&
                            'Flexibilidade'}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-orange-600">
                          {exercise.calories_burned}
                        </p>
                        <p className="text-xs text-gray-500">calorias</p>
                      </div>
                    </div>
                    <div className="mt-3 text-center">
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Duração
                      </p>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {exercise.duration_minutes} minutos
                      </p>
                    </div>
                  </Card>
                ))
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
