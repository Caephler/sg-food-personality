/**
 * Singaporean Dishes Personality Data
 *
 * This module contains personality profiles for 24 iconic Singaporean dishes.
 * These profiles are designed for the "Personalities - Local Singaporean Food" quiz application.
 *
 * Personality Trait Categories (for quiz question mapping):
 * - Energy Level: high | medium | low
 * - Social Preference: extrovert | ambivert | introvert
 * - Flavor Profile: sweet | savory | spicy | sour | balanced
 * - Adventure Level: adventurous | moderate | traditional
 * - Time of Day: morning | afternoon | evening | night owl
 * - Setting: casual | moderate | elegant
 * - Texture Preference: soft | crunchy | chewy | varied
 * - Cultural Authenticity: root-deep | modern-fusion | street-smart
 */

export type EnergyLevel = "high" | "medium" | "low";
export type SocialPreference = "extrovert" | "ambivert" | "introvert";
export type FlavorProfile = "sweet" | "savory" | "spicy" | "sour" | "balanced";
export type AdventureLevel = "adventurous" | "moderate" | "traditional";
export type TimeOfDay = "morning" | "afternoon" | "evening" | "night";
export type Setting = "casual" | "moderate" | "elegant";
export type TexturePreference = "soft" | "crunchy" | "chewy" | "varied";
export type CulturalAuthenticity =
  | "root-deep"
  | "modern-fusion"
  | "street-smart";

export interface Dish {
  id: string;
  name: string;
  chineseName: string;
  description: string;
  personalityTraits: string[];
  visualStyle: {
    colors: string[];
    mood: string;
  };
  quote: string;
  category: string;
  // Quiz-relevant attributes
  quizAttributes: {
    energyLevel: EnergyLevel;
    socialPreference: SocialPreference;
    flavorProfile: FlavorProfile;
    adventureLevel: AdventureLevel;
    timeOfDay: TimeOfDay;
    setting: Setting;
    texturePreference: TexturePreference;
    culturalAuthenticity: CulturalAuthenticity;
  };
}

