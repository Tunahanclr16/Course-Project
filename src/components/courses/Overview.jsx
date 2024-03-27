import { useNavigate } from "react-router-dom";
import CourseData from "../../server/db.json";

export default function Overview() {
  const courseData = CourseData.courseData;
    const navigate=useNavigate()
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-8">
        {courseData.map((course, index) => (
          <div
            key={index}
            className="bg-white  shadow-md rounded-md overflow-hidden"
          >
            <div className="p-6 flex flex-col sm:flex-row justify-between">
     <div>  
     <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
     </div>
              <button onClick={()=>navigate(`/course/${course.id}`)} className="px-4 py-1 cursor-pointer border-none text-grey-15 bg-white-99 rounded transition duration-300">
                    Wiew Course
                </button>
            </div>
            <div className="flex p-6 items-center gap-8">
              <img
                src={course.image}
                alt={course.title}
                className=" w-20 sm:w-36 h-20 md:w-full sm:h-36 md:h-64 object-cover md:object-fill"
              />
              <img
                src={course.image2}
                alt={course.title}
                className=" w-20 sm:w-36 h-20 md:w-full sm:h-36 md:h-64 object-cover md:object-fill"
              />
              <img
                src={course.image3}
                alt={course.title}
                className=" w-20 sm:w-36 h-20 md:w-full sm:h-36 md:h-64 object-cover md:object-fill"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">
                    Duration: {course.totalDuration}
                  </p>
                  <p className="text-sm text-gray-500">Level: {course.level}</p>
                  <p className="text-sm text-gray-500">
                    Teacher: {course.teacher}
                  </p>
                </div>
           
              </div>
              <div className="mt-6 border-t border-gray-200">
                <h4 className="text-lg font-semibold mt-6">Curriculum</h4>
                {course.curriculum.map((module, index) => (
                  <div key={index} className="mt-4">
                    <p className="text-sm text-gray-500">{module.title}</p>
                    <p className="text-sm text-gray-500">
                      Duration: {module.duration}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
