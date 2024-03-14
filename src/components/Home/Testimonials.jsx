import testimonials from "../../data/testimonials";
import SectionHeader from "../../ui/SectionHeader";

export default function Testimonials() {
  return (
    <div className=" lgg:w-[1596px] lg:w-[1200px] w-[300px] xs:w-[360px] sm:w-[750px] mx-auto mt-[50px] sm:mt-[100px]">
      <SectionHeader
        title={"Our Testimonials"}
        description={
          "Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
        }
      />
      <div className="grid grid-cols-1 mt-[40px] sm:mt-[60px] lg:mt-[80px] sm:grid-cols-2 gap-8 items-center">
      {testimonials.map((testi,i)=>(
        <div key={i} className="lg:max-w-[783px] overflow-hidden flex flex-col items-center  bg-white-95 rounded lg:h-[304px] sm:max-w-[629px] sm:h-[250px]  max-w-[357px] h-[255px]">
           <p className="text-grey-30 text-center mx-auto items-center h-full sm:w-[349px] w-[267px] lgg:w-[683px]  flex item sm:text-[16px] md:text-[18px]">{testi.comment}</p>
              <div className="bg-white-99 w-full  h-[123px]">
            <div className=" w-[160px]  sm:w-[412px] lgg:w-[501px] gap-4 flex items-center h-full mx-auto">
              <img src={testi.commenterİmg} alt="" />
              <h3 className=" text-[16px] lg:text-[18px] font-semibold">
                {testi.commenter}
              </h3>
            </div>
              </div>
        </div>
))}
      </div>
    </div>
  );
}
