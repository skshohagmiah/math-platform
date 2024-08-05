import { FC } from "react";
import {
  Calculator,
  Triangle,
  DivideIcon,
  PieChart,
  Percent,
  Shapes,
  BarChart,
  Square,
  Sigma,
  Compass,
  TrendingUp,
  Infinity,
  GitBranch,
  Grid,
  Hash,
  X,
  Plus,
  WavesIcon,
  TriangleIcon,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Chapter {
  id: number;
  name: string;
  icon: string;
  description: string;
  difficulty: string;
}

interface CurriculumProps {
  chapters: Chapter[];
}

const iconMap: { [key: string]: React.ElementType } = {
  "123": Calculator,
  Triangle: Triangle,
  "Plus-Minus": Plus,
  "X-Divide": DivideIcon,
  "Pie-Chart": PieChart,
  Percent: Percent,
  Function: X,
  Shapes: Shapes,
  "Bar-Chart": BarChart,
  Dice: WavesIcon,
  "X-Square": Square,
  Sigma: Sigma,
  Compass: Compass,
  "Sine-Wave": TriangleIcon,
  Parabola: TrendingUp,
  Limit: Infinity,
  "Tangent-Line": GitBranch,
  Integral: Infinity,
  Matrix: Grid,
  Prime: Hash,
};

const difficultyColorMap: { [key: string]: string } = {
  Beginner: "bg-green-100 text-green-800",
  "Beginner-Intermediate": "bg-lime-100 text-lime-800",
  Intermediate: "bg-yellow-100 text-yellow-800",
  "Intermediate-Advanced": "bg-orange-100 text-orange-800",
  Advanced: "bg-red-100 text-red-800",
  Expert: "bg-purple-100 text-purple-800",
};

const Curriculum: FC<CurriculumProps> = ({ chapters }) => {
  return (
    <section className="py-20 container mx-auto px-4" id="chapters">
      <h2 className="text-3xl font-bold text-center mb-12">
        Interactive Math Curriculum
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {chapters.map((chapter) => {
          const Icon = iconMap[chapter.icon];
          return (
            <Card
              key={chapter.id}
              className="overflow-hidden transition-all hover:shadow-lg cursor-pointer"
            >
              <CardHeader className="space-y-1">
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-green-500 rounded-full">
                    {Icon && <Icon className="w-6 h-6 text-white" />}
                  </div>
                  <CardTitle className="text-xl">{chapter.name}</CardTitle>
                  <div className="text-right flex-1">
                    <span>✅</span>
                  </div>
                </div>
                <CardDescription className="p-2">{chapter.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge
                  className={`${
                    difficultyColorMap[chapter.difficulty]
                  } mt-2 w-fit px-4`}
                >
                  {chapter.difficulty}
                </Badge>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Curriculum;
