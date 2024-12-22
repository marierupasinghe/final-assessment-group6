import { useSession } from "next-auth/react";
import Form from "./form";

export default function UserProfile() {
  const { data: session } = useSession();

  if (!session) {
    return <p>You are not logged in.</p>;
  }

  return (
    <div>
      <h1>Welcome, {session.user?.name}!</h1>
      <p>Your email: {session.user?.email}</p>
      <Form/>
    </div>
  );
}
