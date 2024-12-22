'use client';  // Ensures this runs only on the client

import { FormEvent, useState } from "react";
import { setCache } from "../utils/cache";
import { useRouter } from "next/navigation";

interface User {
    username: string;
    password: string;
}

export default function Form() {
    const [ok, setOk] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const router = useRouter();  // Declare useRouter hook here

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                console.log('Login failed:', data.error);
                setOk(false);
                setErrorMessage(data.error || 'Login failed. Please try again.');
            } else {
                console.log('Login successful:', data);
                const user: User = { username: email , password: "hiiiiii" };
                setCache<User>('user', user);  // Store the user data in cache (localStorage)
                setOk(true);
                setErrorMessage(null); 
                
                // Redirect to home page on successful login
                router.push("/");  
            }
        } catch (error) {
            console.log('Error:', error);
            setOk(false);
            setErrorMessage('An error occurred. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 mx-auto max-w-md mt-10">
            {ok && <div className="text-green-500">Login Successful!</div>}
            {errorMessage && <div className="text-red-500">{errorMessage}</div>}
            <input
                name="email"
                className="border border-black"
                type="email"
                placeholder="Email"
                required
            />
            <input
                name="password"
                className="border border-black"
                type="password"
                placeholder="Password"
                required
            />
            <button type="submit">Login</button>
        </form>
    );
}
