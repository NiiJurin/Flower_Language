from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from transformers import AutoTokenizer, AutoModel
import torch
from sklearn.metrics.pairwise import cosine_similarity
import json

app = Flask(__name__)
CORS(app)  # CORSを有効化

# モデルとトークナイザーのロード
tokenizer = AutoTokenizer.from_pretrained("cl-tohoku/bert-base-japanese")
model = AutoModel.from_pretrained("cl-tohoku/bert-base-japanese")

# flower_quotes.jsonのロード（適宜flower_quotes.jsonのパスを指定）
with open("flower_quotes.json", "r", encoding="utf-8") as f:
    flower_quotes = json.load(f)

# flower_embeddingsの計算
flower_embeddings = {
    label: torch.tensor(model(**tokenizer(label, return_tensors="pt", truncation=True, max_length=512))
                        .last_hidden_state.mean(dim=1).squeeze().detach().numpy())
    for label in flower_quotes.keys()
}

# ルートエンドポイント (フロントエンドの提供)
@app.route('/')
def index():
    return render_template('index.html')

# 類似する花言葉を見つけるAPIエンドポイント
@app.route('/api/flower_match', methods=['POST'])
def flower_match():
    data = request.get_json()
    input_text = data['text']

    # 入力文のベクトルを計算
    tokens = tokenizer(input_text, return_tensors="pt", truncation=True, max_length=512)
    with torch.no_grad():
        output = model(**tokens)
    input_embedding = output.last_hidden_state.mean(dim=1).squeeze()

    # 各花言葉との類似度を計算
    similarities = {
        label: cosine_similarity(
            input_embedding.unsqueeze(0).numpy(),
            embedding.unsqueeze(0).numpy()
        ).item()
        for label, embedding in flower_embeddings.items()
    }

    # 類似度が高い順に上位10個の花言葉を取得
    sorted_similarities = sorted(similarities.items(), key=lambda x: x[1], reverse=True)[:10]
    similar_flowers_info = [
        {"flower": flower_quotes[flower_label], "flower_label": flower_label, "similarity": similarity}
        for flower_label, similarity in sorted_similarities
    ]

    return jsonify({"flowers": similar_flowers_info})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
