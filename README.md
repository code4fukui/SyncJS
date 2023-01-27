# SyncJS

- SyncJS is a default await AltJS, basically SyncJS is JavaScript.
- You can use "promise" function to to use Promise for async execution.

```JavaScript
f();
sleep(1000);
const p = promise(f());
```
→
```JavaScript
await f();
await sleep(1000);
const p = f();
```

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
