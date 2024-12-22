import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import { compare } from 'bcrypt';

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();

        // Fetch the user by email
        const user = await sql`SELECT * FROM users WHERE email = ${email}`;

        if (!user || user.rows.length === 0) {
            return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
        }

        const userData = user.rows[0];

        // Compare the provided password with the stored hashed password
        const isPasswordValid = await password==userData.password
        console.log(isPasswordValid)
        if (!isPasswordValid) {
            return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
        }

        // Authentication successful
        return NextResponse.json({ message: 'Login successful', user: userData.email });
    } catch (error) {
        console.error('Error during login:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
