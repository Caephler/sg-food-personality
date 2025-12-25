"use client";

import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { dishes, type Dish } from "@/data/dishes";

export default function DishesPage() {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const dishRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Get highlight parameter and scroll to it (for backwards compatibility)
  useEffect(() => {
    const highlightId = searchParams.get("highlight") || searchParams.get("dish");
    if (highlightId && dishRefs.current[highlightId]) {
      dishRefs.current[highlightId]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [searchParams]);

  // Get unique categories
  const categories = ["all", ...Array.from(new Set(dishes.map((d) => d.category)))];

  // Filter dishes based on search and category
  const filteredDishes = dishes.filter((dish) => {
    const matchesSearch =
      dish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dish.chineseName.includes(searchTerm) ||
      dish.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || dish.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen p-4 md:p-8 bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      {/* Sticky Back Button - Prominent on Mobile */}
      <motion.div
        className="sticky top-4 z-10 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm shadow-lg rounded-full text-gray-700 font-medium hover:bg-orange-100 hover:text-orange-600 transition-colors text-sm md:text-base"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          <span className="hidden sm:inline">Back to Home</span>
          <span className="sm:hidden">Back</span>
        </Link>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            All Dishes 🧂
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the full catalog of Singaporean food personalities!
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          className="mb-8 flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <input
            type="text"
            placeholder="Search dishes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-3 rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-orange-300 w-full sm:w-64 shadow-sm"
          />
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-orange-500 text-white shadow-md"
                    : "bg-white/80 text-gray-600 hover:bg-orange-100"
                }`}
              >
                {category === "all" ? "All" : category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.p
          className="text-center text-gray-500 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Showing {filteredDishes.length} of {dishes.length} dishes
        </motion.p>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDishes.map((dish, index) => {
            const isHighlighted = searchParams.get("highlight") === dish.id || searchParams.get("dish") === dish.id;
            return (
              <motion.div
                key={dish.id}
                id={dish.id}
                ref={(el) => { dishRefs.current[dish.id] = el; }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                className={`bg-white/90 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden border-2 transition-all cursor-pointer ${
                  isHighlighted
                    ? "border-orange-400 shadow-orange-200/50 shadow-xl scale-[1.02]"
                    : "border-white/50 hover:shadow-xl hover:scale-[1.02]"
                }`}
              >
                <Link href={`/result?dish=${dish.id}`} className="block">
                  {/* Visual Banner */}
                  <div
                    className="h-24 flex items-center justify-center relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${dish.visualStyle.colors[0]}60, ${dish.visualStyle.colors[1]}60)`,
                    }}
                  >
                    <span className="text-5xl">{dish.emoji}</span>
                    <div className="absolute bottom-2 right-2 text-xs px-2 py-1 bg-white/70 rounded-full text-gray-600">
                      {dish.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-xl font-display font-bold text-gray-900">
                        {dish.name}
                      </h2>
                      <span className="text-sm font-chinese text-gray-600">
                        {dish.chineseName}
                      </span>
                    </div>

                    {/* Vibe Check */}
                    {dish.memeContent && (
                      <p className="text-sm text-orange-600 font-medium mb-3">
                        ✨ {dish.memeContent.vibeCheck}
                      </p>
                    )}

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {dish.description}
                    </p>

                    {/* Personality Traits */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {dish.personalityTraits.slice(0, 3).map((trait) => (
                        <span
                          key={trait}
                          className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
                        >
                          {trait}
                        </span>
                      ))}
                      {dish.personalityTraits.length > 3 && (
                        <span className="text-xs px-2 py-1 bg-gray-100 text-gray-500 rounded-full">
                          +{dish.personalityTraits.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* TikTok Caption Preview */}
                    {dish.memeContent && (
                      <div className="p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl mb-4">
                        <p className="text-sm text-gray-700 italic line-clamp-2">
                          "{dish.memeContent.tiktokCaption}"
                        </p>
                      </div>
                    )}

                    {/* Best Paired With Indicator */}
                    {dish.pairedWith && (
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                        <span>✨</span>
                        <span>Best paired with {dishes.find(d => d.id === dish.pairedWith)?.name || 'another dish'}</span>
                      </div>
                    )}

                    {/* Click indicator */}
                    <div className="text-center text-sm text-orange-500 font-medium">
                      Click to view result →
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredDishes.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No dishes found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filter criteria
            </p>
          </motion.div>
        )}

        {/* Back to Quiz */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
          >
            ← Back to Home
          </Link>
        </motion.div>

        {/* Footer */}
        <motion.footer
          className="mt-12 text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p>Made with ❤️ for Singaporeans everywhere 🇸🇬</p>
        </motion.footer>
      </div>
    </main>
  );
}
