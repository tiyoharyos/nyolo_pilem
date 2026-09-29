import { getSuperheroMovies } from '../api/tmdb';
import MovieCatalog from './MovieCatalog';
import useMovieFeed from '../hooks/useMovieFeed';

const Superhero = () => {
  const feed = useMovieFeed(getSuperheroMovies);

  return (
    <MovieCatalog
      eyebrow="HERO YANG KITA BUTUHKAN"
      title="Superhero movies"
      description="Petualangan para pahlawan super dari seluruh dunia."
      {...feed}
    />
  );
};

export default Superhero 