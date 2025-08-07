'use client';

import Image from "next/image";
import { useState } from "react";

export default function Hero({ movies = [] }) {
  const [current, setCurrent] = useState(0);
  const movie = movies[current];
  const imageUrl = `https://image.tmdb.org/t/p/original${movie?.backdrop_path}`;

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? movies.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === movies.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full overflow-x-hidden" >
      {/* Hero Image Section */}
      <section className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full bg-black rounded-lg">
        {/* Background Image */}
        {movie?.backdrop_path && (
          <Image
            src={imageUrl}
            alt={movie?.title || "Movie Cover"}
            fill
            className="object-cover rounded-lg"
            priority
          />
        )}

        {/* Gradient Overlay & Content */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent p-6 sm:p-10 flex flex-col justify-center">
          <h1 className="text-xl mt-9  sm:text-5xl font-bold text-white max-w-2xl">
            {movie?.title}
          </h1>
          <p className="text-gray-300 mt-4 max-w-lg line-clamp-4">
            {movie?.overview}
          </p>
          <button className="mt-6 w-fit bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg text-lg font-semibold cursor-pointer">
            ▶ Watch Now
          </button>
        </div>
      </section>

      {/* Bottom Navigation: Arrows + Dots */}
      <div className="flex justify-center items-center mt-4 gap-4">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="text-white text-2xl hover:text-red-500"
        >
          ❮
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {movies.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === current ? "bg-white scale-125" : "bg-gray-500"
              }`}
            ></button>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="text-white text-2xl hover:text-red-500"
        >
          ❯
        </button>
      </div>
    </div>
  );
}
