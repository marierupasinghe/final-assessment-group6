'use client'; // Ensures this runs only on the client

import { FormEvent, useState } from "react";
import { setCache } from "../utils/cache";
import { useRouter } from "next/navigation";

interface User {
    username: string;
    email: string;
}

export default function Form() {
    const [ok, setOk] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state
    const router = useRouter();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true); // Start submission animation
    
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
                const user: User = { username: data.username, email: data.email };
                setCache<User>('user', user);
                setOk(true);
                setErrorMessage(null);
                router.push("/");
            }
        } catch (error) {
            console.log('Error:', error);
            setOk(false);
            setErrorMessage('An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false); // End submission animation
        }
    };
    

    return (
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
            {ok && <div className="text-green-500 text-center">Login Successful!</div>}
            {errorMessage && <div className="text-red-500 text-center">{errorMessage}</div>}

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>

            <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full px-4 py-2 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>

            <div className="flex justify-between items-center">
                <button
                    type="submit"
                    className={`w-full py-2 px-4 text-white font-semibold rounded-md ${
                        isSubmitting
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-black hover:bg-blue-600"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Signing In..." : "Sign In"}
                </button>
            </div>
        </form>
    );
}
