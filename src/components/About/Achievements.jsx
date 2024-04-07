import About1 from "../../assets/About/About1.png";
import About2 from "../../assets/About/About2.png";
import About3 from "../../assets/About/About3.png";
import About4 from "../../assets/About/About4.png";

export default function Achievements() {
  return (
    <div className="container mt-10 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5">
        <div className="bg-white  rounded-lg shadow-md p-10 md:p-14">
          <div className="pr-11">
            <img src={About1} alt="" />
            <h3 className="text-grey-15 sm:text-xl text-lg md:text-2xl">
              Trusted by Thousands
            </h3>
            <p className="mt-50 text-grey-35 text-sm sm:text-base md:text-lg">
              We have successfully served thousands of students, helping them
              unlock their potential and achieve their career goals.
            </p>
          </div>
        </div>
        <div className="bg-white  rounded-lg shadow-md p-10 md:p-14">
          <div className="pr-11">
            <img src={About2} alt="" />
            <h3 className="text-grey-15 sm:text-xl text-lg md:text-2xl">
              Award-Winning Courses
            </h3>
            <p className="mt-50 text-grey-35 text-sm sm:text-base md:text-lg">
              Our courses have received recognition and accolades in the
              industry for their quality, depth of content, and effective
              teaching methodologies.{" "}
            </p>
          </div>
        </div>
        <div className="bg-white  rounded-lg shadow-md p-10 md:p-14">
          <div className="pr-11">
            <img src={About3} alt="" />
            <h3 className="text-grey-15 sm:text-xl text-lg md:text-2xl">
              Positive Student Feedback
            </h3>
            <p className="mt-50 text-grey-35 text-sm sm:text-base md:text-lg">
              We take pride in the positive feedback we receive from our
              students, who appreciate the practicality and relevance of our
              course materials.{" "}
            </p>
          </div>
        </div>
        <div className="bg-white  rounded-lg shadow-md p-10 md:p-14">
          <div className="pr-11">
            <img src={About4} alt="" />
            <h3 className="text-grey-15 sm:text-xl text-lg md:text-2xl">
              Industry Partnerships
            </h3>
            <p className="mt-50 text-grey-35 text-sm sm:text-base md:text-lg">
              We have established strong partnerships with industry leaders,
              enabling us to provide our students with access to the latest
              tools and technologies{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
