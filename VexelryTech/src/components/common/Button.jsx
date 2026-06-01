import './Button.css';

const Button = ({ children, variant = 'primary', size = 'md', href, onClick, icon, className = '' }) => {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
        {icon && <span className="btn__icon">{icon}</span>}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
      {icon && <span className="btn__icon">{icon}</span>}
    </button>
  );
};

export default Button;
