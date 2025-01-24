import React, { useEffect } from 'react';
import './css/SilverseNatural.css';

const SilverseNatural: React.FC = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.page-snap');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="silverse-natural">
      <header className="hero-section page-snap">
        <div className="content-container">
          <h1 className="hero-title">SilVerse Natural</h1>
          <p className="hero-description">自然と共に、心の宇宙を紡ぐ。</p>
        </div>
      </header>

      <section className="about-section page-snap">
        <div className="content-container">
          <h2>私たちのミッション</h2>
          <p>
            青と緑が織りなす世界で、自然との調和を目指します。
          </p>
        </div>
      </section>

      <section className="features-section page-snap">
        <div className="content-container">
          <h2>主な機能</h2>
          <ul>
            <li>🌱 自然言葉の探索</li>
            <li>💬 感情を反映した自然の提案</li>
            <li>🌌 心と自然のつながりを発見</li>
          </ul>
        </div>
      </section>

      <footer className="footer page-snap">
        <p>&copy; 2025 SilVerse Natural. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SilverseNatural;
