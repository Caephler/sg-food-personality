/**
 * Quiz Questions for Singaporean Food Personality Quiz
 *
 * Each question maps to specific personality attributes from dishes.ts
 * 12 questions covering the 8 quiz attributes + 2 bonus fun questions + 2 new texture/innovation questions
 */

import { dishes, type Dish, type DishModifier } from "./dishes/index";

export type QuizAnswer = {
  id: string;
  text: string;
  traits: {
    energyLevel?: "high" | "medium" | "low";
    socialPreference?: "extrovert" | "ambivert" | "introvert";
    flavorProfile?: "sweet" | "savory" | "spicy" | "balanced";
    adventureLevel?: "adventurous" | "moderate" | "traditional";
    timeOfDay?: "morning" | "afternoon" | "evening" | "night";
    setting?: "casual" | "moderate" | "elegant";
    texturePreference?: "soft" | "chewy" | "crunchy" | "varied";
    culturalAuthenticity?: "root-deep" | "modern-fusion" | "street-smart";
    sweetnessPreference?: "sweet" | "moderate";
    innovationLevel?: "traditional" | "moderate" | "innovative";
  };
};

export interface QuizQuestion {
  id: number;
  question: string;
  answers: QuizAnswer[];
}

// Questions mapped to the 8 personality attributes
export const questions: QuizQuestion[] = [
  // Q1: Energy Level
  {
    id: 1,
    question: "It's 3PM on a Saturday. What's ur vibe?",
    answers: [
      {
        id: "a",
        text: "Just finished gym #2 today 💪 vibe is immaculate",
        traits: { energyLevel: "high" },
      },
      {
        id: "b",
        text: "Content lying in bed scrolling thru Tiktok... maybe meet friends later idk 🤔",
        traits: { energyLevel: "medium" },
      },
      {
        id: "c",
        text: "Sleep is my personality trait rn 💀 zzz",
        traits: { energyLevel: "low" },
      },
      {
        id: "d",
        text: "Grinding on my side hustle, passive income don't build itself 🚀",
        traits: { energyLevel: "high" },
      },
    ],
  },
  // Q2: Social Preference
  {
    id: 2,
    question: "Ur ideal weekend with friends:",
    answers: [
      {
        id: "a",
        text: "Clubbing, karaoke, or big group hang! The more the merrier 🎉✨",
        traits: { socialPreference: "extrovert" },
      },
      {
        id: "b",
        text: "Small group dinner or cafe hop ✨ can also vibe alone tho",
        traits: { socialPreference: "ambivert" },
      },
      {
        id: "c",
        text: "Solo Netflix and snacks era... do not disturb 📺🚫",
        traits: { socialPreference: "introvert" },
      },
      {
        id: "d",
        text: "1-on-1 deep talks over good food only, that's the intimacy we need 💯",
        traits: { socialPreference: "introvert" },
      },
    ],
  },
  // Q3: Flavor Profile
  {
    id: 3,
    question: "Pick ur flavor profile:",
    answers: [
      {
        id: "a",
        text: "Sweet stuff hits different 🧡 give me that comfort",
        traits: { flavorProfile: "sweet" },
      },
      {
        id: "b",
        text: "Savoryyyyyy... char kway teow supremacy 🍜🔥",
        traits: { flavorProfile: "savory" },
      },
      {
        id: "c",
        text: "SPICY OR DIE 🔥 the sweat is the reward",
        traits: { flavorProfile: "spicy" },
      },
      {
        id: "d",
        text: "Bit of everything honestly, balanced life goals ✨",
        traits: { flavorProfile: "balanced" },
      },
    ],
  },
  // Q4: Adventure Level
  {
    id: 4,
    question: "When it comes to food, ur that person who:",
    answers: [
      {
        id: "a",
        text: "WILL TRY ANYTHING ONCE. Fish head? CKT with cockles? Let's gooo 🐟✨",
        traits: { adventureLevel: "adventurous" },
      },
      {
        id: "b",
        text: "Try new cafes and viral foods but always return to my favorites tho",
        traits: { adventureLevel: "moderate" },
      },
      {
        id: "c",
        text: "Why fix what ain't broken? Same order every visit, no shame 🫡",
        traits: { adventureLevel: "traditional" },
      },
      {
        id: "d",
        text: "Obsessed with finding hidden gem hawker stalls, content creator szn 📸",
        traits: { adventureLevel: "moderate" },
      },
    ],
  },
  // Q5: Time of Day
  {
    id: 5,
    question: "Best time to eat (no wrong answers but there are better ones):",
    answers: [
      {
        id: "a",
        text: "MORNING PERSON ALERT! Breakfast is superior meal fr 🥚☀️",
        traits: { timeOfDay: "morning" },
      },
      {
        id: "b",
        text: "Lunch o'clock! Need fuel for the afternoon grind 🍚",
        traits: { timeOfDay: "afternoon" },
      },
      {
        id: "c",
        text: "Dinner is MY meal ✨ I cook up at night",
        traits: { timeOfDay: "evening" },
      },
      {
        id: "d",
        text: "3am supper hits different, night owl checking in 🦉🌙",
        traits: { timeOfDay: "night" },
      },
    ],
  },
  // Q6: Setting
  {
    id: 6,
    question: "Ideal food setting vibes:",
    answers: [
      {
        id: "a",
        text: "Hawker centre, plastic chair, best weather, no cap 🍜💯",
        traits: { setting: "casual" },
      },
      {
        id: "b",
        text: "Nice cafe or air-con coffee shop, aesthetic needed ✨☕",
        traits: { setting: "moderate" },
      },
      {
        id: "c",
        text: "Fancy restaurant with the ambience, special occasion only 👗✨",
        traits: { setting: "elegant" },
      },
      {
        id: "d",
        text: "HOME. Food at home is the most authentic honestly 🏠💕",
        traits: { setting: "casual" },
      },
    ],
  },
  // Q7: Texture Preference
  {
    id: 7,
    question: "Texture be making or breaking the dish fr 👀 What's ur thing?",
    answers: [
      {
        id: "a",
        text: "Soft and silky... kway teow energy is unmatched 🍜✨",
        traits: { texturePreference: "soft" },
      },
      {
        id: "b",
        text: "Chewy and springy like prata... satisfying bite no cap 🥢💯",
        traits: { texturePreference: "chewy" },
      },
      {
        id: "c",
        text: "Mixed textures hit different! Love when it go crazy 🎭🔥",
        traits: { texturePreference: "varied" },
      },
      {
        id: "d",
        text: "CRUNCHY OR IT'S RANK. Need that satisfying snap 🫵😤",
        traits: { texturePreference: "crunchy" },
      },
    ],
  },
  // Q8: Cultural Authenticity
  {
    id: 8,
    question: "Heritage and authenticity to u means:",
    answers: [
      {
        id: "a",
        text: "Traditional recipes passed down for gens... respect the elders 👴👵✨",
        traits: { culturalAuthenticity: "root-deep" },
      },
      {
        id: "b",
        text: "Local street food culture is THE culture, uncle and auntie shops forever 🏙️💯",
        traits: { culturalAuthenticity: "street-smart" },
      },
      {
        id: "c",
        text: "Mixing cultures is what makes SG food iconic tho! Fusion gang rise up 🎉🌏",
        traits: { culturalAuthenticity: "modern-fusion" },
      },
      {
        id: "d",
        text: "Both traditional AND modern deserve love... balance is key ✨",
        traits: { culturalAuthenticity: "root-deep" },
      },
    ],
  },
  // Q9: Bonus - Friend Vibes
  {
    id: 9,
    question: "How would ur friends describe u?",
    answers: [
      {
        id: "a",
        text: "The life of the party, always serving laughs 😂✨",
        traits: { energyLevel: "high", socialPreference: "extrovert" },
      },
      {
        id: "b",
        text: "The reliable one, always there for u thru everything 💯🫶",
        traits: { energyLevel: "medium", socialPreference: "ambivert" },
      },
      {
        id: "c",
        text: "The chill one, go with the flow vibes, low maintenance 😌✨",
        traits: { energyLevel: "low", socialPreference: "introvert" },
      },
      {
        id: "d",
        text: "The ambitious one, always grinding and setting goals 🚀💪",
        traits: { energyLevel: "high", adventureLevel: "adventurous" },
      },
    ],
  },
  // Q10: Bonus - Food Philosophy
  {
    id: 10,
    question: "Ur food philosophy in one sentence:",
    answers: [
      {
        id: "a",
        text: "Life's too short, eat what makes u happy PERIODT 💅🍽️",
        traits: { adventureLevel: "adventurous", flavorProfile: "balanced" },
      },
      {
        id: "b",
        text: "Good food brings people together, that's the truth 🤝💕",
        traits: {
          socialPreference: "extrovert",
          culturalAuthenticity: "root-deep",
        },
      },
      {
        id: "c",
        text: "Comfort food > everything else, that's my therapy 🍜💖",
        traits: { energyLevel: "low", flavorProfile: "sweet" },
      },
      {
        id: "d",
        text: "Gotta try every hawker centre before I die, bucket list szn 📝🏃",
        traits: {
          adventureLevel: "adventurous",
          culturalAuthenticity: "street-smart",
        },
      },
    ],
  },
  // Q11: Texture Talk 💅
  {
    id: 11,
    question:
      "Texture Talk 💅 - When u think about the PERFECT dish, the texture should:",
    answers: [
      {
        id: "a",
        text: "Classic and traditional... soft, melt in ur mouth vibes 🍚✨",
        traits: { texturePreference: "soft", innovationLevel: "traditional" },
      },
      {
        id: "b",
        text: "Have some bite to it... chewy and satisfying like proper noodles 🥢💯",
        traits: { texturePreference: "chewy", innovationLevel: "moderate" },
      },
      {
        id: "c",
        text: "Be a whole MIXED BAG! Love when textures go crazy 👀🎭🔥",
        traits: { texturePreference: "varied", innovationLevel: "innovative" },
      },
      {
        id: "d",
        text: "EXTRA CRISPY ENERGY. If it ain't crunchy, is it even food tho? 🔥💀",
        traits: { texturePreference: "crunchy", innovationLevel: "moderate" },
      },
    ],
  },
  // Q12: Food Remix or OG? 🔄
  {
    id: 12,
    question:
      "Food Remix or OG? 🔄 - Someone suggests adding truffle to ur fav hawker dish. U:",
    answers: [
      {
        id: "a",
        text: "BETRAYAL!! The OG is perfect as is. Hands OFF our classics 🙅💢",
        traits: { innovationLevel: "traditional" },
      },
      {
        id: "b",
        text: "Try it once for content but honestly? OG forever 🧐✨",
        traits: { innovationLevel: "moderate" },
      },
      {
        id: "c",
        text: "YAAASSSS EXPERIMENT!! Fusion is what makes SG food exciting fr 🎉🚀",
        traits: { innovationLevel: "innovative" },
      },
      {
        id: "d",
        text: "Depends on the dish honestly... some deserve respect, others can handle remix 🤔🫷",
        traits: { innovationLevel: "moderate" },
      },
    ],
  },
];

