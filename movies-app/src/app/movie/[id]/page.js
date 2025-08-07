// src/app/movie/[id]/page.js
import Image from 'next/image';

export default async function MoviePage({ params }) {
  const { id } = params;
  const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  // Fetch movie details
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
  if (!res.ok) throw new Error('Failed to fetch movie details');
  const movie = await res.json();

  // Fetch trailer video
  const videoRes = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`);
  const videoData = await videoRes.json();
  const trailer = videoData.results.find(v => v.type === "Trailer" && v.site === "YouTube");

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-start px-4 py-8">
      <div className="max-w-6xl w-full">
        {/* Poster and Details */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Poster */}
          {movie.poster_path && (
            <div className="flex-shrink-0">
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title || 'Movie Poster'}
                width={400}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
          )}

          {/* Movie Info */}
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

        {/* Trailer Section */}
        {trailer && (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">🎞 Trailer</h2>
            <div className="w-full h-[240px] sm:h-[360px] md:h-[420px] lg:h-[480px]">
              <iframe
                src={`https://www.youtube.com/embed/${trailer.key}`}
                title="Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
