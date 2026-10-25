import { WA, PHONE, links } from './data';
import ProductGrid from './ProductGrid';
import { WhatsAppIcon } from './Icons';

const Wrap = ({ id, className = '', children }) => (
  <section id={id} className={className}>
    <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8">{children}</div>
  </section>
);
const H2 = ({ children }) => <h2 className="font-display text-4xl font-bold leading-tight text-ink md:text-5xl">{children}</h2>;

export function Menu() {
  return (
    <Wrap id="menu">
      <H2>Menu Slack's</H2>
      <p className="mt-3 max-w-lg text-lg text-ink/75">Tersedia 7 varian rasa, masing-masing 50 gram per kemasan. Masukkan ke keranjang, lalu kirim pesanan otomatis lewat WhatsApp.</p>
      <ProductGrid />
    </Wrap>
  );
}

export function CaraPesan() {
  const steps = [
    ['Pilih varian', 'Tambahkan rasa dan jumlah bungkus yang diinginkan ke keranjang.'],
    ['Checkout', 'Isi nama, pilih ambil atau diantar, lalu tekan Pesan via WhatsApp. Daftar pesanan terisi otomatis.'],
    ['Konfirmasi & bayar', 'Kami konfirmasi total pesanan. Pesanan diproses setelah pembayaran.'],
    ['Terima pesanan', 'Pesanan disiapkan, lalu bisa diambil atau dikirim ke alamatmu.'],
  ];
  return (
    <section id="cara-pesan" className="bg-brand text-cream">
      <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8">
        <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl">Cara Pre-Order</h2>
        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(([t, d], i) => (
            <li key={t} className="rounded-3xl bg-cream/10 p-6">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-cream font-display text-lg font-bold text-brand">{i + 1}</span>
              <h3 className="mt-4 font-display text-xl font-semibold">{t}</h3>
              <p className="mt-1 text-cream/85">{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const keunggulan = ['Kemasan praktis', 'Harga sesuai target konsumen', 'Pelayanan ramah'];
export function About() {
  return (
    <Wrap id="about">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="grid aspect-[4/3] place-items-center rounded-[36px] bg-blush/60 p-10">
          <img src="/logo.png" alt="Logo Slack's" className="w-full max-w-sm" />
        </div>
        <div>
          <H2>Tentang Slack's</H2>
          <p className="mt-5 text-lg leading-relaxed text-ink/80">Slack's adalah brand camilan usus crispy yang kami kembangkan sebagai ide bisnis di bidang makanan. Berawal dari Market Day Telkom University, kami ingin memperkenalkan produk kepada mahasiswa, dosen, staf kampus, dan pengunjung lainnya, sekaligus membangun identitas brand yang terus berkembang.</p>
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            {[['Renyah', 'tekstur crispy'], ['Gurih', 'bumbu meresap'], ['Harga', 'Ramah di kantong']].map(([a, b]) => (
              <div key={a} className="rounded-2xl bg-white p-4 shadow-[0_6px_20px_rgba(139,21,21,.07)]">
                <div className="font-display text-lg font-semibold text-brand">{a}</div>
                <div className="text-sm text-ink/70">{b}</div>
              </div>
            ))}
          </div>
          <ul className="mt-6 flex flex-wrap gap-2">
            {keunggulan.map((k) => <li key={k} className="rounded-full border-2 border-brand/25 px-4 py-1.5 text-sm font-semibold text-brand">{k}</li>)}
          </ul>
        </div>
      </div>

    </Wrap>
  );
}

export function Locations() {
  return (
    <Wrap id="locations" className="bg-white/60">
      <H2>Lokasi & Pengambilan</H2>
      <div className="mt-10 grid gap-7 md:grid-cols-2">
        <div className="rounded-[28px] bg-cream p-8 shadow-[0_8px_30px_rgba(139,21,21,.08)]">
          <h3 className="font-display text-2xl font-semibold">Telkom University Surabaya</h3>
          <p className="mt-2 text-ink/75">Jl. Ketintang No.156, Gayungan, Surabaya, Jawa Timur 60231</p>
          <p className="mt-6 font-semibold">Pesanan bisa diambil di lokasi atau diantar. Detailnya dikonfirmasi lewat WhatsApp.</p>
          <a href="https://www.google.com/maps/search/?api=1&query=Telkom+University+Surabaya" target="_blank" rel="noreferrer" className="btn btn-outline mt-6 px-6 py-2.5">Buka di Maps</a>
        </div>
        <iframe title="Peta Telkom University Surabaya" src="https://www.google.com/maps?q=Telkom+University+Surabaya,+Jl.+Ketintang+No.156&output=embed" loading="lazy" className="h-72 w-full rounded-[28px] border-0 bg-blush/50 md:h-full md:min-h-[280px]" />
      </div>
    </Wrap>
  );
}

export function Contact() {
  return (
    <Wrap id="contact">
      <div className="mx-auto max-w-2xl rounded-[36px] bg-white p-8 text-center shadow-[0_8px_30px_rgba(139,21,21,.08)] md:p-12">
        <H2>Hubungi Kami</H2>
        <p className="mt-3 text-lg text-ink/75">Mau pre-order atau ada pertanyaan? Chat kami langsung.</p>
        <p className="mt-6 flex items-center justify-center gap-3 font-display text-3xl font-semibold text-brand"><WhatsAppIcon className="h-9 w-9 text-[#25D366]" />{PHONE}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a href={WA} target="_blank" rel="noreferrer" className="btn btn-primary gap-2 px-8 py-3.5 text-lg"><WhatsAppIcon className="h-6 w-6" />Chat WhatsApp</a>
        </div>
      </div>
    </Wrap>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-dark text-cream/90">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-6 px-5 py-10 md:flex-row md:px-8">
        <div className="rounded-2xl bg-cream px-5 py-3"><img src="/logo.png" alt="Slack's secondly mbg" className="h-12 w-auto" /></div>
        <nav className="flex flex-wrap justify-center gap-x-7 gap-y-2 text-sm font-semibold">
          {links.map(([t, h]) => <a key={t} href={h} className="transition hover:text-gold">{t}</a>)}
        </nav>
        <p className="text-sm text-cream/70">© {new Date().getFullYear()} Slack's secondly mbg · {PHONE}</p>
      </div>
    </footer>
  );
}
