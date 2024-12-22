'use client';
import { FormEvent, useState } from "react";

export default function Form() {
    const [ok,setOk] = useState(false);
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const email = formData.get('email');
        const password = formData.get('password');

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
            } else {
                console.log('Login successful:', data);
                setOk(true);
            }
        } catch (error) {
            console.log('Error:', error);
            setOk(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 mx-auto max-w-md mt-10">
            {ok && <div>Good</div>}
            <input name="email" className="border border-black" type="email" placeholder="Email" />
            <input name="password" className="border border-black" type="password" placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    );
}
