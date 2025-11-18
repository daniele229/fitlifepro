// Banco de dados mock de alimentos comuns

import { FoodItem, Recipe } from './types';

export const commonFoods: FoodItem[] = [
  // Proteínas
  { id: '1', name: 'Peito de Frango Grelhado', calories: 165, protein: 31, carbs: 0, fats: 3.6, serving: '100g' },
  { id: '2', name: 'Ovo Cozido', calories: 155, protein: 13, carbs: 1.1, fats: 11, serving: '1 unidade' },
  { id: '3', name: 'Filé de Tilápia', calories: 96, protein: 20, carbs: 0, fats: 1.7, serving: '100g' },
  { id: '4', name: 'Atum em Lata (água)', calories: 116, protein: 26, carbs: 0, fats: 0.8, serving: '100g' },
  { id: '5', name: 'Whey Protein', calories: 120, protein: 24, carbs: 3, fats: 1.5, serving: '1 scoop (30g)' },
  
  // Carboidratos
  { id: '6', name: 'Arroz Integral Cozido', calories: 111, protein: 2.6, carbs: 23, fats: 0.9, serving: '100g' },
  { id: '7', name: 'Batata Doce Cozida', calories: 86, protein: 1.6, carbs: 20, fats: 0.1, serving: '100g' },
  { id: '8', name: 'Aveia', calories: 389, protein: 17, carbs: 66, fats: 7, serving: '100g' },
  { id: '9', name: 'Pão Integral', calories: 247, protein: 13, carbs: 41, fats: 3.4, serving: '100g' },
  { id: '10', name: 'Banana', calories: 89, protein: 1.1, carbs: 23, fats: 0.3, serving: '1 unidade' },
  
  // Vegetais
  { id: '11', name: 'Brócolis Cozido', calories: 35, protein: 2.4, carbs: 7, fats: 0.4, serving: '100g' },
  { id: '12', name: 'Alface', calories: 15, protein: 1.4, carbs: 2.9, fats: 0.2, serving: '100g' },
  { id: '13', name: 'Tomate', calories: 18, protein: 0.9, carbs: 3.9, fats: 0.2, serving: '100g' },
  { id: '14', name: 'Cenoura', calories: 41, protein: 0.9, carbs: 10, fats: 0.2, serving: '100g' },
  
  // Gorduras Saudáveis
  { id: '15', name: 'Abacate', calories: 160, protein: 2, carbs: 9, fats: 15, serving: '100g' },
  { id: '16', name: 'Azeite de Oliva', calories: 884, protein: 0, carbs: 0, fats: 100, serving: '100ml' },
  { id: '17', name: 'Amendoim', calories: 567, protein: 26, carbs: 16, fats: 49, serving: '100g' },
  { id: '18', name: 'Castanha do Pará', calories: 656, protein: 14, carbs: 12, fats: 66, serving: '100g' },
  
  // Laticínios
  { id: '19', name: 'Iogurte Grego Natural', calories: 59, protein: 10, carbs: 3.6, fats: 0.4, serving: '100g' },
  { id: '20', name: 'Queijo Cottage', calories: 98, protein: 11, carbs: 3.4, fats: 4.3, serving: '100g' },
];

