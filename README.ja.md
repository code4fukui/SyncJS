# SyncJS

SyncJSは基本的にJavaScriptの上に構築されたプロミス処理のためのAltJS(代替JavaScript)言語です。
SyncJSでは、プロミスを手動で使用する必要なく、自動的にawaitを挿入することができます。

## デモ
デモはありません。

## 機能
- 「promise」関数を使ってプロミス処理を行うことができます
- awaitキーワードを自動的に挿入し、非同期処理を同期的に記述できます

## 必要環境
特に条件はありません。

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

## データ・API
使用していません。

## ライセンス
MITライセンスです。