"use client";
import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { DndContext, useDroppable, useDraggable } from '@dnd-kit/core';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import { Progress } from "../ui/progress";
import { useSound } from "use-sound";

interface DragItem {
  id: string;
  number: number;
}

const IntroductionToNumbers: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [fullHeight, setFullHeight] = useState(true);
  const [dragItems, setDragItems] = useState<DragItem[]>([
    { id: "1", number: 3 },
    { id: "2", number: 5 },
    { id: "3", number: 2 },
    { id: "4", number: 4 },
  ]);
  const [droppedItems, setDroppedItems] = useState<any[]>([]);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [score, setScore] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [playCorrect] = useSound("/sounds/correct.mp3");
  const [playIncorrect] = useSound("/sounds/incorrect.mp3");

  const [targets] = useState([
    { id: "threeApples", label: "Three Apples", number: 3 },
    { id: "fiveApples", label: "Five Apples", number: 5 },
    { id: "twoApples", label: "Two Apples", number: 2 },
    { id: "fourApples", label: "Four Apples", number: 4 },
  ]);

  const steps = [
    {
      type: "text",
      content: (
        <>
          <p>
            Numbers are fundamental to mathematics and our daily lives. They
            help us count, measure, and understand quantities.
          </p>
          <h3 className="text-lg font-semibold mt-4">1. What are numbers?</h3>
          <p>
            Numbers are abstract concepts used to represent quantities, order,
            and measurements. They are the building blocks of mathematics.
          </p>
        </>
      ),
    },
    {
      type: "text",
      content: (
        <>
          <h3 className="text-lg font-semibold mt-4">2. Types of numbers:</h3>
          <ul className="list-disc list-inside">
            <li>Natural numbers: 1, 2, 3, 4, ... (used for counting)</li>
            <li>
              Whole numbers: 0, 1, 2, 3, ... (natural numbers including zero)
            </li>
            <li>
              Integers: ..., -2, -1, 0, 1, 2, ... (positive and negative whole
              numbers)
            </li>
            <li>
              Rational numbers: numbers that can be expressed as fractions
              (e.g., 1/2, 3/4)
            </li>
            <li>
              Irrational numbers: numbers that cannot be expressed as simple
              fractions (e.g., π, √2)
            </li>
          </ul>
        </>
      ),
    },
    {
      type: "interactive",
      content: (
        <>
          <p className="mb-4">
            Drag the correct number of apples to match each number:
          </p>
          <DndContext onDragEnd={handleDragEnd}>
            <div className="flex justify-around mb-6">
              {dragItems.map((item) => (
                <DraggableItem
                  key={item.id}
                  id={item.id}
                  number={item.number}
                />
              ))}
            </div>
            <div className="flex justify-around mt-6">
              {targets.map((target) => (
                <DroppableTarget
                  key={target.id}
                  id={target.id}
                  label={target.label}
                  droppedItems={droppedItems.filter(
                    (item) => item.droppedAt === target.id
                  )}
                />
              ))}
            </div>
          </DndContext>
          {feedback && (
            <p
              className={`mt-4 font-semibold ${
                feedback === "Correct!" ? "text-green-600" : "text-red-600"
              }`}
            >
              {feedback}
            </p>
          )}
        </>
      ),
    },
    {
      type: "quiz",
      content: (
        <div className="space-y-6">
          <QuizQuestion
            question="What is the smallest whole number?"
            options={["0", "1", "-1", "10"]}
            correctAnswer="0"
            explanation="The smallest whole number is 0. Whole numbers include all natural numbers (1, 2, 3, ...) and zero."
            onFeedback={handleQuizFeedback}
          />
          <QuizQuestion
            question="Which of the following is NOT a type of number mentioned in the lesson?"
            options={[
              "Natural numbers",
              "Whole numbers",
              "Imaginary numbers",
              "Rational numbers",
            ]}
            correctAnswer="Imaginary numbers"
            explanation="Imaginary numbers were not mentioned in the lesson. The lesson covered natural numbers, whole numbers, integers, rational numbers, and irrational numbers."
            onFeedback={handleQuizFeedback}
          />
          <QuizQuestion
            question="In the decimal system, how many digits are used?"
            options={["2", "8", "10", "16"]}
            correctAnswer="10"
            explanation="The decimal system, also known as base-10, uses 10 digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, and 9."
            onFeedback={handleQuizFeedback}
          />
          <QuizQuestion
            question="Which number system is commonly used in computer science?"
            options={["Decimal", "Binary", "Octal", "Hexadecimal"]}
            correctAnswer="Binary"
            explanation="Binary (base-2) is commonly used in computer science because it aligns with the on/off states of electronic switches in computer hardware."
            onFeedback={handleQuizFeedback}
          />
        </div>
      ),
    },
  ];

  function handleDragEnd(event: any) {
    const { active, over } = event;
  
    if (over && active.id !== over.id) {
      const draggedItem = dragItems.find((item) => item.id === active.id);
      const targetItem = targets.find((target) => target.id === over.id);
  
      if (
        draggedItem &&
        targetItem &&
        draggedItem.number === targetItem.number
      ) {
        setFeedback("Correct!");
        setScore(score + 10);
        playCorrect();
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
  
        // Remove the item from dragItems
        setDragItems(dragItems.filter((item) => item.id !== active.id));
  
        // Add the item to droppedItems
        setDroppedItems([
          ...droppedItems,
          { ...draggedItem, droppedAt: over.id },
        ]);
      } else {
        setFeedback("Try again!");
        playIncorrect();
      }
    }
  }
  
  
  function handleQuizFeedback(feedback: string, isCorrect: boolean) {
    setFeedback(feedback);
    if (isCorrect) {
      setScore(score + 10);
      playCorrect();
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    } else {
      playIncorrect();
    }
  }

  function handleNextStep() {
    setFeedback(null);
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  }

  function handlePrevStep() {
    setFeedback(null);
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  }

  return (
    <section
      className={`min-h-screen min-w-full flex items-start justify-center ${
        fullHeight && "bg-white z-50 absolute inset-0"
      }`}
    >
      {showConfetti && <Confetti />}
      <Button
        variant={"destructive"}
        className="absolute top-3 right-5 rounded-full"
        onClick={() => setFullHeight(false)}
      >
        <X />
      </Button>
      <Card className="max-w-4xl w-full mx-auto p-6 shadow-2xl m-6">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold flex justify-between items-center">
            Introduction to Numbers
            <Button onClick={() => setIsModalOpen(true)} className="ml-4">
              Watch Lesson Video
            </Button>
          </CardTitle>
        </CardHeader>
        <Progress
          value={(currentStep / (steps.length - 1)) * 100}
          className="my-4"
        />
        <CardContent className="my-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              {steps[currentStep].content}
            </motion.div>
          </AnimatePresence>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <Button
            onClick={handlePrevStep}
            className="flex items-center space-x-2"
            disabled={currentStep === 0}
          >
            <FiChevronLeft />
            <span>Previous</span>
          </Button>
          <div className="text-xl font-bold">Score: {score}</div>
          <Button
            onClick={handleNextStep}
            className="flex items-center space-x-2"
            disabled={currentStep === steps.length - 1}
          >
            <span>Next</span>
            <FiChevronRight />
          </Button>
        </CardFooter>
      </Card>
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen} >
        <DialogContent className="flex items-center justify-center flex-col gap-4">
          <DialogHeader>
            <DialogTitle>Lesson Video</DialogTitle>
          </DialogHeader>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/crSGS1uBSNQ?si=24DsxXPRkobFruJg" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        </DialogContent>
      </Dialog>
    </section>
  );
};

