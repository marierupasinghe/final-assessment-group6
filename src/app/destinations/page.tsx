import CommonHeroSection from "../common/common_hero_section";
import { RiArrowDropRightFill } from "react-icons/ri";
import Image from "next/image";

export default function Destinations(){
    return (
        <div className="font-poppins overflow-x-hidden">
            <CommonHeroSection textUpper="Discover The Island's Most Popular" textDown="Destination" image="home_assests/mountain-back.jpg"/>
            <div className="mx-60">
                <div className="flex items-center font-bold my-10">
                    <span>Home</span>
                    <RiArrowDropRightFill className="size-7 mx-5"/>
                    <span>Destinations</span>
                </div>
                <div>
                    <div className="text-4xl font-extrabold my-8">DESTINATIONS</div>
                    <span className="text-gray-600 ">Known for its pristine golden beaches and azure waters, praised for its lush green hills, lush jungle and loved for its mouth-watering cuisine, friendly locals and enchanting tales, Sri Lanka has won the hearts of all those who have stepped on its shores. It’s the perfect destination whether you’re travelling solo, with your partner, family or friends!</span>
                </div>
                <div className="flex justify-center my-16">
                    <Image src={"/home_assests/map-image.jpeg"} alt="" width={500} height={500}/>
                </div>
            </div>
        </div>
    )
}