
# GitHub Repository Search Dashboard

A simple full-stack app that allows users to search for GitHub repositories using the GitHub REST API and display results in a styled dashboard.

## 🚀 Features
- Search GitHub repositories by keyword.
- Displays repository name, stars, and link to GitHub.
- Stores search results temporarily in backend.
- Frontend styled with Tailwind CSS.

---

## 🛠️ Tech Stack
- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **API**: GitHub REST API

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/nitin00201/githun-app.git
cd githun-app
````

### 2. Backend Setup

```bash
cd github-mini-app-backend
npm install
```

Create a `.env` file in the `github-mini-app-backend/` folder:

```
GITHUB_TOKEN=your_github_pat_here
PORT=4000
```

Run the backend:

```bash
npm start
```

The backend will run on **[http://localhost:4000](http://localhost:4000)**

---

### 3. Frontend Setup

```bash
cd github-mini-app-frontend
npm install
```

Run the frontend:

```bash
npm run dev
```

The frontend will run on **[http://localhost:5173](http://localhost:5173)** .

---

## ✅ Usage

1. Open the frontend in your browser.
2. Enter a search query (e.g., "react").
3. View repository results in a simple dashboard.

---

## 📌 Notes

* You need a GitHub **Personal Access Token** (classic, with `public_repo` scope) to avoid rate limiting.
* Update the backend `.env` file with your token.

---

