import React, { useEffect } from "react";
import "./css/HomePage.css";
import { Link } from "react-router-dom";

function HomePage() {
  useEffect(() => {
    const sections = document.querySelectorAll(".page-snap");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-page">
      {/* ナビゲーションバー */}
      {/* <nav className="navbar">
        <div className="nav-container">
          <h1 className="nav-logo">綴り花</h1>
          <ul className="nav-links">
            <li><a href="#hero">ホーム</a></li>
            <li><a href="#features">ページ紹介</a></li>
            <li><Link to = "./flower-diagnosis">手紙を書く</Link></li>
            <li><a href="#contact">お問い合わせ</a></li>
          </ul>
        </div>
      </nav> */}

      {/* セクションの構造 */}
      <header id="hero" className="hero-section page-snap">
        <div className="content-container vertical-text">
          <h1 className="hero-title">綴り花</h1>
          <p className="hero-description">想いに花を添えて</p>
          {/* <button className="hero-button">今すぐ始める</button> */}
        </div>
      </header>

      <section id="about" className="about-section page-snap">
        <div className="about-content content-container">
          <div className="about-title">
            <h2>綴り花とは</h2>
          </div>
          <div className="about-body">
            <p>
              綴り花は、あなたの<strong>想い</strong>を
              花言葉と共に届けるサービスです。
            </p>
            <p>
              言葉では伝えきれない<strong>心のメッセージ</strong>を、
              花の美しさと共に綴りましょう。

            </p>
            <p></p>
          </div>
          <div className="about-image">
            <img
              src="https://files.oaiusercontent.com/file-SA3QmCT9u3hG9XdKZVDZ8X?se=2025-01-20T02%3A52%3A20Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Db6c2d34e-44ea-458f-ac85-d5601f33ebd6.webp&sig=NOWmhVaqQj4EyPPfp32sVkIB%2Bv/UCefwUIqGLktFPiQ%3D"
              alt="綴り花"
              className="flower-image"
            />
          </div>
        </div>
      </section>

      <section id="popular" className="popular-section page-snap">
      <div className="content-container">
          <h2 className="section-title">特徴</h2>
          <p className="section-description">
            綴り花は、手紙の内容に合わせて最適な花言葉や花を提案し、贈る人の気持ちを届ける手助けをします。
          </p>
          <div className="features-grid">
            <div className="feature-card">
              <h3>手紙を書く</h3>
              <p>想いを込めた手紙を綴るためのインターフェイスを提供します。</p>
            </div>
            <div className="feature-card">
              <h3>花言葉を学ぶ</h3>
              <p>花の種類や花言葉の由来について学ぶことができます。</p>
            </div>
            <div className="feature-card">
              <h3>おすすめの花</h3>
              <p>特定のイベントや感情に最適な花を提案します。</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section page-snap">
        <div className="content-container">
          <h2 className="section-title">お問い合わせ</h2>
          <form className="contact-form">
            <input type="text" placeholder="お名前" required />
            <input type="email" placeholder="メールアドレス" required />
            <textarea placeholder="メッセージ" rows="5" required></textarea>
            <button type="submit">送信する</button>
          </form>
        </div>
      </section>

      <footer className="footer page-snap">
        <p>&copy; SilVerse Natural | お問い合わせ | 利用規約 | プライバシーポリシー</p>
      </footer>
    </div>
  );
}

export default HomePage;
