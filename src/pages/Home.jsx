import Benefits from "../components/Home/Benefits";
import Brands from "../components/Home/Brands";
import Courses from "../components/Home/Courses";
import Hero from "../components/Home/Hero";
import HeroPhoto from "../components/Home/HeroPhoto";

export default function Home() {
  return <div>
    <div className=" ">
    <Hero/>
    <Brands/>
    <HeroPhoto/>
    <Benefits/>
  <Courses/>
  </div>;
  </div>
}
