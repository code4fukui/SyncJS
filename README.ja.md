# SyncJS

SyncJSは、基本的にJavaScriptの上に構築されたプロミス処理のためのAltJS言語です。SyncJSを使うと、プロミスを手動で使う必要がなく、自動的にawaitを挿入することができます。

## 機能

- 「promise」関数を使ってプロミス処理を行うことができます
- awaitキーワードを自動的に挿入し、非同期処理を同期的に記述できます

## 使い方

```JavaScript
import syncjs from "https://code4fukui.github.io/SyncJS/syncjs.js";

const src = `
f();
sleep(1000);
const p = promise(f());
`;
console.log(syncjs(src));
```

## ライセンス

MITライセンスです。