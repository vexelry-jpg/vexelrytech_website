import SectionHeader from '../common/SectionHeader';
import ScrollReveal from '../common/ScrollReveal';
import Counter from '../common/Counter';
import '../../styles/WhyChooseUs.css';

const strengths = [
  { icon: '✅', text: 'Experienced team with 5+ years in the industry' },
  { icon: '✅', text: 'Agile methodology for faster time-to-market' },
  { icon: '✅', text: 'Transparent communication & regular updates' },
  { icon: '✅', text: 'Post-launch support and maintenance' },
  { icon: '✅', text: 'Competitive pricing with flexible engagement models' },
  { icon: '✅', text: 'ISO certified development processes' },
];

const stats = [
  { number: 50, suffix: '+', label: 'Projects Delivered', icon: '🏆' },
  { number: 98, suffix: '%', label: 'Client Satisfaction', icon: '😊' },
  { number: 50, suffix: '+', label: 'Team Members', icon: '👥' },
  { number: 3, suffix: '+', label: 'Years Experience', icon: '📅' },
];

const WhyChooseUs = () => {
  return (
    <section className="section why-choose" id="why-choose">
      <div className="container">
        <div className="why-choose__grid">
          <ScrollReveal className="reveal-left">
            <div className="why-choose__stats-grid">
              {stats.map((stat, index) => (
                <div className="why-choose__stat-card" key={index}>
                  <div className="why-choose__stat-icon">{stat.icon}</div>
                  <div className="why-choose__stat-number">
                    <Counter end={stat.number} suffix={stat.suffix} />
                  </div>
                  <div className="why-choose__stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal className="reveal-right">
            <div className="why-choose__content">
              <SectionHeader
                badge="Why Choose Us"
                title="Your Trusted Technology Partner"
                center={false}
              />

              <p className="why-choose__text">
                We don't just build software — we build partnerships. Our
                commitment to quality, innovation, and client success has made
                us the preferred technology partner for businesses across the
                globe.
              </p>

              <ul className="why-choose__list">
                {strengths.map((item, index) => (
                  <li className="why-choose__list-item" key={index}>
                    <span className="why-choose__check">{item.icon}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
