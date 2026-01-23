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
    "Will judge you for eating the wet version",
    "Has strong opinions about wok temperature",
    "Worth the queue, worth the carbs",
    "Dark soy stains are battle scars",
    "Knows every uncle's frying style",
    "Smoky, a little rough around the edges",
    "Loudest advocate for lard",
  ],
  visualStyle: {
    colors: ["#8B4513", "#FFD700", "#FF6347", "#2F4F4F"],
    mood: "Fiery, intense, and full of personality - the cool kid of the hawker center",
  },
  quote:
    "If there's no char, I'm not interested. Also, hold the cockles - I know what I said.",
  category: "Street Food",
  baseName: "Char Kway Teow",
  baseMemeCaption: "queued 45 minutes for this, no regrets",
  baseVibeCheck: "worth every calorie",
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
      description:
        "You wait for the uncle who gets the wok screaming hot. Anything less than carbon-adjacent is an insult.",
      triggerTrait: "flavorProfile",
      triggerThreshold: 50,
      modifierTraits: { flavorProfile: "savory" },
      memeCaption: "extra char or don't bother 🔥",
      emojiCombo: ["🔥", "🍜", "💀", "✨"],
    },
    {
      id: "cockles-ckt",
      name: "Cockles Loaded CKT",
      description:
        "Most people say 'no cockles please.' You are not most people. Load it up.",
      triggerTrait: "adventureLevel",
      triggerThreshold: 50,
      modifierTraits: { adventureLevel: "adventurous" },
      memeCaption: "yes to cockles, actually 🦪",
      emojiCombo: ["🦪", "🌊", "🐚"],
    },
  ],
  memeContent: {
    tiktokCaption: "queued 45 minutes for this, no regrets",
    vibeCheck: "worth every calorie",
    memePotential: "having strong opinions about char levels at 2pm",
    emojiCombo: ["🥢", "🍜", "🥚", "🦐"],
    internetSlang: ["wok hei", "char", "hits different"],
  },
};
