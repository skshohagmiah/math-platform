'use client';
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CalendarDays, Clock, ArrowRight, Search } from 'lucide-react';
import Image from 'next/image';
import { Pagination } from '@/components/others/Pagination';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Dummy data for articles (expanded from previous example)
const allArticles = [
  // ... (previous articles)
  {
    id: 4,
    title: "The Mandelbrot Set: A Journey into Fractal Mathematics",
    excerpt: "Explore the fascinating world of fractals and the mathematical beauty of the Mandelbrot set.",
    author: "Dr. Benoit B. Mandelbrot",
    date: "2023-09-05",
    readTime: "15 min read",
    category: "Fractal Geometry",
    image: "/images/mandelbrot.jpg"
  },
  {
    id: 5,
    title: "Game Theory in Everyday Life",
    excerpt: "Discover how mathematical game theory applies to decision-making in various real-life scenarios.",
    author: "John Nash Jr.",
    date: "2023-09-12",
    readTime: "9 min read",
    category: "Applied Mathematics",
    image: "/images/game-theory.jpg"
  },
  // ... (add more articles as needed)
];

// Dummy data for popular posts
const popularPosts = [
  { id: 1, title: "Introduction to Linear Algebra", views: 15000 },
  { id: 2, title: "The History of Pi", views: 12000 },
  { id: 3, title: "Understanding Euler's Number", views: 10000 },
  { id: 4, title: "The Basics of Trigonometry", views: 9000 },
  { id: 5, title: "Exploring Prime Numbers", views: 8500 },
];

const ArticlesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  // Filter and paginate articles
  const filteredArticles = allArticles.filter(article => 
    (category === "All" || article.category === category) &&
    (article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
     article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <h1 className="text-2xl lg:text-4xl font-bold mb-8 text-center">Math Insights: Articles</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Main Content */}
        <div className="md:w-2/3">
          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Categories</SelectItem>
                <SelectItem value="Mathematical Wonders">Mathematical Wonders</SelectItem>
                <SelectItem value="Calculus">Calculus</SelectItem>
                <SelectItem value="Applied Mathematics">Applied Mathematics</SelectItem>
                <SelectItem value="Fractal Geometry">Fractal Geometry</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {currentArticles.map((article) => (
              <Card key={article.id} className="flex flex-col">
                <Image 
                  src={article.image} 
                  alt={article.title} 
                  width={400} 
                  height={200} 
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <Badge>{article.category}</Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <CalendarDays className="w-4 h-4 mr-1" />
                      {article.date}
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{article.excerpt}</CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto flex justify-between items-center">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {article.readTime}
                  </div>
                  <Button variant="outline">Read More</Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(filteredArticles.length / articlesPerPage)}
            onPageChange={paginate}
          />
        </div>

        {/* Sidebar */}
        <div className="md:w-1/3">
          {/* About the Author */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>About the Author</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center mb-4">
                <Image 
                  src="/images/author.jpg" 
                  alt="Author" 
                  width={64} 
                  height={64} 
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">Dr. Mathematica</h3>
                  <p className="text-sm text-gray-500">Math Enthusiast & Educator</p>
                </div>
              </div>
              <p className="text-sm">Dr. Mathematica has been passionate about making math accessible and engaging for over 20 years. She believes in the power of visual learning and real-world applications.</p>
            </CardContent>
          </Card>

          {/* Popular Posts */}
          <Card>
            <CardHeader>
              <CardTitle>Popular Posts</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {popularPosts.map((post) => (
                  <li key={post.id} className="flex items-center">
                    <span className="text-2xl font-bold text-gray-300 mr-4">{post.id}</span>
                    <div>
                      <h4 className="font-semibold">{post.title}</h4>
                      <p className="text-sm text-gray-500">{post.views.toLocaleString()} views</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;