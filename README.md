# SyncJS

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

SyncJS is a default await AltJS, basically SyncJS is JavaScript. You can use the "promise" function to use Promise for async execution.

## Usage

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

- a only reserved word "promise" without blackets also

## License

MIT License — see [LICENSE](LICENSE).