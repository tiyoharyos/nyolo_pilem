import axios from 'axios';

const baseUrl = (process.env.REACT_APP_BASE_URL || 'https://api.themoviedb.org/3').trim().replace(/\/+$/, '');
const imageBaseUrl = (process.env.REACT_APP_IMG_URL || 'https://image.tmdb.org/t/p/w500').trim().replace(/\/+$/, '');

const requestMovies = async (path, params, signal) => {
  const apiKey = process.env.REACT_APP_TMDB_KEY;
  if (!apiKey) {
    throw new Error('TMDB API key belum dikonfigurasi. Tambahkan REACT_APP_TMDB_KEY di file .env.');
  }

  const response = await axios.get(`${baseUrl}${path}`, {
    params: { api_key: apiKey, language: 'id-ID', ...params },
    signal,
  });

  return Array.isArray(response.data.results) ? response.data.results : [];
};

export const getTrendingMovies = (signal) =>
  requestMovies('/trending/movie/week', {}, signal);

export const getSuperheroMovies = (signal) =>
  requestMovies('/discover/movie', {
    with_keywords: 9715,
    sort_by: 'popularity.desc',
  }, signal);

export const getPosterUrl = (posterPath) =>
  posterPath ? `${imageBaseUrl}${posterPath}` : null;