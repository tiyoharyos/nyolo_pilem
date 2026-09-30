import MessageState from "@/components/MessageState";
import MovieCard from "@/components/MovieCard";
import MovieSkeleton from "@/components/MovieSkeleton";
import { DATA_SOURCE } from "@/config/config";
import type { Movie, MovieView } from "@/services/movieService";

interface MovieCatalogProps {
  view: MovieView;
  keyword: string;
  movies: Movie[];
  page: number;
  totalResults: number;
  loading: boolean;
  error: string;
  hasMore: boolean;
  onLoadMore: () => void;
}

export default function MovieCatalog({
  view,
  keyword,
  movies,
  page,
  totalResults,
  loading,
  error,
  hasMore,
  onLoadMore,
}: MovieCatalogProps) {
  const title = keyword
    ? `Hasil untuk “${keyword}”`
    : view === "trending"
      ? "Ramai ditonton minggu ini"
      : "Jelajahi film";

  return (
    <section aria-live="polite" className="pb-20 max-phone:pb-28">
      <div className="mb-6 flex items-end justify-between gap-4">
        <h2 className="m-0 font-display text-2xl leading-[1.2] font-semibold text-ink max-phone:text-xl">
          {title}
        </h2>
        <p className="m-0 shrink-0 text-xs text-muted">
          {totalResults ? `${totalResults.toLocaleString("id-ID")} film` : DATA_SOURCE}
        </p>
      </div>

      {error && (
        <MessageState role="alert" title="Belum bisa menampilkan film">
          {error}
        </MessageState>
      )}

      <div className="grid grid-cols-5 gap-5 max-tablet:grid-cols-4 max-tablet:gap-4 max-phone:grid-cols-2 max-phone:gap-3">
        {movies.map((movie, index) => (
          <MovieCard key={movie.id} movie={movie} eager={index < 6} />
        ))}
        {loading &&
          Array.from({ length: page === 1 ? 10 : 5 }, (_, index) => (
            <MovieSkeleton key={`skeleton-${index}`} />
          ))}
      </div>

      {!loading && !error && movies.length === 0 && (
        <MessageState title="Film tidak ditemukan">
          Coba kata kunci lain atau periksa ejaan judulnya.
        </MessageState>
      )}

      {hasMore && (
        <button
          type="button"
          onClick={onLoadMore}
          className="mx-auto mt-10 flex cursor-pointer items-center rounded-control border border-line bg-surface px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
        >
          Muat film lainnya
        </button>
      )}
    </section>
  );
}
