import Achievements from "../components/About/Achievements";
import Cta from "../components/About/Cta";
import OurGoals from "../components/About/OurGoals";
import Overview from "../components/About/Overview";
import SectionHeader from "../ui/SectionHeader";

export default function AboutUs() {
  return <div className="lg:max-w-[1596px] w-full mx-auto  ">
    <SectionHeader title={"About Skillbridge"} description={"Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skills and knowledge needed to succeed in the ever-evolving digital landscape."}/>
    <Overview/>
<Achievements/>
<OurGoals/>
<Cta/>
  </div>;
}
