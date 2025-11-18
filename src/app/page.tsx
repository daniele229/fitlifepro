'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Apple, TrendingDown, TrendingUp, Activity } from 'lucide-react';

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Logo e Título */}
          <div className="space-y-4">
            <div className="flex justify-center">
              <div className="bg-[#0072CE] p-4 rounded-3xl shadow-2xl">
                <Apple className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
              FitLife Pro
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
              Seu companheiro completo para uma vida mais saudável
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-100 dark:bg-green-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Perca Peso</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Alcance seu peso ideal com planos personalizados
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Mantenha-se Saudável</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Monitore suas calorias e nutrientes diariamente
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 dark:bg-purple-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Ganhe Massa</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Construa músculos com nutrição adequada
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-4 mt-12">
            <Button
              onClick={() => router.push('/auth')}
              className="bg-[#0072CE] hover:bg-[#0062B8] text-white px-12 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              Começar Agora
            </Button>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Crie sua conta e comece a monitorar sua saúde hoje mesmo
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div>
              <div className="text-3xl font-bold text-[#0072CE]">1M+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Usuários Ativos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#0072CE]">500+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Receitas Fitness</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#0072CE]">10M+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Refeições Registradas</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
