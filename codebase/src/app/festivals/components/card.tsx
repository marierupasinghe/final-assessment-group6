'use client'

import Image from "next/image"
import { FaCircleChevronRight } from "react-icons/fa6";
import { useRouter } from "next/navigation";


type CardProps = {
    imagePath: string;
    description: string;
    route: string;
    month: string

}

export default function Card({ imagePath, description, route, month}: CardProps){
    const router = useRouter();

    const handleCardClick = () => {
        router.push(route);
    }

    return (
        <div className="min-w-80 min-h- w-80  shadow-lg rounded-t-2xl rounded-b-lg cursor-pointer" onClick={handleCardClick}>
            <div className="">
                <Image src={imagePath} alt="" width={320} height={320} className="rounded-t-2xl"/>
            </div>
            <div className="mx-5">
                <div className="font-bold text-xl my-9">{month}</div>
                <div className="my-9 text-gray-600">{description}</div>
            </div>
            <div className="flex mx-5 my-10 items-center gap-3">
                <div className="font-bold text-green-950">Explore</div>
                <div><FaCircleChevronRight/></div>
            </div>
        </div>
    )
}