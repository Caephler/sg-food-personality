/**
 * Dish Distribution Simulation Script
 *
 * Simulates 100,000 people taking the quiz with random answers
 * to test the distribution of dish results.
 *
 * Usage:
 *   npm run simulate
 *
 * This will:
 * 1. Generate 100,000 random answer sets
 * 2. Calculate the result for each using the actual quiz algorithm
 * 3. Output counts and percentages for each dish
 */

import { dishes } from "../src/data/dishes";
import {
  questions,
  calculateResult,
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
 * Run the simulation
 */
function runSimulation(): void {
  console.log("=".repeat(60));
  console.log("Dish Distribution Simulation");
  console.log("=".repeat(60));
  console.log(`Running ${NUM_SIMULATIONS.toLocaleString()} simulations...\n`);

  const rng = new RandomGenerator(Date.now());
  const dishCounts: Record<string, number> = {};

  // Initialize counts
  dishes.forEach((dish) => {
    dishCounts[dish.id] = 0;
  });

  // Run simulations
  for (let i = 0; i < NUM_SIMULATIONS; i++) {
    const answers = generateRandomAnswers(rng);
    const result = calculateResult(answers);
    dishCounts[result]++;

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

  // Create sorted results array
  const results = dishes.map((dish) => ({
    id: dish.id,
    name: dish.name,
    category: dish.category,
    count: dishCounts[dish.id],
    percentage: (dishCounts[dish.id] / NUM_SIMULATIONS) * 100,
  }));

  // Sort by count descending
  results.sort((a, b) => b.count - a.count);

  // Calculate statistics
  const maxCount = results[0].count;
  const minCount = results[results.length - 1].count;
  const avgCount = NUM_SIMULATIONS / results.length;

  // Output results
  console.log(
    "\n".padEnd(8) +
      "Dish".padEnd(35) +
      "Category".padEnd(20) +
      "Count".padEnd(12) +
      "Percentage"
  );
  console.log("-".repeat(60));

  results.forEach((result, index) => {
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
  results.slice(0, 5).forEach((r, i) => {
    console.log(
      `  ${i + 1}. ${
        r.name
      }: ${r.count.toLocaleString()} (${r.percentage.toFixed(2)}%)`
    );
  });

  console.log("\n" + "-".repeat(60));
  console.log("Bottom 5 Least Popular Dishes:");
  console.log("-".repeat(60));
  results.slice(-5).forEach((r, i) => {
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

  console.log("\n" + "=".repeat(60));
  console.log("Simulation complete!");
  console.log("=".repeat(60));
}

// Run the simulation
runSimulation();
