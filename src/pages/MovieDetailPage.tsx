import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import CastCard from "@/components/CastCard";
import DetailHeader from "@/components/DetailHeader";
import MessageState from "@/components/MessageState";
import MovieDetailSkeleton from "@/components/MovieDetailSkeleton";
import TrailerModal from "@/components/TrailerModal";
import { useMovieDetail } from "@/hooks/useMovieDetail";
import { formatDate, formatRuntime, formatUSD, languageName } from "@/lib/format";
import { imageUrl, releaseYear } from "@/lib/image";
import { PAGE_MAX, PAGE_PAD } from "@/lib/ui";

const PAD = PAGE_PAD;

export default function MovieDetailPage() {
  const { id } = useParams();
  const { movie, loading, error } = useMovieDetail(id);

  return (
    <>
      <DetailHeader />

      {loading && <MovieDetailSkeleton />}

      {error && (
        <div className={`${PAGE_MAX} py-14 ${PAD}`}>
          <MessageState role="alert" title="Belum bisa menampilkan detail film">
            {error}
          </MessageState>
          <Link to="/" className="inline-flex rounded-control bg-brand px-5 py-3 text-sm font-semibold text-base transition-colors hover:bg-brand-hover">
            Kembali ke katalog
          </Link>
        </div>
      )}

      {movie && <DetailContent movie={movie} />}
    </>
  );
}

function DetailContent({ movie }: { movie: NonNullable<ReturnType<typeof useMovieDetail>["movie"]> }) {
  const [trailerOpen, setTrailerOpen] = useState(false);
  const backdrop = imageUrl(movie.backdrop_path || movie.poster_path, "original");
  const poster = imageUrl(movie.poster_path, "w500");
  const runtime = formatRuntime(movie.runtime);
  const director = movie.credits.crew.find((c) => c.job === "Director");
  const cast = movie.credits.cast.slice(0, 12);
  const videos = movie.videos.results.filter((v) => v.site === "YouTube");
  const trailer =
    videos.find((v) => v.type === "Trailer" && v.official) ||
    videos.find((v) => v.type === "Trailer") ||
    videos[0];

  const facts = [
    { label: "Tanggal rilis", value: formatDate(movie.release_date) },
    { label: "Status", value: movie.status || "—" },
    { label: "Bahasa asli", value: languageName(movie.original_language) },
    { label: "Anggaran", value: formatUSD(movie.budget) },
    { label: "Pendapatan", value: formatUSD(movie.revenue) },
    { label: "Jumlah suara", value: movie.vote_count.toLocaleString("id-ID") },
  ];

  return (
    <article className="animate-reveal">
      {/* Hero */}
      <section
        className="relative border-b border-line bg-base bg-cover bg-[position:center_25%] text-ink"
        style={{
          backgroundImage: `linear-gradient(0deg, #1a1d20 0%, rgba(26,29,32,.9) 35%, rgba(26,29,32,.72) 100%), linear-gradient(90deg, rgba(26,29,32,.95) 0%, rgba(26,29,32,.7) 55%, rgba(26,29,32,.45) 100%), url(${backdrop ?? ""})`,
        }}
      >
        <div className={`${PAGE_MAX} flex gap-12 py-14 max-tablet:flex-col max-tablet:gap-8 max-phone:py-8 ${PAD}`}>
          <div className="w-[300px] shrink-0 max-tablet:w-[200px] max-phone:w-[160px]">
            {poster ? (
              <img
                src={poster}
                alt={`Poster ${movie.title}`}
                className="block aspect-[2/3] w-full rounded-card object-cover shadow-[0_24px_60px_rgba(0,0,0,0.55)]"
              />
            ) : (
              <div className="grid aspect-[2/3] place-items-center rounded-card bg-surface p-5 text-center font-display text-lg font-semibold text-muted">
                {movie.title}
              </div>
            )}
          </div>

          <div className="min-w-0 flex-1 self-center">
            <h1 className="m-0 mb-2 font-display text-[clamp(28px,4.2vw,44px)] leading-[1.1] font-extrabold text-ink">
              {movie.title}
            </h1>
            {movie.tagline && (
              <p className="m-0 mb-4 text-base italic text-muted">“{movie.tagline}”</p>
            )}

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
              <span>{releaseYear(movie.release_date)}</span>
              {runtime && (
                <>
                  <span aria-hidden="true">|</span>
                  <span>{runtime}</span>
                </>
              )}
              <span aria-hidden="true">|</span>
              <span>
                <span className="text-brand">★</span> <span className="font-semibold text-ink">{movie.vote_average.toFixed(1)}</span> / 10
              </span>
            </div>

            {movie.genres.length > 0 && (
              <ul className="m-0 mt-5 flex list-none flex-wrap gap-2 p-0">
                {movie.genres.map((g) => (
                  <li key={g.id} className="rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-ink">
                    {g.name}
                  </li>
                ))}
              </ul>
            )}

            <h2 className="mt-7 mb-2 font-display text-lg font-medium text-ink">Sinopsis</h2>
            <p className="m-0 max-w-[620px] text-sm leading-[1.7] text-ink/85">
              {movie.overview || "Belum ada sinopsis untuk film ini."}
            </p>

            {director && (
              <p className="m-0 mt-5 text-sm text-muted">
                Sutradara: <span className="font-semibold text-ink">{director.name}</span>
              </p>
            )}

            <div className="mt-7 flex flex-wrap items-center gap-6">
              {trailer && (
                <button
                  type="button"
                  onClick={() => setTrailerOpen(true)}
                  className="inline-flex cursor-pointer items-center gap-2.5 rounded-control border-0 bg-brand px-5 py-3 text-sm font-semibold text-base transition-colors hover:bg-brand-hover"
                >
                  <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
                  Tonton trailer
                </button>
              )}
            
            </div>
          </div>
        </div>
      </section>

      <div className={`${PAGE_MAX} ${PAD}`}>
        {/* Info */}
        <section className="py-14 max-phone:py-10">
                    <h2 className="m-0 mb-6 font-display text-2xl leading-[1.2] font-semibold text-ink max-phone:text-xl">
            Fakta film
          </h2>
          <dl className="m-0 grid grid-cols-3 gap-3 max-tablet:grid-cols-2">
            {facts.map((f) => (
              <div key={f.label} className="rounded-card bg-surface p-5 shadow-card">
                <dt className="text-xs text-muted">{f.label}</dt>
                <dd className="m-0 mt-1.5 text-base font-semibold text-ink">{f.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Pemeran */}
        {cast.length > 0 && (
          <section className="pb-20 max-phone:pb-14">
                        <h2 className="m-0 mb-6 font-display text-2xl leading-[1.2] font-semibold text-ink max-phone:text-xl">
              Bintang utama
            </h2>
            <div className="grid grid-cols-6 gap-4 max-tablet:grid-cols-4 max-phone:grid-cols-2 max-phone:gap-3">
              {cast.map((person) => (
                <CastCard key={person.id} person={person} />
              ))}
            </div>
          </section>
        )}
      </div>
      {trailer && trailerOpen && (
        <TrailerModal
          youtubeKey={trailer.key}
          title={movie.title}
          onClose={() => setTrailerOpen(false)}
        />
      )}
    </article>
  );
}
