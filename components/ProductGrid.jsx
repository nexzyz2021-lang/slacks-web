'use client';
import { products, rupiah } from './data';
import { useCart, Stepper } from './CartProvider';

export default function ProductGrid() {
  const { qty, add, setQty } = useCart();
  return (
    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((x) => (
        <article key={x.id} className="group flex flex-col rounded-[28px] bg-white p-4 shadow-[0_8px_30px_rgba(139,21,21,.08)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(139,21,21,.16)]">
          <div className="h-44 overflow-hidden rounded-[20px] bg-blush">
            <img src={x.img} alt={`Slack's usus crispy rasa ${x.n}`} loading="lazy" style={{ objectPosition: x.pos }} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
          </div>
          <h3 className="mt-4 font-display text-xl font-semibold">{x.n}</h3>
          <p className="mt-1 flex-1 text-[15px] text-ink/70">{x.d}</p>
          <div className="mt-4 flex items-center justify-between gap-2">
            <span className="font-display text-lg font-semibold text-brand">{rupiah(x.p)}</span>
            {qty[x.id] ? (
              <Stepper q={qty[x.id]} onChange={(q) => setQty(x.id, q)} />
            ) : (
              <button onClick={() => add(x.id)} className="btn btn-primary shrink-0 px-4 py-2 text-sm">+ Keranjang</button>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
