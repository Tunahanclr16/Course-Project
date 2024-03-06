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
      <div className=" grid-cols-1 md:grid-cols-2 grid mx-auto  gap-20  mt-[40px] sm:mt-[60px] lg:mt-[80px]">
      {courseData.map((course, i) => (
          <div
            key={i}
            className="bg-[#FFFFFF] shadow-xl flex flex-col gap-20 lg:h-[807px] lg:w-[783px]"
          >
          
            <div className="flex flex-col pl-4 md:pl-9 mt-[30px] sm:mt-[40px] lg:mt-[50px]">
              <img className=" w-[309px] h-[172px] lg:w-[683px] rounded-lg lg:h-[450px]" src={course.image} alt="" />
              <div className="flex justify-between items-center">
              <div>
            <span>
            {course.totalDuration}
            </span>
            <span>
              {course.level}
            </span>
              </div>
              <div>
                {course.teacher}
              </div>
            </div>
              <h3 className="font-semibold  text-[20px] lg:text-[24px]  ">
                {course.title}
              </h3>
              <p className="lg:mt-[14px] mt-[10px]  text-[20px] lg:text-[16]   w-[298px] sm:w-[273px] lg:w-[359px] ">
                {course.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
