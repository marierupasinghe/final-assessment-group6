import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function GET() {
    try {
        // Query the database for destinations
        const blogs = await sql`
            SELECT blogs.id, blogs.title, blogs.description, blogs.category, blogs.content, users.email, users.username FROM blogs, users WHERE users.id=blogs.author_id;
        `;

        // Check if there are any rows in the destinations data
        if (!blogs || blogs.rows.length === 0) {
            return NextResponse.json({ error: 'No Blogs found' }, { status: 404 });
        }

        // Return the rows as a JSON response
        return NextResponse.json(blogs.rows); // Only return the rows
    } catch (error) {
        console.error('Error fetching Blogs:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
