'use client';

import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import MovieRow from '../components/MovieRow';

export default function Home() {
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  useEffect(() => {
    async function fetchFeaturedMovies() {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      const data = await res.json();
      setFeaturedMovies(data.results.slice(0, 5)); // top 5 movies for hero
    }

    fetchFeaturedMovies();
  }, [API_KEY]);

  return (
    <div className="bg-black min-h-screen w-full overflow-x-hidden">
      {/* Hero Carousel */}
      {featuredMovies.length > 0 && <Hero movies={featuredMovies} />}

      {/* Movie Rows */}
      <MovieRow
        title="🔥 Trending Now"
        fetchUrl={`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`}
      />
      <MovieRow
        title="🎬 Top Rated"
        fetchUrl={`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`}
      />
      <MovieRow
        title="🆕 Now Playing"
        fetchUrl={`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US`}
      />
    </div>
  );
}
