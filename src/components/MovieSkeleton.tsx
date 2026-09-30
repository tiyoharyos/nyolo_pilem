import { SHIMMER } from "@/lib/ui";

export default function MovieSkeleton() {
  return (
    <div aria-hidden="true" className="overflow-hidden rounded-card bg-surface shadow-card">
      <div className={`aspect-[2/3] ${SHIMMER}`} />
      <div className="p-3.5">
        <div className={`h-3.5 w-[78%] rounded ${SHIMMER}`} />
        <div className={`mt-2.5 h-3 w-[34%] rounded ${SHIMMER}`} />
      </div>
    </div>
  );
}
