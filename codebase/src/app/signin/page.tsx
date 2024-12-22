'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Example: Replace with your authentication logic
    const user = { email, password }; // For simplicity, use local state (replace with API call)
    
    if (user.email === 'test@test.com' && user.password === 'password123') {
      // Successful login
      router.push('/dashboard'); // Redirect to dashboard or home page
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-center text-gray-800">Sign In</h2>
        
        {error && <div className="text-red-500 text-center mt-4">{error}</div>}

       

        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{'  '}
          <a href="/signup" className="text-black font-bold hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