export const fitnessRecipes: Recipe[] = [
  // ===== CAFÉ DA MANHÃ (25 receitas) =====
  {
    id: 'r1',
    name: 'Omelete de Claras com Espinafre',
    category: 'Café da Manhã',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=300&fit=crop',
    prepTime: 10,
    calories: 180,
    protein: 24,
    carbs: 8,
    fats: 6,
    servings: 1,
    ingredients: [
      '4 claras de ovo',
      '1 xícara de espinafre',
      '1 tomate picado',
      'Sal e pimenta a gosto',
      '1 colher de chá de azeite'
    ],
    instructions: [
      'Bata as claras em uma tigela',
      'Aqueça o azeite em uma frigideira antiaderente',
      'Adicione o espinafre e refogue por 1 minuto',
      'Despeje as claras batidas sobre o espinafre',
      'Adicione o tomate picado',
      'Cozinhe até firmar, dobre ao meio e sirva'
    ]
  },
  {
    id: 'r2',
    name: 'Panqueca de Aveia e Banana',
    category: 'Café da Manhã',
    image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=400&h=300&fit=crop',
    prepTime: 12,
    calories: 320,
    protein: 18,
    carbs: 45,
    fats: 8,
    servings: 1,
    ingredients: [
      '1 banana madura',
      '2 ovos',
      '3 colheres de sopa de aveia',
      '1 colher de chá de mel',
      'Canela'
    ],
    instructions: [
      'Amasse a banana em uma tigela',
      'Adicione os ovos e bata bem',
      'Misture a aveia e a canela',
      'Aqueça uma frigideira antiaderente',
      'Despeje a massa e cozinhe 2-3 min de cada lado',
      'Sirva com mel'
    ]
  },
  {
    id: 'r3',
    name: 'Bowl de Iogurte com Frutas',
    category: 'Café da Manhã',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop',
    prepTime: 8,
    calories: 290,
    protein: 22,
    carbs: 42,
    fats: 5,
    servings: 1,
    ingredients: [
      '200g de iogurte grego natural',
      '1 banana fatiada',
      'Morangos',
      '2 colheres de sopa de granola',
      '1 colher de chá de mel'
    ],
    instructions: [
      'Coloque o iogurte em uma tigela',
      'Adicione as frutas por cima',
      'Polvilhe a granola',
      'Regue com mel',
      'Sirva imediatamente'
    ]
  },
  {
    id: 'r4',
    name: 'Smoothie Proteico de Banana',
    category: 'Café da Manhã',
    image: 'https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?w=400&h=300&fit=crop',
    prepTime: 5,
    calories: 280,
    protein: 28,
    carbs: 35,
    fats: 4,
    servings: 1,
    ingredients: [
      '1 banana congelada',
      '1 scoop de whey protein',
      '200ml de leite desnatado',
      '1 colher de sopa de aveia',
      'Canela a gosto'
    ],
    instructions: [
      'Coloque todos os ingredientes no liquidificador',
      'Bata até ficar homogêneo',
      'Adicione gelo se desejar',
      'Sirva imediatamente'
    ]
  },
  {
    id: 'r5',
    name: 'Tapioca com Ovo e Queijo',
    category: 'Café da Manhã',
    image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400&h=300&fit=crop',
    prepTime: 10,
    calories: 250,
    protein: 15,
    carbs: 28,
    fats: 9,
    servings: 1,
    ingredients: [
      '3 colheres de sopa de goma de tapioca',
      '1 ovo',
      '30g de queijo branco',
      'Sal a gosto',
      'Orégano'
    ],
    instructions: [
      'Aqueça uma frigideira antiaderente',
      'Espalhe a tapioca formando um disco',
      'Quando começar a firmar, adicione o ovo batido',
      'Coloque o queijo e temperos',
      'Dobre ao meio e sirva'
    ]
  },
  {
    id: 'r6',
    name: 'Mingau de Aveia Proteico',
    category: 'Café da Manhã',
    image: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=400&h=300&fit=crop',
    prepTime: 8,
    calories: 310,
    protein: 20,
    carbs: 40,
    fats: 7,
    servings: 1,
    ingredients: [
      '50g de aveia',
      '200ml de leite desnatado',
      '1/2 scoop de whey protein',
      '1 colher de chá de mel',
      'Canela e frutas vermelhas'
    ],
    instructions: [
      'Cozinhe a aveia com o leite em fogo médio',
      'Mexa constantemente por 5 minutos',
      'Retire do fogo e adicione o whey',
      'Misture bem',
      'Sirva com mel, canela e frutas'
    ]
  },
  {
    id: 'r7',
    name: 'Crepioca Fitness',
    category: 'Café da Manhã',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop',
    prepTime: 10,
    calories: 220,
    protein: 18,
    carbs: 22,
    fats: 6,
    servings: 1,
    ingredients: [
      '1 ovo',
      '2 colheres de sopa de tapioca',
      '30g de peito de peru',
      'Tomate e alface',
      'Sal e orégano'
    ],
    instructions: [
      'Bata o ovo com a tapioca e sal',
      'Despeje em frigideira quente',
      'Quando firmar, vire',
      'Adicione o recheio',
      'Dobre e sirva'
    ]
  },
  {
    id: 'r8',
    name: 'Pão de Queijo Fit',
    category: 'Café da Manhã',
    image: 'https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?w=400&h=300&fit=crop',
    prepTime: 20,
    calories: 180,
    protein: 12,
    carbs: 20,
    fats: 6,
    servings: 4,
    ingredients: [
      '1 ovo',
      '100g de polvilho azedo',
      '50g de queijo minas',
      '50ml de leite desnatado',
      'Sal'
    ],
    instructions: [
      'Misture todos os ingredientes',
      'Faça bolinhas com a massa',
      'Coloque em forma untada',
      'Asse a 180°C por 20 minutos',
      'Sirva quente'
    ]
  },
  {
    id: 'r9',
    name: 'Vitamina Verde Detox',
    category: 'Café da Manhã',
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400&h=300&fit=crop',
    prepTime: 5,
    calories: 150,
    protein: 8,
    carbs: 25,
    fats: 3,
    servings: 1,
    ingredients: [
      '1 folha de couve',
      '1/2 maçã verde',
      'Suco de 1 limão',
      '200ml de água de coco',
      'Gengibre'
    ],
    instructions: [
      'Lave bem a couve',
      'Coloque todos os ingredientes no liquidificador',
      'Bata até ficar homogêneo',
      'Coe se preferir',
      'Sirva gelado'
    ]
  },
  {
    id: 'r10',
    name: 'Wrap de Ovo com Abacate',
    category: 'Café da Manhã',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop',
    prepTime: 12,
    calories: 340,
    protein: 20,
    carbs: 28,
    fats: 16,
    servings: 1,
    ingredients: [
      '1 tortilha integral',
      '2 ovos mexidos',
      '1/4 de abacate',
      'Tomate e rúcula',
      'Sal e pimenta'
    ],
    instructions: [
      'Prepare os ovos mexidos',
      'Aqueça a tortilha',
      'Espalhe o abacate amassado',
      'Adicione os ovos e vegetais',
      'Enrole e sirva'
    ]
  },
  {
    id: 'r11',
    name: 'Overnight Oats de Chocolate',
    category: 'Café da Manhã',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=300&fit=crop',
    prepTime: 5,
    calories: 300,
    protein: 18,
    carbs: 42,
    fats: 7,
    servings: 1,
    ingredients: [
      '50g de aveia',
      '150ml de leite desnatado',
      '1 colher de cacau em pó',
      '1/2 scoop de whey chocolate',
      'Banana fatiada'
    ],
    instructions: [
      'Misture aveia, leite e cacau em um pote',
      'Adicione o whey e mexa bem',
      'Deixe na geladeira durante a noite',
      'Pela manhã, adicione a banana',
      'Sirva frio'
    ]
  },
  {
    id: 'r12',
    name: 'Omelete de Forno com Legumes',
    category: 'Café da Manhã',
    image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&h=300&fit=crop',
    prepTime: 25,
    calories: 260,
    protein: 22,
    carbs: 15,
    fats: 12,
    servings: 2,
    ingredients: [
      '4 ovos',
      'Brócolis picado',
      'Tomate cereja',
      'Cebola e pimentão',
      'Queijo branco ralado'
    ],
    instructions: [
      'Bata os ovos com sal e pimenta',
      'Adicione os legumes picados',
      'Despeje em forma untada',
      'Polvilhe queijo por cima',
      'Asse a 180°C por 20 minutos'
    ]
  },
  {
    id: 'r13',
    name: 'Açaí Bowl Proteico',
    category: 'Café da Manhã',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=300&fit=crop',
    prepTime: 8,
    calories: 380,
    protein: 20,
    carbs: 52,
    fats: 10,
    servings: 1,
    ingredients: [
      '100g de polpa de açaí',
      '1 banana congelada',
      '1/2 scoop de whey',
      'Granola e frutas',
      'Mel'
    ],
    instructions: [
      'Bata açaí, banana e whey no liquidificador',
      'Despeje em uma tigela',
      'Decore com granola e frutas',
      'Regue com mel',
      'Sirva imediatamente'
    ]
  },
  {
    id: 'r14',
    name: 'Pão Integral com Pasta de Amendoim',
    category: 'Café da Manhã',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop',
    prepTime: 5,
    calories: 320,
    protein: 16,
    carbs: 38,
    fats: 12,
    servings: 1,
    ingredients: [
      '2 fatias de pão integral',
      '2 colheres de pasta de amendoim',
      '1 banana fatiada',
      'Canela',
      'Mel (opcional)'
    ],
    instructions: [
      'Toste o pão',
      'Espalhe a pasta de amendoim',
      'Adicione as fatias de banana',
      'Polvilhe canela',
      'Sirva'
    ]
  },
  {
    id: 'r15',
    name: 'Smoothie de Frutas Vermelhas',
    category: 'Café da Manhã',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=300&fit=crop',
    prepTime: 5,
    calories: 240,
    protein: 20,
    carbs: 32,
    fats: 3,
    servings: 1,
    ingredients: [
      '100g de frutas vermelhas congeladas',
      '1 scoop de whey',
      '200ml de leite desnatado',
      '1 colher de linhaça',
      'Adoçante (opcional)'
    ],
    instructions: [
      'Coloque todos os ingredientes no liquidificador',
      'Bata até ficar cremoso',
      'Adicione gelo se desejar',
      'Sirva imediatamente'
    ]
  },
  {
    id: 'r16',
    name: 'Waffle Proteico',
    category: 'Café da Manhã',
    image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=400&h=300&fit=crop',
    prepTime: 15,
    calories: 290,
    protein: 24,
    carbs: 35,
    fats: 6,
    servings: 1,
    ingredients: [
      '1 ovo',
      '3 colheres de aveia',
      '1 scoop de whey',
      '50ml de leite',
      'Fermento em pó'
    ],
    instructions: [
      'Misture todos os ingredientes',
      'Aqueça a máquina de waffle',
      'Despeje a massa',
      'Cozinhe por 5 minutos',
      'Sirva com frutas'
    ]
  },
  {
    id: 'r17',
    name: 'Chia Pudding',
    category: 'Café da Manhã',
    image: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=400&h=300&fit=crop',
    prepTime: 5,
    calories: 220,
    protein: 12,
    carbs: 28,
    fats: 8,
    servings: 1,
    ingredients: [
      '3 colheres de chia',
      '200ml de leite de amêndoas',
      '1 colher de mel',
      'Frutas frescas',
      'Coco ralado'
    ],
    instructions: [
      'Misture chia, leite e mel',
      'Deixe na geladeira por 4 horas',
      'Mexa após 1 hora',
      'Sirva com frutas e coco'
    ]
  },
  {
    id: 'r18',
    name: 'Torrada Francesa Fit',
    category: 'Café da Manhã',
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&h=300&fit=crop',
    prepTime: 10,
    calories: 280,
    protein: 18,
    carbs: 36,
    fats: 7,
    servings: 1,
    ingredients: [
      '2 fatias de pão integral',
      '2 ovos',
      'Canela',
      'Leite desnatado',
      'Mel'
    ],
    instructions: [
      'Bata ovos com leite e canela',
      'Mergulhe o pão na mistura',
      'Doure em frigideira antiaderente',
      'Vire e doure o outro lado',
      'Sirva com mel'
    ]
  },
  {
    id: 'r19',
    name: 'Muffin de Banana Fit',
    category: 'Café da Manhã',
    image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400&h=300&fit=crop',
    prepTime: 25,
    calories: 180,
    protein: 8,
    carbs: 28,
    fats: 5,
    servings: 6,
    ingredients: [
      '2 bananas maduras',
      '2 ovos',
      '100g de aveia',
      'Canela',
      'Fermento'
    ],
    instructions: [
      'Amasse as bananas',
      'Misture todos os ingredientes',
      'Distribua em forminhas',
      'Asse a 180°C por 20 minutos',
      'Deixe esfriar'
    ]
  },
  {
    id: 'r20',
    name: 'Vitamina de Mamão com Aveia',
    category: 'Café da Manhã',
    image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=400&h=300&fit=crop',
    prepTime: 5,
    calories: 200,
    protein: 10,
    carbs: 35,
    fats: 3,
    servings: 1,
    ingredients: [
      '1/2 mamão papaia',
      '200ml de leite desnatado',
      '2 colheres de aveia',
      '1 colher de mel',
      'Gelo'
    ],
    instructions: [
      'Corte o mamão em cubos',
      'Bata todos os ingredientes',
      'Adicione gelo',
      'Bata novamente',
      'Sirva gelado'
    ]
  },
  {
    id: 'r21',
    name: 'Queijo Cottage com Frutas',
    category: 'Café da Manhã',
    image: 'https://images.unsplash.com/photo-1571212515416-fef01fc43637?w=400&h=300&fit=crop',
    prepTime: 5,
    calories: 210,
    protein: 18,
    carbs: 24,
    fats: 5,
    servings: 1,
    ingredients: [
      '150g de queijo cottage',
      'Morangos e kiwi',
      '1 colher de mel',
      'Amêndoas laminadas',
      'Hortelã'
    ],
    instructions: [
      'Coloque o cottage em uma tigela',
      'Adicione as frutas picadas',
      'Regue com mel',
      'Polvilhe amêndoas',
      'Decore com hortelã'
    ]
  },
  {
    id: 'r22',
    name: 'Smoothie Bowl de Manga',
    category: 'Café da Manhã',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=300&fit=crop',
    prepTime: 8,
    calories: 310,
    protein: 16,
    carbs: 48,
    fats: 7,
    servings: 1,
    ingredients: [
      '1 manga congelada',
      '1/2 banana',
      '100ml de leite de coco',
      'Granola',
      'Coco ralado'
    ],
    instructions: [
      'Bata manga, banana e leite',
      'Despeje em uma tigela',
      'Decore com granola',
      'Adicione coco ralado',
      'Sirva imediatamente'
    ]
  },
  {
    id: 'r23',
    name: 'Omelete de Cogumelos',
    category: 'Café da Manhã',
    image: 'https://images.unsplash.com/photo-1546069901-eacef0df6022?w=400&h=300&fit=crop',
    prepTime: 12,
    calories: 240,
    protein: 20,
    carbs: 8,
    fats: 14,
    servings: 1,
    ingredients: [
      '3 ovos',
      '100g de cogumelos',
      'Cebola',
      'Salsinha',
      'Azeite'
    ],
    instructions: [
      'Refogue os cogumelos com cebola',
      'Bata os ovos',
      'Despeje sobre os cogumelos',
      'Cozinhe até firmar',
      'Polvilhe salsinha'
    ]
  },
  {
    id: 'r24',
    name: 'Panqueca de Batata Doce',
    category: 'Café da Manhã',
    image: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=400&h=300&fit=crop',
    prepTime: 15,
    calories: 270,
    protein: 14,
    carbs: 38,
    fats: 7,
    servings: 1,
    ingredients: [
      '100g de batata doce cozida',
      '2 ovos',
      '2 colheres de aveia',
      'Canela',
      'Mel'
    ],
    instructions: [
      'Amasse a batata doce',
      'Misture com ovos e aveia',
      'Adicione canela',
      'Frite em frigideira',
      'Sirva com mel'
    ]
  },
  {
    id: 'r25',
    name: 'Iogurte com Granola Caseira',
    category: 'Café da Manhã',
    image: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=400&h=300&fit=crop',
    prepTime: 5,
    calories: 300,
    protein: 20,
    carbs: 40,
    fats: 8,
    servings: 1,
    ingredients: [
      '200g de iogurte grego',
      '50g de granola',
      'Frutas vermelhas',
      'Mel',
      'Castanhas'
    ],
    instructions: [
      'Coloque o iogurte na tigela',
      'Adicione a granola',
      'Decore com frutas',
      'Regue com mel',
      'Finalize com castanhas'
    ]
  },

  // ===== LANCHES (25 receitas) =====
  {
    id: 'r26',
    name: 'Pasta de Atum com Cream Cheese',
    category: 'Lanches',
    image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400&h=300&fit=crop',
    prepTime: 5,
    calories: 180,
    protein: 22,
    carbs: 4,
    fats: 9,
    servings: 1,
    ingredients: [
      '1 lata de atum',
      '2 colheres de cream cheese light',
      'Cebolinha',
      'Limão',
      'Sal e pimenta'
    ],
    instructions: [
      'Escorra o atum',
      'Misture com cream cheese',
      'Adicione cebolinha picada',
      'Tempere com limão, sal e pimenta',
      'Sirva com torradas integrais'
    ]
  },
  {
    id: 'r27',
    name: 'Chips de Batata Doce',
    category: 'Lanches',
    image: 'https://images.unsplash.com/photo-1528751014936-863e6e7a319c?w=400&h=300&fit=crop',
    prepTime: 30,
    calories: 150,
    protein: 2,
    carbs: 28,
    fats: 4,
    servings: 2,
    ingredients: [
      '1 batata doce grande',
      '1 colher de azeite',
      'Sal marinho',
      'Páprica',
      'Alecrim'
    ],
    instructions: [
      'Corte a batata em fatias finas',
      'Tempere com azeite e especiarias',
      'Disponha em assadeira',
      'Asse a 180°C por 25 minutos',
      'Vire na metade do tempo'
    ]
  },
  {
    id: 'r28',
    name: 'Bolinha de Tâmaras com Castanhas',
    category: 'Lanches',
    image: 'https://images.unsplash.com/photo-1558326567-98ae2405596b?w=400&h=300&fit=crop',
    prepTime: 10,
    calories: 120,
    protein: 4,
    carbs: 18,
    fats: 5,
    servings: 8,
    ingredients: [
      '10 tâmaras sem caroço',
      '50g de castanhas',
      '2 colheres de cacau',
      'Coco ralado',
      'Canela'
    ],
    instructions: [
      'Processe tâmaras e castanhas',
      'Adicione cacau e canela',
      'Faça bolinhas',
      'Passe no coco ralado',
      'Leve à geladeira'
    ]
  },
  {
    id: 'r29',
    name: 'Guacamole com Cenoura',
    category: 'Lanches',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=300&fit=crop',
    prepTime: 8,
    calories: 160,
    protein: 3,
    carbs: 12,
    fats: 12,
    servings: 2,
    ingredients: [
      '1 abacate maduro',
      'Tomate picado',
      'Cebola roxa',
      'Limão',
      'Cenouras baby'
    ],
    instructions: [
      'Amasse o abacate',
      'Adicione tomate e cebola',
      'Tempere com limão e sal',
      'Misture bem',
      'Sirva com cenouras'
    ]
  },
  {
    id: 'r30',
    name: 'Ovos Cozidos Recheados',
    category: 'Lanches',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=300&fit=crop',
    prepTime: 15,
    calories: 140,
    protein: 12,
    carbs: 2,
    fats: 10,
    servings: 2,
    ingredients: [
      '4 ovos',
      '2 colheres de iogurte grego',
      'Mostarda',
      'Páprica',
      'Cebolinha'
    ],
    instructions: [
      'Cozinhe os ovos',
      'Corte ao meio e retire as gemas',
      'Misture gemas com iogurte e mostarda',
      'Recheie as claras',
      'Polvilhe páprica'
    ]
  },
  {
    id: 'r31',
    name: 'Palitos de Queijo Assado',
    category: 'Lanches',
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&h=300&fit=crop',
    prepTime: 20,
    calories: 200,
    protein: 16,
    carbs: 8,
    fats: 12,
    servings: 2,
    ingredients: [
      '150g de queijo minas',
      '1 ovo',
      'Farinha de aveia',
      'Orégano',
      'Gergelim'
    ],
    instructions: [
      'Corte o queijo em palitos',
      'Passe no ovo batido',
      'Empane na aveia com orégano',
      'Disponha em assadeira',
      'Asse até dourar'
    ]
  },
  {
    id: 'r32',
    name: 'Hummus de Grão de Bico',
    category: 'Lanches',
    image: 'https://images.unsplash.com/photo-1571490008841-2d3a6505c7f6?w=400&h=300&fit=crop',
    prepTime: 10,
    calories: 130,
    protein: 6,
    carbs: 16,
    fats: 5,
    servings: 4,
    ingredients: [
      '200g de grão de bico cozido',
      '2 colheres de tahine',
      'Alho',
      'Limão',
      'Azeite'
    ],
    instructions: [
      'Bata o grão de bico no processador',
      'Adicione tahine, alho e limão',
      'Processe até cremoso',
      'Regue com azeite',
      'Sirva com vegetais'
    ]
  },
  {
    id: 'r33',
    name: 'Wrap de Alface com Frango',
    category: 'Lanches',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop',
    prepTime: 10,
    calories: 180,
    protein: 24,
    carbs: 8,
    fats: 6,
    servings: 1,
    ingredients: [
      'Folhas de alface',
      '100g de frango desfiado',
      'Tomate',
      'Cenoura ralada',
      'Iogurte grego'
    ],
    instructions: [
      'Lave as folhas de alface',
      'Misture frango com iogurte',
      'Adicione vegetais',
      'Coloque sobre a alface',
      'Enrole e sirva'
    ]
  },
  {
    id: 'r34',
    name: 'Cookies de Aveia e Banana',
    category: 'Lanches',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop',
    prepTime: 20,
    calories: 90,
    protein: 3,
    carbs: 16,
    fats: 2,
    servings: 10,
    ingredients: [
      '2 bananas maduras',
      '150g de aveia',
      'Canela',
      'Gotas de chocolate 70%',
      'Mel (opcional)'
    ],
    instructions: [
      'Amasse as bananas',
      'Misture com aveia e canela',
      'Adicione gotas de chocolate',
      'Faça bolinhas e achate',
      'Asse a 180°C por 15 minutos'
    ]
  },
  {
    id: 'r35',
    name: 'Edamame Temperado',
    category: 'Lanches',
    image: 'https://images.unsplash.com/photo-1583663848850-46af132dc08e?w=400&h=300&fit=crop',
    prepTime: 10,
    calories: 120,
    protein: 11,
    carbs: 10,
    fats: 5,
    servings: 2,
    ingredients: [
      '200g de edamame',
      'Sal marinho',
      'Alho em pó',
      'Pimenta',
      'Limão'
    ],
    instructions: [
      'Cozinhe o edamame',
      'Escorra bem',
      'Tempere com sal e especiarias',
      'Regue com limão',
      'Sirva quente'
    ]
  },
  {
    id: 'r36',
    name: 'Smoothie de Abacate',
    category: 'Lanches',
    image: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=400&h=300&fit=crop',
    prepTime: 5,
    calories: 220,
    protein: 8,
    carbs: 24,
    fats: 12,
    servings: 1,
    ingredients: [
      '1/2 abacate',
      '200ml de leite de amêndoas',
      '1 colher de mel',
      'Hortelã',
      'Gelo'
    ],
    instructions: [
      'Bata todos os ingredientes',
      'Adicione gelo',
      'Bata até cremoso',
      'Sirva gelado'
    ]
  },
  {
    id: 'r37',
    name: 'Espetinho de Frutas',
    category: 'Lanches',
    image: 'https://images.unsplash.com/photo-1564093497595-593b96d80180?w=400&h=300&fit=crop',
    prepTime: 10,
    calories: 100,
    protein: 2,
    carbs: 24,
    fats: 1,
    servings: 2,
    ingredients: [
      'Morangos',
      'Uvas',
      'Melão',
      'Kiwi',
      'Mel para regar'
    ],
    instructions: [
      'Corte as frutas em cubos',
      'Monte nos palitos',
      'Alterne as cores',
      'Regue com mel',
      'Sirva gelado'
    ]
  },
  {
    id: 'r38',
    name: 'Queijo Branco com Geleia',
    category: 'Lanches',
    image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?w=400&h=300&fit=crop',
    prepTime: 5,
    calories: 150,
    protein: 12,
    carbs: 18,
    fats: 4,
    servings: 1,
    ingredients: [
      '100g de queijo branco',
      '2 colheres de geleia sem açúcar',
      'Torradas integrais',
      'Hortelã',
      'Nozes'
    ],
    instructions: [
      'Corte o queijo em fatias',
      'Coloque sobre as torradas',
      'Adicione a geleia',
      'Decore com hortelã',
      'Finalize com nozes'
    ]
  },
  {
    id: 'r39',
    name: 'Barra de Cereal Caseira',
    category: 'Lanches',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=300&fit=crop',
    prepTime: 30,
    calories: 140,
    protein: 5,
    carbs: 20,
    fats: 5,
    servings: 8,
    ingredients: [
      '150g de aveia',
      '50g de mel',
      'Castanhas picadas',
      'Frutas secas',
      'Canela'
    ],
    instructions: [
      'Misture todos os ingredientes',
      'Espalhe em forma',
      'Pressione bem',
      'Asse a 160°C por 20 minutos',
      'Corte em barras'
    ]
  },
  {
    id: 'r40',
    name: 'Tomate Cereja com Mussarela',
    category: 'Lanches',
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=400&h=300&fit=crop',
    prepTime: 5,
    calories: 110,
    protein: 8,
    carbs: 6,
    fats: 7,
    servings: 1,
    ingredients: [
      'Tomates cereja',
      'Bolinhas de mussarela',
      'Manjericão',
      'Azeite',
      'Sal'
    ],
    instructions: [
      'Monte nos palitos',
      'Alterne tomate e queijo',
      'Adicione manjericão',
      'Regue com azeite',
      'Tempere com sal'
    ]
  },
  {
    id: 'r41',
    name: 'Pipoca Temperada',
    category: 'Lanches',
    image: 'https://images.unsplash.com/photo-1578849278619-e73505e9610f?w=400&h=300&fit=crop',
    prepTime: 10,
    calories: 100,
    protein: 3,
    carbs: 20,
    fats: 2,
    servings: 2,
    ingredients: [
      '50g de milho para pipoca',
      '1 colher de azeite',
      'Sal',
      'Páprica',
      'Alho em pó'
    ],
    instructions: [
      'Estoure o milho',
      'Tempere com azeite',
      'Adicione sal e especiarias',
      'Misture bem',
      'Sirva quente'
    ]
  },
  {
    id: 'r42',
    name: 'Iogurte com Chia e Frutas',
    category: 'Lanches',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop',
    prepTime: 5,
    calories: 180,
    protein: 14,
    carbs: 22,
    fats: 5,
    servings: 1,
    ingredients: [
      '150g de iogurte natural',
      '1 colher de chia',
      'Frutas vermelhas',
      'Mel',
      'Amêndoas'
    ],
    instructions: [
      'Coloque o iogurte em um pote',
      'Adicione a chia',
      'Decore com frutas',
      'Regue com mel',
      'Finalize com amêndoas'
    ]
  },
  {
    id: 'r43',
    name: 'Rolinhos de Peito de Peru',
    category: 'Lanches',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop',
    prepTime: 8,
    calories: 130,
    protein: 18,
    carbs: 6,
    fats: 4,
    servings: 1,
    ingredients: [
      '4 fatias de peito de peru',
      'Cream cheese light',
      'Cenoura ralada',
      'Alface',
      'Tomate'
    ],
    instructions: [
      'Espalhe cream cheese no peru',
      'Adicione os vegetais',
      'Enrole firmemente',
      'Corte ao meio',
      'Sirva gelado'
    ]
  },
  {
    id: 'r44',
    name: 'Mix de Castanhas',
    category: 'Lanches',
    image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop',
    prepTime: 5,
    calories: 170,
    protein: 6,
    carbs: 8,
    fats: 14,
    servings: 1,
    ingredients: [
      'Amêndoas',
      'Castanha do Pará',
      'Nozes',
      'Castanha de caju',
      'Uvas passas'
    ],
    instructions: [
      'Misture todas as castanhas',
      'Adicione as uvas passas',
      'Porcione em saquinhos',
      'Armazene em local seco',
      'Consuma 1 porção'
    ]
  },
  {
    id: 'r45',
    name: 'Crepe de Tapioca com Banana',
    category: 'Lanches',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop',
    prepTime: 10,
    calories: 190,
    protein: 4,
    carbs: 36,
    fats: 4,
    servings: 1,
    ingredients: [
      '3 colheres de tapioca',
      '1 banana',
      'Canela',
      'Mel',
      'Coco ralado'
    ],
    instructions: [
      'Prepare a tapioca',
      'Adicione banana fatiada',
      'Polvilhe canela',
      'Dobre ao meio',
      'Finalize com mel e coco'
    ]
  },
  {
    id: 'r46',
    name: 'Salada de Frutas Tropical',
    category: 'Lanches',
    image: 'https://images.unsplash.com/photo-1564093497595-593b96d80180?w=400&h=300&fit=crop',
    prepTime: 10,
    calories: 120,
    protein: 2,
    carbs: 28,
    fats: 1,
    servings: 2,
    ingredients: [
      'Abacaxi',
      'Manga',
      'Mamão',
      'Hortelã',
      'Suco de limão'
    ],
    instructions: [
      'Corte as frutas em cubos',
      'Misture em uma tigela',
      'Adicione suco de limão',
      'Decore com hortelã',
      'Sirva gelado'
    ]
  },
  {
    id: 'r47',
    name: 'Bruschetta de Tomate',
    category: 'Lanches',
    image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&h=300&fit=crop',
    prepTime: 12,
    calories: 140,
    protein: 6,
    carbs: 20,
    fats: 4,
    servings: 2,
    ingredients: [
      'Pão integral',
      'Tomates',
      'Manjericão',
      'Alho',
      'Azeite'
    ],
    instructions: [
      'Toste o pão',
      'Pique tomates e manjericão',
      'Misture com alho e azeite',
      'Coloque sobre o pão',
      'Sirva imediatamente'
    ]
  },
  {
    id: 'r48',
    name: 'Mousse de Abacate Light',
    category: 'Lanches',
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=400&h=300&fit=crop',
    prepTime: 8,
    calories: 160,
    protein: 4,
    carbs: 18,
    fats: 9,
    servings: 2,
    ingredients: [
      '1 abacate',
      '2 colheres de cacau',
      'Mel',
      'Leite de coco',
      'Essência de baunilha'
    ],
    instructions: [
      'Bata todos os ingredientes',
      'Ajuste a doçura',
      'Leve à geladeira',
      'Sirva gelado',
      'Decore com cacau'
    ]
  },
  {
    id: 'r49',
    name: 'Sanduíche Natural',
    category: 'Lanches',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=400&h=300&fit=crop',
    prepTime: 10,
    calories: 220,
    protein: 16,
    carbs: 28,
    fats: 6,
    servings: 1,
    ingredients: [
      'Pão integral',
      'Frango desfiado',
      'Alface e tomate',
      'Cenoura ralada',
      'Iogurte grego'
    ],
    instructions: [
      'Misture frango com iogurte',
      'Monte o sanduíche',
      'Adicione vegetais',
      'Corte ao meio',
      'Sirva'
    ]
  },
  {
    id: 'r50',
    name: 'Gelatina com Frutas',
    category: 'Lanches',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop',
    prepTime: 5,
    calories: 80,
    protein: 6,
    carbs: 14,
    fats: 0,
    servings: 2,
    ingredients: [
      'Gelatina diet',
      'Morangos',
      'Kiwi',
      'Água',
      'Hortelã'
    ],
    instructions: [
      'Prepare a gelatina',
      'Adicione frutas picadas',
      'Leve à geladeira',
      'Espere firmar',
      'Decore com hortelã'
    ]
  },

  // ===== ALMOÇO (25 receitas) =====
  {
    id: 'r51',
    name: 'Frango Grelhado com Batata Doce',
    category: 'Almoço',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop',
    prepTime: 25,
    calories: 420,
    protein: 45,
    carbs: 38,
    fats: 8,
    servings: 1,
    ingredients: [
      '150g de peito de frango',
      '200g de batata doce',
      'Temperos: alho, limão, páprica',
      '100g de brócolis',
      'Sal e pimenta'
    ],
    instructions: [
      'Tempere o frango com alho, limão, páprica, sal e pimenta',
      'Corte a batata doce em cubos e cozinhe no vapor por 15 min',
      'Grelhe o frango em fogo médio por 6-8 min de cada lado',
      'Cozinhe o brócolis no vapor por 5 minutos',
      'Monte o prato e sirva'
    ]
  },
  {
    id: 'r52',
    name: 'Salmão com Quinoa e Aspargos',
    category: 'Almoço',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop',
    prepTime: 30,
    calories: 480,
    protein: 38,
    carbs: 42,
    fats: 16,
    servings: 1,
    ingredients: [
      '150g de salmão',
      '100g de quinoa',
      'Aspargos',
      'Limão',
      'Azeite e ervas'
    ],
    instructions: [
      'Cozinhe a quinoa',
      'Tempere o salmão com limão',
      'Grelhe o salmão por 4 min de cada lado',
      'Refogue os aspargos',
      'Monte o prato'
    ]
  },
  {
    id: 'r53',
    name: 'Bowl de Arroz Integral com Legumes',
    category: 'Almoço',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
    prepTime: 35,
    calories: 380,
    protein: 18,
    carbs: 58,
    fats: 10,
    servings: 1,
    ingredients: [
      '150g de arroz integral',
      'Brócolis e cenoura',
      'Grão de bico',
      'Abacate',
      'Molho de tahine'
    ],
    instructions: [
      'Cozinhe o arroz integral',
      'Cozinhe os legumes no vapor',
      'Monte o bowl',
      'Adicione grão de bico e abacate',
      'Regue com molho de tahine'
    ]
  },
  {
    id: 'r54',
    name: 'Tilápia ao Forno com Legumes',
    category: 'Almoço',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop',
    prepTime: 30,
    calories: 320,
    protein: 42,
    carbs: 24,
    fats: 6,
    servings: 1,
    ingredients: [
      '150g de filé de tilápia',
      'Abobrinha e tomate',
      'Cebola e pimentão',
      'Limão e ervas',
      'Azeite'
    ],
    instructions: [
      'Tempere o peixe com limão',
      'Corte os legumes',
      'Disponha tudo em assadeira',
      'Regue com azeite',
      'Asse a 200°C por 25 minutos'
    ]
  },
  {
    id: 'r55',
    name: 'Strogonoff de Frango Light',
    category: 'Almoço',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop',
    prepTime: 25,
    calories: 380,
    protein: 38,
    carbs: 32,
    fats: 12,
    servings: 2,
    ingredients: [
      '300g de frango em cubos',
      'Cogumelos',
      'Iogurte grego',
      'Mostarda',
      'Arroz integral'
    ],
    instructions: [
      'Refogue o frango',
      'Adicione cogumelos',
      'Misture iogurte e mostarda',
      'Cozinhe por 10 minutos',
      'Sirva com arroz'
    ]
  },
  {
    id: 'r56',
    name: 'Salada Caesar com Frango',
    category: 'Almoço',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop',
    prepTime: 20,
    calories: 350,
    protein: 36,
    carbs: 18,
    fats: 16,
    servings: 1,
    ingredients: [
      'Alface romana',
      '120g de frango grelhado',
      'Parmesão',
      'Croutons integrais',
      'Molho caesar light'
    ],
    instructions: [
      'Grelhe o frango',
      'Corte a alface',
      'Prepare o molho',
      'Monte a salada',
      'Finalize com parmesão'
    ]
  },
  {
    id: 'r57',
    name: 'Escondidinho de Frango',
    category: 'Almoço',
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=300&fit=crop',
    prepTime: 40,
    calories: 420,
    protein: 32,
    carbs: 48,
    fats: 12,
    servings: 2,
    ingredients: [
      '300g de frango desfiado',
      '400g de mandioca',
      'Tomate e cebola',
      'Queijo light',
      'Temperos'
    ],
    instructions: [
      'Cozinhe e amasse a mandioca',
      'Refogue o frango',
      'Monte em refratário',
      'Cubra com purê',
      'Asse até dourar'
    ]
  },
  {
    id: 'r58',
    name: 'Hambúrguer Caseiro de Carne',
    category: 'Almoço',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
    prepTime: 20,
    calories: 380,
    protein: 35,
    carbs: 32,
    fats: 14,
    servings: 2,
    ingredients: [
      '300g de patinho moído',
      'Cebola e alho',
      'Pão integral',
      'Alface e tomate',
      'Mostarda'
    ],
    instructions: [
      'Tempere a carne',
      'Faça os hambúrgueres',
      'Grelhe por 5 min cada lado',
      'Monte o sanduíche',
      'Sirva'
    ]
  },
  {
    id: 'r59',
    name: 'Risoto de Cogumelos Light',
    category: 'Almoço',
    image: 'https://images.unsplash.com/photo-1476124369491-f4c6e1e8c3b0?w=400&h=300&fit=crop',
    prepTime: 35,
    calories: 360,
    protein: 14,
    carbs: 58,
    fats: 8,
    servings: 2,
    ingredients: [
      '200g de arroz arbóreo',
      'Cogumelos variados',
      'Caldo de legumes',
      'Vinho branco',
      'Parmesão'
    ],
    instructions: [
      'Refogue os cogumelos',
      'Adicione o arroz',
      'Vá adicionando caldo aos poucos',
      'Mexa constantemente',
      'Finalize com parmesão'
    ]
  },
  {
    id: 'r60',
    name: 'Macarrão Integral ao Pesto',
    category: 'Almoço',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop',
    prepTime: 20,
    calories: 400,
    protein: 18,
    carbs: 62,
    fats: 12,
    servings: 2,
    ingredients: [
      '200g de macarrão integral',
      'Manjericão fresco',
      'Alho e azeite',
      'Castanhas',
      'Parmesão'
    ],
    instructions: [
      'Cozinhe o macarrão',
      'Bata pesto no processador',
      'Misture o macarrão com pesto',
      'Adicione tomates cereja',
      'Finalize com parmesão'
    ]
  },
  {
    id: 'r61',
    name: 'Frango Xadrez',
    category: 'Almoço',
    image: 'https://images.unsplash.com/photo-1603073163308-9fa2b5e7e9f7?w=400&h=300&fit=crop',
    prepTime: 25,
    calories: 380,
    protein: 40,
    carbs: 36,
    fats: 10,
    servings: 2,
    ingredients: [
      '300g de frango em cubos',
      'Pimentões coloridos',
      'Cebola',
      'Molho shoyu light',
      'Arroz integral'
    ],
    instructions: [
      'Refogue o frango',
      'Adicione os legumes',
      'Tempere com shoyu',
      'Cozinhe por 10 minutos',
      'Sirva com arroz'
    ]
  },
  {
    id: 'r62',
    name: 'Atum Selado com Salada',
    category: 'Almoço',
    image: 'https://images.unsplash.com/photo-1580959375944-0b9e9e7e4f3a?w=400&h=300&fit=crop',
    prepTime: 15,
    calories: 340,
    protein: 42,
    carbs: 18,
    fats: 12,
    servings: 1,
    ingredients: [
      '150g de atum fresco',
      'Mix de folhas',
      'Tomate cereja',
      'Gergelim',
      'Molho de soja'
    ],
    instructions: [
      'Sele o atum rapidamente',
      'Corte em fatias',
      'Monte a salada',
      'Disponha o atum',
      'Finalize com gergelim'
    ]
  },
  {
    id: 'r63',
    name: 'Lasanha de Berinjela',
    category: 'Almoço',
    image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400&h=300&fit=crop',
    prepTime: 45,
    calories: 380,
    protein: 28,
    carbs: 32,
    fats: 16,
    servings: 4,
    ingredients: [
      '2 berinjelas grandes',
      '400g de carne moída',
      'Molho de tomate',
      'Queijo light',
      'Manjericão'
    ],
    instructions: [
      'Corte berinjelas em fatias',
      'Grelhe as fatias',
      'Refogue a carne',
      'Monte em camadas',
      'Asse por 30 minutos'
    ]
  },
  {
    id: 'r64',
    name: 'Poke Bowl de Salmão',
    category: 'Almoço',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
    prepTime: 20,
    calories: 450,
    protein: 35,
    carbs: 48,
    fats: 14,
    servings: 1,
    ingredients: [
      '120g de salmão cru',
      'Arroz japonês',
      'Edamame',
      'Abacate',
      'Molho teriyaki'
    ],
    instructions: [
      'Cozinhe o arroz',
      'Corte o salmão em cubos',
      'Monte o bowl',
      'Adicione vegetais',
      'Regue com molho'
    ]
  },
  {
    id: 'r65',
    name: 'Frango ao Curry Light',
    category: 'Almoço',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop',
    prepTime: 30,
    calories: 400,
    protein: 38,
    carbs: 42,
    fats: 10,
    servings: 2,
    ingredients: [
      '300g de frango',
      'Leite de coco light',
      'Curry em pó',
      'Legumes variados',
      'Arroz integral'
    ],
    instructions: [
      'Refogue o frango',
      'Adicione curry e leite de coco',
      'Cozinhe os legumes',
      'Deixe apurar',
      'Sirva com arroz'
    ]
  },
  {
    id: 'r66',
    name: 'Wrap de Frango Grelhado',
    category: 'Almoço',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop',
    prepTime: 15,
    calories: 360,
    protein: 32,
    carbs: 38,
    fats: 10,
    servings: 1,
    ingredients: [
      'Tortilha integral',
      '120g de frango grelhado',
      'Alface e tomate',
      'Iogurte grego',
      'Molho de ervas'
    ],
    instructions: [
      'Grelhe o frango',
      'Aqueça a tortilha',
      'Espalhe o molho',
      'Adicione frango e vegetais',
      'Enrole e sirva'
    ]
  },
  {
    id: 'r67',
    name: 'Carne Moída com Legumes',
    category: 'Almoço',
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop',
    prepTime: 25,
    calories: 380,
    protein: 35,
    carbs: 32,
    fats: 14,
    servings: 2,
    ingredients: [
      '300g de carne moída',
      'Cenoura e vagem',
      'Tomate e cebola',
      'Batata',
      'Temperos'
    ],
    instructions: [
      'Refogue a carne',
      'Adicione os legumes',
      'Tempere a gosto',
      'Cozinhe até os legumes ficarem macios',
      'Sirva com arroz'
    ]
  },
  {
    id: 'r68',
    name: 'Salada de Grão de Bico',
    category: 'Almoço',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
    prepTime: 15,
    calories: 350,
    protein: 18,
    carbs: 48,
    fats: 10,
    servings: 2,
    ingredients: [
      '300g de grão de bico',
      'Tomate e pepino',
      'Cebola roxa',
      'Limão e azeite',
      'Hortelã'
    ],
    instructions: [
      'Escorra o grão de bico',
      'Pique os vegetais',
      'Misture tudo',
      'Tempere com limão e azeite',
      'Decore com hortelã'
    ]
  },
  {
    id: 'r69',
    name: 'Peito de Peru ao Molho',
    category: 'Almoço',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop',
    prepTime: 30,
    calories: 360,
    protein: 42,
    carbs: 28,
    fats: 8,
    servings: 2,
    ingredients: [
      '300g de peito de peru',
      'Molho de tomate',
      'Cogumelos',
      'Ervas',
      'Purê de batata doce'
    ],
    instructions: [
      'Grelhe o peru',
      'Prepare o molho',
      'Refogue os cogumelos',
      'Monte o prato',
      'Sirva com purê'
    ]
  },
  {
    id: 'r70',
    name: 'Yakisoba Light',
    category: 'Almoço',
    image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400&h=300&fit=crop',
    prepTime: 25,
    calories: 400,
    protein: 28,
    carbs: 52,
    fats: 10,
    servings: 2,
    ingredients: [
      'Macarrão para yakisoba',
      'Frango em tiras',
      'Legumes variados',
      'Molho shoyu light',
      'Gergelim'
    ],
    instructions: [
      'Cozinhe o macarrão',
      'Refogue frango e legumes',
      'Adicione o macarrão',
      'Tempere com shoyu',
      'Finalize com gergelim'
    ]
  },
  {
    id: 'r71',
    name: 'Filé Mignon com Legumes',
    category: 'Almoço',
    image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400&h=300&fit=crop',
    prepTime: 25,
    calories: 420,
    protein: 40,
    carbs: 24,
    fats: 18,
    servings: 1,
    ingredients: [
      '150g de filé mignon',
      'Aspargos',
      'Cenoura baby',
      'Batata bolinha',
      'Ervas finas'
    ],
    instructions: [
      'Tempere a carne',
      'Grelhe ao ponto desejado',
      'Cozinhe os legumes no vapor',
      'Monte o prato',
      'Finalize com ervas'
    ]
  },
  {
    id: 'r72',
    name: 'Omelete de Forno Recheado',
    category: 'Almoço',
    image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&h=300&fit=crop',
    prepTime: 30,
    calories: 340,
    protein: 28,
    carbs: 22,
    fats: 16,
    servings: 2,
    ingredients: [
      '6 ovos',
      'Frango desfiado',
      'Queijo cottage',
      'Tomate',
      'Manjericão'
    ],
    instructions: [
      'Bata os ovos',
      'Adicione o recheio',
      'Despeje em forma',
      'Asse a 180°C',
      'Sirva quente'
    ]
  },
  {
    id: 'r73',
    name: 'Camarão ao Alho e Limão',
    category: 'Almoço',
    image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=400&h=300&fit=crop',
    prepTime: 20,
    calories: 280,
    protein: 35,
    carbs: 18,
    fats: 8,
    servings: 1,
    ingredients: [
      '200g de camarão',
      'Alho',
      'Limão',
      'Azeite',
      'Arroz integral'
    ],
    instructions: [
      'Limpe os camarões',
      'Refogue com alho',
      'Adicione limão',
      'Cozinhe por 5 minutos',
      'Sirva com arroz'
    ]
  },
  {
    id: 'r74',
    name: 'Berinjela Recheada',
    category: 'Almoço',
    image: 'https://images.unsplash.com/photo-1572441713132-c542fc4fe282?w=400&h=300&fit=crop',
    prepTime: 40,
    calories: 320,
    protein: 22,
    carbs: 28,
    fats: 14,
    servings: 2,
    ingredients: [
      '2 berinjelas',
      'Carne moída',
      'Tomate',
      'Queijo light',
      'Manjericão'
    ],
    instructions: [
      'Corte berinjelas ao meio',
      'Retire a polpa',
      'Refogue o recheio',
      'Recheie as berinjelas',
      'Asse até dourar'
    ]
  },
  {
    id: 'r75',
    name: 'Buddha Bowl Completo',
    category: 'Almoço',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
    prepTime: 30,
    calories: 450,
    protein: 24,
    carbs: 58,
    fats: 14,
    servings: 1,
    ingredients: [
      'Quinoa',
      'Grão de bico assado',
      'Abacate',
      'Vegetais variados',
      'Molho tahine'
    ],
    instructions: [
      'Cozinhe a quinoa',
      'Asse o grão de bico',
      'Prepare os vegetais',
      'Monte o bowl',
      'Regue com molho'
    ]
  },

  // ===== JANTAR (25 receitas) =====
  {
    id: 'r76',
    name: 'Salada de Atum com Grão de Bico',
    category: 'Jantar',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
    prepTime: 15,
    calories: 350,
    protein: 32,
    carbs: 28,
    fats: 12,
    servings: 1,
    ingredients: [
      '1 lata de atum em água',
      '150g de grão de bico cozido',
      'Alface, tomate, pepino',
      '1 colher de sopa de azeite',
      'Suco de limão'
    ],
    instructions: [
      'Escorra o atum e coloque em uma tigela',
      'Adicione o grão de bico',
      'Pique os vegetais e misture',
      'Tempere com azeite, limão, sal e pimenta',
      'Misture bem e sirva'
    ]
  },
  {
    id: 'r77',
    name: 'Sopa de Legumes com Frango',
    category: 'Jantar',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop',
    prepTime: 30,
    calories: 280,
    protein: 28,
    carbs: 32,
    fats: 6,
    servings: 2,
    ingredients: [
      '200g de frango em cubos',
      'Cenoura, abobrinha, batata',
      'Caldo de legumes',
      'Temperos',
      'Salsinha'
    ],
    instructions: [
      'Refogue o frango',
      'Adicione os legumes picados',
      'Cubra com caldo',
      'Cozinhe por 20 minutos',
      'Finalize com salsinha'
    ]
  },
  {
    id: 'r78',
    name: 'Omelete Caprese',
    category: 'Jantar',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=300&fit=crop',
    prepTime: 12,
    calories: 280,
    protein: 22,
    carbs: 8,
    fats: 18,
    servings: 1,
    ingredients: [
      '3 ovos',
      'Tomate',
      'Mussarela de búfala',
      'Manjericão',
      'Azeite'
    ],
    instructions: [
      'Bata os ovos',
      'Despeje na frigideira',
      'Adicione tomate e queijo',
      'Dobre ao meio',
      'Finalize com manjericão'
    ]
  },
  {
    id: 'r79',
    name: 'Peixe Grelhado com Salada',
    category: 'Jantar',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop',
    prepTime: 20,
    calories: 320,
    protein: 38,
    carbs: 18,
    fats: 10,
    servings: 1,
    ingredients: [
      '150g de peixe branco',
      'Mix de folhas',
      'Tomate cereja',
      'Limão',
      'Azeite'
    ],
    instructions: [
      'Tempere o peixe com limão',
      'Grelhe por 4 min cada lado',
      'Prepare a salada',
      'Monte o prato',
      'Regue com azeite'
    ]
  },
  {
    id: 'r80',
    name: 'Wrap de Atum',
    category: 'Jantar',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop',
    prepTime: 10,
    calories: 300,
    protein: 26,
    carbs: 32,
    fats: 8,
    servings: 1,
    ingredients: [
      'Tortilha integral',
      '1 lata de atum',
      'Alface e tomate',
      'Cenoura ralada',
      'Iogurte grego'
    ],
    instructions: [
      'Misture atum com iogurte',
      'Aqueça a tortilha',
      'Adicione vegetais',
      'Coloque o atum',
      'Enrole e sirva'
    ]
  },
  {
    id: 'r81',
    name: 'Caldo Verde Light',
    category: 'Jantar',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop',
    prepTime: 25,
    calories: 220,
    protein: 12,
    carbs: 32,
    fats: 6,
    servings: 3,
    ingredients: [
      'Couve fatiada',
      'Batata',
      'Linguiça de frango',
      'Caldo de legumes',
      'Alho'
    ],
    instructions: [
      'Cozinhe as batatas',
      'Amasse levemente',
      'Adicione a couve',
      'Coloque a linguiça',
      'Cozinhe por 10 minutos'
    ]
  },
  {
    id: 'r82',
    name: 'Frango Desfiado com Legumes',
    category: 'Jantar',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop',
    prepTime: 30,
    calories: 320,
    protein: 36,
    carbs: 24,
    fats: 8,
    servings: 2,
    ingredients: [
      '300g de frango',
      'Cenoura e vagem',
      'Brócolis',
      'Shoyu light',
      'Gengibre'
    ],
    instructions: [
      'Cozinhe e desfie o frango',
      'Refogue os legumes',
      'Adicione o frango',
      'Tempere com shoyu',
      'Finalize com gengibre'
    ]
  },
  {
    id: 'r83',
    name: 'Salada Grega',
    category: 'Jantar',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop',
    prepTime: 15,
    calories: 280,
    protein: 14,
    carbs: 18,
    fats: 18,
    servings: 1,
    ingredients: [
      'Tomate e pepino',
      'Queijo feta',
      'Azeitonas',
      'Cebola roxa',
      'Azeite e orégano'
    ],
    instructions: [
      'Corte os vegetais',
      'Adicione queijo e azeitonas',
      'Tempere com azeite',
      'Polvilhe orégano',
      'Sirva fresco'
    ]
  },
  {
    id: 'r84',
    name: 'Abobrinha Recheada',
    category: 'Jantar',
    image: 'https://images.unsplash.com/photo-1572441713132-c542fc4fe282?w=400&h=300&fit=crop',
    prepTime: 35,
    calories: 300,
    protein: 24,
    carbs: 22,
    fats: 14,
    servings: 2,
    ingredients: [
      '2 abobrinhas grandes',
      'Frango moído',
      'Tomate',
      'Queijo light',
      'Manjericão'
    ],
    instructions: [
      'Corte abobrinhas ao meio',
      'Retire a polpa',
      'Refogue o recheio',
      'Recheie as abobrinhas',
      'Asse por 25 minutos'
    ]
  },
  {
    id: 'r85',
    name: 'Omelete de Cogumelos Light',
    category: 'Jantar',
    image: 'https://images.unsplash.com/photo-1546069901-eacef0df6022?w=400&h=300&fit=crop',
    prepTime: 15,
    calories: 240,
    protein: 20,
    carbs: 8,
    fats: 14,
    servings: 1,
    ingredients: [
      '3 ovos',
      '100g de cogumelos',
      'Cebola',
      'Salsinha',
      'Azeite'
    ],
    instructions: [
      'Refogue os cogumelos',
      'Bata os ovos',
      'Despeje sobre os cogumelos',
      'Cozinhe até firmar',
      'Polvilhe salsinha'
    ]
  },
  {
    id: 'r86',
    name: 'Creme de Abóbora',
    category: 'Jantar',
    image: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=400&h=300&fit=crop',
    prepTime: 30,
    calories: 180,
    protein: 8,
    carbs: 28,
    fats: 5,
    servings: 3,
    ingredients: [
      '500g de abóbora',
      'Cebola',
      'Caldo de legumes',
      'Gengibre',
      'Cream cheese light'
    ],
    instructions: [
      'Cozinhe a abóbora',
      'Refogue a cebola',
      'Bata tudo no liquidificador',
      'Adicione cream cheese',
      'Aqueça e sirva'
    ]
  },
  {
    id: 'r87',
    name: 'Salada de Quinoa',
    category: 'Jantar',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
    prepTime: 20,
    calories: 320,
    protein: 16,
    carbs: 42,
    fats: 10,
    servings: 2,
    ingredients: [
      '150g de quinoa',
      'Tomate e pepino',
      'Grão de bico',
      'Limão',
      'Hortelã'
    ],
    instructions: [
      'Cozinhe a quinoa',
      'Deixe esfriar',
      'Adicione vegetais',
      'Tempere com limão',
      'Decore com hortelã'
    ]
  },
  {
    id: 'r88',
    name: 'Frango ao Molho de Iogurte',
    category: 'Jantar',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop',
    prepTime: 25,
    calories: 340,
    protein: 38,
    carbs: 18,
    fats: 12,
    servings: 2,
    ingredients: [
      '300g de frango',
      'Iogurte grego',
      'Curry',
      'Alho',
      'Salada verde'
    ],
    instructions: [
      'Tempere o frango',
      'Grelhe o frango',
      'Prepare molho com iogurte',
      'Sirva com salada',
      'Regue com molho'
    ]
  },
  {
    id: 'r89',
    name: 'Espaguete de Abobrinha',
    category: 'Jantar',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop',
    prepTime: 15,
    calories: 220,
    protein: 12,
    carbs: 18,
    fats: 12,
    servings: 1,
    ingredients: [
      '2 abobrinhas',
      'Molho de tomate',
      'Alho',
      'Manjericão',
      'Parmesão'
    ],
    instructions: [
      'Corte abobrinha em espiral',
      'Refogue com alho',
      'Adicione molho de tomate',
      'Cozinhe por 5 minutos',
      'Finalize com parmesão'
    ]
  },
  {
    id: 'r90',
    name: 'Hambúrguer de Frango',
    category: 'Jantar',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
    prepTime: 20,
    calories: 320,
    protein: 32,
    carbs: 28,
    fats: 10,
    servings: 2,
    ingredients: [
      '300g de frango moído',
      'Cebola e alho',
      'Pão integral',
      'Alface e tomate',
      'Mostarda'
    ],
    instructions: [
      'Tempere o frango',
      'Faça os hambúrgueres',
      'Grelhe por 5 min cada lado',
      'Monte o sanduíche',
      'Sirva'
    ]
  },
  {
    id: 'r91',
    name: 'Salada Niçoise',
    category: 'Jantar',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop',
    prepTime: 20,
    calories: 360,
    protein: 28,
    carbs: 24,
    fats: 16,
    servings: 1,
    ingredients: [
      'Atum',
      'Ovos cozidos',
      'Batata',
      'Vagem',
      'Azeitonas'
    ],
    instructions: [
      'Cozinhe batata e vagem',
      'Prepare os ovos',
      'Monte a salada',
      'Adicione atum',
      'Tempere com azeite'
    ]
  },
  {
    id: 'r92',
    name: 'Tofu Grelhado com Legumes',
    category: 'Jantar',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
    prepTime: 20,
    calories: 280,
    protein: 22,
    carbs: 24,
    fats: 12,
    servings: 1,
    ingredients: [
      '150g de tofu',
      'Brócolis e cenoura',
      'Shoyu',
      'Gergelim',
      'Gengibre'
    ],
    instructions: [
      'Corte o tofu em cubos',
      'Grelhe o tofu',
      'Refogue os legumes',
      'Tempere com shoyu',
      'Finalize com gergelim'
    ]
  },
  {
    id: 'r93',
    name: 'Sopa de Lentilha',
    category: 'Jantar',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop',
    prepTime: 35,
    calories: 260,
    protein: 18,
    carbs: 42,
    fats: 4,
    servings: 3,
    ingredients: [
      '200g de lentilha',
      'Cenoura e batata',
      'Cebola e alho',
      'Caldo de legumes',
      'Cominho'
    ],
    instructions: [
      'Refogue cebola e alho',
      'Adicione lentilha e legumes',
      'Cubra com caldo',
      'Cozinhe por 30 minutos',
      'Tempere com cominho'
    ]
  },
  {
    id: 'r94',
    name: 'Peito de Frango Recheado',
    category: 'Jantar',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop',
    prepTime: 35,
    calories: 380,
    protein: 42,
    carbs: 18,
    fats: 16,
    servings: 2,
    ingredients: [
      '2 peitos de frango',
      'Queijo cottage',
      'Espinafre',
      'Tomate seco',
      'Ervas'
    ],
    instructions: [
      'Abra o frango em borboleta',
      'Recheie com cottage e espinafre',
      'Feche com palitos',
      'Grelhe ou asse',
      'Sirva com salada'
    ]
  },
  {
    id: 'r95',
    name: 'Salada de Frango com Abacate',
    category: 'Jantar',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop',
    prepTime: 15,
    calories: 380,
    protein: 32,
    carbs: 18,
    fats: 20,
    servings: 1,
    ingredients: [
      '120g de frango grelhado',
      '1/2 abacate',
      'Mix de folhas',
      'Tomate cereja',
      'Limão'
    ],
    instructions: [
      'Grelhe o frango',
      'Corte o abacate',
      'Monte a salada',
      'Adicione frango',
      'Tempere com limão'
    ]
  },
  {
    id: 'r96',
    name: 'Omelete de Atum',
    category: 'Jantar',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=300&fit=crop',
    prepTime: 12,
    calories: 300,
    protein: 30,
    carbs: 6,
    fats: 18,
    servings: 1,
    ingredients: [
      '3 ovos',
      '1 lata de atum',
      'Cebola',
      'Tomate',
      'Salsinha'
    ],
    instructions: [
      'Bata os ovos',
      'Adicione atum e vegetais',
      'Despeje na frigideira',
      'Cozinhe até firmar',
      'Polvilhe salsinha'
    ]
  },
  {
    id: 'r97',
    name: 'Creme de Espinafre',
    category: 'Jantar',
    image: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=400&h=300&fit=crop',
    prepTime: 25,
    calories: 200,
    protein: 12,
    carbs: 18,
    fats: 10,
    servings: 2,
    ingredients: [
      '300g de espinafre',
      'Cebola',
      'Alho',
      'Cream cheese light',
      'Caldo de legumes'
    ],
    instructions: [
      'Refogue cebola e alho',
      'Adicione espinafre',
      'Bata no liquidificador',
      'Adicione cream cheese',
      'Aqueça e sirva'
    ]
  },
  {
    id: 'r98',
    name: 'Wrap de Vegetais',
    category: 'Jantar',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop',
    prepTime: 15,
    calories: 280,
    protein: 12,
    carbs: 38,
    fats: 10,
    servings: 1,
    ingredients: [
      'Tortilha integral',
      'Hummus',
      'Cenoura ralada',
      'Pepino',
      'Alface'
    ],
    instructions: [
      'Espalhe hummus na tortilha',
      'Adicione vegetais',
      'Enrole firmemente',
      'Corte ao meio',
      'Sirva'
    ]
  },
  {
    id: 'r99',
    name: 'Peixe ao Vapor com Legumes',
    category: 'Jantar',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop',
    prepTime: 25,
    calories: 300,
    protein: 36,
    carbs: 22,
    fats: 8,
    servings: 1,
    ingredients: [
      '150g de peixe branco',
      'Brócolis e cenoura',
      'Limão',
      'Ervas',
      'Azeite'
    ],
    instructions: [
      'Tempere o peixe',
      'Cozinhe no vapor',
      'Adicione legumes',
      'Cozinhe por 15 minutos',
      'Regue com azeite'
    ]
  },
  {
    id: 'r100',
    name: 'Salada Completa de Frango',
    category: 'Jantar',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop',
    prepTime: 20,
    calories: 360,
    protein: 34,
    carbs: 28,
    fats: 14,
    servings: 1,
    ingredients: [
      '120g de frango grelhado',
      'Quinoa cozida',
      'Mix de folhas',
      'Grão de bico',
      'Molho de mostarda e mel'
    ],
    instructions: [
      'Grelhe o frango',
      'Cozinhe a quinoa',
      'Monte a salada em camadas',
      'Adicione grão de bico',
      'Regue com molho'
    ]
  }
];

export function searchFoods(query: string): FoodItem[] {
  const lowerQuery = query.toLowerCase();
  return commonFoods.filter(food => 
    food.name.toLowerCase().includes(lowerQuery)
  );
}

export function getFoodById(id: string): FoodItem | undefined {
  return commonFoods.find(food => food.id === id);
}

export function getRecipeById(id: string): Recipe | undefined {
  return fitnessRecipes.find(recipe => recipe.id === id);
}
