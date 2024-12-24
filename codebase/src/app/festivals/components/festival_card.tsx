'use client'

import Image from "next/image"

type CardProps = {
    id: number;
    name: string;
    image_path: string;
    month: string;
    description: string;
    target_audience: string;
    type: string;
    significance: string;
    duration: string;
    special_activiteis: string;
}

export default function FestivalCard({ 
    id, 
    name, 
    image_path, 
    month, 
    description, 
    target_audience, 
    type, 
    significance, 
    duration, 
    special_activiteis 
}: CardProps) {
    
    return (
        <div 
            className="min-w-80 w-80 bg-white shadow-lg rounded-2xl cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:scale-105" 
            key={id}
        >
            <div className="relative">
                <Image 
                    src={`/festivals${image_path}.jpg`} 
                    alt={name} 
                    width={320} 
                    height={320} 
                    className="rounded-t-2xl"
                />
                <div className="absolute top-4 left-4 bg-blue-500 text-white text-sm px-3 py-1 rounded-lg">
                    {month}
                </div>
            </div>
            <div className="p-5 space-y-4">
                <div className="font-bold text-xl text-gray-800">{name}</div>
                <div className="text-sm text-gray-600">{description}</div>
                <div className="text-sm text-gray-700">
                    <span className="font-semibold">Audience:</span> {target_audience}
                </div>
                <div className="text-sm text-gray-700">
                    <span className="font-semibold">Type:</span> {type}
                </div>
                <div className="text-sm text-gray-700">
                    <span className="font-semibold">Significance:</span> {significance}
                </div>
                <div className="text-sm text-gray-700">
                    <span className="font-semibold">Duration:</span> {duration}
                </div>
                <div className="text-sm text-gray-700">
                    <span className="font-semibold">Activities:</span> {special_activiteis}
                </div>
            </div>
        </div>
    );
}
