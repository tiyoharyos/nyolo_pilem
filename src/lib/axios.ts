import axios from "axios";
import { TMDB_API_BASE, TMDB_API_KEY } from "@/config/config";

export const api = axios.create({
  baseURL: TMDB_API_BASE,
  headers: { Accept: "application/json" },
  params: {
    api_key: TMDB_API_KEY,
    language: "id-ID",
  },
  timeout: 15000,
});

export function isRequestCanceled(error: unknown): boolean {
  return axios.isCancel(error);
}

export function getApiErrorMessage(
  error: unknown,
  fallback = "Terjadi kesalahan saat memuat film."
): string {
  if (axios.isAxiosError(error)) {
    const message = (error.response?.data as { status_message?: string } | undefined)
      ?.status_message;
    if (message) return message;
    if (error.code === "ECONNABORTED") return "Koneksi ke server timeout, coba lagi.";
    if (!error.response) return "Tidak bisa terhubung ke server. Periksa koneksi kamu.";
    return "Film gagal dimuat. Coba lagi sebentar.";
  }
  return fallback;
}

export default api;
