# pull

## リモートリポジトリをpullする前に、ローカルリポジトリにコミットしてしまった場合
git pull すると、以下の警告が表示される

```
% git pull
hint: You have divergent branches and need to specify how to reconcile them.
hint: You can do so by running one of the following commands sometime before
hint: your next pull:
hint: 
hint:   git config pull.rebase false  # merge
hint:   git config pull.rebase true   # rebase
hint:   git config pull.ff only       # fast-forward only
hint: 
hint: You can replace "git config" with "git config --global" to set a default
hint: preference for all repositories. You can also pass --rebase, --no-rebase,
hint: or --ff-only on the command line to override the configured default per
hint: invocation.
```

このメッセージは、git pull を実行した際に、ローカルブランチとリモートブランチが分岐している（つまり、双方に異なるコミットがある）ため、どの方法でブランチを統合するかをGitに指示する必要があることを示しています。

> `git config pull.rebase false  # merge`
マージコミットを作成してpullする

> `git config pull.rebase true   # rebase`
リベースしてpullする
（ローカルのコミットをリモートブランチの上に再適用して、履歴をきれいに保ちます。）

> `git config pull.ff only       # fast-forward only`

[fast-forwardマージから理解するgit rebase #Git - Qiita](https://qiita.com/vsanna/items/451b42f886c599a16a55)


メッセージに書いてある通り、git config でリポジトリ単位で動作を決定しても良いですが、git pull オプションで対応可能。

リベースしたい場合は、`git pull --rebase`でOK