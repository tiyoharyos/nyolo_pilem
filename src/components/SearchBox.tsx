interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBox({ value, onChange }: SearchBoxProps) {
  return (
    <label className="ml-auto flex w-[min(300px,32vw)] items-center gap-2.5 rounded-control border border-line bg-surface px-3.5 py-2.5 transition-colors focus-within:border-brand max-phone:w-auto max-phone:min-w-0 max-phone:flex-1">
      <svg
        className="size-4 shrink-0 text-muted"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </svg>
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Cari film..."
        aria-label="Cari film"
        className="w-full min-w-0 border-0 bg-transparent text-sm text-ink outline-0 placeholder:text-muted [&::-webkit-search-cancel-button]:hidden"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Hapus pencarian"
          className="cursor-pointer border-0 bg-transparent px-0.5 text-xl leading-none text-muted hover:text-ink"
        >
          ×
        </button>
      )}
    </label>
  );
}
