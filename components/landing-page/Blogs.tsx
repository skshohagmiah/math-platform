import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";

// Dummy data for articles
const articles = [
  {
    id: 1,
    title: "The Beauty of the Fibonacci Sequence in Nature",
    excerpt:
      "Discover how this mathematical sequence appears in unexpected places throughout the natural world.",
    author: "Dr. Emma Watson",
    date: "2023-07-15",
    readTime: "8 min read",
    category: "Mathematical Wonders",
    image: "https://plus.unsplash.com/premium_photo-1683134169138-9037062cba51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hdGh8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    title: "Understanding Calculus: A Visual Approach",
    excerpt:
      "Breaking down complex calculus concepts with intuitive visualizations and real-world examples.",
    author: "Prof. Alan Turing",
    date: "2023-08-02",
    readTime: "12 min read",
    category: "Calculus",
    image: "https://plus.unsplash.com/premium_photo-1683134169138-9037062cba51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hdGh8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    title: "The Role of Mathematics in Modern Cryptography",
    excerpt:
      "Explore how advanced mathematical concepts are used to keep our digital world secure.",
    author: "Sarah Connor",
    date: "2023-08-20",
    readTime: "10 min read",
    category: "Applied Mathematics",
    image: "https://plus.unsplash.com/premium_photo-1683134169138-9037062cba51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hdGh8ZW58MHx8MHx8fDA%3D",
  },
  // Add more articles as needed
];

const ArticleSection: React.FC = () => {
  return (
    <section className="py-20 container mx-auto px-4">
      <div className="">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Math Insights: Featured Articles
        </h2>

        {/* Featured Articles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article) => (
            <Card key={article.id} className="overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                width={600}
                height={300}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <Badge variant="secondary">{article.category}</Badge>
                  <div className="flex items-center text-sm text-gray-500">
                    <CalendarDays className="w-4 h-4 mr-1" />
                    {article.date}
                  </div>
                </div>
                <CardTitle>{article.title}</CardTitle>
                <CardDescription>{article.excerpt}</CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-between items-center">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  {article.readTime}
                </div>
                <Button variant="outline">Read More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View All Articles Button */}
        <div className="text-center mt-12">
          <Button size="lg">
            View All Articles
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;
