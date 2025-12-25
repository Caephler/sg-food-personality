import { DISH_IDS } from "../dishIds";
import type { DishBase } from "../types";

export const charKwayTeow: DishBase = {
  id: DISH_IDS.CHAR_KWAY_TEO,
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
};
