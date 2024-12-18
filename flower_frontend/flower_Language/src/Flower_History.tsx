import React from "react";
import "./css/Flower_History.css";

function FlowerHistory() {
  return (
    <section className="flower-history">
      {/* セクションタイトル */}
      <div className="section-header">
        <h1 className="section-title">花言葉の歴史</h1>
        <p className="section-subtitle">花が語る物語</p>
      </div>

      {/* コンテンツカード */}
      <div className="content-cards">
        <div className="card">
          <div className="card-image">
            <img src="path/to/image1.jpg" alt="起源の花" />
          </div>
          <div className="card-text">
            <h2 className="card-title">花言葉の起源</h2>
            <p className="card-description">
              花言葉の歴史は、古代文明にまで遡ります。古代エジプトやギリシャ、ローマでは、花は神々への捧げ物や愛の象徴として扱われました。
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-image">
            <img src="path/to/image2.jpg" alt="メッセージの花" />
          </div>
          <div className="card-text">
            <h2 className="card-title">Message</h2>
            <p className="card-description">
              花は友情、愛情、感謝、そして別れなど、様々な感情を表現します。手紙に添える花言葉は、心を伝え、強い記憶を残すことができます。
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-image">
            <img src="path/to/image3.jpg" alt="未来の花" />
          </div>
          <div className="card-text">
            <h2 className="card-title">Future</h2>
            <p className="card-description">
              現代でも、花言葉は未来へ続く愛の象徴です。特別な日や何気ない瞬間、花が心に残るメッセージを伝えます。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FlowerHistory;