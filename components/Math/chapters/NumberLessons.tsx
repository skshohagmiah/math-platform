"use client";

import React from "react";
import { CheckCircle, Circle } from "lucide-react"; // Icons for completion status
import { FaBook, FaCalculator, FaRulerCombined } from "react-icons/fa"; // Example icons for lessons
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useParams, useRouter } from "next/navigation";

const numberBasicsLessons = [
  {
    id: 1,
    title: "Introduction to Numbers",
    description: "Understand the basics of numbers and their importance.",
    icon: <FaBook className="text-blue-500 w-12 h-12" />, // Replace with an appropriate icon
    completed: true,
  },
  {
    id: 2,
    title: "Types of Numbers",
    description: "Learn about different types of numbers, including natural, whole, and rational numbers.",
    icon: <FaCalculator className="text-green-500 w-12 h-12" />, // Replace with an appropriate icon
    completed: false,
  },
  {
    id: 3,
    title: "Number Line",
    description: "Explore the concept of the number line and its uses in mathematics.",
    icon: <FaRulerCombined className="text-red-500 w-12 h-12" />, // Replace with an appropriate icon
    completed: false,
  },
  // Add more lessons here...
];

const NumberBasicsChapter: React.FC = () => {

  const router = useRouter()
  const params = useParams();

  return (
    <section className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-12">Number Basics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {numberBasicsLessons.map((lesson) => (
          <Card
            key={lesson.id}
            className="relative bg-white shadow-lg hover:shadow-xl transition-shadow duration-200"
            onClick={() => router.push(`/chapters/${params.chapter}/${lesson.title}`)}
          >
            <CardHeader className="flex items-center">
              {lesson.icon}
              <CardTitle className="ml-4 text-lg">{lesson.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">{lesson.description}</p>
            </CardContent>
            <div className="absolute top-4 right-4">
              {lesson.completed ? (
                <CheckCircle className="text-green-500 w-6 h-6" />
              ) : (
                <Circle className="text-gray-400 w-6 h-6" />
              )}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default NumberBasicsChapter;
