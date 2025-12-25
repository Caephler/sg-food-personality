import { DISH_IDS } from "../dishIds";
import type { DishBase } from "../types";

export const rojak: DishBase = {
  id: DISH_IDS.ROJAK,
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
};
