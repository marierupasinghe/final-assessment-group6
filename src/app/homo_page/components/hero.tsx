import Button from "./button";
import Header from "./header";

export default function HeroSection(){
    return (
        <div className={`relative w-screen min-h-screen bg-cover bg-center`} style={{backgroundImage: "url('/home_assests/bg.png')"}}>
            <div className="absolute inset-0 bg-black bg-opacity-60 "></div>
            <Header/>
            <div className="relative flex flex-col text-white  font-poppins items-center justify-center text-center h-[500px] ">
                <div className="text-7xl font-extrabold p-4"><span className="flex flex-col">JOURNEY TO</span>EXPLORE SRI LANKA</div>
                <div className="text-center p-4 text-base">
                    Discover the vibrant festivals. Experience? Ancient traditions, breathtaking destinations? Uncover cultural wonders and serene landscapes.  
                    <span className="flex">Explore sacred temples, lush tea plantations, golden beaches, and bustling cities. Celebrate Sri Lanka’s different types of festivals.</span>
                </div>
                <div className="flex w-screen gap-6 justify-center my-6">
                    <Button color="bg-blue-500" border="" borderColor="" text="GET STARTED"/>
                    <Button color="bg-slate-800" border="border" borderColor="" text="LEARN MORE"/>
                </div>
            </div>
        </div>
        
    )
}