import { FaSearch } from "react-icons/fa";

export default function SearchButton(){
    return (
        <div className="flex bg-slate-600 px-6 py-3 w-full max-w-[250px] rounded-full justify-between items-center text-sm font-semibold">
            Search...
            <FaSearch className="w-4 h-4"/>
        </div>
    )
}