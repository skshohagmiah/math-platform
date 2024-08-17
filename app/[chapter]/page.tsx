import NumberBasicsChapter from "@/components/Math/chapters/NumberLessons";
import IntroductionToNumbers from "@/components/Math/IntroductionToNumber";
import { Card } from "@/components/ui/card";
import { Construction } from "lucide-react";
import React from "react";

const ChapterPage = ({ params }: { params: { chapter: string } }) => {
  const chapter = params.chapter;

  console.log(chapter)

  switch (chapter) {
    case "Number%20Basics":
      return <NumberBasicsChapter />;
    default:
      return (
        <div className="min-h-screen min-w-full flex items-center justify-center">
          <Card className="p-6 shadow-md flex items-center justify-center flex-col gap-1">
            <div className="bg-green-500 p-4 rounded-full">
              <Construction size={40}/>
            </div>
            <h2 className="text-3xl font-semibold text-rose-500 capitalize">This page is under Construction</h2>
            <p>The content will be available soon</p>
          </Card>
        </div>
      );
  }
};

export default ChapterPage;
