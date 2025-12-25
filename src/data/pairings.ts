/**
 * Bidirectional Pairing Logic for Singaporean Dishes
 *
 * This module computes pairings based on personality compatibility.
 * Pairings are TWO-WAY: if A pairs with B, then B pairs with A.
 *
 * Pairing Algorithm:
 * 1. For each dish, calculate compatibility with all other dishes based on:
 *    - Similar or complementary energy levels
 *    - Complementary flavor profiles (e.g., spicy pairs well with sweet)
 *    - Similar social preferences
 *    - Complementary time of day (breakfast pairs with other morning/all-day dishes)
 *    - Similar cultural authenticity level
 *    - Texture contrast (crunchy + soft works well)
 *
 * 2. Each pairing has:
 *    - dishId: the paired dish ID
 *    - reason: a short explanation of why they pair well
 *    - compatibilityScore: 0-100 based on trait similarity
 */

import type { DishBase, PairedWith } from "./types";
import { DISH_IDS } from "./dishIds";

// Flavor compatibility matrix
const flavorCompatibility: Record<string, Record<string, number>> = {
  sweet: { sweet: 80, savory: 60, spicy: 90, balanced: 70 }, // Sweet pairs well with spicy
  savory: { sweet: 60, savory: 85, spicy: 70, balanced: 80 },
  spicy: { sweet: 90, savory: 70, spicy: 75, balanced: 65 }, // Spicy pairs well with sweet
  balanced: { sweet: 70, savory: 80, spicy: 65, balanced: 75 },
};

// Energy level compatibility
const energyCompatibility: Record<string, Record<string, number>> = {
  high: { high: 90, medium: 70, low: 50 },
  medium: { high: 70, medium: 85, low: 75 },
  low: { high: 50, medium: 75, low: 90 },
};

// Time of day compatibility (morning pairs with morning/all-day)
const timeCompatibility: Record<string, Record<string, number>> = {
  morning: { morning: 95, afternoon: 75, evening: 50, night: 40 },
  afternoon: { morning: 75, afternoon: 85, evening: 70, night: 60 },
  evening: { morning: 50, afternoon: 70, evening: 90, night: 75 },
  night: { morning: 40, afternoon: 60, evening: 75, night: 90 },
};

// Social preference compatibility
const socialCompatibility: Record<string, Record<string, number>> = {
  extrovert: { extrovert: 90, ambivert: 75, introvert: 55 },
  ambivert: { extrovert: 75, ambivert: 85, introvert: 70 },
  introvert: { extrovert: 55, ambivert: 70, introvert: 90 },
};

// Cultural authenticity compatibility
const culturalCompatibility: Record<string, Record<string, number>> = {
  "root-deep": { "root-deep": 90, "modern-fusion": 60, "street-smart": 75 },
  "modern-fusion": { "root-deep": 60, "modern-fusion": 85, "street-smart": 70 },
  "street-smart": { "root-deep": 75, "modern-fusion": 70, "street-smart": 90 },
};

// Texture complementarity (opposites attract)
const textureCompatibility: Record<string, Record<string, number>> = {
  soft: { soft: 70, crunchy: 90, chewy: 75, varied: 80 },
  crunchy: { soft: 90, crunchy: 70, chewy: 65, varied: 75 },
  chewy: { soft: 75, crunchy: 65, chewy: 80, varied: 85 },
  varied: { soft: 80, crunchy: 75, chewy: 85, varied: 80 },
};

// Adventure level compatibility
const adventureCompatibility: Record<string, Record<string, number>> = {
  adventurous: { adventurous: 85, moderate: 70, traditional: 55 },
  moderate: { adventurous: 70, moderate: 85, traditional: 75 },
  traditional: { adventurous: 55, moderate: 75, traditional: 90 },
};

/**
 * Calculate compatibility score between two dishes
 */
