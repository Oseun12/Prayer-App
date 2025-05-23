import Link from 'next/link';

interface BackButtonProps {
  className?: string;
}

export default function BackButton({ className = '' }: BackButtonProps)  {
  return (
    <Link href="/" className="absolute left-4 top-6">
      <button className={`flex items-center text-white hover:text-gray-300 ${className}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        Back
      </button>
    </Link>
  );
}