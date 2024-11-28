from transformers import AutoTokenizer, AutoModel
import torch
import json
from sklearn.metrics.pairwise import cosine_similarity

# flower_quotes.jsonを読み込む
with open("flower_quotes.json", "r", encoding="utf-8") as f:
    flower_quotes = json.load(f)

# 日本語の事前学習モデルをロード
tokenizer = AutoTokenizer.from_pretrained("cl-tohoku/bert-base-japanese")
model = AutoModel.from_pretrained("cl-tohoku/bert-base-japanese")

# 文章をベクトル化する関数
def get_sentence_embedding(sentence):
    tokens = tokenizer(sentence, return_tensors="pt")
    with torch.no_grad():
        output = model(**tokens)
    return output.last_hidden_state.mean(dim=1)  # 平均をとってベクトル化

# flower_labelsにflower_quotesからデータを追加
flower_labels = {}
for flower, descriptions in flower_quotes.items():
    for description in descriptions:
        if description not in flower_labels:
            flower_labels[description] = []
        flower_labels[description].append(flower)

# 花言葉のベクトルを取得
flower_embeddings = {label: get_sentence_embedding(label) for label in flower_labels.keys()}

# 類似する花言葉を見つける関数
def find_most_similar_flowers(sentence, top_n=3):
    # 入力文章をベクトル化
    sentence_embedding = get_sentence_embedding(sentence)

    # 各花言葉との類似度を計算
    similarities = {label: cosine_similarity(sentence_embedding, embedding).item()
                    for label, embedding in flower_embeddings.items()}

    # 類似度が高い順に上位top_nの花言葉を取得
    sorted_similarities = sorted(similarities.items(), key=lambda x: x[1], reverse=True)[:top_n]

    # 最も似ている花言葉に対応する花の名前を取得
    corresponding_flowers = []
    for flower_label, similarity in sorted_similarities:
        corresponding_flowers.extend(flower_labels[flower_label])

    # 重複を除外して結果を返す
    corresponding_flowers = list(set(corresponding_flowers))
    return sorted_similarities, corresponding_flowers

# 例として文章を解析
input_sentence = "新しいことに挑戦するたびに、あなたと一緒なら頑張れるという気持ちがわきます。"
similar_flowers, corresponding_flowers = find_most_similar_flowers(input_sentence)

# 結果を表示
print("最も似ている花言葉 (Top 3):")
for flower, similarity in similar_flowers:
    print(f"  花言葉: {flower}, 類似度: {similarity}")

print(f"対応する花: {corresponding_flowers}")