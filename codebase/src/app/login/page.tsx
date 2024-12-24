import Form from "./form";

export default function Login() {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                <h2 className="text-3xl font-semibold text-center text-gray-800">Sign In</h2>

                <Form />

                <p className="mt-6 text-center text-sm text-gray-600">
                    Don’t have an account?{' '}
                    <a href="/register" className="text-black font-bold hover:underline">
                        Sign Up
                    </a>
                </p>
            </div>
        </div>
    );
}
