import SectionHeader from '../common/SectionHeader';
import ScrollReveal from '../common/ScrollReveal';
import '../../styles/Workflow.css';

const steps = [
  { number: '01', icon: '📋', title: 'Requirement Analysis', description: 'Deep dive into your business needs, goals, and technical requirements.' },
  { number: '02', icon: '📐', title: 'Planning', description: 'Strategic roadmap with timelines, milestones, and resource allocation.' },
  { number: '03', icon: '🎨', title: 'Design', description: 'Wireframes, prototypes, and polished UI designs that users love.' },
  { number: '04', icon: '💻', title: 'Development', description: 'Clean, scalable code built with modern frameworks and best practices.' },
  { number: '05', icon: '🧪', title: 'Testing', description: 'Rigorous QA with automated and manual tests for flawless performance.' },
  { number: '06', icon: '🚀', title: 'Deployment', description: 'Smooth launch with CI/CD pipelines, monitoring, and ongoing support.' },
];

const Workflow = () => {
  return (
    <section className="section workflow" id="workflow">
      <div className="container">
        <ScrollReveal>
          <SectionHeader
            badge="Our Process"
            title="How We Work"
            subtitle="A proven, transparent process that delivers results on time, every time."
          />
        </ScrollReveal>

        <div className="workflow__timeline">
          <div className="workflow__circuit-line"></div>
          <div className="workflow__circuit-laser"></div>
          
          {steps.map((step, index) => {
            const isTop = index % 2 === 0;
            return (
              <div key={index} className="workflow__step-wrapper">
                <ScrollReveal delay={index * 150} style={{ width: '100%', height: '100%' }}>
                  <div className={`workflow__step ${isTop ? 'workflow__step--top' : 'workflow__step--bottom'}`}>
                    <div className="workflow__circuit-node">
                      <div className="workflow__node-core"></div>
                      <div className="workflow__node-ring"></div>
                    </div>
                    <div className="workflow__step-content">
                      <div className="workflow__step-number">{step.number}</div>
                      <div className="workflow__step-header">
                        <div className="workflow__step-icon">{step.icon}</div>
                        <h3 className="workflow__step-title">{step.title}</h3>
                      </div>
                      <p className="workflow__step-description">{step.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
