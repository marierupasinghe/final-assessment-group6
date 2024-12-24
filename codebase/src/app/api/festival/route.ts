import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function GET() {
    try {
        // Query the database for destinations
        const festivals = await sql`
            SELECT * FROM festivals;
        `;

        // Check if there are any rows in the destinations data
        if (!festivals || festivals.rows.length === 0) {
            return NextResponse.json({ error: 'No festivals found' }, { status: 404 });
        }

        // Return the rows as a JSON response
        return NextResponse.json(festivals.rows); // Only return the rows
    } catch (error) {
        console.error('Error fetching festivals:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
