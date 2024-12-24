'use client'

import Image from "next/image";

type CardProps = {
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

export default function DestinationCard({ 
    id, 
    name, 
    image_path, 
    province, 
    description, 
    city, 
    type, 
    opening_hours, 
    additional_notes 
}: CardProps) {
    return (
        <div 
            className="min-w-80 w-80 bg-white shadow-lg rounded-2xl cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:scale-105" 
            key={id}
        >
            {/* Image Section */}
            <div className="relative">
                <Image 
                    src={`/destinations${image_path}`} 
                    alt={name} 
                    width={320} 
                    height={320} 
                    className="rounded-t-2xl"
                />
                <div className="absolute top-4 left-4 bg-blue-500 text-white text-sm px-3 py-1 rounded-lg">
                    {province}
                </div>
            </div>

            {/* Content Section */}
            <div className="p-5 space-y-4">
                <div className="font-bold text-xl text-gray-800">{name}</div>
                <div className="text-sm text-gray-600">{description}</div>
                <div className="text-sm text-gray-700">
                    <span className="font-semibold">City:</span> {city}
                </div>
                <div className="text-sm text-gray-700">
                    <span className="font-semibold">Type:</span> {type}
                </div>
                <div className="text-sm text-gray-700">
                    <span className="font-semibold">Opening Hours:</span> {opening_hours}
                </div>
                <div className="text-sm text-gray-700">
                    <span className="font-semibold">Notes:</span> {additional_notes}
                </div>
            </div>
        </div>
    );
}
