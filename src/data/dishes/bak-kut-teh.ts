import { DISH_IDS } from "../dishIds";
import type { DishBase } from "../types";

export const bakKutTeh: DishBase = {
  id: DISH_IDS.BAK_KUT_TEH,
  emoji: "🍖",
  name: "Bak Kut Teh",
  chineseName: "肉骨茶",
  description:
    "Ribs simmered in a complex herbal broth until fall-off-the-bone tender. Best enjoyed at 4 AM after a night out, when philosophical conversations with uncles flow as freely as the tea.",
  personalityTraits: [
    "Wise and introspective",
    "Takes time to appreciate",
    "Deep and complex once you get to know",
    "Night owl philosopher",
    "Healing vibes",
    "Patient and gentle",
    "The wise elder who still knows how to have fun",
  ],
  visualStyle: {
    colors: ["#8B4513", "#D2691E", "#F5DEB3", "#2F4F4F"],
    mood: "Contemplative, soothing, and wise - conversations happen here",
  },
  quote:
    "The herbal broth of life - takes time to simmer, but worth every sip.",
  category: "Hawker Classic",
  quizAttributes: {
    energyLevel: "low",
    socialPreference: "ambivert",
    flavorProfile: "savory",
    adventureLevel: "traditional",
    timeOfDay: "night",
    setting: "moderate",
    texturePreference: "soft",
    culturalAuthenticity: "root-deep",
  },
  hasModifiers: true,
  modifiers: [
    {
      id: "herbal-soul",
      name: "Herbal Soul",
      description:
        "You're all about that healing life. The herbal broth speaks to your soul, and 4 AM philosophical conversations are your love language",
      triggerTrait: "energyLevel",
      triggerThreshold: 30,
      modifierTraits: { energyLevel: "low" },
      memeCaption: "4am bkt thoughts be hitting different 🧠✨🍖",
      emojiCombo: ["🍖", "🍵", "🌙", "🧠"],
    },
  ],
  memeContent: {
    tiktokCaption: "4am bkt thoughts be like 🧠✨",
    vibeCheck: "old soul but make it nightlife",
    memePotential: "bone marrow just hit different at 3am 🦴💀",
    emojiCombo: ["🦴", "🍵", "🌙", "🧠"],
    internetSlang: ["healing", "main character", "vibes"],
  },
};
