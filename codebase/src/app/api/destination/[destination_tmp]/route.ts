import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

// The function will handle GET requests and return destinations based on province
export async function GET(request: NextRequest, context: { params: { destination_tmp: string } }) {
    try {
        // Destructure the destination_tmp from the params object
        const { destination_tmp } = context.params;

        // Capitalize the first letter of destination_tmp
        const formattedProvince = destination_tmp.charAt(0).toUpperCase() + destination_tmp.slice(1);

        // Query the database to get all destinations with the specified province
        const reviews = await sql`
            SELECT * FROM destinations WHERE province = ${formattedProvince}
        `;

        // Return the result, or null if no destinations are found
        return NextResponse.json(reviews.rows.length > 0 ? reviews.rows : null);
    } catch (error) {
        console.error("Error fetching destinations:", error);
        return NextResponse.json({ error: "Error fetching destinations" }, { status: 500 });
    }
}