// Scoring function - calculates which dish matches best using bucketing approach
export function calculateResult(answers: Record<number, QuizAnswer>): string {
  // Build user personality signature from answers
  // This creates a deterministic mapping based on the user's trait profile
  const traitSignature = buildTraitSignature(answers);

  // Map the signature to a dish using a bucketing function
  // This ensures roughly equal distribution while remaining personality-based
  const dishIndex = signatureToDishIndex(traitSignature, dishes.length);

  return dishes[dishIndex].id;
}

/**
 * Build a deterministic trait signature from user answers
 * This captures the user's personality profile in a format suitable for bucketing
 */
function buildTraitSignature(
  answers: Record<number, QuizAnswer>
): Record<string, string> {
  // Tally scores for each attribute
  const scores: Record<string, Record<string, number>> = {
    energyLevel: { high: 0, medium: 0, low: 0 },
    socialPreference: { extrovert: 0, ambivert: 0, introvert: 0 },
    flavorProfile: { sweet: 0, savory: 0, spicy: 0, balanced: 0 },
    adventureLevel: { adventurous: 0, moderate: 0, traditional: 0 },
    timeOfDay: { morning: 0, afternoon: 0, evening: 0, night: 0 },
    setting: { casual: 0, moderate: 0, elegant: 0 },
    texturePreference: { soft: 0, chewy: 0, crunchy: 0, varied: 0 },
    culturalAuthenticity: {
      "root-deep": 0,
      "modern-fusion": 0,
      "street-smart": 0,
    },
    sweetnessPreference: { sweet: 0, moderate: 0 },
    innovationLevel: { traditional: 0, moderate: 0, innovative: 0 },
  };

  // Count traits from all answers
  Object.values(answers).forEach((answer) => {
    if (answer && answer.traits) {
      Object.entries(answer.traits).forEach(([trait, value]) => {
        if (scores[trait] && value) {
          scores[trait][value as string]++;
        }
      });
    }
  });

  // Get most common values for each trait (primary traits for matching)
  return {
    energyLevel: getMostCommon(scores.energyLevel),
    socialPreference: getMostCommon(scores.socialPreference),
    flavorProfile: getMostCommon(scores.flavorProfile),
    adventureLevel: getMostCommon(scores.adventureLevel),
    timeOfDay: getMostCommon(scores.timeOfDay),
    setting: getMostCommon(scores.setting),
    texturePreference: getMostCommon(scores.texturePreference),
    culturalAuthenticity: getMostCommon(scores.culturalAuthenticity),
    sweetnessPreference: getMostCommon(scores.sweetnessPreference),
    innovationLevel: getMostCommon(scores.innovationLevel),
  };
}

