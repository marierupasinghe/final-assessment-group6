import CommonHeroSection from "../common/common_hero_section";
import { RiArrowDropRightFill } from "react-icons/ri";
import CommonFooter from "../common/footer";

export default function AboutUs() {
    return (
        <div className="font-poppins overflow-x-hidden">
            {/* Hero Section */}
            <CommonHeroSection textUpper="Share Your Thoughts" textDown="" image="/destinations/northern_1.jpg" />
            
            <div className="mx-60">
                {/* Breadcrumb */}
                <div className="flex items-center font-bold my-10">
                    <span>Home</span>
                    <RiArrowDropRightFill className="size-7 mx-5" />
                    <span>About Us</span>
                </div>

                {/* About Us Heading */}
                <div>
                    <div className="text-4xl font-extrabold my-8">About Us</div>
                    <span className="text-gray-600">We are a passionate team dedicated to showcasing the best of Sri Lanka and sharing its beauty with the world.</span>
                </div>

                {/* Mission Section */}
                <div className="my-10">
                    <div className="text-3xl font-extrabold mb-4">Our Mission</div>
                    <p className="text-lg text-gray-700">
                        Our mission is to provide travelers with the most insightful, detailed, and authentic experiences of Sri Lanka. We aim to highlight the natural beauty, cultural heritage, and unique experiences that make this island a must-visit destination.
                    </p>
                </div>

                {/* Values Section */}
                <div className="my-10">
                    <div className="text-3xl font-extrabold mb-4">Our Core Values</div>
                    <ul className="list-disc pl-6 space-y-4">
                        <li className="text-lg text-gray-700">Commitment to Authenticity: We prioritize providing real, unfiltered experiences.</li>
                        <li className="text-lg text-gray-700">Sustainability: We are dedicated to promoting sustainable tourism and eco-friendly practices.</li>
                        <li className="text-lg text-gray-700">Cultural Respect: We honor the traditions and values of Sri Lanka's diverse communities.</li>
                        <li className="text-lg text-gray-700">Innovation: We embrace new ideas and technologies to enhance the travel experience.</li>
                    </ul>
                </div>

                {/* Contact CTA Section */}
                <div className="my-10 text-center">
                    <div className="text-3xl font-semibold mb-4">Get In Touch With Us</div>
                    <p className="text-lg text-gray-700 mb-6">Have questions or want to collaborate? We would love to hear from you.</p>
                    <a href="/contact" className="py-3 px-6 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300">Contact Us</a>
                </div>
            </div>

            {/* Footer */}
            <CommonFooter />
        </div>
    );
}
