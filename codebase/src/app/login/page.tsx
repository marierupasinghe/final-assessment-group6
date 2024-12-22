import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import Form from "./form"; // Adjust the import as needed
import { useEffect } from "react";

export default function Login() {
    const router = useRouter();

    useEffect(() => {
        (async () => {
            const session = await getSession();
            if (session) {
                router.push("/");
            }
        })();
    }, []);

    return <Form />;
}
