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
    "Best at 4am when nothing else makes sense",
    "Herbal, earthy, medicinal (in a good way)",
    "Pair with youtiao or don't talk to me",
    "Slow-cooked wisdom in every sip",
    "Knows all the late-night spots",
    "Comfort food for the soul-searching hours",
    "Teochew heritage, modern necessity",
  ],
  visualStyle: {
    colors: ["#8B4513", "#D2691E", "#F5DEB3", "#2F4F4F"],
    mood: "Contemplative, soothing, and wise - conversations happen here",
  },
  quote:
    "Some people get coffee at 3am. I get herbal pork rib soup. We are not the same.",
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
        "You order extra herbs. The darker the broth, the better. This is medicine, food, and therapy in one bowl.",
      triggerTrait: "energyLevel",
      triggerThreshold: 30,
      modifierTraits: { energyLevel: "low" },
      memeCaption: "the darker the broth the stronger my opinions",
      emojiCombo: ["🍖", "🍵", "🌙", "🧠"],
    },
  ],
  memeContent: {
    tiktokCaption: "having herbal soup at 4am like it's normal",
    vibeCheck: "late night wisdom in a bowl",
    memePotential: "explaining BKT to confused friends at dawn",
    emojiCombo: ["🦴", "🍵", "🌙"],
    internetSlang: ["healing", "comfort food", "late night"],
  },
};
