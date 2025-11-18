'use client';

import { useState } from 'react';
import Navbar from '@/components/custom/navbar';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Clock, Users, Flame, ChefHat } from 'lucide-react';
import { fitnessRecipes } from '@/lib/food-database';
import { Recipe } from '@/lib/types';

export default function ReceitasPage() {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');

  const categories = ['Todas', 'Café da Manhã', 'Lanches', 'Almoço', 'Jantar'];

  const filteredRecipes = selectedCategory === 'Todas' 
    ? fitnessRecipes 
    : fitnessRecipes.filter(recipe => recipe.category === selectedCategory);

  const openRecipe = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20 md:pb-8 md:pt-20">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Receitas Fitness
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            100 receitas deliciosas e saudáveis para seus objetivos
          </p>

          {/* Filtros de Categoria */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? 'default' : 'outline'}
                className={selectedCategory === category 
                  ? 'bg-[#0072CE] hover:bg-[#0062B8]' 
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                }
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Contador de receitas */}
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Mostrando {filteredRecipes.length} receita{filteredRecipes.length !== 1 ? 's' : ''}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map((recipe) => (
            <Card
              key={recipe.id}
              className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => openRecipe(recipe)}
            >
              <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-700">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <div className="absolute top-3 right-3 bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow-lg">
                  <span className="text-sm font-bold text-[#0072CE]">
                    {recipe.calories} kcal
                  </span>
                </div>
                <div className="absolute top-3 left-3 bg-[#0072CE] text-white px-3 py-1 rounded-full shadow-lg">
                  <span className="text-xs font-semibold">
                    {recipe.category}
                  </span>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {recipe.name}
                </h3>
                
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{recipe.prepTime} min</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{recipe.servings} porção</span>
                  </div>
                </div>

                <div className="flex gap-2 text-xs">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">
                    P: {recipe.protein}g
                  </span>
                  <span className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-1 rounded">
                    C: {recipe.carbs}g
                  </span>
                  <span className="bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 px-2 py-1 rounded">
                    G: {recipe.fats}g
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Dialog de Receita */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            {selectedRecipe && (
              <div>
                <DialogHeader>
                  <DialogTitle className="text-2xl">{selectedRecipe.name}</DialogTitle>
                  <p className="text-sm text-[#0072CE] font-semibold">{selectedRecipe.category}</p>
                </DialogHeader>

                <div className="mt-4 space-y-6">
                  {/* Imagem */}
                  <div className="relative h-64 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700">
                    <img
                      src={selectedRecipe.image}
                      alt={selectedRecipe.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>

                  {/* Info Nutricional */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-[#0072CE]/10 p-4 rounded-lg text-center">
                      <Flame className="w-6 h-6 mx-auto mb-2 text-[#0072CE]" />
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">
                        {selectedRecipe.calories}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">kcal</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
                      <p className="text-2xl font-bold text-blue-600">{selectedRecipe.protein}g</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Proteínas</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
                      <p className="text-2xl font-bold text-green-600">{selectedRecipe.carbs}g</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Carboidratos</p>
                    </div>
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg text-center">
                      <p className="text-2xl font-bold text-orange-600">{selectedRecipe.fats}g</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Gorduras</p>
                    </div>
                  </div>

                  {/* Tempo e Porções */}
                  <div className="flex gap-6 text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      <span>{selectedRecipe.prepTime} minutos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      <span>{selectedRecipe.servings} porção</span>
                    </div>
                  </div>

                  {/* Ingredientes */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <ChefHat className="w-5 h-5 text-[#0072CE]" />
                      Ingredientes
                    </h3>
                    <ul className="space-y-2">
                      {selectedRecipe.ingredients.map((ingredient, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                        >
                          <span className="text-[#0072CE] mt-1">•</span>
                          <span>{ingredient}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Modo de Preparo */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                      Modo de Preparo
                    </h3>
                    <ol className="space-y-3">
                      {selectedRecipe.instructions.map((instruction, idx) => (
                        <li
                          key={idx}
                          className="flex gap-3 text-gray-700 dark:text-gray-300"
                        >
                          <span className="flex-shrink-0 w-6 h-6 bg-[#0072CE] text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {idx + 1}
                          </span>
                          <span className="pt-0.5">{instruction}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Botão Fechar */}
                  <Button
                    onClick={() => setIsDialogOpen(false)}
                    className="w-full bg-[#0072CE] hover:bg-[#0062B8]"
                  >
                    Fechar
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
