import './SectionHeader.css';

const SectionHeader = ({ badge, title, subtitle, light = false, center = true }) => {
  return (
    <div className={`section-header ${center ? 'section-header--center' : ''} ${light ? 'section-header--light' : ''}`}>
      {badge && (
        <span className="section-header__badge">
          <span className="section-header__badge-dot"></span>
          {badge}
        </span>
      )}
      <h2 className="section-header__title">{title}</h2>
      {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
