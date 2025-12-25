/**
 * Dish Distribution Simulation Script
 *
 * Simulates 100,000 people taking the quiz with random answers
 * to test the distribution of dish results and modifier reachability.
 *
 * Usage:
 *   npm run simulate
 *
 * This will:
 * 1. Generate 100,000 random answer sets
 * 2. Calculate the result for each using the actual quiz algorithm
 * 3. Output counts and percentages for each dish
 * 4. Track and report modifier reachability
 */

import { dishes, type Dish, type DishModifier } from "../src/data/dishes";
import {
  questions,
  calculateResult,
  getActiveModifier,
  type QuizAnswer,
} from "../src/data/questions";

// Number of simulations to run
const NUM_SIMULATIONS = 100000;

// Seeded random number generator for reproducibility
// Using a simple LCG (Linear Congruential Generator)
class RandomGenerator {
  private state: number;

  constructor(seed: number = 12345) {
    this.state = seed;
  }

  // Returns a random number between 0 and 1
  next(): number {
    this.state = (this.state * 1103515245 + 12345) & 0x7fffffff;
    return this.state / 0x7fffffff;
  }

  // Returns a random integer between min and max (inclusive)
  nextInt(min: number, max: number): number {
    return Math.floor(this.next() * (max - min + 1)) + min;
  }

  // Returns a random element from an array
  pick<T>(array: readonly T[]): T {
    return array[this.nextInt(0, array.length - 1)];
  }
}

/**
 * Generate a random set of answers for all 12 questions
 */
function generateRandomAnswers(
  rng: RandomGenerator
): Record<number, QuizAnswer> {
  const answers: Record<number, QuizAnswer> = {};

  questions.forEach((question) => {
    const randomAnswer = rng.pick(question.answers);
    answers[question.id] = randomAnswer;
  });

  return answers;
}

/**
 * Collect all modifiers from all dishes
 */
function getAllModifiers(): DishModifier[] {
  const allModifiers: DishModifier[] = [];
  dishes.forEach((dish) => {
    if (dish.hasModifiers && dish.modifiers) {
      dish.modifiers.forEach((modifier) => {
        allModifiers.push(modifier);
      });
    }
  });
  return allModifiers;
}

/**
 * Run the simulation
 */
