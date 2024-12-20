import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres'; // Ensure @vercel/postgres is installed and configured

export async function GET() {
    try {
        // Query the database for destinations
        const destinations = await sql`
            SELECT * FROM destinations;
        `;

        if (destinations.rows.length === 0) {
            return NextResponse.json({ error: 'No destinations found' }, { status: 404 });
        }

        // Include count of destinations
        const response = {
            count: destinations.rows.length,
            destinations: destinations.rows,
        };

        return NextResponse.json(response, { status: 200 });
    } catch (error) {
        console.error('Error fetching destinations:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
