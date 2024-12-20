import CommonHeroSection from "../common/common_hero_section";
import { RiArrowDropRightFill } from "react-icons/ri";
import Image from "next/image";
import CommonFooter from "../common/footer";
import Card from "../destinations/components/card";
import { festivals } from "../constant";

export default function Festivals(){
    return (
        <div className="font-poppins overflow-x-hidden">
            <CommonHeroSection textUpper="Discover The Island's Most Popular" textDown="Festivals" image="/destinations/August_1.jpg"/>
            <div className="mx-60">
                <div className="flex items-center font-bold my-10">
                    <span>Home</span>
                    <RiArrowDropRightFill className="size-7 mx-5"/>
                    <span>Fetivals</span>
                </div>
                <div>
                    <div className="text-4xl font-extrabold my-8">Festivals</div>
                    <span className="text-gray-600 ">Sri Lanka is a land of vibrant cultural celebrations and religious observances that span across its diverse communities. From the grand processions of Buddhist peraheras to the colorful Hindu festivals, solemn Christian ceremonies, and joyous Sinhala and Tamil New Year, each month offers a unique experience. These festivals are deeply rooted in the country's history and traditions, showcasing its rich cultural heritage and spiritual essence.

Whether you're captivated by the rhythmic beats of traditional drummers, the graceful movements of dancers, or the spiritual ambiance of sacred rituals, Sri Lanka's festivals are a window into the island's soul. Plan your visit to coincide with these extraordinary events and immerse yourself in the culture, colors, and rhythms that make Sri Lanka truly unforgettable.

Below, explore the most popular festivals celebrated month by month and discover what makes each occasion special.</span>
                </div>
                <div className="flex justify-center my-16">
                    <Image src={"/home_assests/map-image.jpeg"} alt="" width={500} height={500}/>
                </div>
                <div className="my-7">
                    <div className="text-2xl font-semibold my-8">Top Festivals</div>
                    <span className="text-gray-600 ">Sri Lanka is a land of vibrant cultural celebrations and religious observances that span across its diverse communities. From the grand processions of Buddhist peraheras to the colorful Hindu festivals, solemn Christian ceremonies, and joyous Sinhala and Tamil New Year, each month offers a unique experience. These festivals are deeply rooted in the country's history and traditions, showcasing its rich cultural heritage and spiritual essence.

Whether you're captivated by the rhythmic beats of traditional drummers, the graceful movements of dancers, or the spiritual ambiance of sacred rituals, Sri Lanka's festivals are a window into the island's soul. Plan your visit to coincide with these extraordinary events and immerse yourself in the culture, colors, and rhythms that make Sri Lanka truly unforgettable.

Below, explore the most popular festivals celebrated month by month and discover what makes each occasion special.</span>
                </div>
                <div className="flex gap-5 flex-wrap justify-between items-start my-8">
                    {
                        festivals.map((card) => (
                            <Card key={card.title} title={card.title} description={card.description} image={card.imagePath} link={`/destinations/}`}/>
                        ))
                    }
                </div>
            </div>
            <CommonFooter/>
        </div>
    )
}