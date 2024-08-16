"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Circle } from "lucide-react";
import { mathChapters } from "@/data/MathChapters";

const MathCurriculum: React.FC = () => {
  return (
    <section className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-12">Math Curriculum</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mathChapters.map((chapter) => (
          <Card
            key={chapter.id}
            className={`relative ${chapter.className} shadow-lg hover:shadow-xl transition-shadow duration-200`}
          >
            <CardHeader className="flex items-center">
              {chapter.icon}
              <CardTitle className="ml-4 text-lg">{chapter.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">{chapter.description}</p>
            </CardContent>
            <div className="absolute top-4 right-4">
              {chapter.completed ? (
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

export default MathCurriculum;
