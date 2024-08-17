
import Blogs from "@/components/landing-page/Blogs";
import Curriculum from "@/components/landing-page/Curriculum";
import Features from "@/components/landing-page/Features";
import Hero from "@/components/landing-page/Hero";
import { mathChapters } from "@/data/MathChapters";
import ArticleSection from "@/components/landing-page/Blogs";
import Newsletter from "@/components/landing-page/Newsletter";
import FeedbackForm from "@/components/landing-page/Feedback";

export default function Home() {
  return (
      <main className="">
        <Hero />
        <hr />
        <Features />
        <hr />
        <Curriculum />
        <hr />
        <ArticleSection />
        <hr />
        <FeedbackForm />
      </main>

  );
}
