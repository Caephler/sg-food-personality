import { DISH_IDS } from "../dishIds";

import type { DishBase } from "../types";

export const laksa: DishBase = {
  id: DISH_IDS.LAKSA,
  emoji: "🌶️",
  name: "Laksa",
  chineseName: "叻沙",
  description:
    "Rice noodles swimming in spicy coconut curry broth loaded with prawns, cockles, tofu puffs, and bean sprouts. A Peranakan masterpiece that wakes up every cell in your body.",
  personalityTraits: [
    "Spice level is non-negotiable",
    "Coconut milk softens nothing",
    "Runs hot from first bite to last",
    "Peranakan roots show in every layer",
    "Sweating is part of the experience",
    "Demands your full attention",
    "Your sinuses will remember this",
  ],
  visualStyle: {
    colors: ["#FF4500", "#FFD700", "#FF6347", "#8B0000"],
    mood: "Passionate, intense, and unforgettable - a flavor adventure",
  },
  quote: "I don't do mild. Never have, never will.",
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
  hasModifiers: true,
  modifiers: [
    {
      id: "spice-level-max",
      name: "Spice Level: Maximum",
      description:
        "Regular laksa is for tourists. You want the version that makes the aunty ask if you're sure.",
      triggerTrait: "adventureLevel",
      triggerThreshold: 30,
      modifierTraits: { adventureLevel: "adventurous" },
      memeCaption: "yes aunty, I'm sure about the spice level",
      emojiCombo: ["🌶️", "🔥", "💀", "👅"],
    },
  ],
  memeContent: {
    tiktokCaption: "perspiring through lunch like it's cardio",
    vibeCheck: "spice tolerance is a personality trait",
    memePotential: "asking for tissue at table 3",
    emojiCombo: ["🌶️", "🥥", "🦐"],
    internetSlang: ["spicy", "heat", "worth it"],
  },
};
