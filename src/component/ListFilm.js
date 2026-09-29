import SuperHero from './SuperHero';
import Trending from './Trending'
function ListFilm() {
  return (
    <div className="catalog-page">
      <Trending />
      <SuperHero />
    </div>
  );
}

export default ListFilm;