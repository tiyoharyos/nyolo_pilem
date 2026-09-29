import { useCallback, useEffect, useState } from 'react';

const useMovieFeed = (fetchMovies) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError('');

    fetchMovies(controller.signal)
      .then(setMovies)
      .catch((requestError) => {
        if (!controller.signal.aborted) {
          setError(requestError.message || 'Film gagal dimuat. Coba lagi sebentar.');
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });

    return () => controller.abort();
  }, [fetchMovies, attempt]);

  const retry = useCallback(() => setAttempt((current) => current + 1), []);

  return { movies, loading, error, retry };
};

export default useMovieFeed;