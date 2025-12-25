"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { questions } from "@/data/questions";

// Singaporean food emojis for rotation
const FOOD_EMOJIS = ["🦀", "🥢", "🍜", "🍤", "🍚", "🥘", "🦐", "🍢", "🍛", "🥡"];

function EmojiRotation() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % FOOD_EMOJIS.length);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      key={currentIndex}
      initial={{ scale: 0.8, opacity: 0.5, rotate: -10 }}
      animate={{ scale: 1, opacity: 1, rotate: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="text-5xl"
    >
      {FOOD_EMOJIS[currentIndex]}
    </motion.div>
  );
}

export default function HomePage() {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleStartQuiz = () => {
    router.push("/quiz");
  };

  const questionCount = questions.length;

  return (
    <main className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-rose-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -left-20 w-96 h-96 bg-rose-200/40 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 -right-20 w-80 h-80 bg-amber-200/40 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            y: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute -bottom-20 left-1/3 w-72 h-72 bg-red-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 0.9, 1.1],
            x: [0, 20, 0],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-24 left-8 text-4xl opacity-60"
        animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        🍜
      </motion.div>
      <motion.div
        className="absolute top-32 right-12 text-3xl opacity-50"
        animate={{ y: [0, 12, 0], rotate: [0, -8, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
      >
        🥢
      </motion.div>
      <motion.div
        className="absolute bottom-40 left-12 text-3xl opacity-50"
        animate={{ y: [0, -15, 0], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
      >
        🦀
      </motion.div>
      <motion.div
        className="absolute bottom-32 right-8 text-4xl opacity-60"
        animate={{ y: [0, 8, 0], rotate: [0, -5, 5, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, delay: 1.5 }}
      >
        🍤
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        {/* Lion head emblem */}
        <motion.div
          className="mb-8 relative"
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg shadow-red-500/30">
            <EmojiRotation />
          </div>
          <motion.div
            className="absolute -inset-2 border-2 border-red-400 rounded-full opacity-50"
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.3, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-800 dark:text-white text-center mb-4 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          What Singaporean Dish
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
            Matches Your Personality?
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl font-text text-gray-600 dark:text-gray-300 text-center mb-2 max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          Discover your perfect food match in {questionCount} quick questions
        </motion.p>

        {/* Tags */}
        <motion.div
          className="flex items-center gap-3 mb-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.9 }}
          transition={{ delay: 0.45, duration: 0.5 }}
        >
          <span className="px-4 py-1.5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full text-sm font-text text-gray-600 dark:text-gray-300 shadow-sm">
            {questionCount} questions
          </span>
          <span className="px-4 py-1.5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full text-sm font-text text-gray-600 dark:text-gray-300 shadow-sm">
            24 dishes
          </span>
          <span className="px-4 py-1.5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full text-sm font-text text-gray-600 dark:text-gray-300 shadow-sm">
            ~2 min
          </span>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          onClick={handleStartQuiz}
          className="group relative inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white text-xl font-display font-bold rounded-full shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 transition-all duration-300 hover:scale-105 active:scale-95"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20, scale: isLoaded ? 1 : 0.9 }}
          transition={{ delay: 0.55, type: "spring", stiffness: 200, damping: 15 }}
        >
          <span className="text-2xl group-hover:animate-bounce">🚀</span>
          Start the Quiz
          <motion.span
            className="absolute -right-1 -top-1 bg-amber-400 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-full shadow-sm"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, type: "spring" }}
          >
            Free!
          </motion.span>
        </motion.button>

        {/* Footer note */}
        <motion.p
          className="absolute bottom-8 text-sm font-text text-gray-500 dark:text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Made with ❤️ for Singaporeans everywhere 🇸🇬
        </motion.p>
      </div>
    </main>
  );
}
