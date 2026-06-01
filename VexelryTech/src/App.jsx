import { useState } from 'react';
import './index.css';
import './styles/animations.css';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import About from './components/About/About';
import Features from './components/Features/Features';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import Portfolio from './components/Portfolio/Portfolio';
import Workflow from './components/Workflow/Workflow';

import Team from './components/Team/Team';
import FAQ from './components/FAQ/FAQ';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import EnquiryModal from './components/common/EnquiryModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navbar openModal={() => setIsModalOpen(true)} />
      <main>
        <Hero openModal={() => setIsModalOpen(true)} />
        <Services />
        <About />
        <Features />
        <WhyChooseUs />
        <Portfolio />
        <Workflow />

        <Team />
        <FAQ />
        
      </main>
      <Footer />
      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export default App;
