import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Form from "./form";

export default async function Login(){
    const session = await getServerSession();
    
    return (
        <Form/>
    )
}