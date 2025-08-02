'use client';

import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import MovieRow from '../components/MovieRow';

export default function Home() {
  const [featured, setFeatured] = useState(null);
  const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  useEffect(() => {
    async function fetchFeaturedMovie() {
      const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
      const data = await res.json();
      setFeatured(data.results[0]);
    }

    fetchFeaturedMovie();
  }, [API_KEY]);

  return (
    <div>
      {featured && <Hero movie={featured} />}

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
