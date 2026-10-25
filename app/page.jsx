import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import { Menu, CaraPesan, About, Locations, Contact, Footer } from '../components/Sections';

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <CaraPesan />
        <About />
        <Locations />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
