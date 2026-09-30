import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { BRAND_NAME } from "@/config/config";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" aria-label={`${BRAND_NAME} — beranda`} className={`flex shrink-0 items-center gap-3 ${className}`}>
      <img src={logo} alt="" className="size-10 shrink-0" />
      <span className="font-display text-lg font-extrabold tracking-tight whitespace-nowrap text-ink">
        {BRAND_NAME}
      </span>
    </Link>
  );
}
