import Navbar from "@/components/home/Navbar";
import HeroSection from "@/components/home/Hero";
import InfiniteLogosHorizontal from "@/components/home/InfiniteLogosHorizontal";
import HowItWorks from "@/components/home/HowItWorks";
import WhatWeAreTryingToSolve from "@/components/home/WhatWeAreTryingToSolve";
import CustomerFeedback from "@/components/home/CustomerFeedback";
import TopHeadlines from "@/components/home/TopHeadlines";
import ArticleEstimate from "@/components/home/ArticleEstimate";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <main>
      <p className="text-center text-red-500 my-3 fixed top-0 w-full">This is just a Dummy Landing Page</p>
      <Navbar />
      <HeroSection />
      <InfiniteLogosHorizontal />
      <HowItWorks/>
      <WhatWeAreTryingToSolve />
      {/* Feature Here */}
      <CustomerFeedback />
      <TopHeadlines />
      <ArticleEstimate />
      <Footer />
    </main>
  );
}
