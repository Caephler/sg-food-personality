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
    "Fruit salad meets fermented shrimp paste (somehow works)",
    "Sweet, salty, spicy, funky - all at once",
    "Pineapple and prawn paste shouldn't work but here we are",
    "That black sauce is doing heavy lifting",
    "Acquired taste that becomes an obsession",
    "Messy on purpose",
    "Singapore in a bowl - chaotic, delicious, unexplainable",
  ],
  visualStyle: {
    colors: ["#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF"],
    mood: "Eclectic, vibrant, and delightfully confusing - a party in your mouth",
  },
  quote: "Yes, it's fruit with fermented shrimp. No, I won't explain further.",
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
  hasModifiers: true,
  modifiers: [
    {
      id: "local-fusion-queen",
      name: "Local Fusion Queen/King",
      description:
        "You appreciate complexity. The weirder the ingredient combination, the better. This is art.",
      triggerTrait: "culturalAuthenticity",
      triggerThreshold: 30,
      modifierTraits: { culturalAuthenticity: "modern-fusion" },
      memeCaption: "yes it's fusion, no I won't elaborate",
      emojiCombo: ["🎭", "🌏", "🍍", "🦐"],
    },
  ],
  memeContent: {
    tiktokCaption: "explaining rojak to confused friends",
    vibeCheck: "organized chaos",
    memePotential: "that one dish you can't describe properly",
    emojiCombo: ["🥗", "🦐", "🌶️", "🍍"],
    internetSlang: ["complex", "acquired taste", "unique"],
  },
};
