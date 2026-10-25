'use client';
import { useState } from 'react';
import { links } from './data';
import { useCart } from './CartProvider';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { count, setOpen: openCart } = useCart();
  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-5 md:px-8">
        <a href="#home" aria-label="Slack's beranda"><img src="/logo.png" alt="Slack's secondly mbg" className="h-12 w-auto md:h-14" /></a>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Utama">
          {links.map(([t, h]) => (
            <a key={t} href={h} className="group relative text-[15px] font-semibold text-ink">
              {t}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded bg-brand transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button onClick={() => openCart(true)} aria-label={`Keranjang, ${count} item`} className="relative grid h-11 w-11 place-items-center rounded-full text-brand transition hover:scale-110 hover:bg-brand/10">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="20" r="1.3"/><circle cx="18" cy="20" r="1.3"/><path d="M2 3h3l2.4 12.2a1 1 0 0 0 1 .8h9.2a1 1 0 0 0 1-.8L20 8H6"/></svg>
            <span className="absolute right-0.5 top-0.5 grid h-[18px] min-w-[18px] place-items-center rounded-full bg-brand px-1 text-[11px] font-bold text-white">{count}</span>
          </button>
          <a href="#menu" className="btn btn-primary hidden px-6 py-2.5 text-sm sm:inline-flex">Pre-Order</a>
          <button id="menu-btn" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open} className="grid h-11 w-11 place-items-center rounded-full text-brand transition hover:bg-brand/10 lg:hidden">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">{open ? <path d="M6 6l12 12M18 6L6 18"/> : <path d="M4 7h16M4 12h16M4 17h16"/>}</svg>
          </button>
        </div>
      </div>

      <nav id="menu-panel" aria-label="Mobile" className={`${open ? 'block' : 'hidden'} max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-brand/10 bg-cream px-5 pb-6 pt-2 lg:hidden`}>
        {links.map(([t, h]) => (
          <a key={t} href={h} onClick={() => setOpen(false)} className="block border-b border-brand/10 py-3.5 font-display text-lg font-medium">{t}</a>
        ))}
        <a href="#menu" onClick={() => setOpen(false)} className="btn btn-primary mt-5 w-full py-3">Pre-Order Sekarang</a>
      </nav>
    </header>
  );
}
