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
    "Ordered in sticks of 10, eaten in sticks of 30",
    "Peanut sauce ratio is a science",
    "Cucumber and onions are just decoration",
    "Smoke signals bring people running",
    "Best shared but never enough to go around",
    "The MVP of any gathering",
    "Rice cakes are underrated real estate on the plate",
  ],
  visualStyle: {
    colors: ["#D2691E", "#F4A460", "#8B4513", "#90EE90"],
    mood: "Festive, communal, and joyous - every bite is a celebration",
  },
  quote: "Ten sticks minimum. No, make it twenty. Actually, thirty.",
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
  hasModifiers: true,
  modifiers: [
    {
      id: "peanut-butter-boss",
      name: "Peanut Butter Boss",
      description:
        "You know the perfect meat-to-peanut-sauce ratio. The answer is: maximum peanut sauce.",
      triggerTrait: "flavorProfile",
      triggerThreshold: 30,
      modifierTraits: { flavorProfile: "savory" },
      memeCaption: "requesting more peanut sauce (no shame)",
      emojiCombo: ["🥜", "🫙", "🍢", "👅"],
    },
  ],
  memeContent: {
    tiktokCaption: "ordered 10 sticks, eating 30 somehow",
    vibeCheck: "brings people together instantly",
    memePotential: "that smoky smell from across the hawker centre",
    emojiCombo: ["🔥", "🍢", "🥜", "🥒"],
    internetSlang: ["sharing", "crowd favorite", "classic"],
  },
};
