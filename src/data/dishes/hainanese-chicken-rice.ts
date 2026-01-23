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
    "Universally loved without trying",
    "Deceptively simple, surprisingly particular",
    "Works the lunch crowd like nobody's business",
    "Has opinions about ginger-garlic ratios",
    "Never the loudest in the room, always remembered",
    "Reliable on your worst days",
    "Knows everyone's order by heart",
  ],
  visualStyle: {
    colors: ["#F5F5DC", "#D2691E", "#228B22", "#FFD700"],
    mood: "Warm, nostalgic, and reassuring - like a warm hug from your auntie",
  },
  quote:
    "You can find me anywhere from Tian Tian to Boon Tong Kee, but you already knew that.",
  category: "Hawker Classic",
  baseName: "Hainanese Chicken Rice",
  baseMemeCaption: "cancelled plans for chicken rice again 🐔",
  baseVibeCheck: "comfortable in any setting",
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
      description:
        "You know the difference between $3.50 and $8 chicken rice, and sometimes it matters. The kampung chicken hits different.",
      triggerTrait: "setting",
      triggerThreshold: 50,
      modifierTraits: { setting: "elegant" },
      memeCaption: "worth it for the kampung chicken tbh 💸",
      emojiCombo: ["💰", "👑", "🍗"],
    },
    {
      id: "spicy-chicken-rice",
      name: "Spicy Garlic Chicken Rice",
      description:
        "The dark soy and chili aren't enough. You need that raw garlic kick that makes your colleagues keep their distance.",
      triggerTrait: "flavorProfile",
      triggerThreshold: 20,
      modifierTraits: { flavorProfile: "spicy" },
      memeCaption: "breath weapon activated 🌶️",
      emojiCombo: ["🌶️", "🔥", "😤"],
    },
  ],
  memeContent: {
    tiktokCaption: "cancelled plans for chicken rice again 🐔",
    vibeCheck: "comfortable in any setting",
    memePotential: "the chili-ginger-soy debate is a lifestyle choice",
    emojiCombo: ["🍗", "🍚", "🇸🇬"],
    internetSlang: ["comfort food", "hits different", "always"],
  },
};
