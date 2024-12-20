import CommonHeroSection from "../common/common_hero_section";
import { RiArrowDropRightFill } from "react-icons/ri";
import Image from "next/image";
import Card from "./components/card";
import CommonFooter from "../common/footer";
import {provinces} from "../constant";


export default async function Destinations(){
    
    return (
        <div className="font-poppins overflow-x-hidden">
            <CommonHeroSection textUpper="Discover The Island's Most Popular" textDown="Destination" image="/home_assests/mountain-back.jpg"/>
            <div className="mx-60">
                <div className="flex items-center font-bold my-10">
                    <span>Home</span>
                    <RiArrowDropRightFill className="size-7 mx-5"/>
                    <span>Destinations</span>
                </div>
                <div>
                    <div className="text-4xl font-extrabold my-8">DESTINATIONS</div>
                    <span className="text-gray-600 ">Welcome to our Destination page, where your dream journey begins! Explore a curated selection of must-visit places, from serene beaches and lush forests to vibrant cities and rich cultural heritage sites. Whether you're seeking relaxation, adventure, or cultural immersion, we have something for every type of traveler. Dive into detailed guides, travel tips, and insider recommendations to make your trip unforgettable. Start planning your next getaway today!</span>
                </div>
                <div className="flex justify-center my-16">
                    <Image src={"/home_assests/map-image.jpeg"} alt="" width={500} height={500}/>
                </div>
                <div className="my-7">
                    <div className="text-2xl font-semibold my-8">Top Destinations</div>
                    <span className="text-gray-600 ">Whether you're a history buff, foodie, or seeking adventure, our curated selection of blogs, articles, and guides will help you plan the perfect holiday. We have mapped out the best things to do, attractions and experiences in Sri Lanka for each destination, so you can make the most of your trip. Start planning your dream holiday now!</span>
                </div>
                <div className="flex gap-5 flex-wrap justify-between items-start my-8">
                    {
                        provinces.map((card) => (
                            <Card key={card.route} title={card.title} description={card.description} image={card.imagePath} link={`/destinations/${card.route}`}/>
                        ))
                        
                    }
                    
               
                </div>
            </div>
            <CommonFooter/>
            
        </div>
    )
}