import { RiArrowDropDownLine } from "react-icons/ri";
import CommonHeader from "../common/common_header";

type CommonHeroSectionProps = {
    textUpper: string;
    textDown: string;
    image: string;
}

export default function CommonHeroSection({textUpper, textDown, image} : CommonHeroSectionProps){
    return(
        <div className="relative w-screen h-[70vh] bg-cover bg-center" style={{backgroundImage: `url(${image})`}}>
            <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
            <div className="absolute w-full z-20"><CommonHeader/></div>
            <div className="absolute flex flex-col text-white items-center justify-center w-screen h-full top-0">
                <div className=" flex flex-col text-5xl font-poppins font-bold text-center">{textUpper}<span>{textDown}</span></div>
            </div>
            <div className="absolute flex text-white w-screen h-full top-0 items-end justify-center py-8 font-bold tracking-widest">EXPLORE<RiArrowDropDownLine className='size-7'/></div>
        </div>
    )
}