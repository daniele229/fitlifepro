'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card } from '@/components/ui/card';
import { ArrowRight, ArrowLeft, User, Target, Activity } from 'lucide-react';
import { calculateUserProfile, estimateTimeToGoal } from '@/lib/fitness-calculator';
import { UserProfile } from '@/lib/types';

export default function QuizPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: 'male' as 'male' | 'female',
    weight: '',
    height: '',
    targetWeight: '',
    activityLevel: 'moderate' as 'sedentary' | 'light' | 'moderate' | 'active' | 'very-active',
    goal: 'lose' as 'lose' | 'maintain' | 'gain',
  });

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    const profile = calculateUserProfile({
      name: formData.name,
      age: parseInt(formData.age),
      gender: formData.gender,
      weight: parseFloat(formData.weight),
      height: parseFloat(formData.height),
      activityLevel: formData.activityLevel,
      goal: formData.goal,
      targetWeight: formData.targetWeight ? parseFloat(formData.targetWeight) : undefined,
    });

    // Salvar no localStorage
    localStorage.setItem('userProfile', JSON.stringify(profile));
    
    // Redirecionar para dashboard
    router.push('/dashboard');
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.name && formData.age && formData.gender;
      case 2:
        return formData.weight && formData.height;
      case 3:
        return formData.goal && formData.activityLevel;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Passo {step} de 3
            </span>
            <span className="text-sm font-medium text-[#0072CE]">
              {Math.round((step / 3) * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-[#0072CE] h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>

        <Card className="p-6 md:p-8 shadow-xl">
          {/* Step 1: Informações Pessoais */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-8 h-8 text-[#0072CE]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Vamos nos conhecer!
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Conte-nos um pouco sobre você
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Nome</Label>
                  <Input
                    id="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => updateField('name', e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="age">Idade</Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="Sua idade"
                    value={formData.age}
                    onChange={(e) => updateField('age', e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label>Sexo</Label>
                  <RadioGroup
                    value={formData.gender}
                    onValueChange={(value) => updateField('gender', value)}
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male" className="cursor-pointer">Masculino</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female" className="cursor-pointer">Feminino</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Medidas */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Suas medidas atuais
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Precisamos saber seu peso e altura
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="weight">Peso Atual (kg)</Label>
                  <Input
                    id="weight"
                    type="number"
                    step="0.1"
                    placeholder="Ex: 75.5"
                    value={formData.weight}
                    onChange={(e) => updateField('weight', e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="height">Altura (cm)</Label>
                  <Input
                    id="height"
                    type="number"
                    placeholder="Ex: 175"
                    value={formData.height}
                    onChange={(e) => updateField('height', e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="targetWeight">Peso Desejado (kg) - Opcional</Label>
                  <Input
                    id="targetWeight"
                    type="number"
                    step="0.1"
                    placeholder="Ex: 70"
                    value={formData.targetWeight}
                    onChange={(e) => updateField('targetWeight', e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Objetivo e Atividade */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Seu objetivo
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  O que você quer alcançar?
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <Label>Objetivo Principal</Label>
                  <RadioGroup
                    value={formData.goal}
                    onValueChange={(value) => updateField('goal', value)}
                    className="mt-2 space-y-3"
                  >
                    <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                      <RadioGroupItem value="lose" id="lose" />
                      <Label htmlFor="lose" className="cursor-pointer flex-1">
                        <div className="font-medium">Perder Peso</div>
                        <div className="text-sm text-gray-500">Déficit calórico para emagrecimento</div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                      <RadioGroupItem value="maintain" id="maintain" />
                      <Label htmlFor="maintain" className="cursor-pointer flex-1">
                        <div className="font-medium">Manter Peso</div>
                        <div className="text-sm text-gray-500">Equilíbrio calórico saudável</div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                      <RadioGroupItem value="gain" id="gain" />
                      <Label htmlFor="gain" className="cursor-pointer flex-1">
                        <div className="font-medium">Ganhar Massa</div>
                        <div className="text-sm text-gray-500">Superávit calórico para hipertrofia</div>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label>Nível de Atividade Física</Label>
                  <RadioGroup
                    value={formData.activityLevel}
                    onValueChange={(value) => updateField('activityLevel', value)}
                    className="mt-2 space-y-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="sedentary" id="sedentary" />
                      <Label htmlFor="sedentary" className="cursor-pointer">
                        Sedentário (pouco ou nenhum exercício)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="light" id="light" />
                      <Label htmlFor="light" className="cursor-pointer">
                        Leve (exercício 1-3x por semana)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="moderate" id="moderate" />
                      <Label htmlFor="moderate" className="cursor-pointer">
                        Moderado (exercício 3-5x por semana)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="active" id="active" />
                      <Label htmlFor="active" className="cursor-pointer">
                        Ativo (exercício 6-7x por semana)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="very-active" id="very-active" />
                      <Label htmlFor="very-active" className="cursor-pointer">
                        Muito Ativo (exercício intenso diário)
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t">
            {step > 1 && (
              <Button
                variant="outline"
                onClick={() => setStep(step - 1)}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar
              </Button>
            )}
            
            {step < 3 ? (
              <Button
                onClick={() => setStep(step + 1)}
                disabled={!canProceed()}
                className="ml-auto bg-[#0072CE] hover:bg-[#0062B8] flex items-center gap-2"
              >
                Próximo
                <ArrowRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={!canProceed()}
                className="ml-auto bg-[#0072CE] hover:bg-[#0062B8] flex items-center gap-2"
              >
                Finalizar
                <ArrowRight className="w-4 h-4" />
              </Button>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
