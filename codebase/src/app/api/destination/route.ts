import { sql, db } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request){
    const client = await db.connect();
    const users =  await client.query(`select * from comments;`);
    // const users = await sql`select * from comments;`;
    return NextResponse.json(users.rows);
}