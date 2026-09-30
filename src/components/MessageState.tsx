import type { ReactNode } from "react";

interface MessageStateProps {
  title?: string;
  children: ReactNode;
  role?: "alert";
}

export default function MessageState({ title, children, role }: MessageStateProps) {
  return (
    <div
      role={role}
      className="mb-6 flex flex-col gap-1.5 rounded-card border border-line bg-surface p-6 text-sm text-muted shadow-card"
    >
      {title && <strong className="font-display text-lg font-semibold text-ink">{title}</strong>}
      <span>{children}</span>
    </div>
  );
}
