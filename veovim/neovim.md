# この文章はneovimで作成しています

lazyvimをインストールしてみました

# 現在の執筆環境
- ターミナルエミュレータ：ghostty
- エディタ：neovim(lazyvim)
- AI支援： (予定)claude code

# neovim 設定手順
1. configファイルを作成する
2. vim.keymap.set("i", "jj", "<Esc>", { noremap = true, silent = true })


# vim の問題点
vimの操作にも慣れてきた気がするが、やはりカーソル操作をするたびにモード切り替えが発生するのが気になっている。
jjを入力することでエスケープできる設定にしたが、日本語入力中の場合はいちいちIMEを切り替える必要がある。
（日本語入力中にjjを入力しても意味ない）
そう思うと、日本語入力と相性が良いのはemacsの方なのかもしれない。
でも、どうせノーマルモードを操作するために英字入力に切り替える必要があるから、別にいいのかな？
この問題の解決策を検討中...


→ NextAction
一度emacsの方も検討してみる
でも、lazy系のツールなどのようにvim操作が前提になっているツールが多い気がするので、vim派の方が良いかな

# lazyvim の使い方

まずlazyvim にはどんなプラグインがプリインストールされているのか気になる
追って確認したい

以下のサイトがとてもよかった
- [lazyvimの操作方法 - zenn](https://zenn.dev/tositada/articles/b9190cce45812f)
- [lazyvimのプラグイン管理](https://zenn.dev/vim_jp/articles/31e60fbf12712b)

