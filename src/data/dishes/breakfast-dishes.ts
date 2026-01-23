import { DISH_IDS } from "../dishIds";
import type { DishBase } from "../types";

export const kayaToast: DishBase = {
  id: DISH_IDS.KAYA_TOAST,
  emoji: "🥪",
  name: "Kaya Toast",
  chineseName: "咖椰吐司",
  description:
    "Crispy toast slathered with kaya (coconut egg jam) and cold butter, paired with soft-boiled eggs and strong kopi. The breakfast of champions since 1919, still going strong.",
  personalityTraits: [
    "5am regular at the kopitiam",
    "Cold butter on hot toast is a religion",
    "Knows the egg-kaya-kopi trinity by heart",
    "Has a favorite uncle who makes it just right",
    "Been the same since 1919, why change",
    "Morning ritual, not just breakfast",
    "Simple things done perfectly",
  ],
  visualStyle: {
    colors: ["#D2691E", "#F5F5DC", "#4B3621", "#FFEFD5"],
    mood: "Classic, nostalgic, and ready to conquer the day - kopi tiam vibes",
  },
  quote: "The cold butter melting into hot kaya is what mornings are for.",
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
  memeContent: {
    tiktokCaption: "woke up at 5am for this (worth it)",
    vibeCheck: "morning ritual unlocked",
    memePotential: "the cold butter melting debate",
    emojiCombo: ["🥪", "🥚", "☕", "🇸🇬"],
    internetSlang: ["classic", "timeless", "ritual"],
  },
};

export const kopi: DishBase = {
  id: DISH_IDS.KOPI,
  emoji: "☕",
  name: "Kopi",
  chineseName: "咖啡",
  description:
    "Singapore's beloved coffee, roasted with sugar and margarine to perfection. Strong, sweet, and served with condensed milk. The heartbeat of every kopi tiam.",
  personalityTraits: [
    "Knows every kopi order variation",
    "Roasted with sugar and margarine (non-negotiable)",
    "Condensed milk ratio is an art form",
    "Stronger than your espresso",
    "Served in a glass cup or it's not the same",
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
    tiktokCaption: "kopi siu dai hits different",
    vibeCheck: "knows the lingo",
    memePotential: "ordering kopi like a local speedrun",
    emojiCombo: ["☕", "🇸🇬", "💪"],
    internetSlang: ["authentic", "traditional", "local"],
  },
};

export const softBoiledEggs: DishBase = {
  id: DISH_IDS.SOFT_BOILLED_EGGS,
  emoji: "🥚",
  name: "Soft Boiled Eggs",
  chineseName: "温泉蛋",
  description:
    "Perfectly soft-boiled eggs with a runny yolk, served with soy sauce and white pepper. The classic kopi tiam sidekick.",
  personalityTraits: [
    "Timing is everything (60 seconds too long)",
    "Dark soy and white pepper only",
    "Never the main act, always essential",
    "Dip your toast or scoop with a spoon (choose your fighter)",
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
    tiktokCaption: "runny yolk appreciation post",
    vibeCheck: "perfectly timed",
    memePotential: "the dip vs scoop debate continues",
    emojiCombo: ["🥚", "🥄"],
    internetSlang: ["perfect", "simple", "essential"],
  },
};

export const cendol: DishBase = {
  id: DISH_IDS.CENDOL,
  emoji: "🍧",
  name: "Cendol",
  chineseName: "煎蕊",
  description:
    "Shaved ice dessert with green worm-like jelly, coconut milk, palm sugar, and red beans. The ultimate Singaporean cool-down treat.",
  personalityTraits: [
    "Green jelly worms never looked so good",
    "Coconut milk and gula melaka therapy",
    "Post-hawker heat emergency relief",
    "Brain freeze is the price of paradise",
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
    tiktokCaption: "cendol after spicy food (救命)",
    vibeCheck: "instant relief",
    memePotential: "gula melaka is liquid gold",
    emojiCombo: ["🧊", "🌴", "🥥"],
    internetSlang: ["refreshing", "sweet relief", "cooling"],
  },
};

export const carbonaraLocalStyle: DishBase = {
  id: DISH_IDS.CARBONARA_LOCAL,
  emoji: "🥓",
  name: "Carbonara, Local Style",
  chineseName: "意式面（本地风味）",
  description:
    "Creamy pasta sauce meets local flavors - topped with crispy pork lard, spring onions, and a touch of belachan. The fusion dish that bridges East and West.",
  personalityTraits: [
    "Italian meets Southeast Asian (somehow it works)",
    "Crispy pork lard on pasta is genius",
    "Not authentic to anyone, loved by everyone",
    "The dish that proves fusion can work",
    "Spring onions where parsley used to be",
    "Confuses Italian grandmas and Chinese aunties equally",
  ],
  visualStyle: {
    colors: ["#F5F5DC", "#FFD700", "#D2691E", "#228B22"],
    mood: "Sophisticated, modern, and unexpectedly harmonious",
  },
  quote: "Yes there's pork lard on it. No I won't apologize.",
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
    tiktokCaption: "when fusion actually works",
    vibeCheck: "cultural mashup champion",
    memePotential: "pork lard on pasta (trust the process)",
    emojiCombo: ["🍝", "🥓", "🇸🇬", "🇮🇹"],
    internetSlang: ["fusion", "creative", "unexpected"],
  },
};
