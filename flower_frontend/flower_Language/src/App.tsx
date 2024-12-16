import React from "react";
import "./css/styles.css";

function HomePage() {
  return (
    <div className="home-page">
      {/* ヒーローセクション */}
      <header className="hero-section page-snap">
        <div className="content-container">
          <h1 className="hero-title">心を伝える花言葉を見つけよう</h1>
          <p className="hero-description">大切な手紙に最適な花と言葉を見つけましょう。</p>
          <button className="hero-button">今すぐ始める</button>
        </div>
      </header>

      {/* 機能紹介セクション */}
      <section className="features-section page-snap">
        <div className="content-container">
          <h2 className="section-title">ページ紹介</h2>
          <p className="section-description">花言葉検索、花言葉の歴史、花の種類を詳しく知ることができます。</p>
          <div className="feature-cards">
            <div className="feature-card">
              <h3>手紙の花言葉検索</h3>
              <p>大切な手紙に最適な花を見つけましょう。</p>
            </div>
            <div className="feature-card">
              <h3>花言葉の歴史を見る</h3>
              <p>花言葉という概念が出来た時代のお話。</p>
            </div>
            <div className="feature-card">
              <h3>花の種類を知る</h3>
              <p>季節ごとの美しい花々を探しましょう。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 人気の花言葉セクション */}
      <section className="popular-section page-snap">
        <div className="content-container">
          <h2 className="section-title">人気の花言葉</h2>
          <p className="section-description">多くの人に愛される花と言葉をご覧ください。</p>
          <div className="popular-flowers">
            <div className="flower-card">🌸 桜 - 儚い美しさ</div>
            <div className="flower-card">🌼 ひまわり - 希望と誠実</div>
            <div className="flower-card">🌹 バラ - 愛と情熱</div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="footer page-snap">
        <p>&copy; SilVerse Natural | お問い合わせ | 利用規約 | プライバシーポリシー</p>
      </footer>
    </div>
  );
}

export default HomePage;
