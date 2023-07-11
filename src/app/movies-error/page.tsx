"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";

export default function MoviesError() {
  const [moviesData, setMoviesData] = useState(null);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    const fetchMoviesData = async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3/movdsie/popular?api_key=${process.env.NEXT_PUBLIC_MOVIE_API}&language=en-US&page=1`,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIE_ACCESS_TOKEN}`,
            },
          }
        )
        .then((res) => {
          const data = res.data;
          setMoviesData(data.results);
        })
        .catch((res) => {
          const data = res.response.data.status_message;
          setIsError(data);
        });
    };

    fetchMoviesData();
  }, []);
  return (
    <>
      <div className="w-full h-full">
        <div className="p-20 w-full">
          <div className="grid flow-column w-full justify-center items-center">
            <h1 className="text-lg font-bold">
              Can't get movies list 😭 {isError} 😭
            </h1>
            <Link
              href="/"
              className="text-white mt-2 bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
