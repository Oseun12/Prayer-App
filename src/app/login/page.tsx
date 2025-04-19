'use client';
import { signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="bg-indigo-600 p-8 text-white text-center">
          <h1 className="text-3xl font-bold">Welcome Back</h1>
          <p className="opacity-90 mt-2">Access your saved bookmarks</p>
        </div>
        
        <div className="p-8">
          <button
            onClick={() => signIn('google')}
            className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 rounded-lg py-3 px-4 
             text-gray-700 font-medium hover:bg-gray-50 transition-all shadow-sm"
          >
            <FcGoogle className="text-xl" />
            <span>Continue with Google</span>
          </button>

          <div className="mt-6 text-center text-sm text-gray-500">
            <p>No password needed. We&apos;ll keep you signed in.</p>
          </div>
        </div>
      </div>
    </div>
  );
}