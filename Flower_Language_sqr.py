import requests
from bs4 import BeautifulSoup
import re
import json
import os

# 対象のURL
url1 = "https://www.akikusa.ac.jp/bunhyo/web2018/21764127/main.html"
url2 = "https://www.akikusa.ac.jp/bunhyo/web2018/21764127/main2.html"
url3 = "https://www.akikusa.ac.jp/bunhyo/web2018/21764127/main3.html"
url4 = "https://www.akikusa.ac.jp/bunhyo/web2018/21764127/main4.html"

# ページを解析する関数
def Page(url, n=5):
    # Webページのコンテンツを取得
    response = requests.get(url)
    response.encoding = response.apparent_encoding
    html_content = response.text

    # BeautifulSoupでHTMLを解析
    soup = BeautifulSoup(html_content, "html.parser")

    # 'h3'タグとそれに続く情報をn回セットで抽出する
    def extract_n_sets(soup, n=5):
        results = []
        extracted_dict = {}  # タイトルと「」の抽出結果を保存する辞書

        for idx, h3_tag in enumerate(soup.find_all("h3", id=True)):
            # 'h3'タグのタイトル
            h3_text = h3_tag.text.strip()

            # 'h3'タグに続く'a'タグを取得
            a_tag = h3_tag.find_next("a")
            if a_tag:
                img_tag = a_tag.find("img")
                if img_tag:
                    image_src = a_tag["href"] if "href" in a_tag.attrs else None
                    image_alt = img_tag.get("alt", "No description")

                    # 'h3'タグの次にある'table'タグから情報を取得
                    table_tag = h3_tag.find_next("table")
                    table_info = ""
                    flower_language = ""
                    flower_description = ""
                    extracted_quotes = []

                    if table_tag:
                        # 花の情報部分を取得
                        td_tags = table_tag.find_all("td")
                        for td_tag in td_tags:
                            if td_tag.get("bgcolor") == "#ffeb5b":  # 花言葉部分を取得
                                flower_language = td_tag.text.strip()
                            elif td_tag.get("height") == "34":  # 基本情報部分を取得
                                table_info = td_tag.text.strip()
                            else:  # 残りの説明部分を取得
                                flower_description += td_tag.text.strip()

                        # 説明の中から「」に囲まれた部分を抽出
                        extracted_quotes = re.findall(r'「(.*?)」', flower_description)

                    # セットとして格納
                    data = {
                        "h3_text": h3_text,
                        "image_src": image_src,
                        "image_alt": image_alt,
                        "table_info": table_info,
                        "flower_language": flower_language,
                        "flower_description": flower_description.strip(),
                        "extracted_quotes": extracted_quotes
                    }
                    results.append(data)

                    # タイトルと「」内の抽出結果を辞書に保存
                    if extracted_quotes:
                        extracted_dict[h3_text] = extracted_quotes

            # n回分だけ抽出
            if len(results) >= n:
                break

        return results, extracted_dict

    # n回セットを取得
    sets, extracted_dict = extract_n_sets(soup, n=n)

    # 結果を表示
    for i, set_data in enumerate(sets):
        print(f"セット {i+1}:")
        print(f"  タイトル: {set_data['h3_text']}")
        print(f"  花言葉: {set_data['flower_language']}")
        print(f"  説明: {set_data['flower_description']}")
        print(f"  「」内の抽出結果: {set_data['extracted_quotes']}")
        print("-" * 30)

    # 辞書の内容を表示
    print("\nタイトルと「」内の抽出結果の辞書:")
    for title, quotes in extracted_dict.items():
        print(f"タイトル: {title}, 花言葉: {quotes}")

    # 辞書の内容をJSONファイルに出力
    output_file = "flower_quotes.json"

    # 既存のJSONファイルを読み込む
    if os.path.exists(output_file):
        with open(output_file, "r", encoding="utf-8") as f:
            existing_data = json.load(f)
    else:
        existing_data = {}

    # 新しいデータを既存の辞書に追加
    existing_data.update(extracted_dict)

    # 更新された辞書をJSONファイルに保存
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(existing_data, f, ensure_ascii=False, indent=4)

    print(f"\n抽出結果を {output_file} に保存しました。")

# main関数
def main():
    Page(url1, 55)
    Page(url2, 55)
    Page(url3, 55)
    Page(url4, 55)  
if __name__ == "__main__":
    main()