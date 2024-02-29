import photo from "../../assets/hero/heroPhoto.jpg"
export default function HeroPhoto() {
  return (
    <div className="mx-auto  lg:mt-[100px] sm:mt-[80px] mt-[30px] flex justify-center px-4">
      <img className=" rounded-xl  object-cover  md:w-[1200px] w-[300px] xs:w-[360px] sm:w-[650px]" src={photo} alt="" />
    </div>
  )
}
