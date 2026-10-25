import './globals.css';
import CartProvider from '../components/CartProvider';
import { Fredoka, Nunito } from 'next/font/google';

const fredoka = Fredoka({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-fredoka' });
const nunito = Nunito({ subsets: ['latin'], weight: ['400', '600', '700'], variable: '--font-nunito' });

export const metadata = {
  title: "Slack's — secondly mbg",
  description: "Slack's secondly mbg. Pre-order usus crispy renyah.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${fredoka.variable} ${nunito.variable}`}>
      <body><CartProvider>{children}</CartProvider></body>
    </html>
  );
}
