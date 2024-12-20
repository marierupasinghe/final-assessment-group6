'use client'

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import CommonHeroSection from "../../common/common_hero_section"
import CommonFooter from "../../common/footer"
import { RiArrowDropRightFill } from "react-icons/ri"
import Image from "next/image"
import DestinationCard from '../components/destination_card';

type Destination = {
    id: number;
    name: string;
    image_path: string;
    province: string;
    description: string;
    city: string;
    type: string;
    opening_hours: string;
    additional_notes: string;
}

export default function DestinationDynamicTemplate() {
    const [destination, setDestination] = useState<Destination[]>([]);
    const [loading, setLoading] = useState(true);
    const [filteredDestinations, setFilteredDestinations] = useState<Destination[]>([]);
    const params = useParams(); // Get the params from the URL

    useEffect(() => {
        const fetchDestinations = async () => {
            try {
                const response = await fetch('/api/destination-test');
                const data = await response.json();
                
                if (response.ok) {
                    console.log('Fetched destinations:', data);
                    setDestination(data);

                    // Filter the destinations based on params.destination_tmp (province)
                    const filteredData = data.filter((dest: Destination) => {
                        const provinceFirstLetterLower = dest.province.toLowerCase();
                        const paramProvince = params.destination_tmp; // params from the URL
                        return provinceFirstLetterLower === paramProvince;
                    });

                    setFilteredDestinations(filteredData); // Set filtered destinations
                } else {
                    console.log("Error fetching destinations", data.error);
                }
            } catch (error) {
                console.log('Error fetching destinations: ', error);
            } finally {
                setLoading(false);
            }
        };

        fetchDestinations();
    }, [params.destination_tmp]); // Re-run the effect when the param changes

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="font-poppins overflow-x-hidden">
            <CommonHeroSection textUpper="Discover The Island's Most Popular" textDown="Destination" image="/home_assests/mountain-back.jpg" />
            <div className="mx-60">
                <div className="flex items-center font-bold my-10">
                    <span>Home</span>
                    <RiArrowDropRightFill className="size-7 mx-5" />
                    <span>Destinations</span>
                    <RiArrowDropRightFill className="size-7 mx-5" />
                    <span>Des {params.destination_tmp}</span>
                </div>
                <div>
                    <div className="text-4xl font-extrabold my-8">Destinations in {params.destination_tmp}</div>
                    <span className="text-gray-600 ">
                        Known for its pristine golden beaches and azure waters, praised for its lush green hills, lush jungle, and loved for its mouth-watering cuisine,
                        friendly locals and enchanting tales, Sri Lanka has won the hearts of all those who have stepped on its shores. It’s the perfect destination
                        whether you’re traveling solo, with your partner, family, or friends!
                    </span>
                </div>
                <div className="flex justify-center my-16">
                    <Image src={"/home_assests/map-image.jpeg"} alt="" width={500} height={500} />
                </div>
                <div className="my-7">
                    <div className="text-2xl font-semibold my-8">Top Destinations</div>
                    <span className="text-gray-600 ">
                        Whether you're a history buff, foodie, or seeking adventure, our curated selection of blogs, articles, and guides will help you plan the perfect holiday.
                    </span>
                </div>
                <div className="flex gap-5 flex-wrap justify-between items-start my-8">
                    {/* Render filtered destinations */}
                    {filteredDestinations.map((destination) => (
                        <DestinationCard key={destination.id} description={destination.description}  image='/destinations/154.jpg' link='' title={destination.name}/>
                    ))}
                </div>
            </div>
            <CommonFooter />
        </div>
    );
}
