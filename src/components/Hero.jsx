import '../styles/Hero.css';
import { FaGithub, FaLinkedin, FaEnvelope} from 'react-icons/fa';

function Hero() {
  return (
  <div className="hero-container">
    <img
      src="/assets/profile.jpg"
      alt="Sami Abushamat"
      className="hero-image"
    />

    <div className="hero-info">
      <h1 className="hero-name">Sami Abushamat</h1>
      <p className="hero-bio">Full Stack ∙ Mobile Dev ∙ Freelancer ∙ Chicago</p>
      <p className="hero-comment">samiabushamat1@gmail.com If you want to hire me! I love simplicity</p>
    </div>

    <div className="hero-links-vertical">
      <a href="https://github.com/samiabushamat" className="hero-link" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      <a href="https://linkedin.com/in/sami-abushamat/" className="hero-link" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      <a href="mailto:samiabushamat1@gmail.com" className="hero-link"><FaEnvelope /></a>
    </div>
  </div>
  );
}
export default Hero
