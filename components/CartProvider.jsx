'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { products, tones, rupiah, buildOrderLink } from './data';
import { WhatsAppIcon } from './Icons';

const Ctx = createContext(null);
export const useCart = () => useContext(Ctx);

export function Stepper({ q, onChange, small }) {
  const b = `grid ${small ? 'h-7 w-7' : 'h-9 w-9'} place-items-center rounded-full text-brand transition hover:bg-brand/10 active:scale-90`;
  return (
    <div className="inline-flex items-center rounded-full border-2 border-brand/40 bg-white">
      <button onClick={() => onChange(q - 1)} aria-label="Kurangi" className={b}>−</button>
      <span className="min-w-[1.75rem] text-center font-display font-semibold">{q}</span>
      <button onClick={() => onChange(q + 1)} aria-label="Tambah" className={b}>+</button>
    </div>
  );
}

export default function CartProvider({ children }) {
  const [qty, setQ] = useState({});
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);
  const [toast, setToast] = useState('');
  const [err, setErr] = useState(false);
  const [form, setForm] = useState({ name: '', method: 'Ambil di lokasi', note: '' });

  useEffect(() => {
    try { const s = localStorage.getItem('slacks-cart'); if (s) setQ(JSON.parse(s)); } catch (e) {}
    setReady(true);
  }, []);
  useEffect(() => {
    if (ready) try { localStorage.setItem('slacks-cart', JSON.stringify(qty)); } catch (e) {}
  }, [qty, ready]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const k = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [open]);
  useEffect(() => { if (!toast) return; const t = setTimeout(() => setToast(''), 2500); return () => clearTimeout(t); }, [toast]);

  const setQty = (id, q) => setQ((c) => { const n = { ...c }; if (q <= 0) delete n[id]; else n[id] = Math.min(q, 99); return n; });
  const add = (id) => { setQ((c) => ({ ...c, [id]: Math.min((c[id] || 0) + 1, 99) })); setToast(products.find((p) => p.id === id).n); };

  const items = products.map((p, i) => ({ ...p, i, q: qty[p.id] || 0 })).filter((p) => p.q > 0);
  const count = items.reduce((s, i) => s + i.q, 0);
  const total = items.reduce((s, i) => s + i.p * i.q, 0);

  const checkout = () => {
    if (!form.name.trim()) { setErr(true); return; }
    setErr(false);
    window.open(buildOrderLink(items, { ...form, name: form.name.trim(), note: form.note.trim() }), '_blank', 'noopener');
  };
  const inp = 'w-full rounded-xl border-2 border-blush bg-white px-4 py-2.5 outline-none transition focus:border-brand';

  return (
    <Ctx.Provider value={{ qty, add, setQty, count, open, setOpen }}>
      {children}

      <div className={`fixed inset-0 z-[60] ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
        <div onClick={() => setOpen(false)} className={`absolute inset-0 bg-ink/50 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`} />
        <aside role="dialog" aria-label="Keranjang" className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-cream shadow-2xl transition-transform duration-300 ease-out ${open ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex items-center justify-between border-b border-brand/10 px-5 py-4">
            <h2 className="font-display text-2xl font-bold">Keranjang Saya <span className="text-brand">({count})</span></h2>
            <button onClick={() => setOpen(false)} aria-label="Tutup" className="grid h-10 w-10 place-items-center rounded-full text-2xl text-brand hover:bg-brand/10">×</button>
          </div>

          {items.length === 0 ? (
            <div className="grid flex-1 place-items-center px-8 text-center">
              <div>
                <img src="/logo.png" alt="" className="mx-auto w-40 opacity-70" />
                <p className="mt-5 font-display text-xl font-semibold">Keranjangmu masih kosong</p>
                <p className="mt-1 text-ink/70">Pilih rasa favoritmu dulu ya.</p>
                <a href="#menu" onClick={() => setOpen(false)} className="btn btn-primary mt-6 px-7 py-3">Lihat Menu</a>
              </div>
            </div>
          ) : (
            <>
              <ul className="flex-1 space-y-3 overflow-y-auto px-5 py-4">
                {items.map((it) => (
                  <li key={it.id} className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-[0_4px_16px_rgba(139,21,21,.07)]">
                    <div className={`grid h-16 w-16 shrink-0 place-items-center rounded-xl ${tones[it.i % 3]}`}><img src="/logo.png" alt="" className="w-12" /></div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-display font-semibold">{it.n}</p>
                      <p className="text-sm text-ink/70">{rupiah(it.p)} · 50 gram</p>
                      <div className="mt-1.5 flex items-center justify-between">
                        <Stepper q={it.q} small onChange={(q) => setQty(it.id, q)} />
                        <span className="font-display font-semibold text-brand">{rupiah(it.p * it.q)}</span>
                      </div>
                    </div>
                    <button onClick={() => setQty(it.id, 0)} aria-label={`Hapus ${it.n}`} className="self-start p-1 text-ink/40 transition hover:text-brand">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14M10 10v6M14 10v6" /></svg>
                    </button>
                  </li>
                ))}
              </ul>

              <div className="space-y-3 border-t border-brand/10 bg-white/70 px-5 py-4">
                <div>
                  <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Nama pemesan *" className={`${inp} ${err ? '!border-red-500' : ''}`} />
                  {err && <p className="mt-1 text-sm text-red-600">Isi nama dulu ya.</p>}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {['Ambil di lokasi', 'Diantar'].map((m) => (
                    <button key={m} onClick={() => setForm({ ...form, method: m })} className={`rounded-xl border-2 px-3 py-2 text-sm font-semibold transition ${form.method === m ? 'border-brand bg-brand text-white' : 'border-blush bg-white text-ink'}`}>{m}</button>
                  ))}
                </div>
                <textarea value={form.note} onChange={(e) => setForm({ ...form, note: e.target.value })} rows={2} placeholder="Catatan (alamat pengantaran, jam ambil, dll)" className={inp} />
                <div className="flex items-baseline justify-between">
                  <span className="text-ink/70">Total ({count} bungkus)</span>
                  <span className="font-display text-2xl font-bold text-brand">{rupiah(total)}</span>
                </div>
                <button onClick={checkout} className="btn btn-primary w-full gap-2 py-3.5 text-lg"><WhatsAppIcon className="h-6 w-6" />Pesan via WhatsApp</button>
                <button onClick={() => setQ({})} className="block w-full text-center text-sm text-ink/60 underline-offset-2 hover:text-brand hover:underline">Kosongkan keranjang</button>
              </div>
            </>
          )}
        </aside>
      </div>

      <div className={`fixed bottom-5 left-1/2 z-[70] -translate-x-1/2 transition-all duration-300 ${toast ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'}`}>
        <div className="flex items-center gap-3 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-cream shadow-xl">
          <span>✓ {toast} masuk keranjang</span>
          <button onClick={() => { setToast(''); setOpen(true); }} className="rounded-full bg-gold px-3 py-1 text-ink">Lihat</button>
        </div>
      </div>
    </Ctx.Provider>
  );
}
