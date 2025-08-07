'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function MovieRow({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const res = await fetch(fetchUrl);
      const data = await res.json();
      setMovies(data.results);
    }

    fetchMovies();
  }, [fetchUrl]);

  return (
    <section className="bg-black px-6 sm:px-6 md:px-8 py-6 mt-10 overflow-x-hidden">
      <h2 className="text-xl font-semibold mb-3 text-white">{title}</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
        {movies.map((movie) => (
          <Link key={movie.id} href={`/movie/${movie.id}`}>
            <div className="w-full cursor-pointer  ">
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
className="rounded-lg w-full  hover:border-gray-50 hover:border-2
           hover:scale-105 
           transition-all duration-200"/>

              <p className="mt-1 text-sm text-black truncate">{movie.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
