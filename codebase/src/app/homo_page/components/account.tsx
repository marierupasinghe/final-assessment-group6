'use client'; // To ensure it runs only in the client

import { useEffect, useState } from "react";
import { MdAccountCircle } from "react-icons/md";
import { getCache } from "@/app/utils/cache";

type AccountProps = {
    color: string;
};

interface User {
    username: string;
    email: string;
}

export default function Account({ color }: AccountProps) {
    const [cachedUser, setCachedUser] = useState<User | null>(null);

    useEffect(() => {
        const user = getCache<User>("user");
        setCachedUser(user);
    }, []);
    
    if (!cachedUser) {
        return (
            <div className="flex items-center justify-center">
                <MdAccountCircle className={`w-12 h-12 ${color}`} />
                <div className="flex flex-col mx-2 items-start justify-center">
                    <span className="text-base font-semibold">Anonymous User</span>
                    <span className="text-xs text-gray-300 font-semibold">
                        Click Here to Create Account
                    </span>
                </div>
            </div>
        );
    }
    
    return (
        <div className="flex items-center justify-center">
            <MdAccountCircle className={`w-12 h-12 ${color}`} />
            <div className="flex flex-col mx-2 items-start justify-center">
                <span className="text-base font-semibold">{cachedUser.username}</span>
                <span className="text-xs text-gray-300 font-semibold">{cachedUser.email}</span>
            </div>
        </div>
    );
    
}
