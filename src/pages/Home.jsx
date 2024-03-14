import Benefits from "../components/Home/Benefits";
import Brands from "../components/Home/Brands";
import Courses from "../components/Home/Courses";
import Hero from "../components/Home/Hero";
import HeroPhoto from "../components/Home/HeroPhoto";
import Testimonials from "../components/Home/Testimonials";

export default function Home() {
  return <div>
    <div className=" ">
    <Hero/>
    <Brands/>
    <HeroPhoto/>
    <Benefits/>
  <Courses/>
  <Testimonials/>
  </div>;
  </div>
}
