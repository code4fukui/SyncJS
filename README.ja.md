# SyncJS

SyncJSはデフォルトで `await` が付与されるAltJSであり、基本的にはJavaScriptです。非同期実行にPromiseを利用するには、`promise` 関数を使用できます。

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

## Todo

- 唯一の予約語である `promise` を括弧なしでも使用できるようにする

## ライセンス

MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
