import SectionHeader from '../common/SectionHeader';
import ScrollReveal from '../common/ScrollReveal';
import '../../styles/Blog.css';

const posts = [
  {
    title: 'The Future of AI in Software Development',
    excerpt: 'How artificial intelligence is transforming the way we write, test, and deploy code in 2026 and beyond.',
    date: 'May 20, 2026',
    category: 'Technology',
    readTime: '5 min read',
    color: '#2563EB',
  },
  {
    title: 'Why Microservices Architecture Matters',
    excerpt: 'Breaking down monoliths: the benefits, challenges, and best practices of microservices for modern applications.',
    date: 'May 15, 2026',
    category: 'Architecture',
    readTime: '7 min read',
    color: '#7C3AED',
  },
  {
    title: 'Building Secure Cloud-Native Applications',
    excerpt: 'Security best practices for cloud deployments including zero-trust architecture and automated compliance.',
    date: 'May 10, 2026',
    category: 'Security',
    readTime: '6 min read',
    color: '#10B981',
  },
];

const Blog = () => {
  return (
    <section className="section blog" id="blog">
      <div className="container">
        <ScrollReveal>
          <SectionHeader
            badge="Our Blog"
            title="Latest Insights"
            subtitle="Stay updated with our latest articles on technology, design, and development."
          />
        </ScrollReveal>

        <div className="blog__grid">
          {posts.map((post, index) => (
            <ScrollReveal key={index} className="reveal" delay={index * 100}>
              <article className="blog__card">
                <div className="blog__card-image" style={{ background: `linear-gradient(135deg, ${post.color}10, ${post.color}25)` }}>
                  <div className="blog__card-image-content">
                    <div className="blog__card-pattern" style={{ color: post.color }}>
                      <svg width="120" height="80" viewBox="0 0 120 80" fill="none" opacity="0.3">
                        <rect x="5" y="5" width="50" height="30" rx="4" stroke="currentColor" strokeWidth="1.5" />
                        <rect x="65" y="5" width="50" height="14" rx="4" stroke="currentColor" strokeWidth="1.5" />
                        <rect x="65" y="25" width="50" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
                        <rect x="5" y="45" width="110" height="30" rx="4" stroke="currentColor" strokeWidth="1.5" />
                        <line x1="15" y1="55" x2="95" y2="55" stroke="currentColor" strokeWidth="1.5" />
                        <line x1="15" y1="65" x2="75" y2="65" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </div>
                  </div>
                  <span className="blog__card-category" style={{ background: post.color }}>
                    {post.category}
                  </span>
                </div>
                <div className="blog__card-body">
                  <div className="blog__card-meta">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="blog__card-title">{post.title}</h3>
                  <p className="blog__card-excerpt">{post.excerpt}</p>
                  <a href="#" className="blog__card-link">
                    Read More
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M4 8h8M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
