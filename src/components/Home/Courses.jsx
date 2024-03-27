import React from 'react';
import PageIntroduction from '../../ui/PageIntroduction';
import CourseData from '../../server/db.json';
import { useNavigate } from 'react-router-dom';

export default function Courses() {
  const courseData = CourseData.courseData;
  const navigate = useNavigate();

  return (
    <div className="lg:w-[1590px] w-full mx-auto mt-[50px] sm:mt-[100px]">
      <div className="mt-[50px] sm:mt-[100px]">
        <PageIntroduction
          title={'Courses'}
          btnText={'View All'}
          description={
            'Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.'
          }
        />
      </div>
      <div className="grid grid-cols-1  gap-6 sm:gap-10 mt-[40px] mx-auto w-[310px] xss:w-[350px] md:w-[1250px] lgg:w-full sm:mt-[60px] md:grid-cols-2 lgg:grid-cols-3">
        {courseData.slice(0, 6).map((course, index) => (
          <div key={index} className="flex flex-col bg-[#FFFFFF] shadow-xl rounded overflow-hidden">
            <img
              className="w-full h-[200px] object-cover"
              src={course.image}
              alt={course.title}
            />
            <div className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <span className="bg-orange-400 text-white font-semibold text-sm rounded px-2">
                    {course.totalDuration}
                  </span>
                  <span className="bg-orange-400 text-white font-semibold text-sm rounded px-2 ml-2">
                    {course.level}
                  </span>
                </div>
                <div className="text-gray-600 font-semibold">{course.teacher}</div>
              </div>
              <h3 className="mt-3 text-lg font-semibold">{course.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{course.description}</p>
              <div className="mt-3">
                <button
                  onClick={() => navigate(`/course/${course.id}`)}
                  className="bg-gray-100 cursor-pointer text-gray-800 font-semibold py-2 px-4 rounded hover:bg-gray-200 transition duration-300"
                >
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
