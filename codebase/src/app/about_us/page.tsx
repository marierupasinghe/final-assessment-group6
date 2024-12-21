import CommonHeroSection from "../common/common_hero_section";
import { RiArrowDropRightFill } from "react-icons/ri";
import CommonFooter from "../common/footer";

export default function AboutUs() {
    return (
        <div className="font-poppins overflow-x-hidden">
            {/* Hero Section */}
            <CommonHeroSection textUpper="Your Window to Sri Lanka’s Timeless Beauty." textDown="" image="/destinations/northern_1.jpg" />
            
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
                    <span className="text-gray-600">
                    We are a dedicated team committed to highlighting Sri Lanka's unique charm, rich heritage, and breathtaking beauty, inspiring the world to explore and cherish this incredible island.</span>
                </div>

                {/* Mission Section */}
                <div className="my-10">
                    <div className="text-3xl font-extrabold mb-4">Our Mission</div>
                    <p className="text-lg text-gray-700">
                    "Our mission is to share the true essence of Sri Lanka, showcasing its beauty, culture, and unforgettable experiences to inspire every traveler."
                    </p>
                </div>

                {/* Values Section */}
                <div className="my-10">
                    <div className="text-3xl font-extrabold mb-4">Our Core Values</div>
                    <ul className="list-disc pl-6 space-y-4">
                        <li className="text-lg text-gray-700">Passion: Sharing our love for Sri Lanka with the world.</li>
                        <li className="text-lg text-gray-700">Integrity: Providing honest and reliable information.</li>
                        <li className="text-lg text-gray-700">Inclusivity: Welcoming and celebrating diversity in all forms.</li>
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
