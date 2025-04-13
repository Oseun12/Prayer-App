// components/AuthButtons.tsx
'use client';
import { signIn, signOut } from 'next-auth/react';

export function SignInButton() {
  return (
    <button
      onClick={() => signIn('google')}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      Sign in with Google
    </button>
  );
}

export function SignOutButton() {
  return (
    <button
      onClick={() => signOut()}
      className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
    >
      Sign Out
    </button>
  );
}