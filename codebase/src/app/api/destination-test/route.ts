import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function GET() {
    try {
        // Query the database for destinations
        const destinations = await sql`
            SELECT * FROM destinations;
        `;

        // Check if there are any rows in the destinations data
        if (!destinations || destinations.rows.length === 0) {
            return NextResponse.json({ error: 'No destinations found' }, { status: 404 });
        }

        // Return the rows as a JSON response
        return NextResponse.json(destinations.rows); // Only return the rows
    } catch (error) {
        console.error('Error fetching destinations:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
