import ButtonForSearch from './button_for_login_searching'
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Header() {
    return (
        <nav className="flex flex-col md:flex-row justify-between font-bold text-[14px] py-4 px-20 w-screen items-center" aria-label="Main Navigation">
            <div className="flex flex-wrap justify-around w-full md:w-[494px]">
                <div className="text-[#D50032] text-[16px]" aria-label="Brand Name">Travel Cultura.lk</div>
                <div>About Us</div>
                <div>Destinations</div>
                <div>Festivals</div>
            </div>
            <div className="flex flex-wrap justify-around w-full md:w-[356px] items-center mt-4 md:mt-0">
                <div className="flex items-center"><RiArrowDropDownLine className="m-2"/>Calender</div>
                <div>LogIn</div>
                <ButtonForSearch />
            </div>
        </nav>
    );
}
