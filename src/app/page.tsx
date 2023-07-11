import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen bg-gray-1000 font-bold">
      <div className="w-full h-screen flex justify-center items-center">
        <Link
        href="/movies"
          className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Get movies
        </Link>
        <Link
          href="movies-loading"
          className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
        >
          Get movies with loading
        </Link>
        <Link
          href="movies-error"
          className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Get movies with error
        </Link>
      </div>
    </div>
  );
}
