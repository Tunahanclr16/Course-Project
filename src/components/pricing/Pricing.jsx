import { useState } from "react";
import SectionHeader from "../../ui/SectionHeader";
import { FaCheck } from "react-icons/fa";

export default function Pricing() {
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

  const [selectedPlan, setSelectedPlan] = useState("monthly");

  const handleMonthlyClick = () => {
    setSelectedPlan("monthly");
  };

  const handleYearlyClick = () => {
    setSelectedPlan("yearly");
  };

  return (
    <div className=" max-w-full  lgg:max-[1596px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SectionHeader
        title={"Our Pricing"}
        description={
          "Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
        }
      />
      <div className="flex gap-2 justify-center mt-8">
        <button
          className={`text-lg font-semibold py-2 border-none px-4 rounded-lg  ${
            selectedPlan === "monthly"
              ? "bg-orange-500 text-white"
              : "text-blue-500"
          }`}
          onClick={handleMonthlyClick}
        >
          Monthly
        </button>
        <button
          className={`text-lg font-semibold py-2 border-none px-4 rounded-lg  ${
            selectedPlan === "yearly"
              ? "bg-orange-500 text-white"
              : "text-blue-500"
          }`}
          onClick={handleYearlyClick}
        >
          Yearly
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
        {Object.entries(pricingData[selectedPlan]).map(([key, value], index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{value.title}</h2>
              <p className="text-[42px] mx-auto  sm:text-[50px] lg:text-[60px] font-semibold text-grey-15 mb-4">{value.price} / {selectedPlan === "monthly" ? "month" : "year"}</p>
              <p className="text-gray-600  mb-6">{value.description}</p>
              <ul className="text-gray-600 space-y-2">
                {value.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 px-6 py-4">
              <button className="bg-orange-500  text-white py-4 px-8 rounded-l border-none">
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
