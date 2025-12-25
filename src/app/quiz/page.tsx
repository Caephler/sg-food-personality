"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { questions, type QuizAnswer } from "@/data/questions";
import ProgressBar from "@/components/ProgressBar";

export default function QuizPage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState<Record<number, QuizAnswer>>({});
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isNavigating, setIsNavigating] = useState(false);

  const question = questions.find((q) => q.id === currentQuestion);
  const progress = (currentQuestion / questions.length) * 100;

  const handleAnswerSelect = (answerId: string) => {
    setSelectedAnswer(answerId);
    // Immediately proceed to next question
    handleNext(answerId);
  };

  const handleNext = (answerId?: string) => {
    // Prevent multiple navigations during transition
    if (isNavigating) return;
    
    const selectedAnswerId = answerId || selectedAnswer;
    if (!question || !selectedAnswerId) return;

    const answer = question.answers.find((a) => a.id === selectedAnswerId);
    if (!answer) return;

    const newAnswers = { ...answers, [currentQuestion]: answer };
    setAnswers(newAnswers);
    setSelectedAnswer(null);

    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz complete - calculate result and navigate
      setIsNavigating(true);
      localStorage.setItem("quizAnswers", JSON.stringify(newAnswers));
      router.push("/result");
    }
  };

  if (!question) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4">
      <div className="max-w-md mx-auto">
        {/* Progress Bar */}
        <ProgressBar current={currentQuestion} total={questions.length} progress={progress} />

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 mt-6"
          >
            <div className="text-sm text-red-600 dark:text-red-400 font-semibold mb-2">
              Question {currentQuestion} of {questions.length}
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">{question.question}</h2>

            <div className="space-y-3">
              {question.answers.map((answer) => (
                <motion.button
                  key={answer.id}
                  onClick={() => handleAnswerSelect(answer.id)}
                  className={`w-full p-4 rounded-xl text-left transition-all duration-200 ${
                    selectedAnswer === answer.id
                      ? "bg-red-600 text-white shadow-lg transform scale-[1.02]"
                      : "bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200"
                  }`}
                  whileTap={{ scale: 0.98 }}
                >
                  {answer.text}
                </motion.button>
              ))}
            </div>

          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
