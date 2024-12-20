'use client'

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import CommonHeroSection from "../../common/common_hero_section"
import CommonFooter from "../../common/footer"
import { RiArrowDropRightFill } from "react-icons/ri"
import Image from "next/image"
import DestinationCard from '../components/destination_card';

// Define a type for destination data (adapt based on the actual structure from your API)
interface Destination {
    id: number;
    title: string;
    description: string;
    imageUrl: string;  // Assuming the API provides image URL for each destination
}

export default function DestinationDynamicTemplate() {
    const [data, setData] = useState<Destination[]>([]);  // Use the Destination type for state
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const params = useParams();
    const destination_tmp = params.destination_tmp || '';  // Get dynamic param

    useEffect(() => {
        const fetchData = async () => {
            if (!destination_tmp) {
                setError('Destination not found');
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(`/api/destination/${destination_tmp}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const result = await response.json();
                setData(result || []);  // Set the fetched data
            } catch (error: any) {
                setError(error.message);  // Set the error if fetching fails
            } finally {
                setLoading(false);  // End loading state
            }
        };

        fetchData();
    }, [destination_tmp]);  // Re-run when destination_tmp changes

    // Show loading spinner or message while waiting for data
    if (isLoading) {
        return <div>Loading...</div>;
    }

    // Show error message if fetching failed
    if (error) {
        return <div>Error: {error}</div>;
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
                    <span>{destination_tmp}</span>
                </div>
                <div>
                    <div className="text-4xl font-extrabold my-8">Destinations in {destination_tmp}</div>
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
                    {data.length > 0 ? (
                        data.map((destination) => (
                            <DestinationCard 
                                key={destination.id} 
                                description={destination.description} 
                                image={'/destinations/154.jpg'} // Use dynamic image or fallback
                                link='' 
                                title={destination.title}
                            />
                        ))
                    ) : (
                        <div>No destinations found for this province.</div>
                    )}
                </div>
            </div>
            <CommonFooter />
        </div>
    );
}
