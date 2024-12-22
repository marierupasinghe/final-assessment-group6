import { MdAccountCircle   } from "react-icons/md";
import { getCache } from "@/app/utils/cache";


type AccountProps = {
    color: String
}



interface User {
    username: string;
    age: number;
}

const cachedUser = getCache<User>('user');
console.log(cachedUser?.username); // Output: 

export default function Account({color}:AccountProps){
    return (
        <div className="flex items-center justify-center">
            <MdAccountCircle   className={`w-12 h-12 ${color}`}/>
            <div className="flex flex-col mx-2 items-start justify-center">
                <span className="text-base font-semibold">{cachedUser?.username}</span>
                <span className="text-xs text-gray-300 font-semibold">username@gmail.com</span>
            </div>
        </div>
    )
}