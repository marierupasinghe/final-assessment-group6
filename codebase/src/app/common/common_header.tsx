import { RiArrowDropDownLine } from "react-icons/ri";
import Account from "../homo_page/components/account";
import SearchButton from "../homo_page/components/search_button";
import Link from "next/link";

export default function CommonHeader(){
    return (
            <div className='relative flex items-center justify-evenly p-6 text-white'>
                <Account color={"text-white"}/>
                <div className='flex gap-9 text-lg font-semibold items-center'>
                    <div className='flex'>
                        <Link href={"/"}>Home</Link>
                    </div>
                    <div>About Us</div>
                    <div>Highlights</div>
                    <div className='flex cursor-pointer'>
                        <Link href={"/destinations"}>Destinations</Link>
                        <RiArrowDropDownLine className='size-7'/>
                    </div>
                    <div className='flex cursor-pointer'>
                        <Link href={"festivals"}>Festivals</Link>
                        <RiArrowDropDownLine className='size-7'/>
                    </div>
                    <div>Blog</div>
                </div>
                <SearchButton/>
            </div>
        
    )
}