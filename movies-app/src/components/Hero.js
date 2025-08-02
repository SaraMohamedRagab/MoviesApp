'use client';

export default function Hero({ movie }) {
  const imageUrl = `https://image.tmdb.org/t/p/original${movie?.backdrop_path}`;

  return (
    <section
      className="relative h-[450px] w-full bg-cover bg-center rounded-lg overflow-hidden"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent p-8 flex flex-col justify-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white max-w-2xl">
          {movie?.title}
        </h1>
        <p className="text-gray-300 mt-4 max-w-lg line-clamp-3">
          {movie?.overview}
        </p>
        <button className="mt-6 w-fit bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg text-lg font-semibold">
          ▶ Watch Now
        </button>
      </div>
    </section>
  );
}
