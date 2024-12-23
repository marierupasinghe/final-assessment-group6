

import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { getCache } from "@/app/utils/cache";

interface User {
    username: string;
    email: string;
}

export async function POST(request: Request) {
    try {
        const { title, description, category, content, email } = await request.json();
        console.log("passed")
        console.log({ title, description, category, content });

        
        console.log("passed")

        // Verify the user's validity
        const user_validy_response = await sql`SELECT id, email FROM users WHERE email = ${email}`;
        if (!user_validy_response || user_validy_response.rows.length === 0) {
            return NextResponse.json({ error: 'Invalid user. Please login before continuing' }, { status: 401 });
        }

        const author_id = user_validy_response.rows[0].id;
        console.log("passed")
        // Validate inputs
        if (!title || !description || !category || !content) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }
        console.log({title, description, category, content, author_id})
        // Insert into the database
        await sql`
            INSERT INTO blogs (title, description, category, content, author_id) 
            VALUES (${title}, ${description}, ${category}, ${content}, ${author_id})`;
        console.log({title, description, category, content, author_id})
        return NextResponse.json({ message: "Blog submitted successfully!" });
    } catch (error) {
        console.error({ error });
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
