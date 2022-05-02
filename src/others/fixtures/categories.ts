export type CategoryRaw = {
  parent: string;
  name_en: string;
  name_uk: string;
};

export type Category = {
  id: string;
  parent: string;
  name: string;
};

export const categorySelectLanguage = (language: string): Category[] => {
  return categoriesRaw.map((category: CategoryRaw) => {
    return {
      id: category.name_en,
      parent: category.parent,
      name: language === "en" ? category.name_en : category.name_uk
    };
  });
};

export const getCategoryMap = (categories: Category[]): { [id: string]: Category } => {
  return Object.assign({}, ...categories.map((category) => ({[category.id]: category})));
};

export const categoriesRaw: CategoryRaw[] = [
 {
   "parent": "",
   "name_en": "Food",
   "name_uk": "Їжа"
 },
 {
   "parent": "Food",
   "name_en": "Grain products, Bread, Potatoes",
   "name_uk": "Зернові продукти, хліб, картопля"
 },
 {
   "parent": "Food",
   "name_en": "Vegetables, Root crops",
   "name_uk": "Овочі, Коренеплоди"
 },
 {
   "parent": "Food",
   "name_en": "Fruits",
   "name_uk": "Фрукти"
 },
 {
   "parent": "Food",
   "name_en": "Beverages",
   "name_uk": "Напої"
 },
 {
   "parent": "Food",
   "name_en": "Grains, pasta",
   "name_uk": "Крупи, макарони"
 },
 {
   "parent": "Food",
   "name_en": "Milk, Milk products",
   "name_uk": "Молоко, молочні продукти"
 },
 {
   "parent": "Food",
   "name_en": "Meat, Fish, Eggs",
   "name_uk": "М'ясо, риба, яйця"
 },
 {
   "parent": "Food",
   "name_en": "Sweets",
   "name_uk": "Солодощі"
 },
 {
   "parent": "Food",
   "name_en": "Fats, Oils",
   "name_uk": "Жири, олія"
 },
 {
   "parent": "Food",
   "name_en": "Baby food",
   "name_uk": "Дитяче харчування "
 },
 {
   "parent": "Food",
   "name_en": "Pet food",
   "name_uk": "Їжа для тварин"
 },
 {
   "parent": "",
   "name_en": "Personal hygine",
   "name_uk": "Особиста гігієна"
 },
 {
   "parent": "Personal hygine",
   "name_en": "Oral care",
   "name_uk": "Догляд за ротовою порожниною"
 },
 {
   "parent": "Personal hygine",
   "name_en": "Skin care",
   "name_uk": "Догляд за шкірою"
 },
 {
   "parent": "Personal hygine",
   "name_en": "Hair care",
   "name_uk": "Догляд за волоссям "
 },
 {
   "parent": "Personal hygine",
   "name_en": "Body care",
   "name_uk": "Догляд за тілом"
 },
 {
   "parent": "Personal hygine",
   "name_en": "Baby hygiene products",
   "name_uk": "Дитячі гігієнічні засоби"
 },
 {
   "parent": "Personal hygine",
   "name_en": "Paper and cotton hygiene products",
   "name_uk": "Паперові та бавовняні засоби гігієни"
 },
 {
   "parent": "Personal hygine",
   "name_en": "Women hygiene",
   "name_uk": "Жіноча гігієна"
 },
 {
   "parent": "",
   "name_en": "Medicine",
   "name_uk": "Медицина"
 },
 {
   "parent": "Medicine",
   "name_en": "First aid kits",
   "name_uk": "Аптечки першої допомоги"
 },
 {
   "parent": "Medicine",
   "name_en": "NSARs: Painkillers and Antipyretics",
   "name_uk": "NSAR: знеболюючі та жарознижуючі\nNSAR: знеболюючі та жарознижуючі"
 },
 {
   "parent": "Medicine",
   "name_en": "Anesthetics",
   "name_uk": "Анастетики"
 },
 {
   "parent": "Medicine",
   "name_en": "Fresh frozen plasma (Blutkonserven)",
   "name_uk": "Свіжозаморожена плазма (консерви крові)"
 },
 {
   "parent": "Medicine",
   "name_en": "Immunosuppressants",
   "name_uk": "Імунодепресанти"
 },
 {
   "parent": "Medicine",
   "name_en": "Cardiac drugs",
   "name_uk": "Серцеві припарати"
 },
 {
   "parent": "Medicine",
   "name_en": "Blood thinner",
   "name_uk": "Розріджувач крові"
 },
 {
   "parent": "Medicine",
   "name_en": "Beta Blocker",
   "name_uk": "Бета-адреноміметики"
 },
 {
   "parent": "Medicine",
   "name_en": "Antihypertensiva",
   "name_uk": "Антигіпертензивні препарати"
 },
 {
   "parent": "Medicine",
   "name_en": "Parenteral Nutrition",
   "name_uk": "Парентеральне харчування"
 },
 {
   "parent": "Medicine",
   "name_en": "Antibiotics",
   "name_uk": "Антибіотики"
 },
 {
   "parent": "Medicine",
   "name_en": "Antivirals",
   "name_uk": "Противовірусні"
 },
 {
   "parent": "Medicine",
   "name_en": "Eye Medicine",
   "name_uk": "Ліки для очей"
 },
 {
   "parent": "Medicine",
   "name_en": "Diabetes Medication",
   "name_uk": "Ліки від діабету"
 },
 {
   "parent": "Medicine",
   "name_en": "Benzodiazepine",
   "name_uk": "Бензодіазепін"
 },
 {
   "parent": "Medicine",
   "name_en": "Disinfectants",
   "name_uk": "Дезінфікуючі засоби"
 },
 {
   "parent": "Medicine",
   "name_en": "Anti-Epileptika",
   "name_uk": "Антиезілептичні припарати"
 },
 {
   "parent": "Medicine",
   "name_en": "Anti-Depressants",
   "name_uk": "Антідепресанти"
 },
 {
   "parent": "Medicine",
   "name_en": "Fungizide",
   "name_uk": "Фунгізид"
 },
 {
   "parent": "Medicine",
   "name_en": "Fluids",
   "name_uk": "Рідини"
 },
 {
   "parent": "Medicine",
   "name_en": "Thyroid medication",
   "name_uk": "Препарати для щитовидної залози"
 },
 {
   "parent": "",
   "name_en": "Medical consumables and equipment",
   "name_uk": "Медичні расходні матеріали та обладнання "
 },
 {
   "parent": "Medical consumables and equipment",
   "name_en": "Dressing materials",
   "name_uk": "Перев'язувальні матеріали"
 },
 {
   "parent": "Medical consumables and equipment",
   "name_en": "Disinfectants, peroxide",
   "name_uk": "Дезінфікуючі засоби, розчини"
 },
 {
   "parent": "Medical consumables and equipment",
   "name_en": "Surgical tools",
   "name_uk": "Хірургічні інструменти та матеріали"
 },
 {
   "parent": "Medical consumables and equipment",
   "name_en": "Catheters, tubes, infusion sets",
   "name_uk": "Катетери та набори для інфузій"
 },
 {
   "parent": "Medical consumables and equipment",
   "name_en": "Injection tools",
   "name_uk": "Інструменти для ін'єкцій"
 },
 {
   "parent": "Medical consumables and equipment",
   "name_en": "Means of protection (Masks, Gloves)",
   "name_uk": "Засоби захисту (маски, рукавиці)"
 },
 {
   "parent": "Medical consumables and equipment",
   "name_en": "Plasters, compresses, gauzes, bandage material (torniquetten)",
   "name_uk": "Пластирі, компреси, бандажі, турнікети"
 },
 {
   "parent": "Medical consumables and equipment",
   "name_en": "Bloodsugar Test Strips",
   "name_uk": "Тести для визначення рівня цукру в крові"
 },
 {
   "parent": "Medical consumables and equipment",
   "name_en": "Inhalers Asthma",
   "name_uk": "Інгалятори для астми"
 },
 {
   "parent": "Medical consumables and equipment",
   "name_en": "Medical ventilator",
   "name_uk": "Медичні вентилятори"
 },
 {
   "parent": "Medical consumables and equipment",
   "name_en": "Pulsoxymitor",
   "name_uk": "Пульсоксиметр"
 },
 {
   "parent": "Medical consumables and equipment",
   "name_en": "Blood pressure monitor",
   "name_uk": "Монітор артеріального тиску"
 },
 {
   "parent": "Medical consumables and equipment",
   "name_en": "Ultrasound scanner",
   "name_uk": "Ультразвуковий скануванер"
 },
 {
   "parent": "Medical consumables and equipment",
   "name_en": "Orthopedic and fixature products",
   "name_uk": "Ортопедичне обладнання та фіксатори"
 },
 {
   "parent": "Medical consumables and equipment",
   "name_en": "Stretchers",
   "name_uk": "Носилки"
 }
]
