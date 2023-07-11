import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

interface Movie {
  backdrop_path: string;
  original_title: string;
  overview: string;
}

export default function Movies() {
  const [moviesData, setMoviesData] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMoviesData = async () => {
      await axios
        .get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_MOVIE_API}&language=en-US&page=1`,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIE_ACCESS_TOKEN}`,
            },
          }
        )
        .then((res) => {
          const data = res.data;
          setMoviesData(data.results);
        });
    };

    fetchMoviesData();
  }, []);

  return (
    <div className="w-full h-full">
      <div className="p-20 w-full">
        <div className="grid flow-column w-full justify-center items-center">
          <Link
            href="/"
            className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Back to home
          </Link>

          {moviesData &&
            moviesData.map((item, index) => {
              return (
                <div
                  key={index}
                  className="max-w-sm m-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                >
                  <a href="#">
                    <img
                      className="rounded-t-lg"
                      src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {item?.original_title}
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {item?.overview}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
