import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

// Define type for route parameters
type RouteParams = { destination_tmp: string };

// API handler function for GET requests
export async function GET(
    request: NextRequest,
    context: { params: RouteParams }
) {
    try {
        // Extract the `destination_tmp` parameter from the route context
        const { destination_tmp } = context.params;

        // Validate that the parameter exists
        if (!destination_tmp) {
            return NextResponse.json(
                { error: "Missing destination parameter" },
                { status: 400 }
            );
        }

        // Format the parameter (capitalize the first letter)
        const formattedProvince =
            destination_tmp.charAt(0).toUpperCase() + destination_tmp.slice(1);

        // Query the database to find destinations with the given province
        const results = await sql`
            SELECT * FROM destinations WHERE province = ${formattedProvince}
        `;

        // Return the results or null if no records are found
        return NextResponse.json(
            results.rows.length > 0 ? results.rows : { message: "No destinations found" }
        );
    } catch (error) {
        console.error("Error processing request:", error);
        return NextResponse.json(
            { error: "An internal server error occurred" },
            { status: 500 }
        );
    }
}
