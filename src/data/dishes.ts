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

/**
 * Meme-style content for Gen Z appeal
 */
export interface DishMemeContent {
  tiktokCaption: string; // Like "no thoughts just [dish]"
  vibeCheck: string; // e.g., "Main character energy"
  memePotential: string; // e.g., "This hits different 🍵💀"
  emojiCombo: string[]; // Array of emojis representing the vibe
  internetSlang: string[]; // Relevant slang: "bussin", "slay", "goated", etc.
}

/**
 * Modifier system - allows dishes to have variants based on trait thresholds
 */
export interface DishModifier {
  id: string;
  name: string; // e.g., "Crispy Kaya Toast"
  description: string; // Short modifier description
  triggerTrait: string; // Which trait triggers this modifier
  triggerThreshold: number; // e.g., 80% on that trait
  modifierTraits: Partial<{
    energyLevel: EnergyLevel;
    socialPreference: SocialPreference;
    flavorProfile: FlavorProfile;
    adventureLevel: AdventureLevel;
    timeOfDay: TimeOfDay;
    setting: Setting;
    texturePreference: TexturePreference;
    culturalAuthenticity: CulturalAuthenticity;
  }>;
  memeCaption: string; // Gen Z style caption
  emojiCombo: string[]; // Override emojis for this modifier
}

/**
 * Best paired with section - suggests complementary dishes
 */
export interface PairedWith {
  dishId: string; // ID of paired dish
  reason: string; // e.g., "The yin to your yang 🍜"
  compatibilityScore: number; // 0-100
}

export interface Dish {
  id: string;
  emoji: string; // Unique standardized emoji for the dish
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
  // Base version info
  baseName?: string; // Original dish name for modifiers
  baseMemeCaption?: string;
  baseVibeCheck?: string;
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
  // Modifier system
  hasModifiers?: boolean;
  modifiers?: DishModifier[];
  // Gen Z meme content
  memeContent?: DishMemeContent;
  // Best paired with - fixed relationship (dish ID)
  pairedWith?: string;
}

