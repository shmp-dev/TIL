# CORS
## CORS とは
CORS(Cross-Origin Resource Sharing) / オリジン間リソース共有

> オリジン間リソース共有 (Cross-Origin Resource Sharing, CORS) は、追加の HTTP ヘッダーを使用して、あるオリジンで動作しているウェブアプリケーションに、異なるオリジンにある選択されたリソースへのアクセス権を与えるようブラウザーに指示するための仕組みです。
> ウェブアプリケーションは、自分とは異なるオリジン (ドメイン、プロトコル、ポート番号) にあるリソースをリクエストするとき、オリジン間 HTTP リクエストを実行します。
> [オリジン間リソース共有 (CORS) - HTTP | MDN](https://developer.mozilla.org/ja/docs/Web/HTTP/CORS)

簡単にいうと、

**異なるオリジン間でもHTTP通信を可能にする技術**

です。


## オリジンとは
オリジンとは、URLのうち「スキーム」「ホスト（ドメイン）」「ポート番号」によって定義されます。

https://www.sub.example.com/hoge/fuga

というURLがあった場合、

https://www.sub.example.com:443

がオリジンです。

※通常、URL中のポート番号は省略されますが、オリジンの定義にはポート番号まで含みます。

https://www.sub.example.com:443/top/page
は同じオリジンです。

https://mail.sub.example.com:443
や、
http://www.sub.example.com:80

などは異なるオリジンとなります。

[Origin (オリジン) - MDN Web Docs 用語集: ウェブ関連用語の定義 | MDN](https://developer.mozilla.org/ja/docs/Glossary/Origin)