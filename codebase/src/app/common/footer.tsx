import { FaGithub } from "react-icons/fa";

export default function CommonFooter(){
    return (
        <div className="w-screen  bg-black text-white px-40 py-16">
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <div className="text-2xl font-bold">Travel Culture .lk</div>
                    <div className="text-sm w-96 my-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                    <div className="flex gap-6 my-">
                        <FaGithub className="size-8"/>
                        <FaGithub className="size-8"/>
                    </div>
                </div>
                <div>
                    <div className="text-xl font-semibold">Destinations</div>
                    <div className="flex flex-col text-sm my-6">
                        <span className="my-2">Galle</span>
                        <span className="my-2">Colombo</span>
                        <span className="my-2">Kandy</span>
                        <span className="my-2">Trincomalee</span>
                        <span className="my-2">Jaffna</span>
                    </div>
                </div>
                <div>
                    <div className="font-bold text-lg">Festivals</div>
                    <div className="flex flex-col text-sm my-6">
                        <span className="my-2">Christmas</span>
                        <span className="my-2">Vesak</span>
                        <span className="my-2">Sinahal Hindu Festival</span>
                        <span className="my-2">Poson</span>
                    </div>
                </div>
                <div>
                    <div className="font-bold text-lg">Blog</div>
                    <div className="flex flex-col text-sm my-6">
                        <span className="my-2">Travelling</span>
                        <span className="my-2">Sri Lankan Culture</span>
                        <span className="my-2">Hiking</span>
                    </div>
                </div>
            </div>
            <hr className="my-8"/>
            <div className="text-xs">@ travelculture.lk 2024 Alright reserved</div>
        </div>
    )
}