# Contribution Meter

このレポジトリは、githubのコントリビューションを取得するためのコードを書いています。
npmに登録して誰でも簡単に使えるコマンドを作成することが目標です。

# 開発環境の注意点

-   `git config core.hooksPath .githooks`
-   もし実行権限がない場合は、`chmod +x .githooks/pre-commit`

# UPDATE LOG

-   2023/08/01: 現在はcloneしてきて、`npm link` することで、`gcontri` コマンドが使用できます。
