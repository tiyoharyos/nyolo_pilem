import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="m-0 font-display text-6xl font-extrabold text-brand">404</p>
      <h1 className="m-0 font-display text-2xl font-semibold text-ink">Halaman tidak ditemukan</h1>
      <p className="m-0 text-sm text-muted">Alamat yang kamu buka tidak ada atau sudah dipindahkan.</p>
      <Link
        to="/"
        className="mt-2 rounded-control bg-brand px-5 py-3 text-sm font-semibold text-base transition-colors hover:bg-brand-hover"
      >
        Kembali ke beranda
      </Link>
    </div>
  );
}
