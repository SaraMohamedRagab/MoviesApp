'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link'; // ✅ import Link

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
    <section className="mt-10">
      <h2 className="text-xl font-semibold mb-3 text-white">{title}</h2>
      <div className="flex space-x-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
        {movies.map((movie) => (
          <Link key={movie.id} href={`/movie/${movie.id}`}>
            <div className="min-w-[150px] cursor-pointer">
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
                className="rounded-lg w-full hover:scale-105 transition-transform duration-200"
              />
              <p className="mt-1 text-sm text-white">{movie.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
