export default function PageLoader() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <span
        className="size-8 animate-spin rounded-full border-[3px] border-line border-t-brand"
        aria-label="Memuat halaman..."
        role="status"
      />
    </div>
  );
}
