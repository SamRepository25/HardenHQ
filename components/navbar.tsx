'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Shield, Menu, X, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavbarProps {
  onNavigate?: (section: string) => void;
}

interface NavLink {
  label: string;
  href: string;
  section?: string;
}

const homeLinks: NavLink[] = [
  { label: 'Features', href: '#features', section: 'features' },
  { label: 'How It Works', href: '#how-it-works', section: 'how-it-works' },
  { label: 'Scan', href: '#scanner', section: 'scanner' },
];

const appLinks: NavLink[] = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Monitor', href: '/monitor' },
  { label: 'Scan History', href: '/scan-history' },
  { label: 'Scan', href: '/#scanner' },
];

export function Navbar({ onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === '/';
  const links = isHome ? homeLinks : appLinks;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    section?: string
  ) => {
    if (isHome && section && onNavigate) {
      event.preventDefault();
      onNavigate(section);
      setMobileOpen(false);
    }
  };

  const handleLogout = async () => {
    setLoggingOut(true);
    try {
      await fetch('/api/auth/logout', { method: 'POST', credentials: 'same-origin' });
    } finally {
      router.replace('/');
      router.refresh();
      setLoggingOut(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled || !isHome ? 'glass-strong shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-center gap-2.5" aria-label="HardenHQ home">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/30">
            <Shield className="h-5 w-5 text-primary" aria-hidden="true" />
            <div className="absolute inset-0 -z-10 rounded-lg bg-primary/20 blur-md" aria-hidden="true" />
          </div>
          <span className="text-lg font-bold tracking-tight">
            Harden<span className="text-gradient">HQ</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) =>
            link.href.startsWith('/') ? (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                {link.label}
              </Link>
            ) : (
              <a key={link.href} href={link.href} onClick={(event) => handleNavigation(event, link.section)} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                {link.label}
              </a>
            )
          )}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          {isHome ? (
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary" asChild>
              <Link href="/monitor">Start Monitoring</Link>
            </Button>
          ) : (
            <Button size="sm" variant="outline" onClick={handleLogout} disabled={loggingOut} className="gap-2">
              <LogOut className="h-4 w-4" aria-hidden="true" />
              {loggingOut ? 'Signing out...' : 'Sign out'}
            </Button>
          )}
        </div>

        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="glass-strong border-t md:hidden">
          <div className="flex flex-col gap-4 px-4 py-6">
            {links.map((link) =>
              link.href.startsWith('/') ? (
                <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                  {link.label}
                </Link>
              ) : (
                <a key={link.href} href={link.href} onClick={(event) => handleNavigation(event, link.section)} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                  {link.label}
                </a>
              )
            )}

            {isHome ? (
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary" asChild>
                <Link href="/monitor" onClick={() => setMobileOpen(false)}>Start Monitoring</Link>
              </Button>
            ) : (
              <Button size="sm" variant="outline" onClick={handleLogout} disabled={loggingOut} className="gap-2">
                <LogOut className="h-4 w-4" aria-hidden="true" />
                {loggingOut ? 'Signing out...' : 'Sign out'}
              </Button>
            )}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
