import SectionHeader from '../common/SectionHeader';
import ScrollReveal from '../common/ScrollReveal';
import '../../styles/Services.css';

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" />
      </svg>
    ),
    title: 'Web Development',
    description: 'Custom web applications built with modern frameworks. From enterprise portals to progressive web apps, we deliver scalable and performant solutions.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" /><path d="M12 18h.01" />
      </svg>
    ),
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android. Beautiful interfaces with smooth performance and offline capabilities.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: 'Portfolio Website',
    description: 'Stunning and professional portfolio websites to showcase your work, attract clients, and build your personal or agency brand online.',
  },
];

const Services = () => {
  return (
    <section className="section services" id="services">
      <div className="container">
        <ScrollReveal>
          <SectionHeader
            badge="Our Services"
            title="What We Deliver"
            subtitle="End-to-end digital solutions tailored to accelerate your business growth and digital transformation journey."
          />
        </ScrollReveal>

        <div className="services__grid">
          {services.map((service, index) => (
            <ScrollReveal key={index} className="reveal" delay={index * 100}>
              <div className="services__card">
                <div className="services__card-icon">
                  {service.icon}
                </div>
                <h3 className="services__card-title">{service.title}</h3>
                <p className="services__card-description">{service.description}</p>
                <a href="#contact" className="services__card-link">
                  Learn More
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 8h8M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
