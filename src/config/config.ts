export const BRAND_NAME = "Nyolo Pilem";
export const DATA_SOURCE = "TMDB";

export const TMDB_API_BASE = (
  import.meta.env.REACT_APP_BASE_URL || "https://api.themoviedb.org/3"
).replace(/\/$/, "");

export const TMDB_IMAGE_BASE = (
  import.meta.env.REACT_APP_IMG_URL || "https://image.tmdb.org/t/p"
)
  .replace(/\/$/, "")
  .replace(/\/(?:w\d+|original)$/, "");

export const TMDB_API_KEY: string | undefined = import.meta.env.REACT_APP_TMDB_KEY;

export const TMDB_MOVIE_URL = "https://www.themoviedb.org/movie";
export const movieLink = (id: number) => `${TMDB_MOVIE_URL}/${id}`;