export const dishes: Dish[] = [
  {
    id: "hainanese-chicken-rice",
    emoji: "🍗",
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
    baseName: "Hainanese Chicken Rice",
    baseMemeCaption: "no thoughts just chicken rice at 3pm 🐔✨",
    baseVibeCheck: "main character energy",
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
    hasModifiers: true,
    modifiers: [
      {
        id: "premium-chicken-rice",
        name: "Premium Zi Char Chicken Rice",
        description: "The upgrade you didn't know you needed",
        triggerTrait: "setting",
        triggerThreshold: 50,
        modifierTraits: { setting: "elegant" },
        memeCaption: "POV: ur wallet after ordering premium chicken rice 💸🐔",
        emojiCombo: ["💰", "👑", "🍗"],
      },
      {
        id: "spicy-chicken-rice",
        name: "Spicy Garlic Chicken Rice",
        description: "For those who like it with extra heat",
        triggerTrait: "flavorProfile",
        triggerThreshold: 20,
        modifierTraits: { flavorProfile: "spicy" },
        memeCaption: "me after finding out they have spicy sauce 🔥💀",
        emojiCombo: ["🌶️", "🔥", "😤"],
      },
    ],
    memeContent: {
      tiktokCaption: "no thoughts just chicken rice at 3pm 🐔✨",
      vibeCheck: "main character energy fr fr",
      memePotential: "this hits different but make it heritage 🍗💯",
      emojiCombo: ["🍗", "🍚", "🇸🇬", "✨"],
      internetSlang: ["bussin", "slay", "goated", "no cap"],
    },
    pairedWith: "kaya-toast",
  },
  {
    id: "char-kway-teow",
    emoji: "🥢",
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
    baseName: "Char Kway Teow",
    baseMemeCaption: "wok hei is a lifestyle 🔥🍜",
    baseVibeCheck: "cannot be tamed",
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
    hasModifiers: true,
    modifiers: [
      {
        id: "extra-char-ckt",
        name: "Extra Char Kway Teow",
        description: "For the wok hei maximalist",
        triggerTrait: "flavorProfile",
        triggerThreshold: 50,
        modifierTraits: { flavorProfile: "savory" },
        memeCaption: "me asking for extra char: give me that carbon 🔥🍜",
        emojiCombo: ["🔥", "🍜", "💀", "✨"],
      },
      {
        id: "cockles-ckt",
        name: "Cockles Loaded CKT",
        description: "The sea food lover's dream",
        triggerTrait: "adventureLevel",
        triggerThreshold: 50,
        modifierTraits: { adventureLevel: "adventurous" },
        memeCaption: "cockles gang rise up 🦪🔝",
        emojiCombo: ["🦪", "🌊", "🐚"],
      },
    ],
    memeContent: {
      tiktokCaption: "wok hei is a lifestyle 🔥🍜 #wokhei #char",
      vibeCheck: "cannot be tamed, wont be subdued",
      memePotential: "this literally set off the smoke detector 🚨💨",
      emojiCombo: ["🥢", "🍜", "🥚", "🦐", "💨"],
      internetSlang: ["wok hei", "bussin", "slay", "goated"],
    },
    pairedWith: "teh-tarik",
  },
  {
    id: "bak-kut-teh",
    emoji: "🍖",
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
    memeContent: {
      tiktokCaption: "4am bkt thoughts be like 🧠✨",
      vibeCheck: "old soul but make it nightlife",
      memePotential: "bone marrow just hit different at 3am 🦴💀",
      emojiCombo: ["🦴", "🍵", "🌙", "🧠"],
      internetSlang: ["healing", "main character", "vibes"],
    },
    pairedWith: "you-tiao",
  },
  {
    id: "satay",
    emoji: "🥜",
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
    memeContent: {
      tiktokCaption: "satay uncle calling is my ringtone 🔥🍢",
      vibeCheck: "the ultimate wingman",
      memePotential: "peanut sauce on everything debate 🫙✨",
      emojiCombo: ["🔥", "🍢", "🥜", "🥒", "🎉"],
      internetSlang: ["bussin", "goated", "slay"],
    },
    pairedWith: "teh-tarik",
  },
  {
    id: "rojak",
    emoji: "🥗",
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
    memeContent: {
      tiktokCaption: "rojak brain rot be hitting different rn 🧠💀",
      vibeCheck: "chaos goblin but elegant",
      memePotential: "fermented shrimp paste perfume who else 😤🦐",
      emojiCombo: ["🥗", "🦐", "🌶️", "🍍", "🎭"],
      internetSlang: ["no thoughts", "brain dead", "slay", "iconic"],
    },
    pairedWith: "cendol",
  },
  {
    id: "nasi-lemak",
    emoji: "🥥",
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
    memeContent: {
      tiktokCaption: "no thoughts just nasi lemak at 6am fr 🐔🇸🇬✨",
      vibeCheck: "national treasure energy",
      memePotential: "sambal made me do it 🔥💀",
      emojiCombo: ["🥥", "🍗", "🌶️", "🇸🇬", "👑"],
      internetSlang: ["bussin", "goated", "national treasure", "slay"],
    },
    pairedWith: "kaya-toast",
  },
  {
    id: "laksa",
    emoji: "🌶️",
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
    baseName: "Laksa",
    baseMemeCaption: "no thoughts just laksa at 2am 🦞🔥",
    baseVibeCheck: "can you handle the heat?",
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
    hasModifiers: true,
    modifiers: [
      {
        id: "extra-spicy-laksa",
        name: "Atomic Laksa",
        description: "For the spice veterans only",
        triggerTrait: "flavorProfile",
        triggerThreshold: 50,
        modifierTraits: { flavorProfile: "spicy" },
        memeCaption: "extra spicy = instant regret but no thoughts 🦞💀🔥",
        emojiCombo: ["🔥", "🌶️", "💀", "🦞"],
      },
      {
        id: "laksa-god",
        name: "Laksa Supreme",
        description: "Maximum toppings, maximum satisfaction",
        triggerTrait: "adventureLevel",
        triggerThreshold: 50,
        modifierTraits: { adventureLevel: "adventurous" },
        memeCaption: "laksa with everything = max bussin status 🦞✨💯",
        emojiCombo: ["🦞", "🦐", "🦪", "✨", "💯"],
      },
    ],
    memeContent: {
      tiktokCaption: "no thoughts just laksa at 2am 🦞🔥 #spicy",
      vibeCheck: "can you handle the heat? prove it",
      memePotential: "tongue fully malfunction after first spoon 💀👅",
      emojiCombo: ["🌶️", "🥥", "🌶️", "🔥", "💀"],
      internetSlang: ["bussin", "goated", "no cap", "slay", "rizz"],
    },
    pairedWith: "cendol",
  },
  {
    id: "kaya-toast",
    emoji: "🥪",
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
    baseName: "Kaya Toast",
    baseMemeCaption: "no thoughts just kaya toast at 5am 🤝🫡",
    baseVibeCheck: "early bird legend 🐦",
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
    hasModifiers: true,
    modifiers: [
      {
        id: "crispy-kaya",
        name: "Crispy Kaya Toast",
        description: "Extra crunch for the rebels",
        triggerTrait: "texturePreference",
        triggerThreshold: 50,
        modifierTraits: { texturePreference: "crunchy" },
        memeCaption: "crispy kaya toast gang rise up 🔥🥪",
        emojiCombo: ["🔥", "🥪", "💪", "🦾"],
      },
      {
        id: "double-kaya",
        name: "Double Kaya Toast",
        description: "The maximalist's choice",
        triggerTrait: "flavorProfile",
        triggerThreshold: 30,
        modifierTraits: { flavorProfile: "sweet" },
        memeCaption: "double kaya = double the bussin 🥪🥪✨",
        emojiCombo: ["🥪", "🥪", "✨", "💯"],
      },
      {
        id: "kopi-gao",
        name: "Kopi Gao Kaya Set",
        description: "The intense coffee enthusiast's breakfast",
        triggerTrait: "energyLevel",
        triggerThreshold: 50,
        modifierTraits: { energyLevel: "high" },
        memeCaption: "kopi gao level: can hear colors 🫖🎨",
        emojiCombo: ["☕", "👂", "🌈", "🫡"],
      },
    ],
    memeContent: {
      tiktokCaption: "no thoughts just kaya toast at 5am 🤝🫡 #breakfast",
      vibeCheck: "early bird legend 🐦✨",
      memePotential: "brain fully mal Function after first bite 🍞💀",
      emojiCombo: ["🥪", "🥚", "☕", "🇸🇬", "🫡"],
      internetSlang: ["bussin", "goated", "no thoughts", "main character"],
    },
    pairedWith: "kopi",
  },
  {
    id: "kopi",
    emoji: "☕",
    name: "Kopi",
    chineseName: "咖啡",
    description:
      "Singapore's beloved coffee, roasted with sugar and margarine to perfection. Strong, sweet, and served with condensed milk. The heartbeat of every kopi tiam.",
    personalityTraits: [
      "Bold and authentic",
      "No nonsense, just flavor",
      "The original energy drink",
      "Traditional and proud",
      "The morning kickstart",
    ],
    visualStyle: {
      colors: ["#4B3621", "#D2691E", "#F5F5DC"],
      mood: "Traditional, strong, and comforting - the Singapore way",
    },
    quote: "Kopi siu dai, kosong, ga dai - you know the drill.",
    category: "Beverage",
    quizAttributes: {
      energyLevel: "medium",
      socialPreference: "ambivert",
      flavorProfile: "sweet",
      adventureLevel: "traditional",
      timeOfDay: "morning",
      setting: "casual",
      texturePreference: "soft",
      culturalAuthenticity: "root-deep",
    },
    memeContent: {
      tiktokCaption: "kopi gang rise up ☕🇸🇬",
      vibeCheck: "local legend energy",
      memePotential: "the condensed milk hits different 🐄💯",
      emojiCombo: ["☕", "🇸🇬", "💪", "✨"],
      internetSlang: ["bussin", "goated", "no cap"],
    },
    pairedWith: "kaya-toast",
  },
  {
    id: "soft-boiled-eggs",
    emoji: "🥚",
    name: "Soft Boiled Eggs",
    chineseName: "温泉蛋",
    description:
      "Perfectly soft-boiled eggs with a runny yolk, served with soy sauce and white pepper. The classic kopi tiam sidekick.",
    personalityTraits: [
      "Simple but essential",
      "The reliable sidekick",
      "Perfect with everything",
    ],
    visualStyle: {
      colors: ["#FFD700", "#F5F5DC", "#8B4513"],
      mood: "Simple, comforting, and classic",
    },
    quote: "Dip it, scoop it, love it.",
    category: "Breakfast Side",
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
    memeContent: {
      tiktokCaption: "soft boiled egg supremacy 🥚✨",
      vibeCheck: "clean eating energy",
      memePotential: "the yolk porn is real 🍳💯",
      emojiCombo: ["🥚", "✨", "💕", "😤"],
      internetSlang: ["bussin", "slay"],
    },
    pairedWith: "kaya-toast",
  },
  {
    id: "cendol",
    emoji: "🍧",
    name: "Cendol",
    chineseName: "煎蕊",
    description:
      "Shaved ice dessert with green worm-like jelly, coconut milk, palm sugar, and red beans. The ultimate Singaporean cool-down treat.",
    personalityTraits: [
      "Sweet and refreshing",
      "The cool-down champion",
      "Perfect balance of sweet",
    ],
    visualStyle: {
      colors: ["#228B22", "#F5F5DC", "#8B4513", "#FF0000"],
      mood: "Sweet, cool, and satisfying",
    },
    quote: "Brain freeze? Worth it.",
    category: "Dessert",
    quizAttributes: {
      energyLevel: "low",
      socialPreference: "ambivert",
      flavorProfile: "sweet",
      adventureLevel: "moderate",
      timeOfDay: "afternoon",
      setting: "casual",
      texturePreference: "varied",
      culturalAuthenticity: "root-deep",
    },
    memeContent: {
      tiktokCaption: "cendol on a hot day be like 🧊❄️",
      vibeCheck: "refreshing energy",
      memePotential: "the palm sugar hits different 🌴💯",
      emojiCombo: ["🧊", "🍚", "🌴", "✨"],
      internetSlang: ["bussin", "slay", "no cap"],
    },
    pairedWith: "rojak",
  },
  {
    id: "carbonara-local-style",
    emoji: "🥓",
    name: "Carbonara, Local Style",
    chineseName: "意式面（本地风味）",
    description:
      "Creamy pasta sauce meets local flavors - topped with crispy pork lard, spring onions, and a touch of belachan. The fusion dish that bridges East and West.",
    personalityTraits: [
      "Cultural bridge builder",
      "Adventurous fusion lover",
      "East meets West mentality",
      "Modern yet respectful of tradition",
      "The diplomat of flavors",
      "Creative risk-taker",
      "The friend who introduces you to new things",
    ],
    visualStyle: {
      colors: ["#F5F5DC", "#FFD700", "#D2691E", "#228B22"],
      mood: "Sophisticated, modern, and unexpectedly harmonious",
    },
    quote: "Why choose when you can have the best of both worlds? 🍝🇸🇬",
    category: "Modern Fusion",
    quizAttributes: {
      energyLevel: "medium",
      socialPreference: "ambivert",
      flavorProfile: "balanced",
      adventureLevel: "moderate",
      timeOfDay: "evening",
      setting: "moderate",
      texturePreference: "chewy",
      culturalAuthenticity: "modern-fusion",
    },
    memeContent: {
      tiktokCaption: "local style carbonara hitting different 🇨🇳🇮🇹✨",
      vibeCheck: "fusion king energy",
      memePotential: "the pork lard elevates everything 🥓💯",
      emojiCombo: ["🍝", "🥓", "🇸🇬", "✨", "🎭"],
      internetSlang: ["bussin", "slay", "no cap", "goated"],
    },
    pairedWith: "teh-tarik",
  },
  {
    id: "muar-otak-otak",
    emoji: "🥘",
    name: "Muar Otak-Otak",
    chineseName: "麻坡乌达",
    description:
      "Grilled fish cake filled with spicy coconut curry paste, wrapped in banana leaves. A beloved heritage snack from Muar that's popular at Singapore's hawker centers.",
    personalityTraits: [
      "Heritage keeper",
      "Smoky and bold",
      "Community favorite",
      "Traditional with a kick",
      "The local legend",
      "Banana leaf enthusiast",
      "The friend who brings authentic vibes",
    ],
    visualStyle: {
      colors: ["#228B22", "#FFD700", "#FF6347", "#8B4513"],
      mood: "Smoky, aromatic, and deeply nostalgic - heritage in every bite",
    },
    quote: "Banana leaf is not just wrapping, its tradition. 🌿🔥",
    category: "Street Food",
    quizAttributes: {
      energyLevel: "medium",
      socialPreference: "ambivert",
      flavorProfile: "spicy",
      adventureLevel: "moderate",
      timeOfDay: "afternoon",
      setting: "casual",
      texturePreference: "soft",
      culturalAuthenticity: "root-deep",
    },
    memeContent: {
      tiktokCaption: "otak otak on banana leaf is calling my name 🌿🔥",
      vibeCheck: "heritage vibes only",
      memePotential: "the smoky banana leaf hits different 🍃💯",
      emojiCombo: ["🥘", "🌿", "🔥", "🐟", "👑"],
      internetSlang: ["bussin", "goated", "heritage", "slay"],
    },
    pairedWith: "teh-tarik",
  },
  {
    id: "egg-prata",
    emoji: "🫓",
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
    memeContent: {
      tiktokCaption: "prata flip fail compilation but make it 3am 🔄💀",
      vibeCheck: "flipping master actually no",
      memePotential: "curry dip or sugar debate continues 🫙🍬",
      emojiCombo: ["🫓", "🥚", "🍛", "🌙", "🔥"],
      internetSlang: ["bussin", "slay", "no cap", "vibes"],
    },
    pairedWith: "teh-tarik",
  },
  {
    id: "fish-head-curry",
    emoji: "🐟",
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
    memeContent: {
      tiktokCaption: "fish head gang where u at 🐟👀 #courage",
      vibeCheck: "fearless foodie energy",
      memePotential: "the eyes are watching me eat 💀👁️",
      emojiCombo: ["🐟", "🌶️", "🍛", "👁️", "💪"],
      internetSlang: ["slay", "goated", "courage", "no cap"],
    },
    pairedWith: "bee-hoon-soup",
  },
  {
    id: "bee-hoon-soup",
    emoji: "🍲",
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
    quote: "Simple si gin na, but never boring.",
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
    memeContent: {
      tiktokCaption: "clean eating but make it singapore 🍜✨",
      vibeCheck: "pure vibes only",
      memePotential: "the broth healed my soul 🫶🍵",
      emojiCombo: ["🍜", "💆", "✨", "🍃", "🫶"],
      internetSlang: ["healing", "clean", "vibes", "main character"],
    },
    pairedWith: "you-tiao",
  },
  {
    id: "yong-tau-foo",
    emoji: "🧆",
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
    memeContent: {
      tiktokCaption: "yong tau foo brain mode activated 🧠🎯",
      vibeCheck: "strategic eater energy",
      memePotential: "dry or soup? the eternal question 🫙🍜",
      emojiCombo: ["🥢", "🫛", "🍖", "🎯", "🧠"],
      internetSlang: ["main character", "no cap", "slay"],
    },
    pairedWith: "bee-hoon-soup",
  },
  {
    id: "fried-carrot-cake",
    emoji: "🍳",
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
      flavorProfile: "balanced",
      adventureLevel: "traditional",
      timeOfDay: "morning",
      setting: "casual",
      texturePreference: "chewy",
      culturalAuthenticity: "street-smart",
    },
    memeContent: {
      tiktokCaption: "white vs black carrot cake debate continues 🧡⚫",
      vibeCheck: "true singaporean energy",
      memePotential: "the crispy edges hit different 🍳💯",
      emojiCombo: ["🧡", "🍳", "🌅", "🥢", "🇸🇬"],
      internetSlang: ["bussin", "goated", "no thoughts", "slay"],
    },
    pairedWith: "teh-tarik",
  },
  {
    id: "oyster-omelette",
    emoji: "🦪",
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
    memeContent: {
      tiktokCaption: "oyster omelette defender squad rise 🦪🛡️",
      vibeCheck: "will die on this hill energy",
      memePotential: "the crispy edges vs soft center debate 💀🌊",
      emojiCombo: ["🦪", "🥚", "🔥", "⚔️", "💯"],
      internetSlang: ["slay", "no cap", "main character", "vibes"],
    },
    pairedWith: "bee-hoon-soup",
  },
  {
    id: "popiah",
    emoji: "🌯",
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
    memeContent: {
      tiktokCaption: "eating healthy but make it singapore 🍃✨",
      vibeCheck: "refined palate energy",
      memePotential: "the fresh cousin showing off 🫓💅",
      emojiCombo: ["🫓", "🥬", "🍤", "✨", "💅"],
      internetSlang: ["slay", "clean", "main character", "goated"],
    },
    pairedWith: "teh-tarik",
  },
  {
    id: "hokkien-prawn-mee",
    emoji: "🍤",
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
      flavorProfile: "spicy",
      adventureLevel: "traditional",
      timeOfDay: "afternoon",
      setting: "casual",
      texturePreference: "chewy",
      culturalAuthenticity: "root-deep",
    },
    memeContent: {
      tiktokCaption: "prawn mee supremacy 🦐👑 #noodlelife",
      vibeCheck: "broth is life fr",
      memePotential: "the prawn stock hit different 🦐💯",
      emojiCombo: ["🦐", "🍜", "🌊", "👑", "💯"],
      internetSlang: ["bussin", "goated", "slay", "no cap"],
    },
    pairedWith: "teh-tarik",
  },
  {
    id: "singapore-crab",
    emoji: "🦀",
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
    memeContent: {
      tiktokCaption: "chili crab gang where u at 🦀🔥 #celebration",
      vibeCheck: "showstopper energy fr",
      memePotential: "hands messy but heart full 🦀💋",
      emojiCombo: ["🦀", "🌶️", "🍅", "🎉", "🙌"],
      internetSlang: ["bussin", "goated", "slay", "no thoughts"],
    },
    pairedWith: "bee-hoon-soup",
  },
  {
    id: "duck-rice",
    emoji: "🦆",
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
      flavorProfile: "balanced",
      adventureLevel: "traditional",
      timeOfDay: "afternoon",
      setting: "moderate",
      texturePreference: "soft",
      culturalAuthenticity: "root-deep",
    },
    memeContent: {
      tiktokCaption: "duck rice lunch upgrade 🦆✨ #classy",
      vibeCheck: "quiet excellence energy",
      memePotential: "the crispy skin hits different 🍗💯",
      emojiCombo: ["🦆", "🍚", "👑", "✨", "💅"],
      internetSlang: ["goated", "slay", "main character", "no cap"],
    },
    pairedWith: "tea",
  },
  {
    id: "pork-congee",
    emoji: "🥣",
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
    memeContent: {
      tiktokCaption: "sick day congee appreciation post 🥣💕",
      vibeCheck: "healing energy",
      memePotential: "the ginger warms my soul 🫚❤️",
      emojiCombo: ["🥣", "💕", "🫚", "🌅", "🫶"],
      internetSlang: ["healing", "vibes", "main character", "no thoughts"],
    },
    pairedWith: "tea",
  },
  {
    id: "sambal-pasta",
    emoji: "🍝",
    name: "Sambal Pasta",
    chineseName: "参巴意面",
    description:
      "Al dente pasta tossed in spicy sambal-based sauce with local herbs, topped with a perfectly poached egg. The breakfast of champions with a spicy twist.",
    personalityTraits: [
      "Spice enthusiast",
      "Morning person with attitude",
      "Fusion pioneer",
      "Bold and unapologetic",
      "The early adopter",
      "Heat chaser",
      "The friend who starts trends",
    ],
    visualStyle: {
      colors: ["#FF4500", "#FFD700", "#F5F5DC", "#228B22"],
      mood: "Energetic, bold, and ready to conquer the day - with heat",
    },
    quote: "Breakfast is better with a kick. 🌶️☀️",
    category: "Modern Fusion",
    quizAttributes: {
      energyLevel: "high",
      socialPreference: "ambivert",
      flavorProfile: "spicy",
      adventureLevel: "adventurous",
      timeOfDay: "morning",
      setting: "moderate",
      texturePreference: "chewy",
      culturalAuthenticity: "modern-fusion",
    },
    memeContent: {
      tiktokCaption: "sambal pasta morning gang rise up 🌶️🍝☀️",
      vibeCheck: "spice god energy",
      memePotential: "the sambal wakes up everything 🔥💯",
      emojiCombo: ["🍝", "☀️", "🔥", "👑"],
      internetSlang: ["bussin", "goated", "no cap", "slay"],
    },
    pairedWith: "kaya-toast",
  },
  {
    id: "taugeh-ipoh-hor-fun",
    emoji: "🍜",
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
    memeContent: {
      tiktokCaption: "ipoh hor fun purity 🍜✨ #clean",
      vibeCheck: "minimalist masterclass",
      memePotential: "the bean sprouts elevate everything 🎋💯",
      emojiCombo: ["🍜", "🎋", "🌿", "✨", "👑"],
      internetSlang: ["slay", "goated", "clean", "main character"],
    },
    pairedWith: "teh-tarik",
  },
  {
    id: "minced-meat-noodle",
    emoji: "🥢",
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
      flavorProfile: "balanced",
      adventureLevel: "moderate",
      timeOfDay: "afternoon",
      setting: "casual",
      texturePreference: "chewy",
      culturalAuthenticity: "root-deep",
    },
    memeContent: {
      tiktokCaption: "minced meat noodle productivity boost 💪🍜",
      vibeCheck: "structured thinker energy",
      memePotential: "dry vs soup war continues ⚔️🍜",
      emojiCombo: ["🍜", "💪", "🎯", "🧠", "⚔️"],
      internetSlang: ["no cap", "slay", "main character", "goated"],
    },
    pairedWith: "tea",
  },
  {
    id: "wanton-mee",
    emoji: "🥟",
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
    memeContent: {
      tiktokCaption: "wonton mee since 1950s 🥟👑 #legend",
      vibeCheck: "OG energy never dies",
      memePotential: "springy noodles hitting different 🥟💯",
      emojiCombo: ["🥟", "🍜", "👑", "✨", "🏆"],
      internetSlang: ["goated", "slay", "no cap", "bussin"],
    },
    pairedWith: "teh-tarik",
  },
  {
    id: "curry-rice",
    emoji: "🍛",
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
    memeContent: {
      tiktokCaption: "curry rice drowning rice culture 🍛🌊",
      vibeCheck: "comfort food champion",
      memePotential: "all the curries on my rice yes 🌊🍛",
      emojiCombo: ["🍛", "🍚", "🍗", "🌊", "💯"],
      internetSlang: ["bussin", "slay", "vibes", "main character"],
    },
    pairedWith: "teh-tarik",
  },
  {
    id: "chee-cheong-fun",
    emoji: "🫔",
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
    memeContent: {
      tiktokCaption: "chee cheong fun smooth operator 🎋✨",
      vibeCheck: "understated excellence",
      memePotential: "silky smooth texture doing things 🫓💫",
      emojiCombo: ["🫓", "🎋", "✨", "💅", "👑"],
      internetSlang: ["slay", "main character", "goated", "clean"],
    },
    pairedWith: "tea",
  },
  {
    id: "tea",
    emoji: "🍵",
    name: "Teh Tarik",
    chineseName: "拉茶",
    description:
      "Pulled tea with condensed milk, poured from height to create the perfect froth. The national drink that brings people together.",
    personalityTraits: [
      "The social lubricant",
      "Community builder",
      "Smooth and refreshing",
      "The life of the gathering",
    ],
    visualStyle: {
      colors: ["#D2691E", "#F5F5DC", "#8B4513"],
      mood: "Social, refreshing, and satisfying",
    },
    quote: "Pull it high, pour it right.",
    category: "Beverage",
    quizAttributes: {
      energyLevel: "medium",
      socialPreference: "extrovert",
      flavorProfile: "sweet",
      adventureLevel: "traditional",
      timeOfDay: "afternoon",
      setting: "casual",
      texturePreference: "soft",
      culturalAuthenticity: "street-smart",
    },
    memeContent: {
      tiktokCaption: "teh tarik pull be hypnotizing 🫖✨",
      vibeCheck: "main character energy",
      memePotential: "the froth is everything 🫖💯",
      emojiCombo: ["🫖", "✨", "💪", "👑"],
      internetSlang: ["bussin", "slay", "goated"],
    },
    pairedWith: "satay",
  },
  {
    id: "you-tiao",
    emoji: "🥢",
    name: "You Tiao",
    chineseName: "油条",
    description:
      "Golden, crispy fried dough sticks. The perfect accompaniment to congee or kopi tiam breakfasts. Crunchy outside, airy inside - simple perfection.",
    personalityTraits: [
      "The perfect sidekick",
      "Crunchy and satisfying",
      "Classic breakfast essential",
      "Dip-worthy",
      "The supporting star",
    ],
    visualStyle: {
      colors: ["#F5DEB3", "#D2691E", "#FFD700"],
      mood: "Crispy, golden, and comforting - breakfast bliss",
    },
    quote: "Dip me, I belong to congee and kopi! 🥢",
    category: "Breakfast Side",
    quizAttributes: {
      energyLevel: "medium",
      socialPreference: "introvert",
      flavorProfile: "savory",
      adventureLevel: "traditional",
      timeOfDay: "morning",
      setting: "casual",
      texturePreference: "crunchy",
      culturalAuthenticity: "root-deep",
    },
    memeContent: {
      tiktokCaption: "you tiao dip congee be hitting different 🥢🥣",
      vibeCheck: "supporting actor energy",
      memePotential: "the crunch is everything 💯🔥",
      emojiCombo: ["🥢", "🔥", "💯", "🌅"],
      internetSlang: ["bussin", "goated", "slay"],
    },
    pairedWith: "pork-congee",
  },
];

/**
 * Quiz Scoring Guide
 *
 * Each dish has quizAttributes that map to personality dimensions.
 * For a 12-question quiz, you could assign 1-2 dishes per attribute:
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
 * Q11: Texture Talk (Classic vs Experimental)
 * Q12: Food Remix or OG? (Traditional vs Innovative)
 *
 * Scoring: Each answer maps to specific dishes. Most matching dishes = result!
 *
 * Modifier System:
 * - Each dish can have 2-3 modifiers triggered by specific trait thresholds
 * - Check if user's trait score exceeds triggerThreshold for a modifier
 * - If multiple modifiers trigger, show the highest scoring one
 * - Modifiers add personality quirks to the base dish result
 */
