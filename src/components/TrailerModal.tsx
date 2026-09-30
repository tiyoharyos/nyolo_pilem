import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface TrailerModalProps {
  youtubeKey: string;
  title: string;
  onClose: () => void;
}

export default function TrailerModal({ youtubeKey, title, onClose }: TrailerModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [onClose]);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Trailer ${title}`}
      className="fixed inset-0 z-50 grid animate-reveal place-items-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[960px]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-3 flex items-center justify-between gap-4">
          <p className="m-0 truncate font-display text-base font-semibold text-ink">{title}</p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Tutup trailer"
            className="grid size-9 shrink-0 cursor-pointer place-items-center rounded-control border border-line bg-surface text-ink transition-colors hover:border-brand hover:text-brand"
          >
            <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        <div className="aspect-video overflow-hidden rounded-card bg-black shadow-[0_24px_60px_rgba(0,0,0,0.6)]">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${youtubeKey}?autoplay=1&rel=0&modestbranding=1`}
            title={`Trailer ${title}`}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            className="size-full border-0"
          />
        </div>
      </div>
    </div>,
    document.body
  );
}
