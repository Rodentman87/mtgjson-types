# mtgjson-types

This repository holds TypeScript types for all the data available in the [mtgjson](https://mtgjson.com) project.

All the types for the available files are exported with the `File` suffix. Simply parse the JSON from the file as cast it with `as <...>File` to get type completions. For example:

```typescript
import { readFile } from "fs/promises";
import { join } from "path";
import { AllPrintingsFile } from "mtgjson-types";

const raw = await readFile(join(__dirname, "./AllPrintings.json"), "utf-8");
const json = JSON.parse(raw) as AllPrintingsFile;
```
