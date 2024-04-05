import About5 from "../../assets/About/About5.png";
import About6 from "../../assets/About/About6.png";
import About7 from "../../assets/About/About7.png";
import About8 from "../../assets/About/About8.png";
export default function Cta() {
  return (
    <div>
      <div className="container mt-10 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5">
          <div className="bg-white  rounded-lg shadow-md p-10 md:p-14">
            <div className="pr-11">
              <img src={About5} alt="" />
              <h3 className="text-grey-15 sm:text-xl text-lg md:text-2xl">
              Provide Practical Skills              </h3>
              <p className="mt-50 text-grey-35 text-sm sm:text-base md:text-lg">
              We focus on delivering practical skills that are relevant to the current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field.
              </p>
            </div>
          </div>
          <div className="bg-white  rounded-lg shadow-md p-10 md:p-14">
            <div className="pr-11">
              <img src={About6} alt="" />
              <h3 className="text-grey-15 sm:text-xl text-lg md:text-2xl">
              Foster Creative Problem-Solving           </h3>
              <p className="mt-50 text-grey-35 text-sm sm:text-base md:text-lg">
              We encourage creative thinking and problem-solving abilities, allowing our students to tackle real-world challenges with confidence and innovation.{" "}
              </p>
            </div>
          </div>
          <div className="bg-white  rounded-lg shadow-md p-10 md:p-14">
            <div className="pr-11">
              <img src={About7} alt="" />
              <h3 className="text-grey-15 sm:text-xl text-lg md:text-2xl">
              Promote Collaboration and Community              </h3>
              <p className="mt-50 text-grey-35 text-sm sm:text-base md:text-lg">
              We believe in the power of collaboration and peer learning. Our platform fosters a supportive and inclusive community where learners can connect, share insights, and grow together.{" "}
              </p>
            </div>
          </div>
          <div className="bg-white  rounded-lg shadow-md p-10 md:p-14">
            <div className="pr-11">
              <img src={About8} alt="" />
              <h3 className="text-grey-15 sm:text-xl text-lg md:text-2xl">
              Stay Ahead of the Curve              </h3>
              <p className="mt-50 text-grey-35 text-sm sm:text-base md:text-lg">
              The digital landscape is constantly evolving, and we strive to stay at the forefront of industry trends. We regularly update our course content to ensure our students receive the latest knowledge and skills.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
