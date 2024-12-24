import Link from "next/link"


export default function CommonFooter(){
    return (
        <div className="w-screen  bg-black text-white px-40 py-16">
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <div className="text-2xl font-bold">Travel Culture .lk</div>
                    <div className="text-sm w-96 my-6">
                    Travel Culture LK is your gateway to discovering the vibrant festivals, breathtaking destinations, and cultural wonders of Sri Lanka. From sacred temples to serene beaches and bustling cities, we are here to guide you through an unforgettable journey. Explore our site for travel highlights, event updates, and curated blogs to make your adventure truly remarkable.
                    Stay connected and start your journey today!
                    </div>
                </div>
                <div>
                    <Link href={"/destinations"}><div className="text-xl font-semibold hover:text-blue-600">Destinations</div></Link>
                    <div className="flex flex-col text-sm my-6">
                        <span className="my-2">Galle</span>
                        <span className="my-2">Colombo</span>
                        <span className="my-2">Kandy</span>
                        <span className="my-2">Trincomalee</span>
                        <span className="my-2">Jaffna</span>
                    </div>
                </div>
                <div>
                    <Link href={"/festivals"}><div className="text-xl font-semibold hover:text-blue-600">Festivals</div></Link>
                    <div className="flex flex-col text-sm my-6">
                        <span className="my-2">Christmas</span>
                        <span className="my-2">Vesak</span>
                        <span className="my-2">Sinahal Hindu Festival</span>
                        <span className="my-2">Poson</span>
                    </div>
                </div>
                <div>
                <Link href={"/blog"}><div className="text-xl font-semibold hover:text-blue-600">Blogs</div></Link>
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