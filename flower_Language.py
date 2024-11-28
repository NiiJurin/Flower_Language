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
def find_most_similar_flower(sentence):
    # 入力文章をベクトル化
    sentence_embedding = get_sentence_embedding(sentence)

    # 各花言葉との類似度を計算
    similarities = {label: cosine_similarity(sentence_embedding, embedding).item()
                    for label, embedding in flower_embeddings.items()}

    # 最も類似度の高い花言葉を取得
    max_similarity = max(similarities.values())
    most_similar_flowers = [label for label, similarity in similarities.items() if similarity == max_similarity]

    # 最も似ている花言葉に対応する花の名前を取得
    corresponding_flowers = []
    for flower_label in most_similar_flowers:
        corresponding_flowers.extend(flower_labels[flower_label])

    # 重複を除外して結果を返す
    corresponding_flowers = list(set(corresponding_flowers))
    return most_similar_flowers, corresponding_flowers, max_similarity

# 例として文章を解析
input_sentence = input()
similar_flowers, corresponding_flowers, similarity_score = find_most_similar_flower(input_sentence)

# 結果を表示
print(f"最も似ている花言葉: {similar_flowers}")
print(f"対応する花: {corresponding_flowers}")
print(f"類似度: {similarity_score}")
