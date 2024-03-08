import BenefitData from "../../data/benifts";
export default function Benefits() {
  return (
    <div className=" lgg:w-[1596px] lg:w-[1200px] w-[300px] xs:w-[360px] sm:w-[750px] mx-auto mt-[50px] sm:mt-[100px]">
         <div className="">
        <h2 className="font-semibold md:p-2 lg:text-[48px] sm:text-[38px] text-[28px]">
          Benefits
        </h2>
        <p className="lg:w-[1177px] sm:leading-6 md:leading-7 sm:w-[600px] md:w-[903px] w-[358px] lg:mt-[6px] md:p-2 font-light mt-1 lg:text-[18px] sm:text-[16px] text-[14px]">
          Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
          elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget
          habitasse in velit fringilla feugiat senectus in.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-[40px] sm:mt-[60px] lg:mt-[80px]">
        {BenefitData.map((item, i) => (
          <div
            key={i}
            className="bg-[#FFFFFF] mx-auto shadow-xl sm:w-[323px] sm:h-[346px] w-[358px] h-[314px] lg:h-[407px] lg:w-[400px]"
          >
            <span className="flex justify-end items-center sm:mr-[40px] mr-[30px] font-bold sm:text-[60px] text-[50px] lg:text-[80px] lg:mr-[50px] mt-[30px] sm:mt-[40px] lg:mt-[50px]">{item.number}</span>
            <div className="flex flex-col pl-4 md:pl-9 mt-[30px] sm:mt-[40px]   lg:mt-[50px]">
                    <h3 className="font-semibold  text-[20px] lg:text-[24px]  ">
                        {item.title}
                    </h3>
                    <p className="lg:mt-[14px] mt-[10px]  text-[20px] lg:text-[16]   w-[298px] sm:w-[273px] lg:w-[359px] ">
                        {item.description}
                    </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}   