/**
 * Convert a trait signature to a dish index using a distribution-aware bucketing function
 * This ensures roughly equal distribution across all dishes
 */
function signatureToDishIndex(
  signature: Record<string, string>,
  numDishes: number
): number {
  // Create a unique string representation of the signature
  const signatureString = Object.values(signature).join("|");

  // Use a simple hash function to convert string to number
  let hash = 0;
  for (let i = 0; i < signatureString.length; i++) {
    const char = signatureString.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32-bit integer
  }

  // Use modulo to get dish index - this ensures uniform distribution
  // regardless of the input signature
  return Math.abs(hash) % numDishes;
}

function getMostCommon(obj: Record<string, number>): string {
  const entries = Object.entries(obj);
  if (entries.length === 0) return "medium";
  return entries.sort((a, b) => b[1] - a[1])[0][0];
}

/**
 * Calculate match score between dish attributes and user profile
 * This is kept for potential modifier use, but not for main selection
 */
function calculateMatchScore(
  dishAttrs: {
    energyLevel: string;
    socialPreference: string;
    flavorProfile: string;
    adventureLevel: string;
    timeOfDay: string;
    setting: string;
    texturePreference: string;
    culturalAuthenticity: string;
  },
  userProfile: {
    energyLevel: string;
    socialPreference: string;
    flavorProfile: string;
    adventureLevel: string;
    timeOfDay: string;
    setting: string;
    texturePreference: string;
    culturalAuthenticity: string;
    sweetnessPreference?: string;
    innovationLevel?: string;
  }
): number {
  let score = 0;

  // Equal weights for all attributes
  const weights: Record<string, number> = {
    energyLevel: 1.0,
    socialPreference: 1.0,
    flavorProfile: 1.0,
    adventureLevel: 1.0,
    timeOfDay: 1.0,
    setting: 1.0,
    texturePreference: 1.0,
    culturalAuthenticity: 1.0,
  };

  Object.entries(userProfile).forEach(([trait, value]) => {
    if (dishAttrs[trait as keyof typeof dishAttrs] === value) {
      score += weights[trait] || 1;
    }
  });

  return score;
}

