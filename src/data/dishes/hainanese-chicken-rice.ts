import { DISH_IDS } from "../dishIds";
import type { DishBase } from "../types";

export const hainaneseChickenRice: DishBase = {
  id: DISH_IDS.HAINANESE_CHICKEN_RICE,
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
};
