'use client'

import Image from "next/image"
import { FaCircleChevronRight } from "react-icons/fa6";
import { useRouter } from "next/navigation";

type CardProps = {
    image: string;
    title: string;
    description: string;
    link: string
}

export default function Card({title, image, description, link}: CardProps){
    const router = useRouter();

    const handleCardClick = () => {
        router.push(link);
    }

    return (
        <div className="min-w-80 min-h- w-80  shadow-lg rounded-t-2xl rounded-b-lg" onClick={handleCardClick}>
            <div className="">
                <Image src={image} alt="" width={320} height={28} className="rounded-t-2xl"/>
            </div>
            <div className="mx-5">
                <div className="font-bold text-xl my-9">{title}</div>
                <div className="my-9 text-gray-600">{description}</div>
            </div>
            <div className="flex mx-5 my-10 items-center gap-3">
                <div className="font-bold text-green-950">Explore</div>
                <div><FaCircleChevronRight/></div>
            </div>
        </div>
    )
}