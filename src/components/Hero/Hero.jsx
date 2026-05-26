import Button from '../common/Button';
import '../../styles/Hero.css';
import logoImg from '../../assets/logo1.png';

const Hero = () => {
  return (
    <section className="hero" id="home">
      {/* Background Elements */}
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1"></div>
        <div className="hero__orb hero__orb--2"></div>
        <div className="hero__orb hero__orb--3"></div>
        <div className="hero__grid-pattern"></div>
      </div>

      <div className="container hero__container">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot"></span>
            🚀 Next-Gen Software Solutions
          </div>

          <h1 className="hero__title">
            Building the
            <span className="hero__title-highlight"> Digital Future </span>
            of Your Business
          </h1>

          <p className="hero__description">
            We are a team of passionate developers, designers, and strategists
            dedicated to transforming your ideas into powerful, scalable digital
            products that drive growth and innovation.
          </p>

          <div className="hero__actions">
            <Button variant="primary" size="lg" href="#contact"
              icon={
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M7 4L12 9L7 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
            >
              Get Started
            </Button>
            <Button variant="secondary" size="lg" href="#about">
              Learn More
            </Button>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">200+</span>
              <span className="hero__stat-label">Projects Done</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">50+</span>
              <span className="hero__stat-label">Team Members</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">98%</span>
              <span className="hero__stat-label">Client Satisfaction</span>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__logo-wrapper">
            <img src={logoImg} alt="VEXELRY Logo" className="hero__main-logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