/**
 * Modifier Decision Logic
 *
 * This function checks if user's trait scores trigger any modifiers for a dish.
 * Returns the triggered modifier or null if no modifiers are triggered.
 */
export function getActiveModifier(
  dish: Dish,
  answers: Record<number, QuizAnswer>
): DishModifier | null {
  if (!dish.hasModifiers || !dish.modifiers || dish.modifiers.length === 0) {
    return null;
  }

  // Calculate trait scores from answers
  const traitScores: Record<string, Record<string, number>> = {
    texturePreference: { soft: 0, chewy: 0, crunchy: 0, varied: 0 },
    flavorProfile: { sweet: 0, savory: 0, spicy: 0, balanced: 0 },
    energyLevel: { high: 0, medium: 0, low: 0 },
    adventureLevel: { adventurous: 0, moderate: 0, traditional: 0 },
    setting: { casual: 0, moderate: 0, elegant: 0 },
    sweetnessPreference: { sweet: 0, moderate: 0 },
    innovationLevel: { traditional: 0, moderate: 0, innovative: 0 },
    socialPreference: { extrovert: 0, ambivert: 0, introvert: 0 },
    timeOfDay: { morning: 0, afternoon: 0, evening: 0, night: 0 },
    culturalAuthenticity: {
      "root-deep": 0,
      "modern-fusion": 0,
      "street-smart": 0,
    },
  };

  // Count how many questions ask about each trait (for percentage calculation)
  const traitQuestionCount: Record<string, number> = {
    texturePreference: 0,
    flavorProfile: 0,
    energyLevel: 0,
    adventureLevel: 0,
    setting: 0,
    sweetnessPreference: 0,
    innovationLevel: 0,
    socialPreference: 0,
    timeOfDay: 0,
    culturalAuthenticity: 0,
  };

  // First pass: count how many questions ask about each trait
  Object.values(answers).forEach((answer) => {
    if (answer && answer.traits) {
      Object.keys(answer.traits).forEach((trait) => {
        if (traitQuestionCount[trait] !== undefined) {
          traitQuestionCount[trait]++;
        }
      });
    }
  });

  // Count traits from all answers
  Object.values(answers).forEach((answer) => {
    if (answer && answer.traits) {
      Object.entries(answer.traits).forEach(([trait, value]) => {
        if (traitScores[trait] && value) {
          traitScores[trait][value as string]++;
        }
      });
    }
  });

  // Find the best matching modifier
  let bestModifier: DishModifier | null = null;
  let highestScore = 0;

  for (const modifier of dish.modifiers) {
    // Ensure triggerTrait exists in traitScores to prevent runtime errors
    if (!traitScores[modifier.triggerTrait]) {
      continue;
    }

    // Check the specific trigger trait value, not the most common one
    const triggerValue = Object.entries(modifier.modifierTraits).find(
      ([trait]) => trait === modifier.triggerTrait
    )?.[1];

    if (!triggerValue) continue;

    const traitCount = traitScores[modifier.triggerTrait][triggerValue] || 0;
    const traitQuestions = traitQuestionCount[modifier.triggerTrait] || 1;

    // Calculate percentage based on trait-specific questions
    const percentage =
      traitQuestions > 0 ? (traitCount / traitQuestions) * 100 : 0;

    if (percentage >= modifier.triggerThreshold) {
      if (percentage > highestScore) {
        highestScore = percentage;
        bestModifier = modifier;
      }
    }
  }

  return bestModifier;
}

/**
 * Get paired dish information
 */
export function getPairedDish(dishId: string): Dish | null {
  if (!dishId) return null;

  const pairedDish = dishes.find((d: Dish) => d.id === dishId);

  return pairedDish || null;
}
