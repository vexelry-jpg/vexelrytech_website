import SectionHeader from '../common/SectionHeader';
import ScrollReveal from '../common/ScrollReveal';
import '../../styles/Features.css';

const features = [
  {
    icon: '📐',
    title: 'Scalable Solutions',
    description: 'Architecture designed to grow with your business, handling increased traffic and data without breaking a sweat.',
  },
  {
    icon: '🔒',
    title: 'Secure Systems',
    description: 'Enterprise-grade security with encryption, authentication, and compliance standards baked into every layer.',
  },
  {
    icon: '⚡',
    title: 'Fast Performance',
    description: 'Optimized for speed with lazy loading, CDN distribution, and efficient code that loads in milliseconds.',
  },
  {
    icon: '🛟',
    title: '24/7 Support',
    description: 'Round-the-clock technical support and monitoring to ensure your systems never miss a beat.',
  },
  {
    icon: '🔄',
    title: 'Agile Development',
    description: 'Iterative sprints, continuous feedback, and adaptive planning to deliver value fast and consistently.',
  },
  {
    icon: '💎',
    title: 'Modern Technologies',
    description: 'Latest tech stacks including React, Node.js, Python, AWS, and Kubernetes for future-proof applications.',
  },
];

const Features = () => {
  return (
    <section className="section section--gray features" id="features">
      <div className="container">
        <ScrollReveal>
          <SectionHeader
            badge="Our Features"
            title="Why Our Solutions Stand Out"
            subtitle="We combine cutting-edge technology with best practices to deliver software that exceeds expectations."
          />
        </ScrollReveal>

        <div className="features__grid">
          {features.map((feature, index) => (
            <ScrollReveal key={index} className="reveal" delay={index * 100}>
              <div className="features__card">
                <div className="features__card-icon">{feature.icon}</div>
                <h3 className="features__card-title">{feature.title}</h3>
                <p className="features__card-description">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
