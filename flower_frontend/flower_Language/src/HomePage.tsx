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

      <section id="features" className="features-section page-snap">
        <div className="content-container">
            <div className="PageGrids">
            <div className="Flower_Diagnosis_Title" >
                <div className="vertical-text"><h2>手紙を綴る</h2></div>
                <p>想いに花を添えるための手紙</p>
            </div>
            <div className="feature-card Flower_Diagnosis_Page">
                <h3>手紙を綴る</h3>
                <p>手紙の内容に応じた花言葉を見つけます。</p>
            </div>
            <div className="Flower_History_Title" >
                <div className="vertical-text"><h2>手紙を綴る</h2></div>
                <p>想いに花を添えるための手紙</p>
            </div>
            <div className="feature-card Flower_History_Page">
                <h3>花言葉の歴史</h3>
                <p>花言葉の歴史を探求しましょう。</p>
            </div>
            {/* <div className="feature-card">
                <h3>花の種類</h3>
                <p>季節ごとの美しい花々を詳しく知ることができます。</p>
            </div> */}
            </div>
        </div>
      </section>

      <section id="popular" className="popular-section page-snap">
        <div className="content-container">
          <h2 className="section-title">悩み中</h2>
          <div className="popular-flowers">
            <div className="flower-card"> 桜 </div>
            <div className="flower-card"> ひまわり </div>
            <div className="flower-card"> バラ </div>
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
