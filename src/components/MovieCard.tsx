import { Link } from "react-router-dom";
import { imageUrl, releaseYear } from "@/lib/image";
import type { Movie } from "@/services/movieService";

interface MovieCardProps {
  movie: Movie;
  eager?: boolean;
}

export default function MovieCard({ movie, eager = false }: MovieCardProps) {
  return (
    <Link
      to={`/film/${movie.id}`}
      className="group flex min-w-0 flex-col overflow-hidden rounded-card border border-transparent bg-surface shadow-card transition-colors hover:border-brand/70 focus-visible:border-brand"
    >
      <div className="relative aspect-[2/3] overflow-hidden bg-line">
        {movie.poster_path ? (
          <img
            src={imageUrl(movie.poster_path, "w500")}
            alt={`Poster ${movie.title}`}
            loading={eager ? "eager" : "lazy"}
            className="block size-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <div className="grid h-full place-items-center p-5 text-center font-display text-base font-semibold leading-[1.3] text-muted">
            {movie.title}
          </div>
        )}
        <span className="absolute top-2.5 left-2.5 flex items-center gap-1 rounded-md bg-base/85 px-2 py-1 text-xs font-semibold text-ink backdrop-blur-sm">
          <span className="text-brand" aria-hidden="true">★</span>
          {movie.vote_average.toFixed(1)}
        </span>
      </div>
      <div className="p-3.5">
        <h3 className="m-0 truncate font-display text-[15px] leading-[1.3] font-semibold text-ink">
          {movie.title}
        </h3>
        <p className="mt-1 mb-0 text-xs text-muted">{releaseYear(movie.release_date)}</p>
      </div>
    </Link>
  );
}
