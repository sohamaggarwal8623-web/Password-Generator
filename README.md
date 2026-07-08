# 🔐 Password Generator

A simple password generator built with **React** and **Vite**, styled with **Tailwind CSS**. Choose a length, toggle special characters and numbers, and copy the generated password to your clipboard with one click.

## ✨ Features

- **Adjustable length** — drag the slider to pick a password length (4–50).
- **Include special characters** — toggle `@#&!$%^*?+` on or off.
- **Include numbers** — toggle `0123456789` on or off.
- **Live generation** — the password regenerates automatically whenever you change an option.
- **One-click copy** — copy the password straight to your clipboard.

## 🛠️ Tech Stack

- [React](https://react.dev/) (hooks: `useState`, `useCallback`, `useEffect`)
- [Vite](https://vite.dev/) (dev server + build)
- [Tailwind CSS](https://tailwindcss.com/) (styling)

## 🚀 Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd password
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).

## 📦 Available Scripts

| Command           | What it does                          |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Start the local development server    |
| `npm run build`   | Build the app for production          |
| `npm run preview` | Preview the production build locally  |
| `npm run lint`    | Run ESLint on the project             |

## 📖 How It Works

The app keeps its state in React hooks:

- `password` — the generated password shown in the input box.
- `length` — the current slider value.
- `character` / `number` — whether special characters and numbers are included.

Whenever `length`, `character`, or `number` changes, a `useEffect` re-runs the `passwordGenerator` function (wrapped in `useCallback`) to build a fresh password from the selected character set.

---

Built as a React learning project. 🚀
