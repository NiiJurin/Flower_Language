import React, { useState } from 'react';
import './css/Flower_Diagnosis.css';

type Flower = {
    image: string | null;
    qr_code: string | null;
    flower_label: string;
    flower: string;
    similarity: number;
};

function Flower_Diagnosis() {
    const [inputText, setInputText] = useState('');
    const [result, setResult] = useState<Flower[]>([]);
    const [flowerImage, setFlowerImage] = useState<string | null>(null);
    const [qrCode, setQrCode] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const getFlowerMatch = async () => {
        if (!inputText.trim()) {
            setErrorMessage('手紙の内容を入力してください。');
            return;
        }

        try {
            setErrorMessage(null); // Reset error message
            const response = await fetch('http://localhost:5000/api/flower_match', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text: inputText }),
            });

            if (!response.ok) {
                throw new Error(`エラー: ${response.status}`);
            }

            const data = await response.json();
            setResult(data.flowers || []);
        } catch (error) {
            setErrorMessage('データ取得中にエラーが発生しました。もう一度試してください。');
            console.error(error);
        }
    };

    const showDetails = (image: string | null, qrCodeUrl: string | null) => {
        setFlowerImage(image);
        setQrCode(qrCodeUrl);
    };

    return (
        <div className="app">
            <div className="container">
                <h1>相手に送る手紙</h1>
                <textarea
                    id="inputText"
                    rows={4}
                    placeholder="文章を入力してください..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                ></textarea>
                <button onClick={getFlowerMatch}>送信</button>

                {errorMessage && <p className="error-message">{errorMessage}</p>}

                {result.length > 0 ? (
                    <div id="result">
                        <h2>手紙に合うお花一覧</h2>
                        <ul>
                            {result.map((flower, index) => (
                                <li
                                    key={index}
                                    className="result-item"
                                    onClick={() => showDetails(flower.image, flower.qr_code)}
                                >
                                    {flower.image ? (
                                        <img src={flower.image} alt={flower.flower_label} className="flower-image" />
                                    ) : (
                                        <div className="flower-image-placeholder">画像なし</div>
                                    )}
                                    <div className="flower-info">
                                        <p>
                                            <strong>お花:</strong> {flower.flower_label}
                                        </p>
                                        <p>
                                            <strong>花言葉:</strong> {flower.flower}
                                        </p>
                                        <p>
                                            <strong>類似度:</strong> {flower.similarity.toFixed(3)}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <p className="no-results">検索結果がありません。</p>
                )}

                {flowerImage && (
                    <div id="flowerImage">
                        <img src={flowerImage} alt="花の画像" width="300" />
                    </div>
                )}

                {qrCode && (
                    <div id="qrCode">
                        <img src={qrCode} alt="QRコード" width="200" />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Flower_Diagnosis;
