export const links = [
  ['Home', '#home'], ['Menu', '#menu'], ['Cara Pesan', '#cara-pesan'],
  ['About', '#about'], ['Locations', '#locations'], ['Contact', '#contact'],
];
export const PHONE = '0821-5447-8009';
export const WA_NUMBER = '6282154478009';
export const MIN_QTY = 7; // minimal pembelian (pcs, rasa boleh dicampur)
export const WA = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Halo Slack's, saya mau tanya soal pre-order usus crispy.")}`;

// Varian & harga (rupiah)
export const products = [
  { id: 'original', img: '/foto-original.jpg', pos: 'center 45%', n: 'Original', d: 'Gurih klasik, renyah, cocok untuk semua kalangan.', p: 7500 },
  { id: 'pedas', img: '/foto-pedas.jpg', pos: 'center 45%', n: 'Pedas', d: 'Gurih dengan sensasi pedas yang nendang.', p: 7500 },
  { id: 'balado', img: '/foto-balado.jpg', pos: 'center 45%', n: 'Balado', d: 'Bumbu balado pedas manis yang meresap.', p: 7500 },
  { id: 'nori', img: '/foto-nori.jpg', pos: 'center 45%', n: 'Nori', d: 'Gurih rumput laut ala camilan Jepang.', p: 7500 },
  { id: 'kari', img: '/foto-kari.jpg', pos: 'center 45%', n: 'Kari Ayam Pedas', d: 'Aroma kari yang kuat dengan rasa pedas.', p: 7500 },
  { id: 'bawang', img: '/foto-bawang.jpg', pos: 'center 45%', n: 'Ayam Bawang', d: 'Perpaduan gurih ayam dan harum bawang.', p: 7500 },
  { id: 'bbq', img: '/foto-bbq.jpg', pos: 'center 45%', n: 'Barbeque', d: 'Bumbu barbeque gurih manis yang khas.', p: 7500 },
];
export const tones = ['bg-gold/70', 'bg-blush', 'bg-brand/15'];
export const rupiah = (n) => 'Rp ' + n.toLocaleString('id-ID');

// Susun daftar pesanan otomatis menjadi pesan WhatsApp
export function buildOrderLink(items, f) {
  const total = items.reduce((s, i) => s + i.p * i.q, 0);
  const pcs = items.reduce((s, i) => s + i.q, 0);
  const lines = items.map((i, k) => `${k + 1}. ${i.n} x${i.q} = ${rupiah(i.p * i.q)}`);
  const text = [
    "Halo Slack's, saya mau pre-order usus crispy:", '',
    ...lines, '',
    `Total: ${pcs} pcs = ${rupiah(total)}`, '',
    `Nama: ${f.name}`,
    `Metode: ${f.method === 'Diantar' ? (f.area === 'dekat' ? 'Diantar (dalam 2 km, gratis ongkir)' : 'Diantar (lebih dari 2 km, + ongkir)') : f.method}`,
    f.note ? `${f.method === 'Diantar' ? 'Alamat' : 'Catatan'}: ${f.note}` : null, '',
    'Mohon konfirmasi pesanan saya. Terima kasih!',
  ].filter((x) => x !== null).join('\n');
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}