export function calculateCompatibility(
  dish1: DishBase,
  dish2: DishBase
): number {
  const attrs1 = dish1.quizAttributes;
  const attrs2 = dish2.quizAttributes;

  let score = 0;
  let weights = 0;

  // Energy level (weight: 1.5)
  const energyScore =
    energyCompatibility[attrs1.energyLevel]?.[attrs2.energyLevel] || 50;
  score += energyScore * 1.5;
  weights += 1.5;

  // Flavor profile (weight: 1.5) - sweet and spicy are complementary
  const flavorScore =
    flavorCompatibility[attrs1.flavorProfile]?.[attrs2.flavorProfile] || 50;
  score += flavorScore * 1.5;
  weights += 1.5;

  // Time of day (weight: 1.2)
  const timeScore =
    timeCompatibility[attrs1.timeOfDay]?.[attrs2.timeOfDay] || 50;
  score += timeScore * 1.2;
  weights += 1.2;

  // Social preference (weight: 1.0)
  const socialScore =
    socialCompatibility[attrs1.socialPreference]?.[attrs2.socialPreference] ||
    50;
  score += socialScore * 1.0;
  weights += 1.0;

  // Cultural authenticity (weight: 1.0)
  const culturalScore =
    culturalCompatibility[attrs1.culturalAuthenticity]?.[
      attrs2.culturalAuthenticity
    ] || 50;
  score += culturalScore * 1.0;
  weights += 1.0;

  // Texture (weight: 1.0) - crunchy pairs well with soft
  const textureScore =
    textureCompatibility[attrs1.texturePreference]?.[
      attrs2.texturePreference
    ] || 50;
  score += textureScore * 1.0;
  weights += 1.0;

  // Adventure level (weight: 0.8)
  const adventureScore =
    adventureCompatibility[attrs1.adventureLevel]?.[attrs2.adventureLevel] ||
    50;
  score += adventureScore * 0.8;
  weights += 0.8;

  return Math.round(score / weights);
}

/**
 * Generate a pairing reason based on compatibility factors
 */
function generateReason(dish1: DishBase, dish2: DishBase): string {
  const attrs1 = dish1.quizAttributes;
  const attrs2 = dish2.quizAttributes;
  const reasons: string[] = [];

  // Check flavor complementarity
  if (
    (attrs1.flavorProfile === "sweet" && attrs2.flavorProfile === "spicy") ||
    (attrs1.flavorProfile === "spicy" && attrs2.flavorProfile === "sweet")
  ) {
    reasons.push("Sweet meets spicy for perfect balance");
  }

  // Check time compatibility
  if (attrs1.timeOfDay === "morning" && attrs2.timeOfDay === "morning") {
    reasons.push("Morning besties who start the day right");
  }

  // Check texture contrast
  if (
    (attrs1.texturePreference === "crunchy" &&
      attrs2.texturePreference === "soft") ||
    (attrs1.texturePreference === "soft" &&
      attrs2.texturePreference === "crunchy")
  ) {
    reasons.push("Crunchy meets soft for textural harmony");
  }

  // Check energy levels
  if (attrs1.energyLevel === attrs2.energyLevel) {
    reasons.push("Same energy, same vibe");
  }

  // Check social preference
  if (attrs1.socialPreference === attrs2.socialPreference) {
    if (attrs1.socialPreference === "extrovert") {
      reasons.push("Social butterflies together");
    } else if (attrs1.socialPreference === "introvert") {
      reasons.push("Quiet companionship");
    } else {
      reasons.push("Perfectly balanced together");
    }
  }

  // Check cultural authenticity
  if (attrs1.culturalAuthenticity === attrs2.culturalAuthenticity) {
    if (attrs1.culturalAuthenticity === "root-deep") {
      reasons.push("Heritage heroes united");
    } else if (attrs1.culturalAuthenticity === "street-smart") {
      reasons.push("Street food legends");
    }
  }

  // Default reason
  if (reasons.length === 0) {
    reasons.push("Complementary flavors and vibes");
  }

  return reasons[0];
}

/**
 * Compute all pairings for a dish and return the best one
 */
export function computeBestPairing(
  dish: DishBase,
  allDishes: DishBase[]
): PairedWith | null {
  let bestPairing: PairedWith | null = null;
  let bestScore = 0;

  for (const otherDish of allDishes) {
    if (otherDish.id === dish.id) continue;

    const score = calculateCompatibility(dish, otherDish);

    if (score > bestScore) {
      bestScore = score;
      bestPairing = {
        dishId: otherDish.id,
        reason: generateReason(dish, otherDish),
        compatibilityScore: score,
      };
    }
  }

  return bestPairing;
}

/**
 * Compute all pairings for all dishes (bidirectional)
 */
export function computeAllPairings(
  dishes: DishBase[]
): Map<string, PairedWith[]> {
  const pairingMap = new Map<string, PairedWith[]>();

  // First pass: compute all pairings
  for (const dish of dishes) {
    const pairings: PairedWith[] = [];

    for (const otherDish of dishes) {
      if (otherDish.id === dish.id) continue;

      const score = calculateCompatibility(dish, otherDish);

      // Only include pairings with score >= 70
      if (score >= 70) {
        pairings.push({
          dishId: otherDish.id,
          reason: generateReason(dish, otherDish),
          compatibilityScore: score,
        });
      }
    }

    // Sort by compatibility score descending
    pairings.sort((a, b) => b.compatibilityScore - a.compatibilityScore);
    pairingMap.set(dish.id, pairings);
  }

  return pairingMap;
}

