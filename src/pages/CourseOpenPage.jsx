import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CourseData from "../server/db.json";
import Detail from "../components/CourseDetail.jsx/Detail";

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
    <Detail course={course}/>
    </div>
  );
}
