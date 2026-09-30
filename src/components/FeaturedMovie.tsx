import { Link } from "react-router-dom";
import { imageUrl, releaseYear } from "@/lib/image";
import type { Movie } from "@/services/movieService";

export default function FeaturedMovie({ movie }: { movie: Movie }) {
  const backdrop = imageUrl(movie.backdrop_path || movie.poster_path, "original") || "";

  return (
    <section
      aria-label="Film pilihan minggu ini"
      className="relative mt-8 mb-14 flex min-h-[440px] animate-reveal items-end overflow-hidden rounded-card bg-surface bg-cover bg-[position:center_30%] shadow-card max-phone:mt-5 max-phone:mb-10 max-phone:min-h-[420px] max-phone:bg-[position:62%_center]"
      style={{
        backgroundImage: `linear-gradient(0deg, #1a1d20 0%, rgba(26,29,32,.86) 28%, rgba(26,29,32,.25) 68%, rgba(26,29,32,.1) 100%), linear-gradient(90deg, rgba(26,29,32,.8) 0%, rgba(26,29,32,0) 60%), url(${backdrop})`,
      }}
    >
      <div className="w-[min(600px,100%)] px-[clamp(22px,5vw,64px)] py-[clamp(26px,4vw,52px)]">
        <p className="m-0 flex items-center gap-2 text-xs font-medium text-brand">
          <span aria-hidden="true">★</span>
          {movie.vote_average.toFixed(1)}
          <span className="text-muted">Pilihan minggu ini</span>
        </p>
        <h1 className="mt-3 mb-3 font-display text-[clamp(28px,4vw,44px)] leading-[1.1] font-extrabold text-ink">
          {movie.title}
        </h1>
        <p className="m-0 text-xs text-muted">{releaseYear(movie.release_date)}</p>
        <p className="mt-4 mb-6 line-clamp-3 max-w-[520px] text-sm leading-[1.7] text-ink/85">
          {movie.overview || "Belum ada sinopsis untuk film ini."}
        </p>
        <Link
          to={`/film/${movie.id}`}
          className="inline-flex items-center rounded-control bg-brand px-5 py-3 text-sm font-semibold text-base transition-colors hover:bg-brand-hover"
        >
          Lihat detail
        </Link>
      </div>
    </section>
  );
}
