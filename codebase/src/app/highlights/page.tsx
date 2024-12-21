import CommonFooter from "../common/footer";
import Gallery from "./component/gallery";
import { RiArrowDropRightFill } from "react-icons/ri";

export default function Highlights() {
    const heroImages = [
        { src: "/destinations/highlight_1.jpg" },
        { src: "/destinations/highlight_3.jpg" },
        { src: "/destinations/central_province.jpg"},
    ];

    return (
        <div className="font-poppins overflow-x-hidden bg-blue-50 text-gray-800">
            {/* Hero Section with Multiple Images */}
            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {heroImages.map((image, index) => (
                    <div key={index} className="relative w-full h-[50vh]">
                        <img
                            src={image.src}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center text-center text-white">
                            <h2 className="text-lg font-bold">
                                
                            </h2>
                        </div>
                    </div>
                ))}
            </div>

            {/* Breadcrumb */}
            <div className="container mx-auto px-6 lg:px-20">
                <div className="flex items-center font-medium text-sm lg:text-base text-gray-600 mt-8">
                    <span className="hover:text-gray-900 cursor-pointer">Home</span>
                    <RiArrowDropRightFill className="text-xl mx-2 lg:mx-4" />
                    <span className="font-semibold text-gray-900">Highlights</span>
                </div>

                {/* Page Title */}
                <div className="text-center mt-10">
                    <h1 className="text-4xl lg:text-5xl font-extrabold leading-snug text-gray-800">
                        Highlights of Sri Lanka
                    </h1>
                    <p className="mt-4 text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                        Immerse yourself in the best that Sri Lanka has to offer. From vibrant cultural festivals to stunning natural wonders, experience the diverse charm and unique beauty of the island.
                    </p>
                </div>

                {/* Gallery Section */}
                <div className="mt-12 lg:mt-16">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-black-50">
                        Featured Highlights
                    </h2>
                    <Gallery />
                </div>
            </div>

            {/* Footer */}
            <CommonFooter />
        </div>
    );
}