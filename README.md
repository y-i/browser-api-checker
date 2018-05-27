# browser-api-checker
ブラウザのAPIの実装の有無を調べてリスト化する

## 使用法
1. `get_api_list.py`でAPIリストの取得&テスト用JSの取得
1. `concat.sh`でJSをまとめてwebに配置
1. `server/server.js`を起動
1. dockerをビルドし起動
1. アクセスが来るのでそれが終了したら`node mergeresult.js`で各ブラウザの結果をまとめる
1. `poc.html`で結果を確認

## dockerの起動例
- buildはdockerディレクトリをビルド
- multi-ffという名前でビルドした場合
```docker run -e FIREFOX_VERSIONS=60.0.1,58.0.2 --name mff multi-ff```
  - `FIREFOX_VERSIONS`には取得したいFFのバージョンをコンマ区切りで渡す