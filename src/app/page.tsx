'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Apple, TrendingDown, TrendingUp, Activity, ArrowRight, ArrowLeft } from 'lucide-react';

interface QuizData {
  age: string;
  gender: string;
  weight: string;
  height: string;
  goal: string;
  activityLevel: string;
  dietPreference: string;
}

export default function Home() {
  const router = useRouter();
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [quizData, setQuizData] = useState<QuizData>({
    age: '',
    gender: '',
    weight: '',
    height: '',
    goal: '',
    activityLevel: '',
    dietPreference: '',
  });

  const questions = [
    {
      id: 'age',
      question: 'Qual é a sua idade?',
      type: 'number',
      placeholder: 'Ex: 25',
    },
    {
      id: 'gender',
      question: 'Qual é o seu gênero?',
      type: 'select',
      options: [
        { value: 'male', label: 'Masculino' },
        { value: 'female', label: 'Feminino' },
        { value: 'other', label: 'Outro' },
      ],
    },
    {
      id: 'weight',
      question: 'Qual é o seu peso atual? (kg)',
      type: 'number',
      placeholder: 'Ex: 70',
    },
    {
      id: 'height',
      question: 'Qual é a sua altura? (cm)',
      type: 'number',
      placeholder: 'Ex: 175',
    },
    {
      id: 'goal',
      question: 'Qual é o seu objetivo principal?',
      type: 'select',
      options: [
        { value: 'lose_weight', label: 'Perder peso' },
        { value: 'maintain', label: 'Manter peso' },
        { value: 'gain_muscle', label: 'Ganhar massa muscular' },
      ],
    },
    {
      id: 'activityLevel',
      question: 'Qual é o seu nível de atividade física?',
      type: 'select',
      options: [
        { value: 'sedentary', label: 'Sedentário (pouco ou nenhum exercício)' },
        { value: 'light', label: 'Leve (exercício 1-3 dias/semana)' },
        { value: 'moderate', label: 'Moderado (exercício 3-5 dias/semana)' },
        { value: 'active', label: 'Ativo (exercício 6-7 dias/semana)' },
        { value: 'very_active', label: 'Muito ativo (exercício intenso diariamente)' },
      ],
    },
    {
      id: 'dietPreference',
      question: 'Qual é a sua preferência alimentar?',
      type: 'select',
      options: [
        { value: 'omnivore', label: 'Onívoro (como de tudo)' },
        { value: 'vegetarian', label: 'Vegetariano' },
        { value: 'vegan', label: 'Vegano' },
        { value: 'keto', label: 'Dieta Cetogênica' },
        { value: 'paleo', label: 'Dieta Paleo' },
      ],
    },
  ];

  const currentQuestion = questions[currentStep];

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Quiz completo - redirecionar para auth com dados do quiz
      localStorage.setItem('quizData', JSON.stringify(quizData));
      router.push('/auth');
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (value: string) => {
    setQuizData({
      ...quizData,
      [currentQuestion.id]: value,
    });
  };

  const isCurrentStepValid = () => {
    const value = quizData[currentQuestion.id as keyof QuizData];
    return value && value.trim() !== '';
  };

  if (!showQuiz) {
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
                onClick={() => setShowQuiz(true)}
                className="bg-[#0072CE] hover:bg-[#0062B8] text-white px-12 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                Começar Avaliação Gratuita
              </Button>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Responda algumas perguntas e receba seu plano personalizado
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

  // Quiz Screen
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Pergunta {currentStep + 1} de {questions.length}
            </span>
            <span className="text-sm font-medium text-[#0072CE]">
              {Math.round(((currentStep + 1) / questions.length) * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-[#0072CE] h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <Card className="p-8 bg-white dark:bg-gray-800 shadow-xl">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {currentQuestion.question}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Suas respostas nos ajudam a criar o plano perfeito para você
              </p>
            </div>

            {/* Input Field */}
            <div>
              {currentQuestion.type === 'number' && (
                <input
                  type="number"
                  value={quizData[currentQuestion.id as keyof QuizData]}
                  onChange={(e) => handleInputChange(e.target.value)}
                  placeholder={currentQuestion.placeholder}
                  className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#0072CE] focus:border-transparent dark:bg-gray-700 dark:text-white text-lg"
                />
              )}

              {currentQuestion.type === 'select' && (
                <div className="space-y-3">
                  {currentQuestion.options?.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleInputChange(option.value)}
                      className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                        quizData[currentQuestion.id as keyof QuizData] === option.value
                          ? 'border-[#0072CE] bg-blue-50 dark:bg-blue-900/20'
                          : 'border-gray-300 dark:border-gray-600 hover:border-[#0072CE]'
                      }`}
                    >
                      <span className="font-medium text-gray-900 dark:text-white">
                        {option.label}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="flex space-x-4 pt-4">
              {currentStep > 0 && (
                <Button
                  onClick={handleBack}
                  variant="outline"
                  className="flex-1 py-6 text-lg"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Voltar
                </Button>
              )}
              <Button
                onClick={handleNext}
                disabled={!isCurrentStepValid()}
                className={`flex-1 py-6 text-lg ${
                  currentStep === 0 ? 'w-full' : ''
                } bg-[#0072CE] hover:bg-[#0062B8] disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {currentStep === questions.length - 1 ? 'Ver Minha Análise' : 'Próxima'}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Logo Footer */}
        <div className="text-center mt-8">
          <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400">
            <Apple className="w-5 h-5" />
            <span className="font-semibold">FitLife Pro</span>
          </div>
        </div>
      </div>
    </div>
  );
}
