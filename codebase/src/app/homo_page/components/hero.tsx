import Link from "next/link";
import Button from "./button";
import Header from "./header";

export default function HeroSection() {
    return (
        <div>
            {/* Hero Section */}
            <div
                className={`relative w-screen min-h-screen bg-cover bg-center`}
                style={{ backgroundImage: "url('/home_assests/bg.png')" }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>

                {/* Header */}
                <Header />

                {/* Hero Content */}
                <div className="relative flex flex-col text-white font-poppins items-center justify-center text-center h-[500px]">
                    <div className="text-7xl font-extrabold p-4">
                        <span className="flex flex-col">JOURNEY TO</span>
                        EXPLORE SRI LANKA
                    </div>
                    <div className="text-center p-4 text-base">
                        Discover vibrant festivals, ancient traditions, breathtaking destinations, and serene landscapes.  
                        <span className="flex">
                            Explore sacred temples, lush tea plantations, golden beaches, and bustling cities.
                        </span>
                    </div>
                    <div className="flex w-screen gap-6 justify-center my-6">
                        <div className='flex cursor-pointer'>
                            <Link href={"/login"}><Button color="bg-blue-500" border="" borderColor="" text="GET STARTED" /></Link>
                        </div>
                        <div className='flex cursor-pointer'>
                            <Link href={"/highlights"}><Button color="bg-slate-800" border="border" borderColor="" text="LEARN MORE" /></Link>
                        </div>
                        
                    </div>
                </div>
            </div>

            {/* Why Visit Sri Lanka Section */}
            <div className="bg-blue-50 py-12">
                <div className="container mx-auto px-6 lg:px-20 text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Visit Sri Lanka?</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                        Sri Lanka is an enchanting island brimming with unique experiences for every traveler. Whether you're seeking tranquil beaches, ancient ruins, or thrilling wildlife encounters, Sri Lanka has it all.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="p-6 bg-white shadow-md rounded-lg text-left">
                            <h3 className="text-xl font-bold text-blue-600 mb-2">Cultural Richness</h3>
                            <p className="text-gray-600">
                                Dive into a land of ancient traditions and vibrant festivals that celebrate Sri Lanka's rich cultural heritage.
                            </p>
                        </div>
                        <div className="p-6 bg-white shadow-md rounded-lg text-left">
                            <h3 className="text-xl font-bold text-blue-600 mb-2">Natural Beauty</h3>
                            <p className="text-gray-600">
                                Experience breathtaking landscapes, from golden beaches to lush tea plantations and misty mountains.
                            </p>
                        </div>
                        <div className="p-6 bg-white shadow-md rounded-lg text-left">
                            <h3 className="text-xl font-bold text-blue-600 mb-2">Adventure Awaits</h3>
                            <p className="text-gray-600">
                                Embark on thrilling adventures like whale watching, hiking, and safari tours to witness incredible wildlife.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Explore the Beauty Section */}
            <div className="bg-white py-12">
                <div className="container mx-auto px-6 lg:px-20">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Explore the Beauty of Sri Lanka</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="relative">
                            <img src="/destinations/sabaragamuwa/samanalawewa.jpg" alt="Samanalawewa" className="rounded-lg w-full h-60 object-cover" />
                        </div>
                        <div className="relative">
                            <img src="/destinations/home_page1.jpg" alt="Sigiriya" className="rounded-lg w-full h-60 object-cover" />
                        </div>
                        <div className="relative">
                            <img src="/destinations/home_page2.jpg" alt="Golden Beach" className="rounded-lg w-full h-60 object-cover" />
                        </div>
                        <div className="relative">
                            <img src="/destinations/home_page3.jpg" alt="Ella Gap" className="rounded-lg w-full h-60 object-cover" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Facts Section */}
            <div className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-6 lg:px-20">
                    <h2 className="text-4xl font-bold text-center mb-6">Quick Facts About Sri Lanka</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        <div>
                            <h3 className="text-3xl font-bold text-yellow-400">21M</h3>
                            <p className="text-gray-300">Population</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-yellow-400">8</h3>
                            <p className="text-gray-300">UNESCO World Heritage Sites</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-yellow-400">2,500+</h3>
                            <p className="text-gray-300">Years of History</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-yellow-400">1,340 KM</h3>
                            <p className="text-gray-300">Coastline</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
