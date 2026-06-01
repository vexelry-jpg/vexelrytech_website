import SectionHeader from '../common/SectionHeader';
import ScrollReveal from '../common/ScrollReveal';
import Counter from '../common/Counter';
import '../../styles/About.css';

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about__grid">
          <ScrollReveal className="reveal-left">
            <div className="about__image-wrapper">
              <div className="about__image-box">
                <div className="about__image-placeholder">
                  <div className="about__image-content">
                    <div className="about__img-grid">
                      <div className="about__img-cell about__img-cell--1">
                        <div className="about__img-icon">🏢</div>
                        <span>Innovation Hub</span>
                      </div>
                      <div className="about__img-cell about__img-cell--2">
                        <div className="about__img-icon">💡</div>
                        <span>Creative Teams</span>
                      </div>
                      <div className="about__img-cell about__img-cell--3">
                        <div className="about__img-icon">🌍</div>
                        <span>Global Reach</span>
                      </div>
                      <div className="about__img-cell about__img-cell--4">
                        <div className="about__img-icon">🚀</div>
                        <span>Fast Delivery</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about__experience-badge animate-float">
                <span className="about__experience-number">3+</span>
                <span className="about__experience-text">Years of<br />Excellence</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="reveal-right">
            <div className="about__content">
              <SectionHeader
                badge="Who We Are"
                title="Empowering Businesses Through Technology"
                center={false}
              />

              <p className="about__text">
                VEXELRY is a forward-thinking software development company
                dedicated to crafting digital experiences that drive real business
                outcomes. Founded with a vision to bridge the gap between
                technology and business goals, we have grown into a trusted
                partner for startups and enterprises alike.
              </p>

              <p className="about__text">
                Our team of 50+ skilled professionals combines deep technical
                expertise with creative problem-solving to deliver solutions that
                are not only functional but also delightful to use.
              </p>

              <div className="about__values">
                <div className="about__value">
                  <div className="about__value-icon">🎯</div>
                  <div>
                    <h4 className="about__value-title">Our Mission</h4>
                    <p className="about__value-text">To empower businesses with cutting-edge technology solutions that drive growth and efficiency.</p>
                  </div>
                </div>
                <div className="about__value">
                  <div className="about__value-icon">🔭</div>
                  <div>
                    <h4 className="about__value-title">Our Vision</h4>
                    <p className="about__value-text">To be the most trusted technology partner for innovative companies worldwide.</p>
                  </div>
                </div>
              </div>

              <div className="about__counters">
                <div className="about__counter">
                  <span className="about__counter-number">
                    <Counter end={50} suffix="+" />
                  </span>
                  <span className="about__counter-label">Projects Completed</span>
                </div>
                <div className="about__counter">
                  <span className="about__counter-number">
                    <Counter end={45} suffix="+" />
                  </span>
                  <span className="about__counter-label">Happy Clients</span>
                </div>
                <div className="about__counter">
                  <span className="about__counter-number">
                    <Counter end={5} suffix="+" />
                  </span>
                  <span className="about__counter-label">Awards Won</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
