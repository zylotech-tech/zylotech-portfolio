export default function Footer() {
  return (
    <footer className="mt-20 border-t border-surface-raised bg-ink">
      <div className="mx-auto max-w-7xl px-6 py-10 text-center">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Zylo Tech. All rights reserved.
        </p>

        <div className="mt-4 flex justify-center gap-6 text-sm">
          <a href="#services" className="hover:text-cyan transition">Services</a>
          <a href="#projects" className="hover:text-cyan transition">Projects</a>
          <a href="#contact" className="hover:text-cyan transition">Contact</a>
        </div>
      </div>
    </footer>
  );
}