const DraggableItem: React.FC<{ id: string; number: number }> = ({
  id,
  number,
}) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
  };

  return (
    <motion.div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="w-20 h-20 flex items-center justify-center bg-red-500 rounded-full cursor-pointer shadow-lg"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <img src="/apple-icon.png" alt="Apple" className="w-12 h-12" />
      <span className="absolute top-0 right-0 bg-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
        {number}
      </span>
    </motion.div>
  );
};

const DroppableTarget: React.FC<{ id: string; label: string; droppedItems: DragItem[] }> = ({
  id,
  label,
  droppedItems,
}) => {
  const { setNodeRef } = useDroppable({
    id,
  });

  return (
    <motion.div
      ref={setNodeRef}
      className="w-32 h-32 flex items-center justify-center bg-gray-200 text-black font-semibold rounded-lg border-dashed border-2 border-gray-400 relative"
      whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0,0,0,0.2)" }}
    >
      {droppedItems.map((item) => (
        <div key={item.id} className="absolute w-full h-full flex items-center justify-center">
          <img src="/apple-icon.png" alt="Apple" className="w-12 h-12" />
          <span className="absolute top-0 right-0 bg-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
            {item.number}
          </span>
        </div>
      ))}
      {!droppedItems.length && <span>{label}</span>}
    </motion.div>
  );
};

const QuizQuestion: React.FC<{
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  onFeedback: (feedback: string, isCorrect: boolean) => void;
}> = ({ question, options, correctAnswer, explanation, onFeedback }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
    setShowExplanation(true);
    if (option === correctAnswer) {
      onFeedback("Correct!", true);
    } else {
      onFeedback(`Incorrect. The correct answer is ${correctAnswer}.`, false);
    }
  };

  return (
    <div className="p-4 border border-gray-300 rounded-lg">
      <h4 className="text-lg font-semibold">{question}</h4>
      <div className="mt-2 grid grid-cols-2 gap-2">
        {options.map((option) => (
          <motion.button
            key={option}
            onClick={() => handleOptionChange(option)}
            className={`block w-full p-2 rounded-md ${
              selectedOption === option
                ? option === correctAnswer
                  ? "bg-green-500 text-white"
                  : "bg-red-500 text-white"
                : "bg-gray-200"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {option}
          </motion.button>
        ))}
      </div>
      {showExplanation && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-3 bg-blue-100 rounded-md"
        >
          <p className="text-sm">{explanation}</p>
        </motion.div>
      )}
    </div>
  );
};

export default IntroductionToNumbers;
