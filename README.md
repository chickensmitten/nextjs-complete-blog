# Complete Next JS Blog

Shift + Option + F to instant format the code.
You can find it in VSCode -> Preferences -> Keyboard Shortcuts -> Search for "format documents"

## npm dependencies

```
npm install react-markdown@6.0.3
npm install gray-matter
npm install react-syntax-highlighter
npm install mongodb
```

## Deployment Checklist
- `next build` requires node JS.
- `next export` will only deploy to static form.

use `npm start` after `npm run build`. It will be much faster than `npm run dev`, cause the deployed files are much faster.

Deployment Steps & Considerations
1. Page metadata, optimised code, remove useless dependencies
2. Setup proper environment variables
3. Test build locally or in remote server
4. Deploy!