import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);
  const accordionData = [
    {
      question: "Can I enroll in multiple courses at once?",
      answer:
        "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
    },
    {
      question: "What kind of support can I expect from instructors?",
      answer:
        "Are the courses self-paced or do they have specific start and end dates?",
    },
    {
      question: "Are there any prerequisites for the courses?",
      answer: "Yes, there are prerequisites for the courses."
    },
    {
      question: "Can I download the course materials for offline access?",
      answer: "Yes, you can download the course materials for offline access.",
    },
    {
        question: "Can I download the course materials for offline access?",
        answer: "Yes, you can download the course materials for offline access. ",
      },
  ];

  return ( 
    <div className="flex mt-[150px] mx-auto lgg:w-[1595px] sm:w-[700px] md:w-[1200px] w-[357px]  justify-center px-14  flex-col md:flex-row bg-gray-50 py-8 sm:py-12 lg:py-16">
      <div className="mx-auto">
        <h2 className=" sm:text-[38px] text-grey-15 lg:text-[48px] font-semibold sm:w-[408px] w-[309px] text-[28px]">
          Frequently Asked Questions
        </h2>
        <p className=" sm:text-[16px] text-[14px] lg:text-[18px] text-grey-20 mt-2 sm:w-[408px] w-[309px] font-light">
          Still you have any questions? Contact our Team via
          support@skillbridge.com
        </p>
      </div>
      <div className="lg:w-[1079px]  w-[250px] sm:w-[557px]    lgg:w-[1595px] mt-10 bg-[#F1F1F3] flex flex-col gap-5  h-auto mx-auto rounded shadow-xl md:mt-0 ">
        {accordionData.map((item, index) => (
          <div key={index} className="mb-4 mt-12 ">
            <div
              className="flex justify-center gap-2 sm:justify-between items-center cursor-pointer  p-4 rounded-md"
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            >
              <h3 className=" font-semibold sm:w-[477px] lg:w-[685px] w-[191px] text-[16px] sm:text-[20px]">{item.question}</h3>
              {activeIndex === index ? <FiChevronUp /> : <FiChevronDown />}
            </div>
            {activeIndex === index && (
              <p className="text-gray-600 sm:w-[551px] w-[261px]  sm:mx-0 mx-auto text-[20px] p-4 border-t">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
