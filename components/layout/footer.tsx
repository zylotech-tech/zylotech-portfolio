import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink border-t border-surface-raised py-12">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-8 w-8 rounded bg-cyan text-ink flex items-center justify-center font-bold">Z</div>
          <span className="font-display text-2xl">Zylo<span className="text-cyan">Tech</span></span>
        </div>
        <p className="text-muted">© {year} Zylo Tech. Built by Okpe Joseph Ameh</p>
      </div>
    </footer>
  );
}