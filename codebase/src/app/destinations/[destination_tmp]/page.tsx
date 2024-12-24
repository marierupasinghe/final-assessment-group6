'use client'

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import CommonHeroSection from "../../common/common_hero_section"
import CommonFooter from "../../common/footer"
import { RiArrowDropRightFill } from "react-icons/ri"
import Image from "next/image"
import DestinationCard from '../components/destination_card';
import { dynamicDestinationPageDetails } from '@/app/constant';

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
    const params = useParams<{destination_tmp:string}>(); // Get the params from the URL

    const dd = params.destination_tmp;
    const assignedProvince = dynamicDestinationPageDetails[dd];
    
    console.log(assignedProvince)

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

            <CommonHeroSection textUpper="Uncover the Best Destinations and Experiences in" textDown={`${assignedProvince.name}`} image={`${assignedProvince.imagePath}.jpg`}/>

            <div className="mx-60">
                <div className="flex items-center font-bold my-10">
                    <span>Home</span>
                    <RiArrowDropRightFill className="size-7 mx-5" />
                    <span>Destinations</span>
                    <RiArrowDropRightFill className="size-7 mx-5" />
                    <span>{params.destination_tmp}</span>
                </div>
                <div>
                    <div className="text-4xl font-extrabold my-8">Destinations in {assignedProvince.name}</div>
                    <span className="text-gray-600 ">
                        {assignedProvince.mainDescription}
                    </span>
                </div>
                <div className="flex justify-center my-16">
                    <Image src={"/home_assests/sri-lanka-map.jpg"} alt="" width={500} height={500} />
                </div>
                <div className="my-7">
                    <div className="text-2xl font-semibold my-8">Top Destinations</div>
                    <span className="text-gray-600 ">
                        {assignedProvince.things_to_do}
                    </span>
                </div>
                <div className="flex gap-5 flex-wrap justify-between items-start my-8">
                    {/* Render filtered destinations */}
                    {filteredDestinations.map((destination) => (
                        <DestinationCard 
                        key={destination.id} 
                        id={destination.id}
                        name={destination.name} 
                        image_path={destination.image_path} 
                        province={destination.province} 
                        description={destination.description} 
                        city={destination.city} 
                        type={destination.type} 
                        opening_hours={destination.opening_hours} 
                        additional_notes={destination.additional_notes} 
                    />
                ))}
                </div>
            </div>
            <CommonFooter />
        </div>
    );
}
