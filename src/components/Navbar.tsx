import type { ReactNode } from "react";
import Logo from "@/components/Logo";
import SearchBox from "@/components/SearchBox";
import { PAGE_MAX, PAGE_PAD } from "@/lib/ui";
import type { MovieView } from "@/services/movieService";

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  className: "size-5",
};

const NAV_ITEMS: { key: MovieView; label: string; icon: ReactNode }[] = [
  {
    key: "trending",
    label: "Minggu ini",
    icon: (
      <svg {...iconProps}>
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M15 7h6v6" />
      </svg>
    ),
  },
  {
    key: "popular",
    label: "Semua film",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
];

interface NavbarProps {
  view: MovieView;
  onViewChange: (view: MovieView) => void;
  query: string;
  onQueryChange: (query: string) => void;
}

export default function Navbar({ view, onViewChange, query, onQueryChange }: NavbarProps) {
  return (
    <>
      <header className="sticky top-0 z-30 border-b border-line bg-base/90 backdrop-blur-md">
        <div className={`${PAGE_MAX} ${PAGE_PAD} flex h-[72px] items-center gap-12 max-tablet:gap-6`}>
        <Logo />

        {/* Navigasi desktop */}
        <nav aria-label="Kategori film" className="flex gap-8 self-stretch max-phone:hidden">
          {NAV_ITEMS.map((item) => {
            const active = view === item.key;
            return (
              <button
                key={item.key}
                type="button"
                onClick={() => onViewChange(item.key)}
                aria-current={active ? "page" : undefined}
                className={`relative cursor-pointer border-0 bg-transparent p-0 text-sm font-medium transition-colors after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:rounded-full hover:text-ink ${
                  active ? "text-ink after:bg-brand" : "text-muted after:bg-transparent"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        <SearchBox value={query} onChange={onQueryChange} />
        </div>
      </header>

      {/* Navigasi mobile: bottom navigation */}
      <nav
        aria-label="Kategori film"
        className="fixed inset-x-0 bottom-0 z-30 hidden border-t border-line bg-base/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md max-phone:grid max-phone:grid-cols-2"
      >
        {NAV_ITEMS.map((item) => {
          const active = view === item.key;
          return (
            <button
              key={item.key}
              type="button"
              onClick={() => onViewChange(item.key)}
              aria-current={active ? "page" : undefined}
              className={`flex cursor-pointer flex-col items-center gap-1 border-0 bg-transparent py-2.5 text-xs font-medium transition-colors ${
                active ? "text-brand" : "text-muted"
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          );
        })}
      </nav>
    </>
  );
}
