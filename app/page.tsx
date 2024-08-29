
import Blogs from "@/components/landing-page/Blogs";
import Curriculum from "@/components/landing-page/Curriculum";
import Features from "@/components/landing-page/Features";
import Hero from "@/components/landing-page/Hero";
import { mathChapters } from "@/data/MathChapters";
import ArticleSection from "@/components/landing-page/Blogs";
import Newsletter from "@/components/landing-page/Newsletter";
import FeedbackForm from "@/components/landing-page/Feedback";
import { auth } from "@/auth";

export default async function Home() {

  const session = await auth()

  return (
      <main className="">
        <Hero isAuthenticated={session?.user?.email !== ''}/>
        <hr />
        {/* <Features />
        <hr /> */}
        <Curriculum />
        <hr />
        <ArticleSection />
        <hr />
        <FeedbackForm />
      </main>

  );
}
