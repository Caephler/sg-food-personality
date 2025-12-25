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
  memeContent: {
    tiktokCaption: "no thoughts just laksa at 2am 🦞🔥",
    vibeCheck: "can you handle the heat?",
    memePotential: "tongue fully malfunction after first spoon 💀👅",
    emojiCombo: ["🌶️", "🥥", "🌶️", "🔥", "💀"],
    internetSlang: ["bussin", "goated", "no cap", "slay"],
  },
};
