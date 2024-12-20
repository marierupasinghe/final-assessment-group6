import CommonHeroSection from "../common/common_hero_section";
import { RiArrowDropRightFill } from "react-icons/ri";
import Image from "next/image";
import CommonFooter from "../common/footer";
import Gallery from "./component/gallery";

export default function Highlights(){
    return (
        <div className="font-poppins overflow-x-hidden">
            <CommonHeroSection textUpper="" textDown="" image="/destinations/August_2.jpg"/>
            <div className="mx-60">
                <div className="flex items-center font-bold my-10">
                    <span>Home</span>
                    <RiArrowDropRightFill className="size-7 mx-5"/>
                    <span>Highlights</span>
                </div>
                <div>
                    <div className="text-4xl font-extrabold my-8">Highlights</div>
                    <span className="text-gray-600 ">Immerse yourself in the best that Sri Lanka has to offer. This page showcases the most breathtaking and awe-inspiring aspects of the island, giving you a glimpse of its diverse charm and unique beauty. From vibrant cultural festivals to stunning natural wonders, this gallery brings to life the essence of Sri Lanka.</span>
                </div>
                <div className="flex gap-5 flex-wrap justify-between items-start my-8">
                    <Gallery/>
                </div>
            </div>
            <CommonFooter/>
        </div>
    )
}