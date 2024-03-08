import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CourseData from "../server/db.json";

export default function CourseOpenPage() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const selectedCourse = CourseData.courseData.find(course => course.id === id);
    setCourse(selectedCourse);
  }, [id]);

  if (!course) {
    return <div>Loading...</div>; // İsteğe bağlı olarak bir yükleme göstergesi
  }

  return (
    <div className="lgg:w-[1596px] lg:w-[1200px] w-[300px] xs:w-[360px] sm:w-[750px] mx-auto mt-[50px] sm:mt-[100px]">
    
      <div className="flex flex-col items-center mt-10">
        <img
          className="w-[400px] h-[250px] object-cover rounded-lg"
          src={course.image}
          alt=""
        />
        <div className="mt-6 text-gray-800">
          <p>Teacher: {course.teacher}</p>
          <p>Total Duration: {course.totalDuration}</p>
          <p>Level: {course.level}</p>
        </div>
      </div>
    </div>
  );
}
