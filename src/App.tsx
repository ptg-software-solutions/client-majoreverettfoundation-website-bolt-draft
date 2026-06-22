import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhoWeHelp from './components/WhoWeHelp';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import Resources from './components/Resources';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhoWeHelp />
      <Benefits />
      <HowItWorks />
      <Resources />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
