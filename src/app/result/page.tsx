"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { dishes, type Dish } from "@/data/dishes";
import { questions, type QuizAnswer } from "@/data/questions";

export default function ResultPage() {
  const router = useRouter();
  const [result, setResult] = useState<Dish | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get answers from localStorage
    const storedAnswers = localStorage.getItem("quizAnswers");
    
    if (!storedAnswers) {
      // No answers found, redirect to quiz
      router.push("/quiz");
      return;
    }

    try {
      const answers: Record<number, QuizAnswer> = JSON.parse(storedAnswers);
      const calculatedResult = calculateResult(answers);
      setResult(calculatedResult);
    } catch (error) {
      console.error("Failed to calculate result:", error);
      router.push("/quiz");
    } finally {
      setLoading(false);
    }
  }, [router]);

  const handleRetakeQuiz = () => {
    localStorage.removeItem("quizAnswers");
    router.push("/quiz");
  };

  // Scoring function - mirrors the one in questions.ts
  function calculateResult(answers: Record<number, QuizAnswer>): Dish {
    // Tally scores for each attribute
    const scores: Record<string, Record<string, number>> = {
      energyLevel: { high: 0, medium: 0, low: 0 },
      socialPreference: { extrovert: 0, ambivert: 0, introvert: 0 },
      flavorProfile: { sweet: 0, savory: 0, spicy: 0, balanced: 0 },
      adventureLevel: { adventurous: 0, moderate: 0, traditional: 0 },
      timeOfDay: { morning: 0, afternoon: 0, evening: 0, night: 0 },
      setting: { casual: 0, moderate: 0, elegant: 0 },
      texturePreference: { soft: 0, chewy: 0, varied: 0 },
      culturalAuthenticity: { "root-deep": 0, "street-smart": 0 },
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
    };

    let bestMatch = dishes[0];
    let bestScore = 0;

    dishes.forEach((dish) => {
      const matchScore = calculateMatchScore(dish.quizAttributes, userProfile);
      if (matchScore > bestScore) {
        bestScore = matchScore;
        bestMatch = dish;
      }
    });

    return bestMatch;
  }

  function getMostCommon(obj: Record<string, number>): string {
    const entries = Object.entries(obj);
    if (entries.length === 0) return "medium";
    return entries.sort((a, b) => b[1] - a[1])[0][0];
  }

  function calculateMatchScore(
    dishAttrs: typeof dishes[0]["quizAttributes"],
    userProfile: {
      energyLevel: string;
      socialPreference: string;
      flavorProfile: string;
      adventureLevel: string;
      timeOfDay: string;
      setting: string;
      texturePreference: string;
      culturalAuthenticity: string;
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
      const dishValue = dishAttrs[trait as keyof typeof dishAttrs];
      if (dishValue === value) {
        score += weights[trait] || 1;
      }
    });

    return score;
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-red-50">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="text-6xl mb-4">🍜</div>
          <p className="text-xl text-gray-600">Calculating your result...</p>
          <motion.div
            className="mt-4 w-48 h-2 bg-gray-200 rounded-full mx-auto overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="h-full bg-red-600"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-red-50">
        <p className="text-xl text-gray-600">No result found. Redirecting...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-gray-500 mb-2">Your Singaporean Food Personality Is...</p>
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-900"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            {result.name}
          </motion.h1>
          <p className="text-2xl text-red-600 mt-2">{result.chineseName}</p>
        </motion.div>

        {/* Result Card */}
        <motion.div
          className="bg-white rounded-3xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {/* Visual Banner */}
          <div
            className="h-32 flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${result.visualStyle.colors[0]}40, ${result.visualStyle.colors[1]}40)`,
            }}
          >
            <span className="text-6xl animate-float">
              {result.category.includes("Hawker") ? "🍜" :
               result.category.includes("Street") ? "🥢" :
               result.category.includes("Breakfast") ? "🥪" :
               result.category.includes("Restaurant") ? "🦀" : "🍽️"}
            </span>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Quote */}
            <motion.blockquote
              className="text-xl text-gray-700 italic text-center mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              "{result.quote}"
            </motion.blockquote>

            {/* Category Tag */}
            <div className="flex justify-center mb-6">
              <span className="px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                {result.category}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-center mb-8">
              {result.description}
            </p>

            {/* Personality Traits */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                Your Personality Traits:
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {result.personalityTraits.map((trait, index) => (
                  <motion.span
                    key={trait}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    {trait}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Visual Style */}
            <div className="border-t pt-6">
              <h3 className="text-sm font-semibold text-gray-500 mb-3 text-center uppercase tracking-wide">
                Your Vibe
              </h3>
              <div
                className="p-4 rounded-xl text-center"
                style={{
                  background: `linear-gradient(135deg, ${result.visualStyle.colors[0]}20, ${result.visualStyle.colors[1]}20)`,
                }}
              >
                <p className="text-gray-700">{result.visualStyle.mood}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Retake Quiz */}
        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <button
            onClick={handleRetakeQuiz}
            className="text-gray-500 hover:text-gray-700 font-medium transition-colors"
          >
            Take the quiz again →
          </button>
        </motion.div>

        {/* Footer */}
        <motion.footer
          className="mt-12 text-center text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p>Made with ❤️ for Singaporeans everywhere 🇸🇬</p>
        </motion.footer>
      </div>
    </main>
  );
}
