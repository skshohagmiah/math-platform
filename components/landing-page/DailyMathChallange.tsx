"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import ReactConfetti from "react-confetti";
import ConfettiExplosion from "react-confetti-explosion";

// Array of 10 math challenges
const mathChallenges = [
  {
    question: "What is the sum of the first 10 prime numbers?",
    options: ["129", "139", "149", "159"],
    correctAnswer: 1,
    explanation:
      "The first 10 prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23, and 29. Their sum is 129.",
  },
  {
    question: "What is the result of 7^3 - 5^2?",
    options: ["318", "323", "328", "333"],
    correctAnswer: 2,
    explanation: "7^3 = 343, 5^2 = 25. 343 - 25 = 318.",
  },
  {
    question: "If a = 3 and b = 4, what is the value of a^2 + b^2?",
    options: ["25", "35", "45", "55"],
    correctAnswer: 0,
    explanation: "a^2 = 3^2 = 9, b^2 = 4^2 = 16. 9 + 16 = 25.",
  },
  {
    question: "What is the least common multiple (LCM) of 12 and 18?",
    options: ["36", "48", "60", "72"],
    correctAnswer: 0,
    explanation: "The LCM of 12 and 18 is 36.",
  },
  {
    question: "What is the value of π (pi) rounded to two decimal places?",
    options: ["3.12", "3.14", "3.16", "3.18"],
    correctAnswer: 1,
    explanation: "π rounded to two decimal places is 3.14.",
  },
  {
    question: "What is the square root of 144?",
    options: ["10", "11", "12", "13"],
    correctAnswer: 2,
    explanation: "The square root of 144 is 12, because 12 × 12 = 144.",
  },
  {
    question: "What is the result of 17 × 6 - 4 × 9?",
    options: ["66", "76", "86", "96"],
    correctAnswer: 1,
    explanation: "17 × 6 = 102, 4 × 9 = 36. 102 - 36 = 66.",
  },
  {
    question: "If x + 5 = 12, what is the value of x?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 2,
    explanation: "If x + 5 = 12, then x = 12 - 5 = 7.",
  },
  {
    question: "What is 25% of 80?",
    options: ["15", "20", "25", "30"],
    correctAnswer: 1,
    explanation: "25% is one-quarter. One-quarter of 80 is 80 ÷ 4 = 20.",
  },
  {
    question:
      "If a triangle has angles of 90° and 45°, what is the measure of the third angle?",
    options: ["30°", "35°", "40°", "45°"],
    correctAnswer: 3,
    explanation:
      "The sum of angles in a triangle is 180°. 180° - (90° + 45°) = 45°.",
  },
];

export default function DailyMathChallenge() {
  const [challenge, setChallenge] = useState<(typeof mathChallenges)[0] | null>(
    null
  );
  const [userAnswer, setUserAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Use the current date as a seed for the random selection
    const today = new Date().toDateString();
    const seed = today
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const randomIndex = seed % mathChallenges.length;
    setChallenge(mathChallenges[randomIndex]);
  }, []);

  useEffect(() => {}, [userAnswer]);

  const handleAnswer = (answer: number, isCorrect: number) => {
    setUserAnswer(answer);
    setShowExplanation(true);
    if (answer === isCorrect) {
      setShowConfetti(true);
    }
  };

  if (!challenge) return <div>Loading challenge...</div>;

  return (
    <>
      <Card className="  p-6 rounded-xl shadow-lg">
        {showConfetti && <ConfettiExplosion />}
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Daily Math Challenge
        </h2>
        <p className="text-lg mb-4">{challenge.question}</p>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {challenge.options.map((option, index) => (
            <Button
              key={index}
              onClick={() => handleAnswer(index, challenge.correctAnswer)}
              className={`p-4 text-left ${
                userAnswer === index
                  ? index === challenge.correctAnswer
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
              disabled={userAnswer !== null}
            >
              {option}
            </Button>
          ))}
        </div>
        {showExplanation && (
          <div className="mt-4">
            {userAnswer === challenge.correctAnswer ? (
              <div className="flex items-center text-green-600 mb-2">
                <Check className="mr-2" /> Correct!
              </div>
            ) : (
              <div className="flex items-center text-red-600 mb-2">
                <X className="mr-2" /> Incorrect. The correct answer is{" "}
                {challenge.options[challenge.correctAnswer]}.
              </div>
            )}
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-gray-800">{challenge.explanation}</p>
            </div>
          </div>
        )}
      </Card>
    </>
  );
}
