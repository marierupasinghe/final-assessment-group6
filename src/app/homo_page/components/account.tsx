import { MdAccountCircle   } from "react-icons/md";
export default function Account(){
    return (
        <div className="flex items-center justify-center">
            <MdAccountCircle   className="w-12 h-12 text-blue-500"/>
            <div className="flex flex-col mx-2 items-start justify-center">
                <span className="text-base font-semibold">Rasun Manohara</span>
                <span className="text-xs text-gray-300 font-semibold">rasunmanohara@gmail.com</span>
            </div>
        </div>
    )
}