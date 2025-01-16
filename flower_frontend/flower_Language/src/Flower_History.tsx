import React from "react";
import "./css/Flower_History.css";

function FlowerHistory() {
  return (
    <div className="app">
      <section className="flower-history">
        {/* セクションタイトル */}
        <div className="section-header">
          <h1 className="section-title">花言葉の歴史</h1>
          <p className="section-subtitle">花が語る物語</p>
        </div>

        {/* コンテンツカード */}
        <div className="content-cards">
          <div className="card">
            <div className="card-image-left">
              <img src="/assets/flower_of_origin.png" alt="起源の花" />
            </div>
            <div className="card-text">
              <h2 className="card-title">花言葉の起源</h2>
              <p className="card-description">
                花言葉の歴史は、古代文明にまで遡ります。古代エジプトやギリシャ、ローマでは、花は神々への捧げ物や愛の象徴として扱われました。
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-image-right">
              <img src="/assets/flower_message.png" alt="花がもたらすメッセージ" />
            </div>
            <div className="card-text">
              <h2 className="card-title">花がもたらすメッセージ</h2>
              <p className="card-description">
                花は愛、友情、感謝、そして別れなど、様々な感情を表現します。
                バラは愛を、リリーは純粋さを、スミレは誠実さを象徴します。

                手紙とともに送られる花は、想いを形に変え、忘れられない記憶を作ります。
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-image-left">
              <img src="/assets/flower_future.png" alt="未来の花" />
            </div>
            <div className="card-text">
              <h2 className="card-title">未来へ続く花言葉</h2>
              <p className="card-description">
                現代でも、花言葉や愛や友情の象徴として生き続けています。
                特別な日や何気ない瞬間、一輪の花が心に響くメッセージを伝えます。

                花に込められた想いは、時代を超え、これからも永遠に受け継がれていくでしょう。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FlowerHistory;
