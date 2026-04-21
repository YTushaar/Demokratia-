import Hero from './components/Hero';
import EventDetails from './components/EventDetails';
import ExecutiveBoard from './components/ExecutiveBoard';
import ChiefGuests from './components/ChiefGuests';
import SubEvents from './components/SubEvents';
import Perks from './components/Perks';
import Founder from './components/Founder';
import Registration from './components/Registration';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black selection:bg-blue-500/30">
      <Hero />
      <EventDetails />
      <ChiefGuests />
      <ExecutiveBoard />
      <SubEvents />
      <Perks />
      <Founder />
      <Registration />
      <Footer />
    </main>
  );
}
