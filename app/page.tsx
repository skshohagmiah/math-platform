
import Blogs from "@/components/landing-page/Blogs";
import Curriculum from "@/components/landing-page/Curriculum";
import Features from "@/components/landing-page/Features";
import Hero from "@/components/landing-page/Hero";
import { mathChapters } from "@/data/MathChapters";
import ArticleSection from "@/components/landing-page/Blogs";

export default function Home() {
  return (
      <main className="max-w-screen-xl mx-auto">
        <Hero />
        <hr />
        <Features />
        <hr />
        <Curriculum chapters={mathChapters}/>
        <hr />
        <ArticleSection />
      </main>

  );
}
