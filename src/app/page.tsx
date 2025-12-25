"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { dishes } from "@/data/dishes";

export default function HomePage() {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleStartQuiz = () => {
    router.push("/quiz");
  };

  // Featured dishes for the hero section
  const featuredDishes = dishes.slice(0, 6);

  return (
    <main className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-red-100 dark:bg-red-900/30 rounded-full opacity-50"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-24 h-24 bg-red-200 dark:bg-red-800/30 rounded-full opacity-30"
            animate={{
              y: [0, 15, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
          <motion.div
            className="absolute bottom-40 left-1/4 w-20 h-20 bg-white dark:bg-gray-700 rounded-full opacity-40"
            animate={{
              y: [0, -25, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 py-20 text-center">
          {/* Singapore flag inspired decorative element */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center animate-pulse-glow">
              <span className="text-4xl">🦁</span>
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ delay: 0.2 }}
          >
            Which{" "}
            <span className="text-red-600 relative">
              Singaporean Dish
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-red-600"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              />
            </span>{" "}
            Matches Your Personality?
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ delay: 0.3 }}
          >
            Discover your perfect food match in just 10 questions! 🍜
          </motion.p>

          {/* Start Button */}
          <motion.button
            onClick={handleStartQuiz}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-red-600 text-white text-xl font-bold rounded-full shadow-lg hover:bg-red-700 hover:shadow-xl transition-all duration-300 hover:scale-105"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 200, damping: 15 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-2xl">🚀</span>
            Start the Quiz
            <motion.span
              className="absolute -right-2 -top-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              Free!
            </motion.span>
          </motion.button>

          {/* Quick stats */}
          <motion.div
            className="flex justify-center gap-8 mt-12 text-gray-500 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ delay: 0.7 }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">10</div>
              <div className="text-sm">Questions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">24</div>
              <div className="text-sm">Dishes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">2min</div>
              <div className="text-sm">Quick!</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Dishes Preview */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Some of the Dishes You Might Match With:
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {featuredDishes.map((dish, index) => (
              <motion.div
                key={dish.id}
                className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-3">
                  {dish.category.includes("Hawker") ? "🍜" :
                   dish.category.includes("Street") ? "🥢" :
                   dish.category.includes("Breakfast") ? "🥪" :
                   dish.category.includes("Restaurant") ? "🦀" : "🍽️"}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-lg">{dish.name}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{dish.chineseName}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to find out?
          </h2>
          <p className="text-red-100 mb-8">
            Join thousands of Singaporeans who have discovered their food personality!
          </p>
          <motion.button
            onClick={handleStartQuiz}
            className="inline-flex items-center gap-3 px-10 py-4 bg-white text-red-600 text-xl font-bold rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            whileTap={{ scale: 0.95 }}
          >
            Let's Go! 🎉
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-gray-400 text-center">
        <p className="text-sm">
          Made with ❤️ for Singaporeans everywhere 🇸🇬
        </p>
        <p className="text-xs mt-2">
          Share with your friends and compare results!
        </p>
      </footer>
    </main>
  );
}
