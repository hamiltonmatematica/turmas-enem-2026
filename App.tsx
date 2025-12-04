import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import NewFeatures from './components/NewFeatures';
import Details from './components/Details';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <main className="flex-grow">
        <Hero />
        <Features />
        <NewFeatures />
        <Details />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;