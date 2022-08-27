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

## Installing

For now you'll need to clone the repository from GitHub, then build and install it yourself locally.

```bash
# clone the code
git clone https://github.com/Rodentman87/mtgjson-types.git

# move into the directory
cd mtgjson-types

# install dependencies
yarn install

# build the code
yarn run build
```

Then use something like [yarn link](https://classic.yarnpkg.com/en/docs/cli/link) or [yalc](https://github.com/wclr/yalc) to install it locally.