function runSimulation(): void {
  console.log("=".repeat(60));
  console.log("Dish Distribution Simulation");
  console.log("=".repeat(60));
  console.log(`Running ${NUM_SIMULATIONS.toLocaleString()} simulations...\n`);

  const rng = new RandomGenerator(Date.now());
  const dishCounts: Record<string, number> = {};
  const modifierCounts: Record<string, number> = {};

  // Initialize dish counts
  dishes.forEach((dish) => {
    dishCounts[dish.id] = 0;
  });

  // Initialize modifier counts
  const allModifiers = getAllModifiers();
  allModifiers.forEach((modifier) => {
    modifierCounts[modifier.id] = 0;
  });

  // Track simulations with no modifier triggered
  let noModifierCount = 0;

  // Run simulations
  for (let i = 0; i < NUM_SIMULATIONS; i++) {
    const answers = generateRandomAnswers(rng);
    const result = calculateResult(answers);
    dishCounts[result]++;

    // Find the dish object to check for modifiers
    const dish = dishes.find((d) => d.id === result);
    if (dish) {
      const activeModifier = getActiveModifier(dish, answers);
      if (activeModifier) {
        modifierCounts[activeModifier.id]++;
      } else {
        noModifierCount++;
      }
    }

    // Progress indicator every 10,000 iterations
    if ((i + 1) % 10000 === 0) {
      console.log(
        `  Progress: ${(((i + 1) / NUM_SIMULATIONS) * 100).toFixed(0)}%`
      );
    }
  }

  console.log("\n" + "-".repeat(60));
  console.log("Results (sorted by count, descending):");
  console.log("-".repeat(60));

  // Create sorted dish results array
  const dishResults = dishes.map((dish) => ({
    id: dish.id,
    name: dish.name,
    category: dish.category,
    count: dishCounts[dish.id],
    percentage: (dishCounts[dish.id] / NUM_SIMULATIONS) * 100,
  }));

  // Sort by count descending
  dishResults.sort((a, b) => b.count - a.count);

  // Calculate statistics
  const maxCount = dishResults[0].count;
  const minCount = dishResults[dishResults.length - 1].count;
  const avgCount = NUM_SIMULATIONS / dishResults.length;

  // Output dish results
  console.log(
    "\n".padEnd(8) +
      "Dish".padEnd(35) +
      "Category".padEnd(20) +
      "Count".padEnd(12) +
      "Percentage"
  );
  console.log("-".repeat(60));

  dishResults.forEach((result, index) => {
    const rank = (index + 1).toString().padStart(2) + ".";
    const name =
      result.name.length > 33
        ? result.name.substring(0, 30) + "..."
        : result.name;
    const category =
      result.category.length > 18
        ? result.category.substring(0, 15) + "..."
        : result.category;
    const bar = "█".repeat(Math.floor(result.percentage / 2));

    console.log(
      rank.padEnd(8) +
        name.padEnd(35) +
        category.padEnd(20) +
        result.count.toString().padEnd(12) +
        `${result.percentage.toFixed(2)}% ${bar}`
    );
  });

  console.log("-".repeat(60));

  // Summary statistics
  console.log("\n" + "=".repeat(60));
  console.log("Summary Statistics:");
  console.log("=".repeat(60));
  console.log(`Total simulations: ${NUM_SIMULATIONS.toLocaleString()}`);
  console.log(`Total dishes: ${dishes.length}`);
  console.log(`Expected count per dish (uniform): ${avgCount.toFixed(0)}`);
  console.log(
    `Maximum count: ${maxCount} (${((maxCount / NUM_SIMULATIONS) * 100).toFixed(
      2
    )}%)`
  );
  console.log(
    `Minimum count: ${minCount} (${((minCount / NUM_SIMULATIONS) * 100).toFixed(
      2
    )}%)`
  );
  console.log(
    `Distribution spread: ${maxCount - minCount} (${(
      ((maxCount - minCount) / avgCount) *
      100
    ).toFixed(1)}% from expected)`
  );

  // Show top and bottom 5
  console.log("\n" + "-".repeat(60));
  console.log("Top 5 Most Popular Dishes:");
  console.log("-".repeat(60));
  dishResults.slice(0, 5).forEach((r, i) => {
    console.log(
      `  ${i + 1}. ${
        r.name
      }: ${r.count.toLocaleString()} (${r.percentage.toFixed(2)}%)`
    );
  });

  console.log("\n" + "-".repeat(60));
  console.log("Bottom 5 Least Popular Dishes:");
  console.log("-".repeat(60));
  dishResults.slice(-5).forEach((r, i) => {
    console.log(
      `  ${dishes.length - 4 + i}. ${
        r.name
      }: ${r.count.toLocaleString()} (${r.percentage.toFixed(2)}%)`
    );
  });

  // Category distribution
  console.log("\n" + "=".repeat(60));
  console.log("Distribution by Category:");
  console.log("=".repeat(60));

  const categoryCounts: Record<string, number> = {};
  dishes.forEach((dish) => {
    if (!categoryCounts[dish.category]) {
      categoryCounts[dish.category] = 0;
    }
    categoryCounts[dish.category] += dishCounts[dish.id];
  });

  Object.entries(categoryCounts)
    .sort((a, b) => b[1] - a[1])
    .forEach(([category, count]) => {
      const percentage = ((count / NUM_SIMULATIONS) * 100).toFixed(2);
      console.log(
        `  ${category.padEnd(20)}: ${count
          .toString()
          .padStart(6)} (${percentage}%)`
      );
    });

  // Modifier Results
  console.log("\n" + "=".repeat(60));
  console.log("Modifier Reachability Results:");
  console.log("=".repeat(60));
  console.log(`Total modifiers: ${allModifiers.length}`);
  console.log(`Total simulations: ${NUM_SIMULATIONS.toLocaleString()}`);
  console.log(
    `Simulations with modifiers: ${NUM_SIMULATIONS - noModifierCount} (${(
      ((NUM_SIMULATIONS - noModifierCount) / NUM_SIMULATIONS) *
      100
    ).toFixed(2)}%)`
  );
  console.log(
    `Simulations with no modifier: ${noModifierCount} (${(
      (noModifierCount / NUM_SIMULATIONS) *
      100
    ).toFixed(2)}%)`
  );

  // Create modifier results array
  const modifierResults = allModifiers.map((modifier) => {
    // Find which dish this modifier belongs to
    const parentDish = dishes.find(
      (d) =>
        d.hasModifiers &&
        d.modifiers &&
        d.modifiers.some((m) => m.id === modifier.id)
    );
    return {
      id: modifier.id,
      name: modifier.name,
      dishName: parentDish?.name || "Unknown",
      triggerTrait: modifier.triggerTrait,
      triggerThreshold: modifier.triggerThreshold,
      count: modifierCounts[modifier.id],
      percentage: (modifierCounts[modifier.id] / NUM_SIMULATIONS) * 100,
    };
  });

  // Sort by count descending
  modifierResults.sort((a, b) => b.count - a.count);

  // Output modifier results
  console.log("\n" + "-".repeat(60));
  console.log("Modifier Results (sorted by count, descending):");
  console.log("-".repeat(60));

  if (modifierResults.length > 0) {
    console.log(
      "\n".padEnd(5) +
        "Modifier".padEnd(35) +
        "Dish".padEnd(25) +
        "Count".padEnd(10) +
        "Pct"
    );
    console.log("-".repeat(75));

    modifierResults.forEach((result, index) => {
      const rank = (index + 1).toString().padStart(3) + ".";
      const name =
        result.name.length > 33
          ? result.name.substring(0, 30) + "..."
          : result.name;
      const dishName =
        result.dishName.length > 23
          ? result.dishName.substring(0, 20) + "..."
          : result.dishName;
      const bar = "▓".repeat(Math.floor(result.percentage * 2));

      console.log(
        rank.padEnd(5) +
          name.padEnd(35) +
          dishName.padEnd(25) +
          result.count.toString().padEnd(10) +
          `${result.percentage.toFixed(2)}% ${bar}`
      );
    });

    // Modifier statistics
    const modifiersWithResults = modifierResults.filter((r) => r.count > 0);
    const modifiersWithoutResults = modifierResults.filter(
      (r) => r.count === 0
    );

    console.log("\n" + "-".repeat(60));
    console.log("Modifier Statistics:");
    console.log("-".repeat(60));
    console.log(
      `Modifiers with results: ${modifiersWithResults.length}/${allModifiers.length}`
    );
    console.log(
      `Modifiers with NO results: ${modifiersWithoutResults.length}/${allModifiers.length}`
    );

    if (modifiersWithoutResults.length > 0) {
      console.log("\n⚠️  Modifiers NOT triggered in simulation:");
      modifiersWithoutResults.forEach((r) => {
        console.log(
          `  - ${r.name} (${r.dishName}) - trigger: ${r.triggerTrait} >= ${r.triggerThreshold}%`
        );
      });
    }

    if (modifiersWithResults.length > 0) {
      const maxModifierCount = modifiersWithResults[0].count;
      const minModifierCount =
        modifiersWithResults[modifiersWithResults.length - 1].count;
      const avgModifierCount =
        (NUM_SIMULATIONS - noModifierCount) / modifiersWithResults.length;

      console.log(`\nMax modifier count: ${maxModifierCount}`);
      console.log(`Min modifier count: ${minModifierCount}`);
      console.log(
        `Avg modifier count (among triggered): ${avgModifierCount.toFixed(0)}`
      );
    }
  } else {
    console.log("\nNo modifiers found in the dish database.");
  }

  // Dish with modifiers summary
  console.log("\n" + "=".repeat(60));
  console.log("Modifiers by Dish:");
  console.log("=".repeat(60));

  const dishesWithModifiers = dishes.filter(
    (d) => d.hasModifiers && d.modifiers && d.modifiers.length > 0
  );
  dishesWithModifiers.forEach((dish) => {
    console.log(`\n${dish.name}:`);
    dish.modifiers!.forEach((modifier) => {
      const count = modifierCounts[modifier.id];
      const percentage = ((count / NUM_SIMULATIONS) * 100).toFixed(2);
      const status = count > 0 ? "✓" : "✗";
      console.log(
        `  ${status} ${modifier.name}: ${count} (${percentage}%) - trigger: ${modifier.triggerTrait} >= ${modifier.triggerThreshold}%`
      );
    });
  });

  console.log("\n" + "=".repeat(60));
  console.log("Simulation complete!");
  console.log("=".repeat(60));
}

// Run the simulation
runSimulation();
