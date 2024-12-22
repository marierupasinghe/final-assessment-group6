import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Form from "./form";

export default async function Login(){
    
    return (
        <Form/>
    )
}