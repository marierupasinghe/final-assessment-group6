import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function GET() {
    try {
        // Query the database for destinations
        const destinations = await sql`
            SELECT * FROM destinations;
        `;

        if (destinations.rows.length === 0) {
            return NextResponse.json({ error: 'No destinations found' }, { status: 404 });
        }

        // Return both count and destinations data
        return NextResponse.json({
            count: destinations.rows.length,  // Return count of destinations
            destinations: destinations.rows   // Return the full list of destinations
        });
    } catch (error) {
        console.error('Error fetching destinations:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