export const dishes: Dish[] = [
  {
    id: "hainanese-chicken-rice",
    name: "Hainanese Chicken Rice",
    chineseName: "海南鸡饭",
    description:
      "The undisputed king of Singaporean cuisine. Tender poached chicken served with fragrant rice cooked in chicken broth and ginger, accompanied by three dipping sauces that tell their own story.",
    personalityTraits: [
      "Approachable",
      "Classic yet versatile",
      "Comforting presence",
      "Effortlessly elegant",
      "Nostalgic without being stuck in the past",
      "Understated sophistication",
      "Beloved by all ages",
    ],
    visualStyle: {
      colors: ["#F5F5DC", "#D2691E", "#228B22", "#FFD700"],
      mood: "Warm, nostalgic, and reassuring - like a warm hug from your auntie",
    },
    quote:
      "Like that friend who's chill with everyone - no drama, always there for you.",
    category: "Hawker Classic",
    quizAttributes: {
      energyLevel: "medium",
      socialPreference: "extrovert",
      flavorProfile: "balanced",
      adventureLevel: "traditional",
      timeOfDay: "afternoon",
      setting: "casual",
      texturePreference: "soft",
      culturalAuthenticity: "root-deep",
    },
  },
  {
    id: "char-kway-teow",
    name: "Char Kway Teow",
    chineseName: "炒粿条",
    description:
      "Flat rice noodles wok-fried with eggs, prawns, cockles, Chinese sausage, and bean sprouts over high heat. The lady wielding the wok has seen things, and the char on the noodles tells the story.",
    personalityTraits: [
      "Bold and unapologetic",
      "Loves a good char (especially when people ask about it)",
      "High energy, high cholesterol",
      "Traditional at heart but adapts to trends",
      "Unapologetically local",
      "Slightly dramatic but in a good way",
      "The life of any gathering",
    ],
    visualStyle: {
      colors: ["#8B4513", "#FFD700", "#FF6347", "#2F4F4F"],
      mood: "Fiery, intense, and full of personality - the cool kid of the hawker center",
    },
    quote:
      "Dont talk to me until Ive had my char. Wait, actually, talk to me while I eat it.",
    category: "Street Food",
    quizAttributes: {
      energyLevel: "high",
      socialPreference: "extrovert",
      flavorProfile: "savory",
      adventureLevel: "moderate",
      timeOfDay: "evening",
      setting: "casual",
      texturePreference: "chewy",
      culturalAuthenticity: "street-smart",
    },
  },
  {
    id: "bak-kut-teh",
    name: "Bak Kut Teh",
    chineseName: "肉骨茶",
    description:
      "Ribs simmered in a complex herbal broth until fall-off-the-bone tender. Best enjoyed at 4 AM after a night out, when philosophical conversations with uncles flow as freely as the tea.",
    personalityTraits: [
      "Wise and introspective",
      "Takes time to appreciate",
      "Deep and complex once you get to know",
      "Night owl philosopher",
      "Healing vibes",
      "Patient and gentle",
      "The wise elder who still knows how to have fun",
    ],
    visualStyle: {
      colors: ["#8B4513", "#D2691E", "#F5DEB3", "#2F4F4F"],
      mood: "Contemplative, soothing, and wise - conversations happen here",
    },
    quote:
      "The herbal broth of life - takes time to simmer, but worth every sip.",
    category: "Hawker Classic",
    quizAttributes: {
      energyLevel: "low",
      socialPreference: "ambivert",
      flavorProfile: "savory",
      adventureLevel: "traditional",
      timeOfDay: "night",
      setting: "moderate",
      texturePreference: "soft",
      culturalAuthenticity: "root-deep",
    },
  },
  {
    id: "satay",
    name: "Satay",
    chineseName: "沙嗲",
    description:
      'Grilled skewers of marinated meat, served with chunky peanut sauce, rice cakes, and cucumber-onion relish. The smoke, the sizzle, the call of "satay" echoing through the hawker center.',
    personalityTraits: [
      "Social butterfly",
      "Loves to be shared",
      "Always brings people together",
      "Playful and fun-loving",
      "Easy-going and adaptable",
      "Charismatic",
      "The friend who organizes the group hangouts",
    ],
    visualStyle: {
      colors: ["#D2691E", "#F4A460", "#8B4513", "#90EE90"],
      mood: "Festive, communal, and joyous - every bite is a celebration",
    },
    quote: "Born to be shared - alone is no fun, got it?",
    category: "Street Food",
    quizAttributes: {
      energyLevel: "high",
      socialPreference: "extrovert",
      flavorProfile: "savory",
      adventureLevel: "moderate",
      timeOfDay: "evening",
      setting: "casual",
      texturePreference: "chewy",
      culturalAuthenticity: "root-deep",
    },
  },
  {
    id: "rojak",
    name: "Rojak",
    chineseName: "罗惹",
    description:
      "A chaotic beautiful salad of fruits and vegetables doused in thick fermented prawn paste. Sweet, savory, spicy, and confusing in the best way possible - just like Singapore itself.",
    personalityTraits: [
      "Beautifully chaotic",
      "Surprisingly complex",
      "Not afraid to mix things up",
      "Bold flavor combinations",
      "Unapologetically unique",
      "Takes risks",
      "The creative soul who makes it work",
    ],
    visualStyle: {
      colors: ["#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF"],
      mood: "Eclectic, vibrant, and delightfully confusing - a party in your mouth",
    },
    quote: "Im weird. And I own it. You got a problem?",
    category: "Street Food",
    quizAttributes: {
      energyLevel: "high",
      socialPreference: "ambivert",
      flavorProfile: "balanced",
      adventureLevel: "adventurous",
      timeOfDay: "afternoon",
      setting: "casual",
      texturePreference: "varied",
      culturalAuthenticity: "street-smart",
    },
  },
  {
    id: "nasi-lemak",
    name: "Nasi Lemak",
    chineseName: "椰浆饭",
    description:
      "Fragrant coconut rice crowned with crispy fried chicken wing, sambal that could start a fire, crunchy anchovies, and a perfect soft-boiled egg. The unofficial national dish that needs no introduction.",
    personalityTraits: [
      "Proudly Singaporean",
      "Complex yet accessible",
      "Full of contrast and balance",
      "The life of every party",
      "Comforting and exciting at once",
      "Versatile - works anytime",
      "The ambassador everyone loves",
    ],
    visualStyle: {
      colors: ["#FFD700", "#FF6347", "#8B4513", "#F5F5DC"],
      mood: "Proud, bold, and undeniably local - a national treasure",
    },
    quote: "Im not just a dish - Im a whole mood, lor.",
    category: "Hawker Classic",
    quizAttributes: {
      energyLevel: "high",
      socialPreference: "extrovert",
      flavorProfile: "spicy",
      adventureLevel: "moderate",
      timeOfDay: "morning",
      setting: "casual",
      texturePreference: "varied",
      culturalAuthenticity: "root-deep",
    },
  },
  {
    id: "laksa",
    name: "Laksa",
    chineseName: "叻沙",
    description:
      "Rice noodles swimming in spicy coconut curry broth loaded with prawns, cockles, tofu puffs, and bean sprouts. A Peranakan masterpiece that wakes up every cell in your body.",
    personalityTraits: [
      "Fiery and bold",
      "Big personality",
      "Not for the faint of heart",
      "Complex heritage",
      "Unapologetically spicy",
      "Memorable experience",
      "The friend who makes things interesting",
    ],
    visualStyle: {
      colors: ["#FF4500", "#FFD700", "#FF6347", "#8B0000"],
      mood: "Passionate, intense, and unforgettable - a flavor adventure",
    },
    quote: "If you can handle me, we can be friends. 🦞",
    category: "Hawker Classic",
    quizAttributes: {
      energyLevel: "high",
      socialPreference: "ambivert",
      flavorProfile: "spicy",
      adventureLevel: "adventurous",
      timeOfDay: "afternoon",
      setting: "casual",
      texturePreference: "soft",
      culturalAuthenticity: "root-deep",
    },
  },
  {
    id: "kaya-toast",
    name: "Kaya Toast",
    chineseName: "咖椰吐司",
    description:
      "Crispy toast slathered with kaya (coconut egg jam) and cold butter, paired with soft-boiled eggs and strong kopi. The breakfast of champions since 1919, still going strong.",
    personalityTraits: [
      "Old soul with modern appeal",
      "Dependable morning motivation",
      "Classic and timeless",
      "The early bird who wins",
      "Strong and bold",
      "Nostalgic but relevant",
      "The morning person everyone admires (or hates)",
    ],
    visualStyle: {
      colors: ["#D2691E", "#F5F5DC", "#4B3621", "#FFEFD5"],
      mood: "Classic, nostalgic, and ready to conquer the day - kopi tiam vibes",
    },
    quote: "Who needs an alarm when you have kaya?",
    category: "Breakfast Classic",
    quizAttributes: {
      energyLevel: "high",
      socialPreference: "ambivert",
      flavorProfile: "sweet",
      adventureLevel: "traditional",
      timeOfDay: "morning",
      setting: "casual",
      texturePreference: "soft",
      culturalAuthenticity: "root-deep",
    },
  },
  {
    id: "egg-prata",
    name: "Egg Prata",
    chineseName: "鸡蛋煎饼",
    description:
      "Flaky, crispy, buttery flatbread folded with egg, served with curry. The midnight snack that understands your struggles, the breakfast that forgives your sins.",
    personalityTraits: [
      "Versatile and accommodating",
      "Late night bestie",
      "Crispy on the outside, soft inside",
      "Patient (takes skill to flip right)",
      "The comfort after midnight",
      "Adapts to any time",
      "The flexible friend whos always there",
    ],
    visualStyle: {
      colors: ["#F5DEB3", "#FFD700", "#8B4513", "#D2691E"],
      mood: "Comforting, warm, and versatile - any time is prata time",
    },
    quote: "3am? No problem. Im Halal-certified and ready.",
    category: "Street Food",
    quizAttributes: {
      energyLevel: "medium",
      socialPreference: "introvert",
      flavorProfile: "savory",
      adventureLevel: "moderate",
      timeOfDay: "night",
      setting: "casual",
      texturePreference: "chewy",
      culturalAuthenticity: "street-smart",
    },
  },
  {
    id: "fish-head-curry",
    name: "Fish Head Curry",
    chineseName: "鱼头咖喱",
    description:
      "A whole fish head swimming in spicy curry with vegetables and ladyfingers. Bold, unapologetic, and definitely not for the faint of heart. The dish that shows true food courage.",
    personalityTraits: [
      "Adventurous eater",
      "Not afraid to tackle challenges",
      "Community-oriented (meant to share)",
      "Bold and distinctive",
      "Cultural pride",
      "Takes courage to appreciate",
      "The fearless leader of the table",
    ],
    visualStyle: {
      colors: ["#FF6347", "#FFD700", "#8B4513", "#228B22"],
      mood: "Bold, communal, and unapologetically unique - sharing is caring",
    },
    quote: "Im not for everyone. And Im totally fine with that. 🐟",
    category: "Restaurant Classic",
    quizAttributes: {
      energyLevel: "high",
      socialPreference: "extrovert",
      flavorProfile: "spicy",
      adventureLevel: "adventurous",
      timeOfDay: "afternoon",
      setting: "moderate",
      texturePreference: "varied",
      culturalAuthenticity: "root-deep",
    },
  },
  {
    id: "bee-hoon-soup",
    name: "Bee Hoon Soup",
    chineseName: "米粉汤",
    description:
      "Thin rice noodles in a clear, comforting broth with toppings of your choice. Simple, clean, and nourishing - the dish that proves sometimes less really is more.",
    personalityTraits: [
      "Clean and pure",
      "The minimalist",
      "Nurturing and caring",
      "Straightforward but deep",
      "The calm in chaos",
      "Flexible with toppings",
      "The friend whos always there when you need comfort",
    ],
    visualStyle: {
      colors: ["#F5F5DC", "#8B4513", "#228B22", "#FFEFD5"],
      mood: "Calm, pure, and nurturing - a warm embrace in bowl form",
    },
    quote: "Simple si gin, but never boring.",
    category: "Hawker Classic",
    quizAttributes: {
      energyLevel: "low",
      socialPreference: "introvert",
      flavorProfile: "savory",
      adventureLevel: "traditional",
      timeOfDay: "afternoon",
      setting: "casual",
      texturePreference: "soft",
      culturalAuthenticity: "root-deep",
    },
  },
  {
    id: "yong-tau-foo",
    name: "Yong Tau Foo",
    chineseName: "酿豆腐",
    description:
      "A build-your-own adventure of stuffed tofu, fish paste creations, and vegetables in clear broth or dry with sauce. The choose-your-own-adventure of Singaporean food.",
    personalityTraits: [
      "The diplomat",
      "Loves customization",
      "Patient and thoughtful",
      "Balanced and harmonious",
      "Adaptable to preferences",
      "The perfectionist chooser",
      "The friend who makes sure everyones happy",
    ],
    visualStyle: {
      colors: ["#F5F5DC", "#8B4513", "#228B22", "#FFD700"],
      mood: "Thoughtful, balanced, and satisfying - your choice, your story",
    },
    quote: "So many options, so little time. But I always choose right.",
    category: "Hawker Classic",
    quizAttributes: {
      energyLevel: "medium",
      socialPreference: "ambivert",
      flavorProfile: "balanced",
      adventureLevel: "moderate",
      timeOfDay: "afternoon",
      setting: "casual",
      texturePreference: "soft",
      culturalAuthenticity: "root-deep",
    },
  },
  {
    id: "fried-carrot-cake",
    name: "Fried Carrot Cake",
    chineseName: "炒萝卜糕",
    description:
      "Not actually made of carrots! Radish cake pan-fried with egg until crispy, doused in sweet soy sauce. The white version (Singapore style) knows whats up.",
    personalityTraits: [
      "The local legend",
      "Sweet and savory balance",
      "Texture enthusiast",
      "Morning person extraodinaire",
      "Classic but not old-fashioned",
      "Deep-fried happiness",
      "The OG breakfast champion",
    ],
    visualStyle: {
      colors: ["#F5F5DC", "#FFD700", "#8B4513", "#D2691E"],
      mood: "Warm, nostalgic, and satisfying - breakfast of true Singaporeans",
    },
    quote: "Carrot? What carrot? Im radish, lah. 🧡",
    category: "Street Food",
    quizAttributes: {
      energyLevel: "medium",
      socialPreference: "ambivert",
      flavorProfile: "savory",
      adventureLevel: "traditional",
      timeOfDay: "morning",
      setting: "casual",
      texturePreference: "chewy",
      culturalAuthenticity: "street-smart",
    },
  },
  {
    id: "oyster-omelette",
    name: "Oyster Omelette",
    chineseName: "蚝煎",
    description:
      "Eggs scrambled with plump oysters and starch, crispy on the edges, tender in the middle. The controversial topic that divides households but unites stomachs.",
    personalityTraits: [
      "Bold and polarizing",
      "Texture matters",
      "Passionate defenders",
      "Street food royalty",
      "Not afraid of the stinky fish",
      "The conversation starter",
      "The friend you either love or learn to love",
    ],
    visualStyle: {
      colors: ["#FFD700", "#F5F5DC", "#8B0000", "#696969"],
      mood: "Controversial, passionate, and deeply local - the hill some will die on",
    },
    quote: "Crispy or soft? The debate never ends. 🌊",
    category: "Street Food",
    quizAttributes: {
      energyLevel: "high",
      socialPreference: "ambivert",
      flavorProfile: "savory",
      adventureLevel: "moderate",
      timeOfDay: "evening",
      setting: "casual",
      texturePreference: "chewy",
      culturalAuthenticity: "street-smart",
    },
  },
  {
    id: "popiah",
    name: "Popiah",
    chineseName: "薄饼",
    description:
      "Paper-thin wrapper filled with julienned vegetables, tofu, prawns, and egg, rolled up like a spring roll. The lighter, fresher cousin that shows restraint can be delicious.",
    personalityTraits: [
      "Light and refreshing",
      "The health-conscious one",
      "Elegant and refined",
      "Summer vibes",
      "Not afraid of vegetables",
      "The clean eater",
      "The friend who actually counts carbs",
    ],
    visualStyle: {
      colors: ["#F5F5DC", "#228B22", "#FFD700", "#FF6347"],
      mood: "Fresh, crisp, and elegant - the sophisticated choice",
    },
    quote: "Who says eating healthy cant be fun? 🍃",
    category: "Street Food",
    quizAttributes: {
      energyLevel: "low",
      socialPreference: "introvert",
      flavorProfile: "balanced",
      adventureLevel: "moderate",
      timeOfDay: "afternoon",
      setting: "moderate",
      texturePreference: "soft",
      culturalAuthenticity: "root-deep",
    },
  },
  {
    id: "hokkien-prawn-mee",
    name: "Hokkien Prawn Mee",
    chineseName: "福建虾面",
    description:
      "Thick and thin yellow noodles in a rich prawn stock, loaded with prawns, pork belly, and bean sprouts. The dish that makes you appreciate the sea.",
    personalityTraits: [
      "The sea lover",
      "Rich and complex",
      "Not shy about flavor",
      "Broth is life",
      "Traditional values",
      "Generous with toppings",
      "The friend who spoils you with toppings",
    ],
    visualStyle: {
      colors: ["#FF6347", "#FFD700", "#8B4513", "#F5F5DC"],
      mood: "Rich, indulgent, and deeply satisfying - prawn dreams are made of this",
    },
    quote: "I dont do subtle. Im all about that prawn life. 🦐",
    category: "Hawker Classic",
    quizAttributes: {
      energyLevel: "high",
      socialPreference: "ambivert",
      flavorProfile: "savory",
      adventureLevel: "traditional",
      timeOfDay: "afternoon",
      setting: "casual",
      texturePreference: "chewy",
      culturalAuthenticity: "root-deep",
    },
  },
  {
    id: "singapore-crab",
    name: "Singapore Chili Crab",
    chineseName: "新加坡辣椒蟹",
    description:
      "Massive mud crab drenched in a sweet, spicy, savory tomato-based sauce that demands you use your hands. The showstopper dish that deserves the mess.",
    personalityTraits: [
      "The showstopper",
      "Messy but worth it",
      "Big personality",
      "Celebration mode",
      "Unapologetically indulgent",
      "The center of attention",
      "The friend who makes every meal an event",
    ],
    visualStyle: {
      colors: ["#FF4500", "#FFD700", "#8B0000", "#F5F5DC"],
      mood: "Celebratory, messy, and unforgettable - this is what joy looks like",
    },
    quote: "Hands optional? No. Appetite required. Yes. 🦀",
    category: "Restaurant Classic",
    quizAttributes: {
      energyLevel: "high",
      socialPreference: "extrovert",
      flavorProfile: "spicy",
      adventureLevel: "adventurous",
      timeOfDay: "evening",
      setting: "elegant",
      texturePreference: "chewy",
      culturalAuthenticity: "root-deep",
    },
  },
  {
    id: "duck-rice",
    name: "Duck Rice",
    chineseName: "鸭饭",
    description:
      "Tender roasted duck over fragrant rice with preserved vegetables and a rich duck broth. The sophisticated lunch option that doesnt need to shout about its quality.",
    personalityTraits: [
      "Sophisticated and refined",
      "Quality over quantity",
      "The lunch upgrade",
      "Understated excellence",
      "Traditional but not dated",
      "The quiet achiever",
      "The friend who has impeccable taste",
    ],
    visualStyle: {
      colors: ["#8B4513", "#D2691E", "#F5F5DC", "#2F4F4F"],
      mood: "Refined, elegant, and satisfying - weekday lunch goals",
    },
    quote: "I dont need to be trendy. I just need to be delicious. 🦆",
    category: "Hawker Classic",
    quizAttributes: {
      energyLevel: "medium",
      socialPreference: "introvert",
      flavorProfile: "savory",
      adventureLevel: "traditional",
      timeOfDay: "afternoon",
      setting: "moderate",
      texturePreference: "soft",
      culturalAuthenticity: "root-deep",
    },
  },
  {
    id: "pork-congee",
    name: "Pork Congee",
    chineseName: "猪肉粥",
    description:
      "Silky rice porridge with minced pork, preserved egg, and ginger. The ultimate comfort food that understands vulnerability and healing.",
    personalityTraits: [
      "The ultimate caretaker",
      "Healing vibes",
      "Gentle and nurturing",
      "Patient and slow-cooked",
      "Sick day best friend",
      "Humble but essential",
      "The friend who brings soup when you need it",
    ],
    visualStyle: {
      colors: ["#F5F5DC", "#D2691E", "#8B4513", "#FFEFD5"],
      mood: "Gentle, nurturing, and healing - a bowl of love",
    },
    quote: "Im not fancy, but Im there when it matters. ❤️",
    category: "Comfort Food",
    quizAttributes: {
      energyLevel: "low",
      socialPreference: "introvert",
      flavorProfile: "savory",
      adventureLevel: "traditional",
      timeOfDay: "morning",
      setting: "casual",
      texturePreference: "soft",
      culturalAuthenticity: "root-deep",
    },
  },
  {
    id: "taugeh-ipoh-hor-fun",
    name: "Taugeh & Ipoh Hor Fun",
    chineseName: "芽菇伊面河",
    description:
      "Flat rice noodles in a light, clear prawn and chicken broth, topped with bean sprouts and spring onions. The clean, elegant dish from Ipoh that proves restraint is an art.",
    personalityTraits: [
      "Refined and elegant",
      "Clean eating champion",
      "Subtle but memorable",
      "The minimalist master",
      "Light yet satisfying",
      "Heritage preserved",
      "The friend who does less but better",
    ],
    visualStyle: {
      colors: ["#F5F5DC", "#FFD700", "#228B22", "#FFEFD5"],
      mood: "Elegant, clean, and sophisticated - food as art",
    },
    quote:
      "Why complicate things when simplicity is ultimate sophistication? 🎋",
    category: "Hawker Classic",
    quizAttributes: {
      energyLevel: "low",
      socialPreference: "introvert",
      flavorProfile: "savory",
      adventureLevel: "traditional",
      timeOfDay: "afternoon",
      setting: "moderate",
      texturePreference: "soft",
      culturalAuthenticity: "root-deep",
    },
  },
  {
    id: "minced-meat-noodle",
    name: "Minced Meat Noodle",
    chineseName: "肉脞面",
    description:
      "Dry noodles tossed with minced pork, sliced fish cake, and a symphony of sauces. The TCM-inspired lunch that fuels productive afternoons.",
    personalityTraits: [
      "The productive one",
      "Dry vs soup - choose wisely",
      "TCM approved",
      "Afternoon energy boost",
      "Texture contrast lover",
      "The structured thinker",
      "The friend who has their life together",
    ],
    visualStyle: {
      colors: ["#8B4513", "#D2691E", "#F5F5DC", "#228B22"],
      mood: "Organized, energizing, and purposeful - fuel for success",
    },
    quote: "Dry or soup? Choose your fighter. 💪",
    category: "Hawker Classic",
    quizAttributes: {
      energyLevel: "high",
      socialPreference: "ambivert",
      flavorProfile: "savory",
      adventureLevel: "moderate",
      timeOfDay: "afternoon",
      setting: "casual",
      texturePreference: "chewy",
      culturalAuthenticity: "root-deep",
    },
  },
  {
    id: "wanton-mee",
    name: "Wanton Mee",
    chineseName: "云吞面",
    description:
      "Springy noodles topped with succulent wantons, sliced pork, and greens in a savory sauce. The Cantonese classic that started it all.",
    personalityTraits: [
      "The OG classic",
      "Timeless appeal",
      "Quality ingredients",
      "The veteran",
      "Smooth and springy",
      "Hong Kong heritage",
      "The friend who has been there, done that",
    ],
    visualStyle: {
      colors: ["#F5F5DC", "#D2691E", "#228B22", "#8B4513"],
      mood: "Classic, reliable, and delicious - a legend never retires",
    },
    quote: "I was cool before cool was a thing. 🥟",
    category: "Hawker Classic",
    quizAttributes: {
      energyLevel: "medium",
      socialPreference: "ambivert",
      flavorProfile: "savory",
      adventureLevel: "traditional",
      timeOfDay: "afternoon",
      setting: "casual",
      texturePreference: "chewy",
      culturalAuthenticity: "root-deep",
    },
  },
  {
    id: "curry-rice",
    name: "Curry Rice",
    chineseName: "咖喱饭",
    description:
      "White rice drowned in different curries (chicken, prawn, or vegetables), often with fried wings and potatoes. The satisfying meal that fills stomachs and souls alike.",
    personalityTraits: [
      "The hearty one",
      "Comfort in a plate",
      "No-fuss satisfaction",
      "Family favorite",
      "Curry over everything",
      "The dependable one",
      "The friend who always has food for you",
    ],
    visualStyle: {
      colors: ["#FFD700", "#FF6347", "#8B4513", "#F5F5DC"],
      mood: "Warm, filling, and satisfying - home cooking vibes",
    },
    quote: "Why choose one curry when you can have them all? 🍛",
    category: "Hawker Classic",
    quizAttributes: {
      energyLevel: "medium",
      socialPreference: "ambivert",
      flavorProfile: "spicy",
      adventureLevel: "moderate",
      timeOfDay: "afternoon",
      setting: "casual",
      texturePreference: "soft",
      culturalAuthenticity: "street-smart",
    },
  },
  {
    id: "chee-cheong-fun",
    name: "Chee Cheong Fun",
    chineseName: "猪肠粉",
    description:
      "Silky smooth rice noodle rolls drizzled with sweet soy sauce and sesame seeds. The quiet achiever of the dim sum world that doesnt need to shout.",
    personalityTraits: [
      "Smooth operator",
      "Subtle and sophisticated",
      "The quiet type",
      "Texture perfectionist",
      "Morning person",
      "Dim sum enthusiast",
      "The friend whos secretly the best at everything",
    ],
    visualStyle: {
      colors: ["#F5F5DC", "#D2691E", "#8B4513", "#FFEFD5"],
      mood: "Soft, silky, and unassuming - understated excellence",
    },
    quote: "I dont need to be fancy. I just need to be smooth. 🎋",
    category: "Breakfast Classic",
    quizAttributes: {
      energyLevel: "low",
      socialPreference: "introvert",
      flavorProfile: "savory",
      adventureLevel: "traditional",
      timeOfDay: "morning",
      setting: "casual",
      texturePreference: "soft",
      culturalAuthenticity: "root-deep",
    },
  },
];

/**
 * Quiz Scoring Guide
 *
 * Each dish has quizAttributes that map to personality dimensions.
 * For a 10-question quiz, you could assign 1-2 dishes per attribute:
 *
 * Q1: Energy Level (High/Medium/Low)
 * Q2: Social Preference (Extrovert/Ambivert/Introvert)
 * Q3: Flavor Profile (Sweet/Savory/Spicy/Balanced)
 * Q4: Adventure Level (Adventurous/Moderate/Traditional)
 * Q5: Time of Day (Morning/Afternoon/Evening/Night)
 * Q6: Setting (Casual/Moderate/Elegant)
 * Q7: Texture Preference (Soft/Chewy/Crunchy/Varied)
 * Q8: Cultural Authenticity (Root-deep/Modern-fusion/Street-smart)
 * Q9: Additional trait from personalityTraits array
 * Q10: Additional trait from personalityTraits array
 *
 * Scoring: Each answer maps to specific dishes. Most matching dishes = result!
 */
