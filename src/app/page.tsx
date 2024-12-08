import { ChefSection } from "./components/chef-section";
import { FoodSection } from "./components/food-section";
import { HeroSection } from "./components/hero-section";
import { StatsSection } from "./components/stats-section";
import { TestimonialSection } from "./components/testimonial-section";


export default function Home() {
  return (
    <>
      <HeroSection />
      <ChefSection />
      <StatsSection />
      <FoodSection />
      <TestimonialSection />
    </>
  )
}

