# 🧠 React Context Dashboard with Registration (Vite + TypeScript)

This project demonstrates the use of **React Context API** to manage global state (`username`) and share it across multiple nested components. It includes a simple **user registration form** that updates context data in real time.

---

## 🧩 Features

### 🌐 Global State with Context
- Uses `createContext`, `useContext`, and `useState` to manage user identity
- Global `username` can be accessed by any component without props

### 🖥️ Component Structure
- `Dashboard` includes:
  - `Header`: Displays the current user's name
  - `Sidebar`: Also shows the username and some navigation links
  - `RegisterForm`: A form where the user enters their name

### ✍️ Live Interaction
- User inputs their name in a form
- Name is instantly visible in Header and Sidebar through Context

### 🎨 Clean Layout
- Fully styled using CSS Modules
- Modular, responsive design

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Dashboard.tsx
│   ├── Header.tsx
│   ├── Sidebar.tsx
│   ├── RegisterForm.tsx
│   ├── Dashboard.module.css
│   ├── Header.module.css
│   ├── Sidebar.module.css
│   └── RegisterForm.module.css
├── context/
│   └── AppContext.tsx
├── App.tsx
├── main.tsx
├── index.css
├── App.css
└── vite-env.d.ts
```

---

## 🚀 Running Locally

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```

Open your browser at:  
👉 **http://localhost:5173**

---

## 🌐 Deployment

You can deploy this app to any static host like **Vercel** or **Netlify**.

### Example for Vercel:
```bash
npm install -g vercel
vercel
```

---

## 🧠 Technologies Used

- ⚛️ React + TypeScript
- 🌍 React Context API
- 🧩 Vite
- 🎨 CSS Modules

---

## 👉 Live Demo

**Live Deployment:**  
[https://r7-roan.vercel.app/](https://r7-nadiias-projects-dc6d9292.vercel.app/)

