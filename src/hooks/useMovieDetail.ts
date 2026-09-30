import { useEffect, useState } from "react";
import { TMDB_API_KEY } from "@/config/config";
import { getApiErrorMessage, isRequestCanceled } from "@/lib/axios";
import { getMovieDetail, type MovieDetail } from "@/services/movieService";

export function useMovieDetail(id?: string) {
  const [movie, setMovie] = useState<MovieDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const load = async () => {
      setLoading(true);
      setError("");
      setMovie(null);

      if (!id) {
        setError("ID film tidak valid.");
        setLoading(false);
        return;
      }
      if (!TMDB_API_KEY) {
        setError("API key TMDB belum ditemukan. Periksa konfigurasi .env lalu mulai ulang server.");
        setLoading(false);
        return;
      }

      try {
        setMovie(await getMovieDetail(id, controller.signal));
      } catch (err) {
        if (isRequestCanceled(err)) return;
        setError(getApiErrorMessage(err, "Detail film gagal dimuat."));
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    };

    void load();
    return () => controller.abort();
  }, [id]);

  return { movie, loading, error };
}
