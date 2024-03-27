import React, { useState } from "react";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";

export default function Detail({ course }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const openModal = (url) => {
    setVideoUrl(url);
    setModalOpen(true);
  };
  const navigate = useNavigate();
  const closeModal = () => {
    setModalOpen(false);
    setVideoUrl("");
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold">{course.title}</h1>
      <p className="text-gray-600 mb-4">{course.description}</p>
      <div className="grid grid-cols-1 gap-4">
        {course.curriculum.map((module, index) => (
          <div key={index} className="bg-white shadow-md rounded-md p-4">
            <h2 className="text-xl font-semibold mb-2">{module.title}</h2>
            <p className="text-gray-600">Duration: {module.duration}</p>
            <div className="flex justify-end mt-2">
              {module.videos.map((video, index) => (
                <div key={index} className="w-full">
                  <button
                    onClick={() => openModal(video.url)}
                    className="bg-white-99 shadow-xl text-white font-semibold py-2 px-4 rounded-md cursor-pointer focus:outline-none focus:ring border-none "
                  >
                    Watch Video {index + 1}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {modalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="bg-black/35 absolute w-full h-full left-0 right-0"></div>
          <div className="bg-white z-50 p-4 rounded-lg">
            <ReactPlayer
              url={videoUrl}
                className="md:flex hidden"
                width={"900px"}
              controls={true}
            />
               <ReactPlayer
              url={videoUrl}
                className=" hidden sm:flex  md:hidden"
                width={"650px"}
              controls={true}
            />
               <ReactPlayer
              url={videoUrl}
                className="sm:hidden flex"
                width={"400px"}
                height={"400px"}
              controls={true}
            />
            <div>
              <button
                onClick={closeModal}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
