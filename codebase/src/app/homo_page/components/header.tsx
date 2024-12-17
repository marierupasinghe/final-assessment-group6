import Calender from './calender'
import { RiArrowDropDownLine } from "react-icons/ri";
import { GiSriLanka } from "react-icons/gi";
import SearchButton from './search_button'
import Account from './account';
import Link from "next/link";

export default function Header() {
    return (
        <div className='relative flex-col text-base text-white font-thin  h-[200px]'>
            <div className='flex justify-evenly p-6 items-center'>
                <Account color={"text-blue-500"}/>
                <div className='flex text-3xl font-bold items-center justify-center'>Travel Culture lk<GiSriLanka className='size-12'/></div>
                <SearchButton/>
            </div>
            <hr className="border-t-1 border-gray-500" />
            <div className='flex justify-evenly p-6'>
                <div className='flex gap-9 text-lg font-semibold items-center'>
                    <div>Home</div>
                    <div>About Us</div>
                    <div>Highlights</div>
                    <div className='flex'>
                        <Link href={"destinations"}>Destinations</Link>
                        <RiArrowDropDownLine className='size-7'/>
                    </div>
                    <div className='flex'>
                        <Link href={"festivals"}>Festivals</Link>
                        <RiArrowDropDownLine className='size-7'/>
                    </div>
                    <div>Blog</div>
                </div>
                <Calender/>
            </div>
        </div>
    );
}
