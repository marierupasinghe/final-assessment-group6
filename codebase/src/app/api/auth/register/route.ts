import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { sql } from "@vercel/postgres";

export async function POST(request: Request) {
    try {
        const { username, email, password } = await request.json();

        console.log({ username, email, password });

        // Validate inputs (optional, for better security)
        if (!username || !email || !password) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        const hashedPassword = await hash(password, 10);

        // Insert into the database
        const response = await sql`
            INSERT INTO users (username, email, password) 
            VALUES (${username}, ${email}, ${password})`;

        // Cache user details in localStorage (simulated here)
        const cachedUser = { username, email };
        localStorage.setItem('user', JSON.stringify(cachedUser));

        return NextResponse.json({ message: "Registration successful" });
    } catch (error) {
        console.error({ error });
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
