// src/app/movie/[id]/page.js
import Image from 'next/image';

export default async function MoviePage({ params }) {
  const { id } = params;
  const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
  if (!res.ok) throw new Error('Failed to fetch movie details');
  const movie = await res.json();

  const videoRes = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`);
  const videoData = await videoRes.json();
  const trailer = videoData.results.find(v => v.type === "Trailer" && v.site === "YouTube");

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-start p-6">
      <div className="max-w-5xl w-full">
        <div className="flex flex-col md:flex-row gap-6">
          <div>
            {movie.poster_path && (
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title || 'Movie Poster'}
                width={300}
                height={450}
                className="rounded shadow-lg"
              />
            )}
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
              <p className="text-lg mb-4">{movie.overview}</p>
            </div>
            <div className="text-sm text-gray-400">
              <p>🎬 <strong>Release Date:</strong> {movie.release_date}</p>
              <p>⭐ <strong>Rating:</strong> {movie.vote_average}</p>
              <p>⏱️ <strong>Runtime:</strong> {movie.runtime} minutes</p>
              {movie.genres && (
                <p>🎭 <strong>Genres:</strong> {movie.genres.map(g => g.name).join(', ')}</p>
              )}
            </div>
          </div>
        </div>

        {/* Trailer */}
        {trailer && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-2">🎞 Trailer</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={`https://www.youtube.com/embed/${trailer.key}`}
                title="Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
