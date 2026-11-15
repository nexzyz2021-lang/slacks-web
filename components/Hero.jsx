// Ilustrasi usus crispy. Ganti dengan foto asli: <img src="/hero.png" alt="Usus crispy" /> (PNG transparan)
function UsusCrispy() {
  const bits = [
    'M70 150c20-40 50 10 70-25s45-20 40 10', 'M200 120c25-30 45 15 65-12', 'M60 100c15-25 35 5 50-15s30-8 28 12',
    'M120 70c20-30 40 10 60-15s35 0 30 20', 'M150 120c15-35 40 0 55-30', 'M90 130c25-20 35 20 60 0',
  ];
  const tone = (d, k) => (
    <g key={k} strokeLinecap="round" fill="none">
      <path d={d} stroke="#C27A1E" strokeWidth="19" />
      <path d={d} stroke="#E8A93A" strokeWidth="14" />
      <path d={d} stroke="#F6D17A" strokeWidth="4" transform="translate(-2 -3)" />
      <path d={d} stroke="#A8620F" strokeWidth="3" strokeDasharray="1 9" />
    </g>
  );
  // tumpukan usus crispy menggunung di mangkuk: [transformasi, indeks potongan]
  const layers = [['translate(-8 20) scale(1.1)', [2, 3, 4]], ['translate(20 52) scale(1)', [0, 1, 5]], ['translate(-14 82) scale(1.1)', [3, 0, 2]]];
  // remah dan bumbu aneka rasa (balado, nori, kari, pedas)
  const dots = [[52, 160, 5, '#D8452B'], [290, 150, 4, '#5FA05A'], [36, 112, 3.5, '#E8873A'], [306, 104, 5, '#F1C84B'], [252, 58, 4, '#D8452B'], [92, 52, 3.5, '#5FA05A'], [220, 40, 3, '#E8873A'], [132, 34, 4, '#F1C84B']];
  return (
    <svg viewBox="0 0 340 340" className="h-full w-full drop-shadow-[0_24px_28px_rgba(94,13,13,.25)]" role="img" aria-label="Semangkuk usus crispy Slack's">
      <ellipse cx="170" cy="322" rx="125" ry="12" fill="#5E0D0D" opacity=".18" />
      {layers.map(([t, idx], i) => <g key={i} transform={t}>{idx.map((b, j) => tone(bits[b], `${i}-${j}`))}</g>)}
      {dots.map(([x, y, r, c], i) => <circle key={i} cx={x} cy={y} r={r} fill={c} />)}
      {/* mangkuk maroon bertuliskan logo */}
      <path d="M40 190h260c0 70-45 120-130 120S40 260 40 190z" fill="#8C1515" />
      <path d="M58 208c4 30 20 52 44 66" fill="none" stroke="#fff" strokeOpacity=".2" strokeWidth="6" strokeLinecap="round" />
      <image href="/logo-white.png" x="95" y="212" width="150" height="64" preserveAspectRatio="none" />
      <rect x="32" y="180" width="276" height="18" rx="9" fill="#A82020" />
      <path d="M46 186h248" stroke="#fff" strokeOpacity=".28" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 pb-20 pt-10 md:px-8 lg:min-h-[640px] lg:grid-cols-2 lg:gap-6 lg:pt-6">
        <div className="relative pt-2 lg:pt-6">
          <div className="mb-6 grid h-[84px] w-[84px] -rotate-12 animate-pop place-items-center rounded-full bg-gold p-2 text-center font-display text-[12px] font-semibold leading-tight text-ink lg:-left-9">
            Pre-<br/>Order<br/>Dibuka
          </div>
          <h1 className="animate-rise font-display text-[44px] font-bold leading-[1.1] text-ink sm:text-6xl lg:text-[64px]">
            Usus Crispy, <span className="text-brand">Renyah Banget</span> dan Gurih
          </h1>
          <p className="mt-7 max-w-[430px] animate-rise text-lg leading-relaxed text-ink/80 [animation-delay:.12s]">
            Gurih, bumbunya meresap, renyah sampai gigitan terakhir. Pre-order sekarang dan pilih rasa favoritmu!
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
