# tsboilerplate

A simple boilerplate for a traditional TypeScript NPM package without "bin".

## How to Use It

1. Clone this git repository
2. Restart a completely new git history
3. Edit following five fields in package.json
    - name
    - version
    - description
    - license
    - repository
4. Edit LICENSE.txt
5. Edit README.md (this file)

## Decisions

- Files
    - .gitignore
    - LICENSE.txt
    - README.md
    - package.json
        - engines
        - main
        - types
        - files
        - scripts
        - devDependencies
            - `@types/node@^10.0.0`
            - `gts@1.1.0`
            - `typescript@~3.6.0`
    - tsconfig.json
        - ./node_modules/gts/tsconfig-google.json
    - tslint.json and prettier.config.js (`gts@1.1.0`)
        - ./node_modules/gts/tslint-rules.json
        - ./node_modules/tslint-config-prettier/lib/index.json
        - The only change from `gts@1.1.0` is that I set the rule
          `no-inferrable-types` to `false` because usually I want to
          explicitly state the type of a variable.

## Development Notes

- Only `.ts` files under `src/`.
- No `I` prefix to interface.
- No `default` exports.  Use named exports.
- No `any`.  Use `unknown` and strict type guards for untrusted data.
- Analyze and catch all possible exceptions from 3rd-party libraries.
- For most of the projects, just use `npm`.  No need to use `yarn`.
- If there are too many subpackages, survey tools like `lerna`.
- Only tested on Linux and macOS.  Not sure if it works on Windows.
- Run `npm run build` to check format (tslint and prettier) and compile code.

## How Git Should Be Used

- branches
- tags
- commit messages
- commit history DAG

## Unit Tests

The dependency tree of Jest is tedious.  Find a minimalist TypeScript unit
test framework with "watch" capability.

```
    "test": "jest",
    "test:watch": "jest --watch",
```

## Integration Tests

Just write scripts that import from relative path.

```
    "test:integration:js": "   node src/tests/index.js",
    "test:integration:ts": "ts-node src/tests/index.ts",
```
