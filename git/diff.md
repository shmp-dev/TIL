# git diff
## 使い方
### 引数なし
`git diff`
- ワーキングツリーとHEADを比較する
- add でステージングしたファイルは表示されない

### コミット番号を指定
`git diff {コミット番号}`
- ワーキングツリーと指定したコミットを比較する
- HEADの指定も可能

### ステージングとの比較
`git diff --staged`
`git diff --cached`
- ステージングとワーキングツリーを比較
- コミットを指定することも可能

### コミット同士を比較
`git diff {比較元コミット} {比較先コミット}`
- 古いコミット -> 新しいコミット の順で指定する