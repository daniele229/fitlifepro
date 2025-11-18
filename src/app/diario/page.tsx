'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/custom/navbar';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus, Search, Coffee, Sun, Moon, Cookie, Trash2 } from 'lucide-react';
import { commonFoods, searchFoods } from '@/lib/food-database';
import { FoodItem, MealEntry, UserProfile } from '@/lib/types';

export default function DiarioPage() {
  const router = useRouter();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<FoodItem[]>([]);
  const [selectedMealType, setSelectedMealType] = useState<'breakfast' | 'lunch' | 'dinner' | 'snack'>('breakfast');
  const [meals, setMeals] = useState<MealEntry[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const savedProfile = localStorage.getItem('userProfile');
    if (!savedProfile) {
      router.push('/quiz');
      return;
    }
    setProfile(JSON.parse(savedProfile));

    // Carregar refeições do dia
    const today = new Date().toISOString().split('T')[0];
    const savedMeals = localStorage.getItem(`meals-${today}`);
    if (savedMeals) {
      setMeals(JSON.parse(savedMeals));
    }
  }, [router]);

  useEffect(() => {
    if (searchQuery.length > 0) {
      setSearchResults(searchFoods(searchQuery));
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const addFoodToMeal = (food: FoodItem) => {
    const today = new Date().toISOString().split('T')[0];
    const newMeal: MealEntry = {
      id: Date.now().toString(),
      date: today,
      mealType: selectedMealType,
      foods: [food],
      totalCalories: food.calories,
    };

    const updatedMeals = [...meals, newMeal];
    setMeals(updatedMeals);
    localStorage.setItem(`meals-${today}`, JSON.stringify(updatedMeals));

    // Atualizar progresso diário
    updateDailyProgress(updatedMeals);

    setIsDialogOpen(false);
    setSearchQuery('');
  };

  const updateDailyProgress = (currentMeals: MealEntry[]) => {
    const today = new Date().toISOString().split('T')[0];
    const totals = currentMeals.reduce(
      (acc, meal) => {
        meal.foods.forEach(food => {
          acc.calories += food.calories;
          acc.protein += food.protein;
          acc.carbs += food.carbs;
          acc.fats += food.fats;
        });
        return acc;
      },
      { calories: 0, protein: 0, carbs: 0, fats: 0, water: 0 }
    );

    localStorage.setItem(`progress-${today}`, JSON.stringify(totals));
  };

  const removeMeal = (mealId: string) => {
    const today = new Date().toISOString().split('T')[0];
    const updatedMeals = meals.filter(m => m.id !== mealId);
    setMeals(updatedMeals);
    localStorage.setItem(`meals-${today}`, JSON.stringify(updatedMeals));
    updateDailyProgress(updatedMeals);
  };

  const getMealsByType = (type: 'breakfast' | 'lunch' | 'dinner' | 'snack') => {
    return meals.filter(m => m.mealType === type);
  };

  const getTotalCaloriesByType = (type: 'breakfast' | 'lunch' | 'dinner' | 'snack') => {
    return getMealsByType(type).reduce((sum, meal) => sum + meal.totalCalories, 0);
  };

  const mealIcons = {
    breakfast: Coffee,
    lunch: Sun,
    dinner: Moon,
    snack: Cookie,
  };

  const mealLabels = {
    breakfast: 'Café da Manhã',
    lunch: 'Almoço',
    dinner: 'Jantar',
    snack: 'Lanches',
  };

  if (!profile) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20 md:pb-8 md:pt-20">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Diário Alimentar
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              {new Date().toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })}
            </p>
          </div>
        </div>

        <Tabs defaultValue="breakfast" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="breakfast">
              <Coffee className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Café</span>
            </TabsTrigger>
            <TabsTrigger value="lunch">
              <Sun className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Almoço</span>
            </TabsTrigger>
            <TabsTrigger value="dinner">
              <Moon className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Jantar</span>
            </TabsTrigger>
            <TabsTrigger value="snack">
              <Cookie className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Lanches</span>
            </TabsTrigger>
          </TabsList>

          {(['breakfast', 'lunch', 'dinner', 'snack'] as const).map((mealType) => (
            <TabsContent key={mealType} value={mealType} className="space-y-4">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {mealLabels[mealType]}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {getTotalCaloriesByType(mealType)} kcal consumidas
                    </p>
                  </div>
                  
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <Button
                        onClick={() => setSelectedMealType(mealType)}
                        className="bg-[#0072CE] hover:bg-[#0062B8]"
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Adicionar
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Adicionar Alimento</DialogTitle>
                      </DialogHeader>
                      
                      <div className="space-y-4">
                        <div className="relative">
                          <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                          <Input
                            placeholder="Buscar alimento..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10"
                          />
                        </div>

                        <div className="space-y-2">
                          {searchQuery.length === 0 ? (
                            <div className="grid grid-cols-1 gap-2">
                              {commonFoods.slice(0, 10).map((food) => (
                                <button
                                  key={food.id}
                                  onClick={() => addFoodToMeal(food)}
                                  className="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-left transition-colors"
                                >
                                  <div className="flex justify-between items-start">
                                    <div>
                                      <p className="font-medium text-gray-900 dark:text-white">
                                        {food.name}
                                      </p>
                                      <p className="text-sm text-gray-500">
                                        {food.serving}
                                      </p>
                                    </div>
                                    <div className="text-right">
                                      <p className="font-bold text-[#0072CE]">
                                        {food.calories} kcal
                                      </p>
                                      <p className="text-xs text-gray-500">
                                        P: {food.protein}g C: {food.carbs}g G: {food.fats}g
                                      </p>
                                    </div>
                                  </div>
                                </button>
                              ))}
                            </div>
                          ) : searchResults.length > 0 ? (
                            <div className="grid grid-cols-1 gap-2">
                              {searchResults.map((food) => (
                                <button
                                  key={food.id}
                                  onClick={() => addFoodToMeal(food)}
                                  className="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-left transition-colors"
                                >
                                  <div className="flex justify-between items-start">
                                    <div>
                                      <p className="font-medium text-gray-900 dark:text-white">
                                        {food.name}
                                      </p>
                                      <p className="text-sm text-gray-500">
                                        {food.serving}
                                      </p>
                                    </div>
                                    <div className="text-right">
                                      <p className="font-bold text-[#0072CE]">
                                        {food.calories} kcal
                                      </p>
                                      <p className="text-xs text-gray-500">
                                        P: {food.protein}g C: {food.carbs}g G: {food.fats}g
                                      </p>
                                    </div>
                                  </div>
                                </button>
                              ))}
                            </div>
                          ) : (
                            <p className="text-center text-gray-500 py-8">
                              Nenhum alimento encontrado
                            </p>
                          )}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>

                <div className="space-y-2">
                  {getMealsByType(mealType).length === 0 ? (
                    <p className="text-center text-gray-500 py-8">
                      Nenhum alimento registrado ainda
                    </p>
                  ) : (
                    getMealsByType(mealType).map((meal) => (
                      <div
                        key={meal.id}
                        className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                      >
                        <div className="flex-1">
                          {meal.foods.map((food, idx) => (
                            <div key={idx}>
                              <p className="font-medium text-gray-900 dark:text-white">
                                {food.name}
                              </p>
                              <p className="text-sm text-gray-500">
                                {food.serving} • {food.calories} kcal
                              </p>
                            </div>
                          ))}
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeMeal(meal.id)}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    ))
                  )}
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
