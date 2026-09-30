import { BRAND_NAME, DATA_SOURCE } from "@/config/config";
import { PAGE_MAX, PAGE_PAD } from "@/lib/ui";

export default function Footer() {
  return (
    <footer className="border-t border-line text-xs text-muted">
      <div className={`${PAGE_MAX} ${PAGE_PAD} flex justify-between gap-4 py-6 max-phone:pb-24`}>
        <span className="font-display font-bold text-ink">{BRAND_NAME}</span>
        <span>Data film dari {DATA_SOURCE}</span>
      </div>
    </footer>
  );
}
