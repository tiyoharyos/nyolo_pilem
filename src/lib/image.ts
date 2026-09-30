import { TMDB_IMAGE_BASE } from "@/config/config";

export function imageUrl(path: string | null, size: string) {
  return path ? `${TMDB_IMAGE_BASE}/${size}${path}` : undefined;
}

export function releaseYear(date?: string) {
  return date?.slice(0, 4) || "Tahun tidak diketahui";
}
