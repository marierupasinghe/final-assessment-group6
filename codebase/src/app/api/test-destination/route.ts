// src/app/api/test-destination/route.ts

import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function GET() {
    try {
        // Query the database to get all destinations (no filtering)
        const destinations = await sql`
            SELECT * FROM destinations;
        `;

        // Check if there are any destinations found
        if (destinations.rows.length === 0) {
            return NextResponse.json({ error: 'No destinations found' }, { status: 404 });
        }

        // Return the destination data as a response
        return NextResponse.json(destinations.rows);
    } catch (error) {
        console.error("Error fetching destinations:", error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
