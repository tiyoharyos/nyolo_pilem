import { PAGE_MAX, PAGE_PAD, SHIMMER } from "@/lib/ui";

export default function MovieDetailSkeleton() {
  return (
    <div aria-hidden="true" className={`${PAGE_MAX} ${PAGE_PAD} py-14`}>
      <div className="flex gap-12 max-tablet:flex-col">
        <div className={`aspect-[2/3] w-[300px] shrink-0 rounded-card max-tablet:w-[200px] ${SHIMMER}`} />
        <div className="flex-1 space-y-4">
          <div className={`h-3 w-32 rounded ${SHIMMER}`} />
          <div className={`h-12 w-3/4 rounded ${SHIMMER}`} />
          <div className={`h-3 w-1/2 rounded ${SHIMMER}`} />
          <div className={`h-24 w-full max-w-[560px] rounded ${SHIMMER}`} />
        </div>
      </div>
    </div>
  );
}
