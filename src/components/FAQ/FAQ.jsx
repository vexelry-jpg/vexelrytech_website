import { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import ScrollReveal from '../common/ScrollReveal';
import '../../styles/FAQ.css';

const faqs = [
  {
    question: 'What technologies do you specialize in?',
    answer: 'We specialize in modern web and mobile technologies including React, Next.js, Node.js, Python, Flutter, React Native, AWS, Azure, Docker, Kubernetes, and more. Our team stays current with the latest industry trends and best practices.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope and complexity. A simple website typically takes 4-6 weeks, while a complex web application or mobile app can take 3-6 months. We provide detailed timelines during the planning phase.',
  },
  {
    question: 'Do you offer post-launch support?',
    answer: 'Absolutely! We offer comprehensive post-launch support packages including bug fixes, performance monitoring, feature updates, and technical support. Our standard support plan includes 3 months of free maintenance.',
  },
  {
    question: 'What is your development process?',
    answer: "We follow an Agile development methodology with 2-week sprints. This includes requirement analysis, planning, design, development, testing, and deployment. You'll have full visibility into the process with regular demos and updates.",
  },
  {
    question: 'Can you work with our existing team?',
    answer: 'Yes! We offer flexible engagement models including dedicated teams, team augmentation, and project-based work. Our developers can seamlessly integrate with your existing team and workflows.',
  },
  {
    question: 'How do you handle project pricing?',
    answer: 'We offer both fixed-price and time & materials pricing models. Fixed-price works best for well-defined projects, while T&M is ideal for evolving requirements. We provide transparent estimates with no hidden costs.',
  },
  {
    question: 'Do you provide portfolio websites as a service?',
    answer: 'Yes! We specialize in building highly professional, lightning-fast, and beautifully designed custom portfolio websites that perfectly showcase your work, brand, and unique identity to potential clients or employers.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section section--gray faq" id="faq">
      <div className="container">
        <ScrollReveal>
          <SectionHeader
            badge="FAQ"
            title="Frequently Asked Questions"
            subtitle="Got questions? We've got answers. Here are some of the most common things people ask us."
          />
        </ScrollReveal>

        <div className="faq__list">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} className="reveal" delay={index * 80}>
              <div className={`faq__item ${openIndex === index ? 'faq__item--open' : ''}`}>
                <button
                  className="faq__question"
                  onClick={() => toggle(index)}
                  aria-expanded={openIndex === index}
                >
                  <span>{faq.question}</span>
                  <div className="faq__icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </button>
                <div className="faq__answer">
                  <div className="faq__answer-inner">
                    <p>{faq.answer}</p>
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

export default FAQ;
