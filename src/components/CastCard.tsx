import { imageUrl } from "@/lib/image";
import type { CastMember } from "@/services/movieService";

export default function CastCard({ person }: { person: CastMember }) {
  const photo = imageUrl(person.profile_path, "w185");

  return (
    <div className="min-w-0 overflow-hidden rounded-card bg-surface shadow-card">
      <div className="aspect-[2/3] overflow-hidden bg-line">
        {photo ? (
          <img
            src={photo}
            alt={person.name}
            loading="lazy"
            className="block size-full object-cover"
          />
        ) : (
          <div className="grid h-full place-items-center font-display text-3xl font-bold text-muted">
            {person.name.charAt(0)}
          </div>
        )}
      </div>
      <div className="p-3">
        <p className="m-0 truncate text-sm font-semibold text-ink">{person.name}</p>
        <p className="m-0 mt-0.5 truncate text-xs text-muted">{person.character || "—"}</p>
      </div>
    </div>
  );
}
