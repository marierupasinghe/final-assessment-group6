'use client'

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import CommonHeroSection from "../../common/common_hero_section"
import CommonFooter from "../../common/footer"
import { RiArrowDropRightFill } from "react-icons/ri"
import Image from "next/image"
import FestivalCard from '../components/festival_card';
import { dynamicFestivalPageDetails } from '@/app/constant';

type Festivals = {
    id: number;
    name: string;
    image_path: string;
    month: string;
    description: string;
    target_audience: string;
    type: string;
    significance: string;
    duration: string;
    special_activiteis: string
}

export default function FestivalDynamicTemplate() {
    const [festival, setFestival] = useState<Festivals[]>([]);
    const [loading, setLoading] = useState(true);
    const [filteredFestivals, setFilteredFestivals] = useState<Festivals[]>([]);
    const params = useParams<{festival_tmp:string}>(); // Get the params from the URL

    const dd = params.festival_tmp;
    const assignedFestival = dynamicFestivalPageDetails[dd];

    useEffect(() => {
        const fetchFestivals = async () => {
            try {
                const response = await fetch('/api/festival');
                const data = await response.json();
                
                if (response.ok) {
                    console.log('Fetched festivals:', data);
                    setFestival(data);

                    // Filter the festivals based on params.destination_tmp (festival)
                    const filteredData = data.filter((fest: Festivals) => {
                        const festivalFirstLetterLower = fest.month.toLowerCase();
                        const paramFestival = params.festival_tmp; // params from the URL
                        return festivalFirstLetterLower === paramFestival;
                    });

                    setFilteredFestivals(filteredData); // Set filtered destinations
                } else {
                    console.log("Error fetching Festivals", data.error);
                }
            } catch (error) {
                console.log('Error fetching festivals: ', error);
            } finally {
                setLoading(false);
            }
        };

        fetchFestivals();
    }, [params.festival_tmp]); // Re-run the effect when the param changes

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="font-poppins overflow-x-hidden">
            <CommonHeroSection textUpper="Discover The Island's Most Popular" textDown={`${assignedFestival.name}`} image={`${assignedFestival.imagePath}`}/>
            <div className="mx-60">
                <div className="flex items-center font-bold my-10">
                    <span>Home</span>
                    <RiArrowDropRightFill className="size-7 mx-5" />
                    <span>Festivals</span>
                    <RiArrowDropRightFill className="size-7 mx-5" />
                    <span>{params.festival_tmp}</span>
                </div>
                <div>
                    <div className="text-4xl font-extrabold my-8">Festivals in {assignedFestival.name}</div>
                    <span className="text-gray-600 ">
                        {assignedFestival.mainDescription}
                    </span>
                </div>
                <div className="my-7">
                    <div className="text-2xl font-semibold my-8">Top Festivals</div>
                    <span className="text-gray-600 ">
                        {assignedFestival.things_to_do}
                    </span>
                </div>
                <div className="flex gap-5 flex-wrap justify-between items-start my-8">
                    {
                    filteredFestivals.map((festival)=> (
                        <FestivalCard key={festival.id} description={festival.description} name={festival.name} duration={festival.duration} id={festival.id} image_path={festival.image_path} month={festival.month} significance={festival.significance} special_activiteis={festival.special_activiteis} target_audience={festival.target_audience} type={festival.type}/>
                    ))
                    
                    }
                    
                </div>
            </div>
            <CommonFooter />
        </div>
    );
}
