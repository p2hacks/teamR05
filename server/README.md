# サーバー
## 仮想環境を作ろう!!
python3が入った状態で
`$ py -m venv [newenvname]`  
仮想環境アクティベート!!
`$ .\[newenvname]\Scripts\activate`
## やれ!! ↓
```$ pip install -r requirements.txt```  
ライブラリを追加した際は報告すること  
また、ライブラリを追加した際は```$ pip freeze > requirements.txt```を実行すること
## 起動方法について
仮想環境に入り必要なライブラリをインストールした状態で`$ python run.py`を実行する  
また、初回起動時は`$ python -c "import main.models; main.models.init()"`を実行する
## apiの仕様について
基本的には`https://p2server.herokuapp.com`にサーバーを構築する(基本的にサーバーは閉じているので使いたいときは連絡する slackなどで連絡)  

`/user`に対し`{"mail":"任意の文字列","address":"任意の文字列"}`のようなJSONをPOSTするとデータベースにユーザーが登録される

`/user/<user_mail>`に対しGETするとuser_mailに対応したユーザーのIDを取得できる

`/answer`に対し`{"id":整数値,"result":[要素数17の1から5の値の格納された配列]}`のようなJSONをPOSTすると質問結果を計算し解答をデータベースに格納する

`/answer/<user_mail>`に対しGETするとuser_mailに対応した質問結果を取得できる

`/all_users`に対しGETすると登録されているユーザーの一覧を取得できる
