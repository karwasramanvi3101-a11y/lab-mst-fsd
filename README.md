# Post Box with Character Counter

## Aim
Create a React Post Box with a controlled textarea, live character counter, limit warning, and disabled Post button when invalid.

## Features
- Controlled textarea using `useState`
- Live character counter: `current / 100`
- Red "Limit exceeded" message above 100 characters
- Post button disabled when text is empty or exceeds 100 characters

## Run in VS Code

```bash
npm install
npm run dev
```

Then open the localhost URL shown in the terminal.

## Folder Structure

```text
post-box/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── App.jsx
    ├── App.css
    ├── index.css
    └── main.jsx
```
