/**
 * Quiz Questions for Singaporean Food Personality Quiz
 *
 * Each question maps to specific personality attributes from dishes.ts
 * 12 questions covering the 8 quiz attributes + 2 bonus fun questions + 2 new texture/innovation questions
 */

import { dishes, type Dish, type DishModifier } from "./dishes";

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
    question: "It's 3PM on a Saturday. What's your vibe?",
    answers: [
      {
        id: "a",
        text: "Just finished my second workout of the day 💪",
        traits: { energyLevel: "high" },
      },
      {
        id: "b",
        text: "Chilling at home, maybe meeting friends later",
        traits: { energyLevel: "medium" },
      },
      {
        id: "c",
        text: "Still in bed honestly... zzz",
        traits: { energyLevel: "low" },
      },
      {
        id: "d",
        text: "Working on my side hustle",
        traits: { energyLevel: "high" },
      },
    ],
  },
  // Q2: Social Preference
  {
    id: 2,
    question: "Your ideal weekend activity with friends:",
    answers: [
      {
        id: "a",
        text: "Clubbing, karaoke, or a big group hang! More people = more fun 🎉",
        traits: { socialPreference: "extrovert" },
      },
      {
        id: "b",
        text: "Small group dinner or cafe session, can also chill alone",
        traits: { socialPreference: "ambivert" },
      },
      {
        id: "c",
        text: "Solo Netflix and snacks, please don't call me 📺",
        traits: { socialPreference: "introvert" },
      },
      {
        id: "d",
        text: "One-on-one deep conversations over good food",
        traits: { socialPreference: "introvert" },
      },
    ],
  },
  // Q3: Flavor Profile
  {
    id: 3,
    question: "Pick your flavor profile:",
    answers: [
      {
        id: "a",
        text: "Sweet and comforting - like kaya toast 🧡",
        traits: { flavorProfile: "sweet" },
      },
      {
        id: "b",
        text: "Savoury and rich - give me that char kway teow",
        traits: { flavorProfile: "savory" },
      },
      {
        id: "c",
        text: "SPICY! I love the burn 🔥",
        traits: { flavorProfile: "spicy" },
      },
      {
        id: "d",
        text: "A bit of everything, balanced is best",
        traits: { flavorProfile: "balanced" },
      },
    ],
  },
  // Q4: Adventure Level
  {
    id: 4,
    question: "When it comes to food, you are:",
    answers: [
      {
        id: "a",
        text: "I'll try ANYTHING once. Fish head? Bring it 🐟",
        traits: { adventureLevel: "adventurous" },
      },
      {
        id: "b",
        text: "I'll try new things but stick to familiar favourites mostly",
        traits: { adventureLevel: "moderate" },
      },
      {
        id: "c",
        text: "Why fix what ain't broken? Same order every time",
        traits: { adventureLevel: "traditional" },
      },
      {
        id: "d",
        text: "I like exploring new cafes and food trends",
        traits: { adventureLevel: "moderate" },
      },
    ],
  },
  // Q5: Time of Day
  {
    id: 5,
    question: "What's your favourite time to eat?",
    answers: [
      {
        id: "a",
        text: "Morning! Breakfast is the best meal 🥚",
        traits: { timeOfDay: "morning" },
      },
      {
        id: "b",
        text: "Lunch time, need energy for the afternoon",
        traits: { timeOfDay: "afternoon" },
      },
      {
        id: "c",
        text: "Dinner is when I shine ✨",
        traits: { timeOfDay: "evening" },
      },
      {
        id: "d",
        text: "3am makan session hits different",
        traits: { timeOfDay: "night" },
      },
    ],
  },
  // Q6: Setting
  {
    id: 6,
    question: "Ideal food setting:",
    answers: [
      {
        id: "a",
        text: "Hawker centre, plastic chair, best weather 🍜",
        traits: { setting: "casual" },
      },
      {
        id: "b",
        text: "Coffee shop, air-conditioned, comfortable",
        traits: { setting: "moderate" },
      },
      {
        id: "c",
        text: "Fancy restaurant with good ambiance",
        traits: { setting: "elegant" },
      },
      {
        id: "d",
        text: "Home-cooked meal, most authentic",
        traits: { setting: "casual" },
      },
    ],
  },
  // Q7: Texture Preference
  {
    id: 7,
    question: "Texture matters! What do you prefer?",
    answers: [
      {
        id: "a",
        text: "Soft and silky - like kway teow or bee hoon",
        traits: { texturePreference: "soft" },
      },
      {
        id: "b",
        text: "Chewy and springy - gives me satisfaction",
        traits: { texturePreference: "chewy" },
      },
      {
        id: "c",
        text: "Varied textures in one dish - keeps it interesting",
        traits: { texturePreference: "varied" },
      },
      {
        id: "d",
        text: "Crunchy elements for that satisfying bite",
        traits: { texturePreference: "crunchy" },
      },
    ],
  },
  // Q8: Cultural Authenticity
  {
    id: 8,
    question: "Heritage and authenticity to you means:",
    answers: [
      {
        id: "a",
        text: "Traditional recipes passed down for generations 👴👵",
        traits: { culturalAuthenticity: "root-deep" },
      },
      {
        id: "b",
        text: "Local street food culture - that's the real Singapore 🏙️",
        traits: { culturalAuthenticity: "street-smart" },
      },
      {
        id: "c",
        text: "Mixing cultures is what makes SG food unique!",
        traits: { culturalAuthenticity: "modern-fusion" },
      },
      {
        id: "d",
        text: "I appreciate both traditional and modern interpretations",
        traits: { culturalAuthenticity: "root-deep" },
      },
    ],
  },
  // Q9: Bonus - Personality Trait
  {
    id: 9,
    question: "How do your friends describe you?",
    answers: [
      {
        id: "a",
        text: "The life of the party, always making people laugh 😂",
        traits: { energyLevel: "high", socialPreference: "extrovert" },
      },
      {
        id: "b",
        text: "The reliable one, always there for you 💯",
        traits: { energyLevel: "medium", socialPreference: "ambivert" },
      },
      {
        id: "c",
        text: "The chill one, go with the flow vibes 😌",
        traits: { energyLevel: "low", socialPreference: "introvert" },
      },
      {
        id: "d",
        text: "The ambitious one, always chasing goals 🚀",
        traits: { energyLevel: "high", adventureLevel: "adventurous" },
      },
    ],
  },
  // Q10: Bonus - Food Philosophy
  {
    id: 10,
    question: "Your food philosophy in one sentence:",
    answers: [
      {
        id: "a",
        text: "Life's too short, eat what makes you happy!",
        traits: { adventureLevel: "adventurous", flavorProfile: "balanced" },
      },
      {
        id: "b",
        text: "Good food brings people together 🤝",
        traits: {
          socialPreference: "extrovert",
          culturalAuthenticity: "root-deep",
        },
      },
      {
        id: "c",
        text: "Comfort food > everything else 🍜",
        traits: { energyLevel: "low", flavorProfile: "sweet" },
      },
      {
        id: "d",
        text: "Explore every hawker centre before I die!",
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
      "Texture Talk 💅 - When you think about the perfect dish, the texture should be:",
    answers: [
      {
        id: "a",
        text: "Classic and traditional - soft, melt-in-your-mouth 🍚",
        traits: { texturePreference: "soft", innovationLevel: "traditional" },
      },
      {
        id: "b",
        text: "With some bite - chewy and satisfying like good noodles 🥢",
        traits: { texturePreference: "chewy", innovationLevel: "moderate" },
      },
      {
        id: "c",
        text: "Mixed bag! Love when textures pop - crispy, soft, chewy all in one 👀",
        traits: { texturePreference: "varied", innovationLevel: "innovative" },
      },
      {
        id: "d",
        text: "EXTRA CRISPY. If it's not crunchy, is it even food? 🔥",
        traits: { texturePreference: "crunchy", innovationLevel: "moderate" },
      },
    ],
  },
  // Q12: Food Remix or OG? 🔄
  {
    id: 12,
    question:
      "Food Remix or OG? 🔄 - Someone suggests adding truffle to your favorite hawker dish. You:",
    answers: [
      {
        id: "a",
        text: "BETRAYAL! The OG recipe is perfect as is. Hands off our classics! 🙅",
        traits: { innovationLevel: "traditional" },
      },
      {
        id: "b",
        text: "I'll try it once, but honestly prefer the traditional version 🧐",
        traits: { innovationLevel: "moderate" },
      },
      {
        id: "c",
        text: "YAAASSSS! Fusion is what makes SG food exciting! More experiments please! 🎉",
        traits: { innovationLevel: "innovative" },
      },
      {
        id: "d",
        text: "Depends on the dish... some deserve respect, others can handle a remix 🤔",
        traits: { innovationLevel: "moderate" },
      },
    ],
  },
];

// Scoring function - calculates which dish matches best
export function calculateResult(answers: Record<number, QuizAnswer>): string {
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

  // Get most common values for each trait
  const userProfile = {
    energyLevel: getMostCommon(scores.energyLevel),
    socialPreference: getMostCommon(scores.socialPreference),
    flavorProfile: getMostCommon(scores.flavorProfile),
    adventureLevel: getMostCommon(scores.adventureLevel),
    timeOfDay: getMostCommon(scores.timeOfDay),
    setting: getMostCommon(scores.setting),
    texturePreference: getMostCommon(scores.texturePreference),
    culturalAuthenticity: getMostCommon(scores.culturalAuthenticity),
    sweetnessPreference: getMostCommon(scores.sweetnessPreference) as
      | "sweet"
      | "moderate",
    innovationLevel: getMostCommon(scores.innovationLevel) as
      | "traditional"
      | "moderate"
      | "innovative",
  };

  let bestMatch = dishes[0];
  let bestScore = 0;

  dishes.forEach((dish: Dish) => {
    const matchScore = calculateMatchScore(dish.quizAttributes, userProfile);
    if (matchScore > bestScore) {
      bestScore = matchScore;
      bestMatch = dish;
    }
  });

  return bestMatch.id;
}

function getMostCommon(obj: Record<string, number>): string {
  const entries = Object.entries(obj);
  if (entries.length === 0) return "medium";
  return entries.sort((a, b) => b[1] - a[1])[0][0];
}

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

  // Weight different attributes
  const weights: Record<string, number> = {
    energyLevel: 1.5,
    socialPreference: 1.2,
    flavorProfile: 1.5,
    adventureLevel: 1.3,
    timeOfDay: 1.0,
    setting: 1.0,
    texturePreference: 1.2,
    culturalAuthenticity: 1.3,
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

    const traitValue = getMostCommon(traitScores[modifier.triggerTrait]);
    const traitCount = traitScores[modifier.triggerTrait][traitValue];
    const traitQuestions = traitQuestionCount[modifier.triggerTrait] || 1;

    // Calculate percentage based on trait-specific questions, not total answers
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
