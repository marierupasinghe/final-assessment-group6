import Form from "./form";

export default async function RegisterPage(){
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-center text-gray-800">Sign Up</h2>
        <Form/>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="text-black font-bold hover:underline">Sign In</a>
        </p>
      </div>
    </div>
    )
}