import SectionHeader from '../common/SectionHeader';
import ScrollReveal from '../common/ScrollReveal';
import '../../styles/CaseStudies.css';

const caseStudies = [
  {
    client: 'Travix Travel Booking',
    challenge: 'Users faced complex, fragmented, and slow booking processes across multiple platforms, leading to high drop-off rates.',
    solution: 'Developed a unified mobile application with a seamless UX, real-time availability sync, and instant payment processing.',
    results: ['40% faster bookings', '3x user retention', '99.99% uptime'],
    satisfaction: 98,
    color: '#2563EB',
  },
  {
    client: 'Educore School System',
    challenge: 'Paper-based administration and disconnected systems causing operational inefficiencies and communication gaps.',
    solution: 'Built a comprehensive web-based platform centralizing attendance, grading, and secure parent-teacher communication.',
    results: ['60% admin time saved', 'Centralized records', '95% adoption rate'],
    satisfaction: 96,
    color: '#10B981',
  },
  {
    client: 'ShopFlow E-Commerce',
    challenge: 'Declining online sales and a poor product discovery experience compared to modern industry competitors.',
    solution: 'Redesigned the e-commerce platform with AI-driven product recommendations, fast search, and one-click checkout.',
    results: ['85% mobile sales increase', '2x conversion rate', '50% cart abandonment reduction'],
    satisfaction: 99,
    color: '#7C3AED',
  },
];

const CaseStudies = () => {
  return (
    <section className="section section--gray case-studies" id="case-studies">
      <div className="container">
        <ScrollReveal>
          <SectionHeader
            badge="Case Studies"
            title="Success Stories"
            subtitle="Real challenges. Real solutions. Real results for our clients."
          />
        </ScrollReveal>

        <div className="case-studies__grid">
          {caseStudies.map((study, index) => (
            <ScrollReveal key={index} className="reveal" delay={index * 150}>
              <div className="case-studies__card" style={{ borderTopColor: study.color }}>
                <div className="case-studies__header">
                  <h3 className="case-studies__client">{study.client}</h3>
                  <div className="case-studies__satisfaction">
                    <svg width="40" height="40" viewBox="0 0 40 40">
                      <circle cx="20" cy="20" r="17" fill="none" stroke="#E2E8F0" strokeWidth="3" />
                      <circle
                        cx="20" cy="20" r="17"
                        fill="none"
                        stroke={study.color}
                        strokeWidth="3"
                        strokeDasharray={`${(study.satisfaction / 100) * 106.8} 106.8`}
                        strokeLinecap="round"
                        transform="rotate(-90 20 20)"
                      />
                    </svg>
                    <span className="case-studies__satisfaction-text" style={{ color: study.color }}>
                      {study.satisfaction}%
                    </span>
                  </div>
                </div>

                <div className="case-studies__section">
                  <h4 className="case-studies__label">Challenge</h4>
                  <p className="case-studies__text">{study.challenge}</p>
                </div>

                <div className="case-studies__section">
                  <h4 className="case-studies__label">Solution</h4>
                  <p className="case-studies__text">{study.solution}</p>
                </div>

                <div className="case-studies__section">
                  <h4 className="case-studies__label">Results</h4>
                  <div className="case-studies__results">
                    {study.results.map((result, i) => (
                      <span key={i} className="case-studies__result-tag" style={{ background: `${study.color}10`, color: study.color }}>
                        {result}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
