"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Dish } from "@/data/dishes";

interface ShareButtonsProps {
  dish: Dish;
}

export default function ShareButtons({ dish }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  // Generate share text
  const shareText = `🍜 I got "${dish.name}" (${dish.chineseName}) on the Local Singaporean Food Personality Quiz!\n\n${dish.quote}\n\nFind out which Singaporean dish matches YOUR personality! 🔥`;

  // Telegram share URL
  const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(
    typeof window !== "undefined" ? window.location.origin : "https://singafood-quiz.vercel.app"
  )}&text=${encodeURIComponent(shareText)}`;

  // Instagram share URL (opens Instagram app)
  const instagramUrl = `https://instagram.com`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const shareToNative = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `I'm ${dish.name}! 🍜`,
          text: shareText,
          url: typeof window !== "undefined" ? window.location.href : "",
        });
      } catch (err) {
        // User cancelled or share failed
        console.log("Share cancelled");
      }
    } else {
      // Fallback to copy
      copyToClipboard();
    }
  };

  return (
    <div className="space-y-3">
      <p className="text-sm font-semibold text-gray-500 text-center">
        Share your result! 📤
      </p>
      
      <div className="grid grid-cols-3 gap-2">
        {/* Telegram */}
        <motion.a
          href={telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 bg-[#0088cc] hover:bg-[#0077b3] text-white rounded-xl font-medium transition-colors"
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-xl">✈️</span>
          <span className="text-sm">Telegram</span>
        </motion.a>

        {/* Instagram */}
        <motion.a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#dc2743] hover:opacity-90 text-white rounded-xl font-medium transition-opacity"
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-xl">📷</span>
          <span className="text-sm">Instagram</span>
        </motion.a>

        {/* Copy Link */}
        <motion.button
          onClick={copyToClipboard}
          className="flex items-center justify-center gap-2 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl font-medium transition-colors"
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-xl">{copied ? "✅" : "📋"}</span>
          <span className="text-sm">{copied ? "Copied!" : "Copy"}</span>
        </motion.button>
      </div>

      {/* Native Share (mobile) */}
      {(typeof window !== "undefined" && "share" in navigator) && (
        <motion.button
          onClick={shareToNative}
          className="w-full py-3 border-2 border-dashed border-gray-300 text-gray-500 rounded-xl font-medium hover:bg-gray-50 transition-colors"
          whileTap={{ scale: 0.98 }}
        >
          📱 More Sharing Options
        </motion.button>
      )}
    </div>
  );
}
