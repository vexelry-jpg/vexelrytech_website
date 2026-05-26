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
import CaseStudies from './components/CaseStudies/CaseStudies';
import Team from './components/Team/Team';
import FAQ from './components/FAQ/FAQ';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Features />
        <WhyChooseUs />
        <Portfolio />
        <Workflow />
        <CaseStudies />
        <Team />
        <FAQ />
        
      </main>
      <Footer />
    </>
  );
}

export default App;
