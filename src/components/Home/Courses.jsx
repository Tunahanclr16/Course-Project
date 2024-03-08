import React, { useState, useEffect } from "react";
import PageIntroduction from "../../ui/PageIntroduction";
import axios from "axios";

export default function Courses() {
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/courseData"
        );
        setCourseData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  console.log("Course data:", courseData);

  return (
    <div className="lg:w-[1596px] w-[300px] xs:w-[360px] sm:w-[650px] mx-auto">
      <div className="mt-[50px] sm:mt-[100px]">
        <PageIntroduction
          title={"Courses"}
          description={
            "Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
          }
        />
      </div>
      <div className=" grid-cols-1 md:grid-cols-2   grid mx-auto gap-11 sm:gap-20  mt-[40px] sm:mt-[60px] lg:mt-[80px]">
      {courseData.slice(0,4).map((course, i) => (
          <div
            key={i}
            className="bg-[#FFFFFF] mx-2 shadow-xl items-center  flex flex-col gap-20 sm:h-[613px] h-[533px] lg:h-[820px] lg:w-[783px]"
          >
          
            <div className="flex flex-col pl-4 md:pl-9 mt-[30px] sm:mt-[40px] lg:mt-[50px]">
              <img className=" w-[309px] h-[172px] sm:h-[267px] sm:w-[549px] lg:w-[683px] rounded-lg lg:h-[450px]" src={course.image} alt="" />
              <div className="flex justify-between flex-col  sm:flex-row max-w-[200px] sm:max-w-[649px] sm:items-center">
              <div className="flex justify-start items-center mt-[30px] gap-[10px]">
            <span className="bg-white-95 border-gray-100 flex justify-center items-center lg:w-[107px] w-[86px]  lg:h-[43px] h-[34px]  rounded text-[18px] text-grey-30">
            {course.totalDuration}
            </span>
            <span className="bg-white-95 border-gray-100 flex justify-center items-center lg:w-[107px] w-[86px]  lg:h-[43px] h-[34px]  rounded text-[18px] text-grey-30">
            {course.level}
            </span>
              </div>
              <div className="text-[16px] mt-2  sm:mt-8 font-medium text-grey-15">
                {course.teacher}
              </div>
            </div>
             <div className="mt-[30px]">
             <h3 className="font-semibold  text-[20px] lg:text-[24px]  ">
                {course.title}
              </h3>
              <p className="lg:mt-[14px] mt-[10px]   sm:text-[16px] text-[14px] lg:text-[18px]   max-w-[298px] sm:max-w-[549px] lg:max-w-[688px] ">
                {course.description}
              </p>
             </div>
             <div className=" mt-[24px]  lg:mt-[30px]">
              <button className="text-grey-15 cursor-pointer bg-white-97 border-none rounded  text-[14px] lg:text-[18px] lg:w-[683px] lg:h-[63px] sm:[549px] w-[309px] h-[49px]">
                Get it Now 
              </button>
             </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