/**
 * Specific pairing configurations for iconic combinations
 * These ensure certain classic pairings are always included
 */
export const classicPairings: Record<string, string[]> = {
  [DISH_IDS.KAYA_TOAST]: [DISH_IDS.KOPI, DISH_IDS.SOFT_BOILLED_EGGS],
  [DISH_IDS.KOPI]: [DISH_IDS.KAYA_TOAST],
  [DISH_IDS.PORK_CONGEE]: [DISH_IDS.YOU_TIAO],
  [DISH_IDS.YOU_TIAO]: [DISH_IDS.PORK_CONGEE, DISH_IDS.KOPI],
  [DISH_IDS.BAK_KUT_TEH]: [DISH_IDS.YOU_TIAO],
  [DISH_IDS.CHAR_KWAY_TEO]: [DISH_IDS.TEA],
  [DISH_IDS.SATAY]: [DISH_IDS.TEA, DISH_IDS.CENDOL],
  [DISH_IDS.TEA]: [DISH_IDS.SATAY, DISH_IDS.CHAR_KWAY_TEO, DISH_IDS.EGG_PRATA],
  [DISH_IDS.CENDOL]: [DISH_IDS.ROJAK, DISH_IDS.SATAY],
  [DISH_IDS.ROJAK]: [DISH_IDS.CENDOL],
  [DISH_IDS.NASI_LEMAK]: [DISH_IDS.KAYA_TOAST, DISH_IDS.TEA],
  [DISH_IDS.HAINANESE_CHICKEN_RICE]: [DISH_IDS.KAYA_TOAST],
  [DISH_IDS.LAKSA]: [DISH_IDS.CENDOL],
  [DISH_IDS.EGG_PRATA]: [DISH_IDS.TEA, DISH_IDS.CURRY_RICE],
};

/**
 * Get pairing reason for classic pairings
 */
export function getClassicPairingReason(
  dishId: string,
  pairedId: string
): string {
  const reasonMap: Record<string, string> = {
    [`${DISH_IDS.KAYA_TOAST}-${DISH_IDS.KOPI}`]:
      "The OG breakfast combo - kaya and kopi for life",
    [`${DISH_IDS.KOPI}-${DISH_IDS.KAYA_TOAST}`]:
      "Strong coffee meets sweet kaya - Singapore mornings sorted",
    [`${DISH_IDS.PORK_CONGEE}-${DISH_IDS.YOU_TIAO}`]:
      "Silky congee meets crispy you tiao - comfort food royalty",
    [`${DISH_IDS.YOU_TIAO}-${DISH_IDS.PORK_CONGEE}`]:
      "Dip it like it's hot - the ultimate comfort combo",
    [`${DISH_IDS.BAK_KUT_TEH}-${DISH_IDS.YOU_TIAO}`]:
      "Herbal soup and crispy dough - late night perfection",
    [`${DISH_IDS.CHAR_KWAY_TEO}-${DISH_IDS.TEA}`]:
      "Wok hei needs teh tarik to balance the heat",
    [`${DISH_IDS.SATAY}-${DISH_IDS.TEA}`]: "Peanut sauce calls for pulled tea",
    [`${DISH_IDS.TEA}-${DISH_IDS.SATAY}`]:
      "The refreshing foil to satay's richness",
    [`${DISH_IDS.CENDOL}-${DISH_IDS.ROJAK}`]:
      "Sweet meets chaotic - a flavor adventure",
    [`${DISH_IDS.ROJAK}-${DISH_IDS.CENDOL}`]:
      "Cool down the chaos with sweet cendol",
    [`${DISH_IDS.NASI_LEMAK}-${DISH_IDS.KAYA_TOAST}`]:
      "Spicy morning meets sweet morning",
    [`${DISH_IDS.HAINANESE_CHICKEN_RICE}-${DISH_IDS.KAYA_TOAST}`]:
      "Classic meets classic",
    [`${DISH_IDS.LAKSA}-${DISH_IDS.CENDOL}`]:
      "Spicy laksa needs sweet cendol cool-down",
    [`${DISH_IDS.EGG_PRATA}-${DISH_IDS.TEA}`]:
      "Curry's best friend is teh tarik",
  };

  return (
    reasonMap[`${dishId}-${pairedId}`] || "Complementary flavors and vibes"
  );
}
