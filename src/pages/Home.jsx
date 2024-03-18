import Benefits from "../components/Home/Benefits";
import Brands from "../components/Home/Brands";
import Courses from "../components/Home/Courses";
import Hero from "../components/Home/Hero";
import HeroPhoto from "../components/Home/HeroPhoto";
import Testimonials from "../components/Home/Testimonials";
import Pricing from "../components/pricing/Pricing";

export default function Home() {
  return <div>
    <div className=" lgg:w-[1596px] lg:w-[1200px] w-[300px] xs:w-[360px] sm:w-[750px] mx-auto mt-[50px] sm:mt-[100px]">
    <Hero/>
    <Brands/>
    <HeroPhoto/>
    <Benefits/>
  <Courses/>
  <Testimonials/>
  <Pricing/>
  </div>;
  </div>
}
