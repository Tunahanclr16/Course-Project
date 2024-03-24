import { useState } from "react";
import SectionHeader from "../../ui/SectionHeader";
import { FaCheck } from "react-icons/fa";

export default function Pricing() {
  // Aylık ve yıllık fiyatlandırma verileri
  const [pricingData, setPricingData] = useState({
    monthly: {
      free: {
        title: "Free Plan",
        price: "$0",
        description:
          "Access to selected free courses. Limited course materials and resources. Basic community support. No certification upon completion. Ad-supported platform.",
        features: [
          "Access to selected free courses",
          "Limited course materials and resources",
          "Basic community support",
          "No certification upon completion",
          "Ad-supported platform",
          "Early access to new courses and update",
        ],
      },
      pro: {
        title: "Pro Plan",
        price: "$100",
        description:
          "Access to selected free courses. Limited course materials and resources. Basic community support. No certification upon completion. Ad-supported platform.",
        features: [
          "Access to selected free courses",
          "Limited course materials and resources",
          "Basic community support",
          "No certification upon completion",
          "Ad-supported platform",
          "Early access to new courses and update",
        ],
      },
    },
    yearly: {
      free: {
        title: "Year Plan",
        price: "$0",
        description:
          "Access to selected free courses. Limited course materials and resources. Basic community support. No certification upon completion. Ad-supported platform.",
        features: [
          "Access to selected free courses",
          "Limited course materials and resources",
          "Basic community support",
          "No certification upon completion",
          "Ad-supported platform",
          "Early access to new courses and updates.",
        ],
      },
      pro: {
        title: "Pro Plan",
        price: "$1000",
        description:
          "Access to selected free courses. Limited course materials and resources. Basic community support. No certification upon completion. Ad-supported platform.",
        features: [
          "Access to selected free courses",
          "Limited course materials and resources",
          "Basic community support",
          "No certification upon completion",
          "Ad-supported platform",
          "Early access to new courses and update",
          "Early access to new courses and update",
          "No certification upon completion",
        ],
      },
    },
  });

  // Seçilen fiyatlandırma türü
  const [selectedPlan, setSelectedPlan] = useState("monthly");

  // Aylık fiyatlandırmaya geçiş
  const handleMonthlyClick = () => {
    setSelectedPlan("monthly");
  };

  // Yıllık fiyatlandırmaya geçiş
  const handleYearlyClick = () => {
    setSelectedPlan("yearly");
  };

  return (
    <>
      <div className="flex flex-col">
        <SectionHeader
          title={"Our Pricing"}
          description={
            "Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
          }
        />
        <div className="flex justify-center mt-4">
          <button
            className={`border-none text-[18px] rounded cursor-pointer lg:w-[132px] w-[104px] h-[45px] lg:h-[55px] ${
              selectedPlan === "monthly"
                ? "bg-orange-500 text-[#FFFFFF]"
                : "bg-[#FFFFFF]"
            }`}
            onClick={handleMonthlyClick}
          >
            Monthly
          </button>
          <button
            className={`text-[18px] rounded cursor-pointer border-none lg:w-[132px] w-[104px] h-[45px] lg:h-[55px] ${
              selectedPlan === "yearly"
                ? "bg-orange-500 text-[#FFFFFF]"
                : "bg-[#FFFFFF]"
            }`}
            onClick={handleYearlyClick}
          >
            Yearly
          </button>
        </div>
        <div className="bg-[#FFFFFF]  w-[357px] pl-1 lgg:px-2  sm:h-[2106px] lgg:h-[1006px] sm:w-[679px] mx-auto flex  lg:w-[1200px] lgg:w-[1397px] flex-col gap-5 lgg:flex-row mt-8">
          <div className="mx-auto bg-[#F1F1F3] h-[700px] sm:h-[900px] mt-[80px] rounded sm:[574px] flex justify-center lg:w-[703px]">
            <div className="rounded p-4">
              <div className="mx-auto mt-[24px] md:mt-[62px] lg:w-[643px] sm:w-[326px] sm:h-[50px] w-[277px] h-[43px] lg:h-[61px] rounded bg-orange-97 ">
                <h2 className="text-center text-[22px] text-grey-15 font-medium flex justify-center h-full items-center mb-2">
                  {pricingData[selectedPlan].free.title}
                </h2>
              </div>
              <p className="text-[42px] mx-auto text-center sm:text-[50px] lg:text-[60px] font-semibold text-grey-15 mb-4">
                {pricingData[selectedPlan].free.price} /{" "}
                {selectedPlan === "monthly" ? "month" : "yearly"}
              </p>
              <div className="text-center w-[330px] xss:w-[340px] whitespace-nowrap p-2 sm:w-[526px] lg:w-[643px] flex items-center flex-col bg-white-99 h-[500px] ">
                <h4 className="text-center text-[20px] mt-[40px]">
                  Available Features
                </h4>
                <ul className="mt-2 mx-auto text-center flex flex-col gap-5">
                  {pricingData[selectedPlan].free.features.map(
                    (feature, index) => (
                      <li key={index} className=" text-[16px] sm:text-[18px] flex items-center">
                        <FaCheck className="text-orange-500 mr-2" />
                        {feature}
                      </li>
                    )
                  )}
                </ul>
                <div>
                  <button className="bg-orange-500  w-[200px] md::w-[543px] h-[67px] border-none cursor-pointer text-white text-lg rounded-lg px-6 py-3 mt-4">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto bg-[#F1F1F3] h-[700px] sm:h-[900px] mt-[80px] rounded sm:[574px] flex justify-center lg:w-[703px]">
            <div className="rounded p-4">
              <div className="mx-auto mt-[24px] md:mt-[62px] lg:w-[643px] sm:w-[326px] sm:h-[50px] w-[277px] h-[43px] lg:h-[61px] rounded bg-orange-97 ">
                <h2 className="text-center text-[22px] text-grey-15 font-medium flex justify-center h-full items-center mb-2">
                  {pricingData[selectedPlan].pro.title}
                </h2>
              </div>
              <p className="text-[42px] mx-auto text-center sm:text-[50px] lg:text-[60px] font-semibold text-grey-15 mb-4">
                {pricingData[selectedPlan].pro.price} /{" "}
                {selectedPlan === "monthly" ? "month" : "yearly"}
              </p>
              <div className="text-center w-[330px] xss:w-[340px] whitespace-nowrap p-2 sm:w-[526px] lg:w-[643px] flex items-center flex-col bg-white-99 h-[500px] ">
                <h4 className="text-center text-[20px] mt-[40px]">
                  Available Features
                </h4>
                <ul className="mt-2 mx-auto text-center flex flex-col gap-5">
                  {pricingData[selectedPlan].free.features.map(
                    (feature, index) => (
                      <li key={index} className=" text-[16px] sm:text-[18px] flex items-center">
                        <FaCheck className="text-orange-500 mr-2" />
                        {feature}
                      </li>
                    )
                  )}
                </ul>
                <div>
                  <button className="bg-orange-500 w-[200px] md::w-[543px] h-[67px] border-none cursor-pointer text-white text-lg rounded-lg px-6 py-3 mt-4">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
