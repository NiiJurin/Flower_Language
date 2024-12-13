import React, { useEffect } from 'react';
import './css/styles.css';

function FlowerLanguageHistory() {
  return (
      <div className="history-page">
          <header className="history-header">
              <h1 className="animated-title">花言葉の歴史</h1>
              <p className="subtitle">花が語る物語 - 愛、別れ、希望</p>
          </header>

          <main className="history-content">
              <section className="history-section">
                  <h2 className="section-title">花言葉の起源</h2>
                  <p className="animated-text">花言葉の歴史は、古代文明にまでさかのぼります。古代エジプトやギリシャ、ローマでは、花々は神々への捧げ物や愛の象徴として扱われました。</p>
                  <p className="animated-text">その後、オスマン帝国で"セラム"と呼ばれる花言葉の文化が生まれ、ヨーロッパへ広まりました。ビクトリア時代のイギリスでは、言葉に出せない感情を花で伝える文化が発展しました。</p>
              </section>

              <section className="history-section">
                  <h2 className="section-title">花がもたらすメッセージ</h2>
                  <p className="animated-text">花は愛、友情、感謝、そして別れなど、さまざまな感情を表現します。バラは愛を、リリーは純粋さを、スミレは誠実さを象徴します。</p>
                  <p className="animated-text">手紙とともに贈られる花は、想いを形に変え、忘れられない記憶を作ります。</p>
              </section>

              <section className="history-section">
                  <h2 className="section-title">未来へ続く花言葉</h2>
                  <p className="animated-text">現代でも、花言葉は愛や友情の象徴として生き続けています。特別な日や何気ない瞬間、一輪の花が心に響くメッセージを伝えます。</p>
                  <p className="animated-text">花に込められた想いは、時代を超え、これからも永遠に受け継がれていくでしょう。</p>
              </section>
          </main>

          <footer className="history-footer">
              <p className="footer-text">想いを込めた花を、あなたの物語に。</p>
          </footer>
      </div>
  );
}

export default FlowerLanguageHistory;
