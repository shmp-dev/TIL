# git rebase
## 使い方
### ブランチを操作する
`git rebase {branch}`
カレントブランチを`{branch}`で指定したブランチの後ろに繋げる。

### コミットを操作する
`git rebase -i HEAD~5`
`git rebase -i {変更したいコミットの一つ前のコミットのハッシュ}`
- `-i`：`--interactive` のエイリアス
- `HEAD~5`：HEADから数えて5つ前のコミット

指定したコミットからのコミットログが表示される

▼コミットログ
```
pick a2a2309 [WebAPI]WebAPIについてを追記
pick f28ee21 [WebAPI]推敲前の記事をアップ
pick 3d9cd95 [DeepLink]バンドルIDの確認方法を記述
pick c447acc [DeepLink]DeepLink, Deferred DeepLink 関連の技術について
```

### rebase を中断したい場合
1. エディタ（ターミナル）を閉じる
2. `git rebase --abort`を実行

## 一つのコミットを分割する手順
直前のコミットを分割したい場合

1. `git rebase -i HEAD~`で、Interactive Rebase を実行

```
pick 12345678 A
```

2. 対象のコミットを`edit`に変更してエディタを閉じる

```
edit 12345678 A
```

3. rebase の状態でワークスペースが操作可能になる
   
4. `git reset HEAD~`を実行し、コミットの内容をワーキングツリー（作業ディレクトリ）に戻す

5. コミットを適切な形に再作成する
   1. 元々一つのコミットだったファイル群を、いくつかのコミットに分割する

6. `git rebase --continue` で、リベースを終了する

※手順中に操作をミスした場合、`git rebase --abort`で中断すれば、rebase前の状態に戻る。

## 参考
- https://qiita.com/syamobariyuta/items/dac76bd6c2821bbec080
- https://dev.classmethod.jp/articles/squashing-multiple-commits-in-git/