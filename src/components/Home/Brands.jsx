import zapier from "../../assets/brands/zapier.png";
import spotify from "../../assets/brands/spotify.png";
import zoom from "../../assets/brands/zoom.png";
import amazon from "../../assets/brands/amazon.png";
import adobe from "../../assets/brands/adobe.png";
import notion from "../../assets/brands/notion.png";
import netflix from "../../assets/brands/netflix.png";

export default function Brands() {
  return (
    <div className=" mt-[30px] sm:mt-[100px] mx-auto flex flex-wrap justify-center items-center gap-8 lg:max-w-[1595px] sm:max-w-[1279px] max-w-[357px]">
      <img className="h-[40px] lg:h-[50px] sm:h-[48px]" src={zapier} alt="" />
      <img className="h-[40px] lg:h-[50px] sm:h-[48px]" src={spotify} alt="" />
      <img className="h-[40px] lg:h-[50px] sm:h-[48px]" src={zoom} alt="" />
      <img className="h-[40px] lg:h-[50px] sm:h-[48px]" src={amazon} alt="" />
      <img className="h-[40px] lg:h-[50px] sm:h-[48px]" src={adobe} alt="" />
      <img className="h-[40px] lg:h-[50px] sm:h-[48px]" src={notion} alt="" />
      <img className="h-[40px] lg:h-[50px] sm:h-[48px]" src={netflix} alt="" />
    </div>
  );
}
