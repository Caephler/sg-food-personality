import { DISH_IDS } from "../dishIds";
import type { DishBase } from "../types";

export const nasiLemak: DishBase = {
  id: DISH_IDS.NASI_LEMAK,
  emoji: "🥥",
  name: "Nasi Lemak",
  chineseName: "椰浆饭",
  description:
    "Fragrant coconut rice crowned with crispy fried chicken wing, sambal that could start a fire, crunchy anchovies, and a perfect soft-boiled egg. The unofficial national dish that needs no introduction.",
  personalityTraits: [
    "Breakfast, lunch, dinner, supper - all valid",
    "The sambal carries this whole operation",
    "Crispy chicken wing is non-negotiable",
    "Perfectly balanced chaos on one plate",
    "Anchovies are underrated and you know it",
    "Will fight about Malaysian vs Singaporean origins",
    "That one dish everyone agrees on",
  ],
  visualStyle: {
    colors: ["#FFD700", "#FF6347", "#8B4513", "#F5F5DC"],
    mood: "Proud, bold, and undeniably local - a national treasure",
  },
  quote: "Sambal first, ask questions later.",
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
  hasModifiers: true,
  modifiers: [
    {
      id: "sambal-addict",
      name: "Sambal Addict",
      description:
        "The rice is just a vehicle for the sambal. You've been known to ask for extra, twice.",
      triggerTrait: "flavorProfile",
      triggerThreshold: 30,
      modifierTraits: { flavorProfile: "spicy" },
      memeCaption: "asking for extra sambal (again)",
      emojiCombo: ["🌶️", "🔥", "🇸🇬"],
    },
  ],
  memeContent: {
    tiktokCaption: "having nasi lemak at 6am (again)",
    vibeCheck: "works at any hour",
    memePotential: "sambal on everything is a valid life choice",
    emojiCombo: ["🥥", "🍗", "🌶️", "🇸🇬"],
    internetSlang: ["anytime", "sambal", "classic"],
  },
};
