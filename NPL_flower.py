from transformers import AutoTokenizer, AutoModel
import torch

# 日本語の事前学習モデルをロード
tokenizer = AutoTokenizer.from_pretrained("cl-tohoku/bert-base-japanese")
model = AutoModel.from_pretrained("cl-tohoku/bert-base-japanese")

# 文章をベクトル化する関数
def get_sentence_embedding(sentence):
    tokens = tokenizer(sentence, return_tensors="pt")
    with torch.no_grad():
        output = model(**tokens)
    return output.last_hidden_state.mean(dim=1)  # 平均をとってベクトル化
# 花言葉に対応するラベルのリスト
flower_labels = {
    "永遠の愛": "永遠の愛を象徴する感情",
    "友情": "友情を象徴する感情",
    "不滅": "不滅の思い",
    "結婚": "結婚の喜び",
    "誠実": "誠実な愛情"
}

# 花言葉のベクトルを取得
flower_embeddings = {label: get_sentence_embedding(description) for label, description in flower_labels.items()}


from sklearn.metrics.pairwise import cosine_similarity

# 類似する花言葉を見つける関数
def find_most_similar_flower(sentence):
    # 入力文章をベクトル化
    sentence_embedding = get_sentence_embedding(sentence)

    # 各花言葉との類似度を計算
    similarities = {label: cosine_similarity(sentence_embedding, embedding).item() 
                    for label, embedding in flower_embeddings.items()}

    # 最も類似度の高い花言葉を取得
    most_similar_flower = max(similarities, key=similarities.get)
    return most_similar_flower, similarities[most_similar_flower]

# 例として文章を解析
input_sentence = "あなたと共にいることで感じる深い信頼と幸せは、これからも続いてほしいと願っています。"
similar_flower, similarity_score = find_most_similar_flower(input_sentence)

print(f"最も似ている花言葉: {similar_flower}, 類似度: {similarity_score}")