function getFlowerMatch() {
    const inputText = document.getElementById("inputText").value;

    // Flask APIへのリクエストを送信
    fetch('http://localhost:5000/api/flower_match', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: inputText })
    })
    .then(response => response.json())
    .then(data => {
        // 結果を表示
        let resultDiv = document.getElementById("result");
        resultDiv.innerHTML = `
            <h2> 手紙に合うお花一覧 </h2>
            ${data.flowers.map((flowerInfo) => `
                <div class="result-item" onclick="showDetails('${flowerInfo.image}', '${flowerInfo.qr_code}')">
                    ${
                        flowerInfo.image
                        ? `<img src="${flowerInfo.image}" alt="${flowerInfo.flower_label}" class="flower-image">`
                        : `<div class="flower-image">画像なし</div>`
                    }
                    <div class="flower-info">
                        <p><strong>お花:</strong> ${flowerInfo.flower_label}</p>
                        <p><strong>花言葉:</strong> ${flowerInfo.flower}</p>
                        <p><strong>類似度:</strong> ${flowerInfo.similarity.toFixed(3)}</p>
                    </div>
                </div>
            `).join('')}
        `;
    })
    .catch(error => {
        console.error('エラー:', error);
    });
}

function showDetails(imageUrl, qrCodeUrl) {
    // 花の画像を表示
    let flowerImageDiv = document.getElementById("flowerImage");
    flowerImageDiv.innerHTML = imageUrl 
        ? `<img src="${imageUrl}" alt="花の画像" width="300">`
        : '<p>画像がありません</p>';

    // QRコードを表示
    let qrCodeDiv = document.getElementById("qrCode");
    qrCodeDiv.innerHTML = qrCodeUrl 
        ? `<img src="${qrCodeUrl}" alt="QRコード" width="200">`
        : '<p>QRコードがありません</p>';
}
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const container = document.querySelector('.container');
    sidebar.classList.toggle('hidden');

    if (sidebar.classList.contains('hidden')) {
        container.style.marginLeft = '0';
    } else {
        container.style.marginLeft = '260px';  // サイドメニューが表示される幅
    }
}