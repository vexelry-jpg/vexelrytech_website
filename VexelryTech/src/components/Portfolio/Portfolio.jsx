import SectionHeader from '../common/SectionHeader';
import ScrollReveal from '../common/ScrollReveal';
import '../../styles/Portfolio.css';

const projects = [
  { title: 'Travix travel booking App', category: 'Mobile App', color: '#2563EB', desc: 'Financial analytics platform with real-time data visualization' },
  { title: 'Educore school management system', category: 'Web App', color: '#10B981', desc: 'Healthcare management system for clinics and hospitals' },
  { title: 'ShopFlow E-Commerce', category: 'Portfolio', color: '#7C3AED', desc: 'Modern e-commerce platform with AI-powered recommendations' },
];

const Portfolio = () => {
  return (
    <section className="section section--gray portfolio" id="portfolio">
      <div className="container">
        <ScrollReveal>
          <SectionHeader
            badge="Our Work"
            title="Solutions We Built"
            subtitle="A showcase of our recent work across various industries and technologies."
          />
        </ScrollReveal>

        <div className="portfolio__grid">
          {projects.map((project, index) => (
            <ScrollReveal key={index} className="reveal" delay={index * 100}>
              <div className="portfolio__card">
                <div className="portfolio__card-image" style={{ background: `linear-gradient(135deg, ${project.color}15, ${project.color}30)` }}>
                  <div className="portfolio__card-mockup" style={{ borderColor: `${project.color}40` }}>
                    <div className="portfolio__mockup-header">
                      <div className="portfolio__mockup-dots">
                        <span></span><span></span><span></span>
                      </div>
                    </div>
                    <div className="portfolio__mockup-body">
                      <div className="portfolio__mockup-sidebar" style={{ background: project.color }}></div>
                      <div className="portfolio__mockup-content">
                        <div className="portfolio__mockup-line" style={{ background: `${project.color}30`, width: '80%' }}></div>
                        <div className="portfolio__mockup-line" style={{ background: `${project.color}20`, width: '60%' }}></div>
                        <div className="portfolio__mockup-line" style={{ background: `${project.color}15`, width: '90%' }}></div>
                        <div className="portfolio__mockup-block" style={{ background: `${project.color}10`, borderColor: `${project.color}20` }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="portfolio__card-overlay">
                    <a href="#contact" className="portfolio__view-btn">View Project →</a>
                  </div>
                </div>
                <div className="portfolio__card-info">
                  <span className="portfolio__card-category" style={{ color: project.color, background: `${project.color}10` }}>
                    {project.category}
                  </span>
                  <h3 className="portfolio__card-title">{project.title}</h3>
                  <p className="portfolio__card-desc">{project.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
