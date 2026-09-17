import { Link, useRouterState } from "@tanstack/react-router";
import { Facebook, Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "./Button";

const links = [
  { to: "/", label: "Home" },
  { to: "/books", label: "Books" },
  { to: "/about", label: "About" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  return (
    <div className="site-shell">
      <header className="site-header">
        <nav className="nav-wrap" aria-label="Main navigation">
          <Link to="/" className="wordmark">
            Leeleebari<span>.</span>
          </Link>
          <div className="desktop-nav">
            {links.map((item) => (
              <Link key={item.to} to={item.to} className={pathname === item.to ? "active" : ""}>
                {item.label}
              </Link>
            ))}
          </div>
          <div className="nav-actions">
            <Button asChild>
              <Link to="/books">Explore My Books</Link>
            </Button>
            <Button
              variant="icon"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X /> : <Menu />}
            </Button>
          </div>
        </nav>
        {open && (
          <div className="mobile-nav">
            {links.map((item) => (
              <Link key={item.to} to={item.to} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div className="footer-inner">
          <div>
            <Link to="/" className="wordmark">
              Leeleebari<span>.</span>
            </Link>
            <p>Stories of love, ambition, obsession, and the impossible.</p>
          </div>
          <nav aria-label="Footer navigation">
            {links.slice(1).map((item) => (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="footer-social">
            <a href="https://www.facebook.com/profile.php?id=61592585100127" target="_blank" rel="noreferrer" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <span>© 2026 Leeleebari</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
