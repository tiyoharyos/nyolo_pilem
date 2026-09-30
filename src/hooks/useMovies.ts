import { useEffect, useState } from "react";
import { TMDB_API_KEY } from "@/config/config";
import { getApiErrorMessage, isRequestCanceled } from "@/lib/axios";
import { getMovies, type Movie, type MovieView } from "@/services/movieService";

export function useMovies() {
  const [view, setViewState] = useState<MovieView>("trending");
  const [query, setQueryState] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const load = async () => {
      setLoading(true);
      setError("");

      if (!TMDB_API_KEY) {
        setError("API key TMDB belum ditemukan. Periksa konfigurasi .env lalu mulai ulang server.");
        setLoading(false);
        return;
      }

      try {
        const data = await getMovies({ view, query, page, signal: controller.signal });
        setMovies((current) => (page === 1 ? data.results : [...current, ...data.results]));
        setTotalPages(data.total_pages);
        setTotalResults(data.total_results);
      } catch (err) {
        if (isRequestCanceled(err)) return;
        setError(getApiErrorMessage(err));
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    };

    void load();
    return () => controller.abort();
  }, [page, query, view]);

  const setView = (next: MovieView) => {
    setViewState(next);
    setPage(1);
  };

  const setQuery = (next: string) => {
    setQueryState(next);
    setPage(1);
  };

  const loadMore = () => setPage((current) => current + 1);

  const keyword = query.trim();
  const isSearching = keyword.length > 0;

  return {
    view,
    setView,
    query,
    setQuery,
    keyword,
    isSearching,
    movies,
    page,
    totalPages,
    totalResults,
    loading,
    error,
    hasMore: !error && !loading && page < totalPages,
    loadMore,
  };
}
