import Link from "next/link";

export default function notFound() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-500">404</h1>
        <h2 className="mt-4 text-3xl font-semibold">Something's missing.</h2>
        <p className="mt-2 text-gray-400">Sorry, we can't find that page. You'll find lots to explore on the home page.</p>
        <Link prefetch href="/" className="mt-6 inline-block rounded bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}
