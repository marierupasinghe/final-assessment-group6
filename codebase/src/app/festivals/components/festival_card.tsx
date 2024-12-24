'use client'

import Image from "next/image"
import { FaCircleChevronRight } from "react-icons/fa6";

type CardProps = {
    //id: number;
    name: string;
    //image_path: string;
    //month: string;
    description: string;
    //target_audience: string;
    //type: string;
    //significance: string;
    //duration: string;
    //special_activiteis: string
}

export default function FestivalCard({name, description}: CardProps){
    return (
        <div className="min-w-80 min-h- w-80  shadow-lg rounded-t-2xl rounded-b-lg cursor-pointer">
            <div className="">
                <Image src={"/destination.jpg"} alt="" width={320} height={320} className="rounded-t-2xl"/>
            </div>
            <div className="mx-5">
                <div className="font-bold text-xl my-9">{name}</div>
                <div className="my-9 text-gray-600">{description}</div>
            </div>
            <div className="flex mx-5 my-10 items-center gap-3">
                <div className="font-bold text-green-950">Explore</div>
                <div><FaCircleChevronRight/></div>
            </div>
        </div>
    )
}