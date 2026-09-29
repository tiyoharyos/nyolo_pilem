import { getTrendingMovies } from '../api/tmdb';
import MovieCatalog from './MovieCatalog';
import useMovieFeed from '../hooks/useMovieFeed';

const Trending = () => {
  const feed = useMovieFeed(getTrendingMovies);

  return (
    <MovieCatalog
      eyebrow="SEDANG BANYAK DICARI"
      title="Trending movies"
      description="Film populer minggu ini, dipilih langsung dari TMDB."
      {...feed}
    />
  );
};

export default Trending 