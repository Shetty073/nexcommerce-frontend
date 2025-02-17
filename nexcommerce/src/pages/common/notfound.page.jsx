import { Link } from 'react-router';

export default function NotFoundPage() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-indigo-50 text-indigo-800 p-6'>
      <h1 className='text-6xl font-extrabold text-pink-700'>404</h1>
      <h2 className='text-3xl font-bold mt-4'>Page Not Found</h2>
      <p className='text-lg mt-2 text-gray-600 text-center max-w-md'>
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>
      <Link
        to='/'
        className='mt-6 px-6 py-3 bg-indigo-800 text-white rounded-lg text-lg font-medium hover:bg-indigo-900 transition-all'
      >
        Go Home
      </Link>
    </div>
  );
}
