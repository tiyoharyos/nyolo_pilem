import FeaturedMovie from "@/components/FeaturedMovie";
import MovieCatalog from "@/components/MovieCatalog";
import Navbar from "@/components/Navbar";
import { useMovies } from "@/hooks/useMovies";
import { PAGE_MAX, PAGE_PAD } from "@/lib/ui";

export default function HomePage() {
  const {
    view,
    setView,
    query,
    setQuery,
    keyword,
    isSearching,
    movies,
    page,
    totalResults,
    loading,
    error,
    hasMore,
    loadMore,
  } = useMovies();

  const featured = view === "trending" && !isSearching ? movies[0] : undefined;

  return (
    <>
      <Navbar view={view} onViewChange={setView} query={query} onQueryChange={setQuery} />
      <div id="top" className={`${PAGE_MAX} ${PAGE_PAD}`}>
        {featured && <FeaturedMovie movie={featured} />}
        <MovieCatalog
          view={view}
          keyword={keyword}
          movies={movies}
          page={page}
          totalResults={totalResults}
          loading={loading}
          error={error}
          hasMore={hasMore}
          onLoadMore={loadMore}
        />
      </div>
    </>
  );
}
