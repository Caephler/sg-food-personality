import { DISH_IDS } from "../dishIds";
import type { DishBase } from "../types";

export const satay: DishBase = {
  id: DISH_IDS.SATAY,
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
};
