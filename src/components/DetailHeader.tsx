import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import { PAGE_MAX, PAGE_PAD } from "@/lib/ui";

export default function DetailHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-base/90 backdrop-blur-md">
      <div className={`${PAGE_MAX} ${PAGE_PAD} flex h-[72px] items-center justify-between`}>
      <Logo />
      <Link
        to="/"
        className="inline-flex items-center gap-2 rounded-control border border-line px-3.5 py-2 text-sm font-medium text-muted transition-colors hover:border-brand hover:text-ink"
      >
        <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Katalog
      </Link>
      </div>
    </header>
  );
}
