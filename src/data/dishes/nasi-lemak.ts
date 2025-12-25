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
    "Proudly Singaporean",
    "Complex yet accessible",
    "Full of contrast and balance",
    "The life of every party",
    "Comforting and exciting at once",
    "Versatile - works anytime",
    "The ambassador everyone loves",
  ],
  visualStyle: {
    colors: ["#FFD700", "#FF6347", "#8B4513", "#F5F5DC"],
    mood: "Proud, bold, and undeniably local - a national treasure",
  },
  quote: "Im not just a dish - Im a whole mood, lor.",
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
        "You didn't come for the rice, you came for THAT sambal. Extra sambal please, make it hurt (in a good way)",
      triggerTrait: "flavorProfile",
      triggerThreshold: 30,
      modifierTraits: { flavorProfile: "spicy" },
      memeCaption: "extra sambal or riot 🔥🌶️💀",
      emojiCombo: ["🌶️", "🔥", "🇸🇬"],
    },
  ],
  memeContent: {
    tiktokCaption: "no thoughts just nasi lemak at 6am fr 🐔🇸🇬✨",
    vibeCheck: "national treasure energy",
    memePotential: "sambal made me do it 🔥💀",
    emojiCombo: ["🥥", "🍗", "🌶️", "🇸🇬", "👑"],
    internetSlang: ["bussin", "goated", "national treasure", "slay"],
  },
};
