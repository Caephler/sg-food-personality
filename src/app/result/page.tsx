"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { dishes, type Dish, type DishModifier } from "@/data/dishes";
import { questions, type QuizAnswer, getActiveModifier, getPairedDish } from "@/data/questions";

export default function ResultPage() {
  const router = useRouter();
  const [result, setResult] = useState<Dish | null>(null);
  const [activeModifier, setActiveModifier] = useState<DishModifier | null>(null);
  const [pairedDish, setPairedDish] = useState<Dish | null>(null);
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
      console.log(calculatedResult)
      
      // Get active modifier if applicable
      const modifier = getActiveModifier(calculatedResult, answers);
      setActiveModifier(modifier);
      
      // Get paired dish
      if (calculatedResult.pairedWith?.dishId) {
        const paired = getPairedDish(calculatedResult.pairedWith.dishId);
        setPairedDish(paired);
      }
      
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

  // Generate dynamic gradient from dish colors
  const getGradientStyle = (dish: Dish) => {
    const colors = dish.visualStyle.colors;
    if (colors.length >= 4) {
      return {
        background: `linear-gradient(135deg, ${colors[0]} 0%, ${colors[1]} 25%, ${colors[2]} 50%, ${colors[3]} 75%, ${colors[0]} 100%)`,
        backgroundSize: "400% 400%",
        animation: "gradientShift 15s ease infinite",
      };
    }
    return {
      background: `linear-gradient(135deg, ${colors[0]}, ${colors[1] || colors[0]})`,
    };
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
      <div 
        className="min-h-screen flex items-center justify-center"
        style={result ? getGradientStyle(result) : {}}
      >
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="text-6xl mb-4 animate-bounce">🍜</div>
          <p className="text-xl font-text text-gray-700 font-medium">Calculating your result...</p>
          <motion.div
            className="mt-4 w-48 h-2 bg-white/50 rounded-full mx-auto overflow-hidden backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="h-full bg-white"
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

  // Use modifier name and emoji if active, otherwise use base dish
  const displayName = activeModifier ? activeModifier.name : result.name;
  const displayChineseName = activeModifier ? result.chineseName : result.chineseName;
  const displayEmoji = activeModifier?.emojiCombo?.[0] || 
    (result.category.includes("Hawker") ? "🍜" :
     result.category.includes("Street") ? "🥢" :
     result.category.includes("Breakfast") ? "🥪" :
     result.category.includes("Restaurant") ? "🦀" : "🍽️");
  const displayEmojis = activeModifier?.emojiCombo || result.memeContent?.emojiCombo || [];

  return (
    <main 
      className="min-h-screen p-4 relative overflow-hidden"
      style={getGradientStyle(result)}
    >
      {/* Animated gradient overlay */}
      <style jsx global>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="font-text text-gray-700/80 mb-2 font-medium">Your Singaporean Food Personality Is...</p>
          <motion.h1
            className="text-4xl md:text-5xl font-display font-bold text-gray-900 drop-shadow-sm"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            {displayName}
          </motion.h1>
          <p className="text-2xl font-chinese text-gray-800/80 mt-2 font-medium">{displayChineseName}</p>
          
          {/* Modifier Badge */}
          {activeModifier && (
            <motion.div
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-lg">✨</span>
              <span className="text-sm font-medium text-gray-700">Special Variant Unlocked!</span>
            </motion.div>
          )}
        </motion.div>

        {/* Result Card */}
        <motion.div
          className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-white/50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {/* Visual Banner */}
          <div
            className="h-40 flex items-center justify-center relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${result.visualStyle.colors[0]}40, ${result.visualStyle.colors[1]}40)`,
            }}
          >
            <div className="flex gap-4 text-6xl">
              {displayEmojis.map((emoji, index) => (
                <motion.span
                  key={index}
                  className="animate-float"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {emoji}
                </motion.span>
              ))}
            </div>
            {/* Floating emoji decoration */}
            <motion.div
              className="absolute top-4 right-4 text-4xl opacity-50"
              animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {displayEmoji}
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Gen Z TikTok Caption */}
            {result.memeContent && (
              <motion.div
                className="mb-6 p-4 bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50 rounded-2xl border border-purple-100"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-lg font-text font-medium text-gray-800 italic">
                  "{result.memeContent.tiktokCaption}"
                </p>
                <div className="flex gap-2 mt-3">
                  {result.memeContent.internetSlang.map((slang) => (
                    <span
                      key={slang}
                      className="px-2 py-1 bg-white/60 rounded-full text-xs text-purple-700 font-medium"
                    >
                      #{slang}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Modifier Section */}
            {activeModifier && (
              <motion.div
                className="mb-6 p-4 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl border border-amber-200"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">🎯</span>
                  <h3 className="font-semibold text-gray-800">{activeModifier.name}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">{activeModifier.description}</p>
                <p className="text-sm font-medium text-amber-700 italic">
                  "{activeModifier.memeCaption}"
                </p>
              </motion.div>
            )}

            {/* Quote */}
            <motion.blockquote
              className="text-xl text-gray-700 italic text-center mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              "{result.quote}"
            </motion.blockquote>

            {/* Category Tag */}
            <div className="flex justify-center mb-6">
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                {result.category}
              </span>
            </div>

            {/* Vibe Check */}
            {result.memeContent && (
              <motion.div
                className="mb-6 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
              >
                <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">Vibe Check</p>
                <p className="text-lg font-medium text-gray-800">
                  {result.memeContent.vibeCheck}
                </p>
              </motion.div>
            )}

            {/* Description */}
            <p className="text-gray-600 text-center mb-8 leading-relaxed">
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

            {/* Meme Potential */}
            {result.memeContent && (
              <motion.div
                className="border-t pt-6 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <h3 className="text-sm font-semibold text-gray-500 mb-3 text-center uppercase tracking-wide">
                  Meme Potential
                </h3>
                <div
                  className="p-4 rounded-xl text-center"
                  style={{
                    background: `linear-gradient(135deg, ${result.visualStyle.colors[0]}20, ${result.visualStyle.colors[1]}20)`,
                  }}
                >
                  <p className="text-gray-700 font-medium">"{result.memeContent.memePotential}"</p>
                </div>
              </motion.div>
            )}

            {/* Best Paired With Section */}
            {pairedDish && result.pairedWith && (
              <motion.div
                className="border-t pt-6 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.65 }}
              >
                <h3 className="text-sm font-semibold text-gray-500 mb-3 text-center uppercase tracking-wide">
                  Best Paired With...
                </h3>
                <div 
                  className="p-4 rounded-xl text-center relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${pairedDish.visualStyle.colors[0]}30, ${pairedDish.visualStyle.colors[1]}30)`,
                  }}
                >
                  <div className="flex items-center justify-center gap-4">
                    <div className="text-4xl">
                      {pairedDish.category.includes("Hawker") ? "🍜" :
                       pairedDish.category.includes("Street") ? "🥢" :
                       pairedDish.category.includes("Breakfast") ? "🥪" :
                       pairedDish.category.includes("Restaurant") ? "🦀" : "🍽️"}
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-gray-900">{pairedDish.name}</p>
                      <p className="text-sm text-gray-600">{result.pairedWith.reason}</p>
                    </div>
                  </div>
                  <div className="mt-2 flex justify-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={`text-sm ${
                          star <= Math.round((result.pairedWith?.compatibilityScore || 0) / 20) 
                            ? "text-yellow-500" 
                            : "text-gray-300"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

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
            className="text-gray-700 hover:text-gray-900 font-medium transition-colors px-6 py-2 bg-white/60 backdrop-blur-sm rounded-full shadow-sm hover:shadow-md"
          >
            Take the quiz again →
          </button>
        </motion.div>

        {/* Footer */}
        <motion.footer
          className="mt-12 text-center text-gray-600 text-sm"
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
