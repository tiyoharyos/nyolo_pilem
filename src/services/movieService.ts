import api from "@/lib/axios";

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
  release_date: string;
}

export interface MovieResponse {
  results: Movie[];
  page: number;
  total_pages: number;
  total_results: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface CastMember {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
}

export interface CrewMember {
  id: number;
  name: string;
  job: string;
}

export interface MovieVideo {
  id: string;
  key: string;
  site: string;
  type: string;
  official: boolean;
}

export interface MovieDetail extends Movie {
  tagline: string;
  runtime: number | null;
  genres: Genre[];
  status: string;
  original_language: string;
  vote_count: number;
  budget: number;
  revenue: number;
  credits: { cast: CastMember[]; crew: CrewMember[] };
  videos: { results: MovieVideo[] };
}

export type MovieView = "trending" | "popular";

interface GetMoviesParams {
  view: MovieView;
  query?: string;
  page?: number;
  signal?: AbortSignal;
}

export async function getMovies({ view, query = "", page = 1, signal }: GetMoviesParams) {
  const keyword = query.trim();
  const endpoint = keyword
    ? "search/movie"
    : view === "trending"
      ? "trending/movie/week"
      : "movie/popular";

  const res = await api.get<MovieResponse>(endpoint, {
    params: { page, ...(keyword ? { query: keyword } : {}) },
    signal,
  });
  return res.data;
}

export async function getMovieDetail(id: string | number, signal?: AbortSignal) {
  const res = await api.get<MovieDetail>(`movie/${id}`, {
    params: {
      append_to_response: "credits,videos",
      include_video_language: "id,en,null",
    },
    signal,
  });
  return res.data;
}

export default { getMovies, getMovieDetail };
