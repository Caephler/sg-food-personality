/**
 * Singaporean Dishes Index
 *
 * This module exports all dishes with computed bidirectional pairings.
 * Pairings are determined by personality compatibility, not hardcoded.
 */

import type { Dish, DishBase, DishModifier, PairedWith } from "../types";
import { DISH_IDS } from "../dishIds";
import {
  computeAllPairings,
  classicPairings,
  getClassicPairingReason,
} from "../pairings";

// Import individual dishes
export { hainaneseChickenRice } from "./hainanese-chicken-rice";
export { charKwayTeow } from "./char-kway-teow";
export { bakKutTeh } from "./bak-kut-teh";
export { satay } from "./satay";
export { rojak } from "./rojak";
export { nasiLemak } from "./nasi-lemak";
export { laksa } from "./laksa";

// Import consolidated dish modules
export {
  kayaToast,
  kopi,
  softBoiledEggs,
  cendol,
  carbonaraLocalStyle,
} from "./breakfast-dishes";

export {
  muarOtakOtak,
  eggPrata,
  fishHeadCurry,
  beeHoonSoup,
  yongTauFoo,
  friedCarrotCake,
  oysterOmelette,
  popiah,
  hokkienPrawnMee,
  singaporeCrab,
  duckRice,
  porkCongee,
  sambalStingray,
  horFun,
  mincedMeatNoodle,
  wantonMee,
  curryRice,
  cheeCheongFun,
  tea,
  youTiao,
} from "./hawker-classics";

// Import all dishes as DishBase type
import { hainaneseChickenRice } from "./hainanese-chicken-rice";
import { charKwayTeow } from "./char-kway-teow";
import { bakKutTeh } from "./bak-kut-teh";
import { satay } from "./satay";
import { rojak } from "./rojak";
import { nasiLemak } from "./nasi-lemak";
import { laksa } from "./laksa";
import {
  kayaToast,
  kopi,
  softBoiledEggs,
  cendol,
  carbonaraLocalStyle,
} from "./breakfast-dishes";
import {
  muarOtakOtak,
  eggPrata,
  fishHeadCurry,
  beeHoonSoup,
  yongTauFoo,
  friedCarrotCake,
  oysterOmelette,
  popiah,
  hokkienPrawnMee,
  singaporeCrab,
  duckRice,
  porkCongee,
  sambalStingray,
  horFun,
  mincedMeatNoodle,
  wantonMee,
  curryRice,
  cheeCheongFun,
  tea,
  youTiao,
} from "./hawker-classics";

// Collect all base dishes
const allBaseDishes: DishBase[] = [
  hainaneseChickenRice,
  charKwayTeow,
  bakKutTeh,
  satay,
  rojak,
  nasiLemak,
  laksa,
  kayaToast,
  kopi,
  softBoiledEggs,
  cendol,
  carbonaraLocalStyle,
  muarOtakOtak,
  eggPrata,
  fishHeadCurry,
  beeHoonSoup,
  yongTauFoo,
  friedCarrotCake,
  oysterOmelette,
  popiah,
  hokkienPrawnMee,
  singaporeCrab,
  duckRice,
  porkCongee,
  sambalStingray,
  horFun,
  mincedMeatNoodle,
  wantonMee,
  curryRice,
  cheeCheongFun,
  tea,
  youTiao,
];

/**
 * Add computed pairings to a dish
 */
function addPairingsToDish(
  dish: DishBase,
  pairingMap: Map<string, PairedWith[]>
): Dish {
  const pairings = pairingMap.get(dish.id) || [];

  // Check if this dish has classic pairings that should be prioritized
  const classicIds = classicPairings[dish.id as keyof typeof classicPairings];
  if (classicIds && classicIds.length > 0) {
    for (const classicId of classicIds) {
      const existingIndex = pairings.findIndex((p) => p.dishId === classicId);
      const dishData = allBaseDishes.find((d) => d.id === classicId);

      if (dishData) {
        const reason = getClassicPairingReason(dish.id, classicId);
        const score = calculateClassicPairingScore(dish, dishData);

        if (existingIndex >= 0) {
          // Update existing pairing with classic reason
          pairings[existingIndex] = {
            dishId: classicId,
            reason,
            compatibilityScore: score,
          };
        } else {
          // Add classic pairing
          pairings.unshift({
            dishId: classicId,
            reason,
            compatibilityScore: score,
          });
        }
      }
    }

    // Re-sort by score
    pairings.sort((a, b) => b.compatibilityScore - a.compatibilityScore);
  }

  return {
    ...dish,
    pairedWith: pairings.length > 0 ? pairings : undefined,
  };
}

/**
 * Calculate compatibility score for classic pairings
 */
function calculateClassicPairingScore(
  dish1: DishBase,
  dish2: DishBase
): number {
  // Classic pairings get a bonus score
  const baseScore = 85;
  const compatibility = calculateCompatibility(dish1, dish2);
  return Math.max(baseScore, compatibility);
}

/**
 * Import the calculateCompatibility function from pairings
 */
import { calculateCompatibility as calcCompat } from "../pairings";
const calculateCompatibility = calcCompat;

/**
 * All dishes with computed bidirectional pairings
 */
export const dishes: Dish[] = allBaseDishes.map((dish) =>
  addPairingsToDish(dish, computeAllPairings(allBaseDishes))
);

/**
 * Get a dish by its ID
 */
export function getDishById(id: string): Dish | undefined {
  return dishes.find((dish) => dish.id === id);
}

/**
 * Get paired dishes for a given dish
 */
export function getPairedDishes(dishId: string): Dish[] {
  const dish = getDishById(dishId);
  if (!dish?.pairedWith) return [];

  return dish.pairedWith
    .map((pairing) => getDishById(pairing.dishId))
    .filter((d): d is Dish => d !== undefined);
}

/**
 * Get the best pairing for a dish
 */
export function getBestPairing(
  dishId: string
): { dish: Dish; pairing: PairedWith } | null {
  const dish = getDishById(dishId);
  if (!dish?.pairedWith || dish.pairedWith.length === 0) return null;

  const bestPairing = dish.pairedWith[0];
  const pairedDish = getDishById(bestPairing.dishId);

  if (!pairedDish) return null;

  return { dish: pairedDish, pairing: bestPairing };
}

/**
 * Check if two dishes are paired
 */
export function arePaired(dishId1: string, dishId2: string): boolean {
  const dish1 = getDishById(dishId1);
  if (!dish1?.pairedWith) return false;

  return dish1.pairedWith.some((p) => p.dishId === dishId2);
}

/**
 * Get pairing info between two dishes
 */
export function getPairingInfo(
  dishId1: string,
  dishId2: string
): PairedWith | null {
  const dish1 = getDishById(dishId1);
  if (!dish1?.pairedWith) return null;

  return dish1.pairedWith.find((p) => p.dishId === dishId2) || null;
}

// Re-export types for convenience
export type { Dish, DishBase, DishModifier, PairedWith };
