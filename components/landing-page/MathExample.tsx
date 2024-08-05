
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, X, Diamond } from 'lucide-react';
import Confetti from 'react-confetti';
import { Progress } from '@/components/ui/progress';

export default function MathLesson() {
  const [step, setStep] = useState(0);
  const [userAnswer, setUserAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [diamonds, setDiamonds] = useState(0);

  const lessonSteps = [
    {
      question: "Let's explore the concept of prime factorization. What are the prime factors of 12?",
      options: [
        { value: [2, 2, 3], label: "2 × 2 × 3" },
        { value: [3, 4], label: "3 × 4" },
        { value: [2, 6], label: "2 × 6" },
        { value: [1, 12], label: "1 × 12" }
      ],
      explanation: "The prime factorization of 12 is 2 × 2 × 3. This breaks 12 down into its fundamental prime components."
    },
    {
      question: "Now, let's apply this to a larger number. What is the prime factorization of 36?",
      options: [
        { value: [2, 2, 3, 3], label: "2 × 2 × 3 × 3" },
        { value: [4, 9], label: "4 × 9" },
        { value: [6, 6], label: "6 × 6" },
        { value: [2, 18], label: "2 × 18" }
      ],
      explanation: "The prime factorization of 36 is 2 × 2 × 3 × 3. This represents 36 as a product of its prime factors."
    },
    {
      question: "Which of these numbers is NOT a prime number?",
      options: [
        { value: 9, label: "9" },
        { value: 11, label: "11" },
        { value: 13, label: "13" },
        { value: 17, label: "17" }
      ],
      explanation: "9 is not a prime number because it can be factored as 3 × 3. All other options are prime numbers."
    },
    {
      question: "What is the largest prime factor of 60?",
      options: [
        { value: 5, label: "5" },
        { value: 2, label: "2" },
        { value: 3, label: "3" },
        { value: 10, label: "10" }
      ],
      explanation: "The prime factorization of 60 is 2 × 2 × 3 × 5. The largest prime factor is 5."
    },
    {
      question: "How many prime factors does 100 have? (Count repeated factors separately)",
      options: [
        { value: 4, label: "4" },
        { value: 3, label: "3" },
        { value: 2, label: "2" },
        { value: 5, label: "5" }
      ],
      explanation: "The prime factorization of 100 is 2 × 2 × 5 × 5. It has 4 prime factors when counting repeated factors."
    }
  ];

  const currentStep = lessonSteps[step];

  const handleAnswer = (answer: number) => {
    setUserAnswer(answer);
    if (answer === 0) {
      setScore(score + 1);
      setShowConfetti(true);
      if (score + 1 % 3 === 0) {
        setDiamonds(diamonds + 1);
      }
    }
  };

  const nextStep = () => {
    if (step < lessonSteps.length - 1) {
      setStep(step + 1);
      setUserAnswer(null);
      setShowConfetti(false);
    }
  };

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => setShowConfetti(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  return (
    <Card className="max-w-4xl mx-auto p-6 rounded-xl shadow-lg">
      
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Prime Factorization</h2>
        <div className="flex items-center">
          <Diamond className="text-blue-500 mr-2" />
          <span className="font-bold">{diamonds}</span>
        </div>
      </div>
      <Progress value={(step / lessonSteps.length) * 100} className="mb-4" />
      {showConfetti && <Confetti />}
      <Card className="p-6 bg-white">
        <p className="text-lg mb-4">{currentStep.question}</p>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {currentStep.options.map((option, index) => (
            <Button
              key={index}
              onClick={() => handleAnswer(index)}
              className={`p-4 text-left ${
                userAnswer === index
                  ? index === 0 ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
              disabled={userAnswer !== null}
            >
              {option.label}
            </Button>
          ))}
        </div>
        {userAnswer !== null && (
          <div className="mb-4">
            {userAnswer === 0 ? (
              <div className="flex items-center text-green-600">
                <Check className="mr-2" /> Correct! You earned a point.
              </div>
            ) : (
              <div className="flex items-center text-red-600">
                <X className="mr-2" /> Incorrect. The correct answer is {currentStep.options[0].label}.
              </div>
            )}
          </div>
        )}
        {userAnswer !== null && (
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-gray-800">{currentStep.explanation}</p>
          </div>
        )}
      </Card>
      {userAnswer !== null && step < lessonSteps.length - 1 && (
        <Button onClick={nextStep} className="mt-4">
          Next Question
        </Button>
      )}
      {step === lessonSteps.length - 1 && userAnswer !== null && (
        <div className="mt-4 text-center">
          <h3 className="text-xl font-bold mb-2">Lesson Complete!</h3>
          <p>Your score: {score} out of {lessonSteps.length}</p>
          <p>Diamonds earned: {diamonds}</p>
        </div>
      )}
    </Card>
  );
}