// Ilustrasi usus crispy. Ganti dengan foto asli: <img src="/hero.png" alt="Usus crispy" /> (PNG transparan)
function UsusCrispy() {
  const bits = [
    'M70 150c20-40 50 10 70-25s45-20 40 10', 'M200 120c25-30 45 15 65-12', 'M60 100c15-25 35 5 50-15s30-8 28 12',
    'M120 70c20-30 40 10 60-15s35 0 30 20', 'M150 120c15-35 40 0 55-30', 'M90 130c25-20 35 20 60 0',
  ];
  const tone = (d, i) => (
    <g key={i} strokeLinecap="round" fill="none">
      <path d={d} stroke="#C27A1E" strokeWidth="19" />
      <path d={d} stroke="#E8A93A" strokeWidth="14" />
      <path d={d} stroke="#F6D17A" strokeWidth="4" transform="translate(-2 -3)" />
      <path d={d} stroke="#A8620F" strokeWidth="3" strokeDasharray="1 9" />
    </g>
  );
  return (
    <svg viewBox="0 0 340 400" className="h-full w-full drop-shadow-[0_24px_28px_rgba(94,13,13,.3)]" role="img" aria-label="Kemasan pouch ziplock Slack's usus crispy">
      <defs><clipPath id="win"><rect x="84" y="112" width="172" height="120" rx="20" /></clipPath></defs>
      {/* badan pouch */}
      <path d="M70 40h200l14 332q0 14-14 14H70q-14 0-14-14z" fill="#FFF9F3" stroke="#E2CDC1" strokeWidth="3" />
      <path d="M56 372q114 22 228 0" fill="none" stroke="#E2CDC1" strokeWidth="3" />
      <path d="M72 44h22l-8 336H64z" fill="#fff" opacity=".55" />
      {/* seal atas bergerigi */}
      <rect x="70" y="40" width="200" height="24" fill="#F1E1D6" />
      {Array.from({ length: 25 }, (_, i) => <path key={i} d={`M${76 + i * 8} 44v16`} stroke="#DCC4B6" strokeWidth="2" />)}
      {/* sobekan */}
      <path d="M69 74l9 4-9 4zM271 74l-9 4 9 4z" fill="#E2CDC1" />
      {/* ziplock */}
      <rect x="64" y="90" width="212" height="12" rx="6" fill="#EBDCD2" stroke="#D6BFB2" strokeWidth="1.5" />
      <path d="M72 96h196" stroke="#C9AE9F" strokeWidth="2" strokeLinecap="round" />
      {/* jendela isi usus crispy */}
      <rect x="84" y="112" width="172" height="120" rx="20" fill="#FFF0D6" stroke="#E2CDC1" strokeWidth="2" />
      <g clipPath="url(#win)">
        <g transform="translate(70 99) scale(.62)">{bits.map(tone)}</g>
        <g transform="translate(58 128) scale(.6)">{[bits[3], bits[1], bits[5]].map(tone)}</g>
        <path d="M90 118l50-6-30 120H90z" fill="#fff" opacity=".35" />
      </g>
      {/* logo Slack's */}
      <image href="/logo.png" x="76" y="248" width="188" height="65" />
      {/* beberapa usus di depan pouch */}
      <g transform="translate(6 322) scale(.5)">{[bits[0], bits[3]].map(tone)}</g>
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 pb-20 pt-10 md:px-8 lg:min-h-[640px] lg:grid-cols-2 lg:gap-6 lg:pt-6">
        <div className="relative pt-14 lg:pt-10">
          <div className="absolute -left-1 top-0 grid h-[78px] w-[78px] -rotate-12 animate-pop place-items-center rounded-full bg-gold p-2 text-center font-display text-[12px] font-semibold leading-tight text-ink lg:-left-9">
            Pre-<br/>Order<br/>Dibuka
          </div>
          <h1 className="animate-rise font-display text-[44px] font-bold leading-[1.1] text-ink sm:text-6xl lg:text-[64px]">
            Usus Crispy, <span className="text-brand">Renyah Banget</span> dan Gurih
          </h1>
          <p className="mt-7 max-w-[430px] animate-rise text-lg leading-relaxed text-ink/80 [animation-delay:.12s]">
            Gurih, bumbunya meresap, renyah sampai gigitan terakhir. Pesan lewat pre-order, tinggal pilih rasa favoritmu.
          </p>
          <div className="mt-8 flex animate-rise flex-wrap gap-4 [animation-delay:.24s]">
            <a href="#menu" className="btn btn-primary px-8 py-3.5 text-lg">Pre-Order Sekarang</a>
            <a href="#menu" className="btn btn-outline px-7 py-3.5 text-lg !border-brand/60">Lihat Menu</a>
          </div>
        </div>

        <div className="relative mx-auto grid aspect-square w-full max-w-[520px] place-items-center">
          <div className="absolute inset-[6%] rounded-full bg-blush/80 blur-[70px]" />
          <div className="relative h-[90%] w-[90%] animate-float"><UsusCrispy /></div>
        </div>
      </div>
    </section>
  );
}
