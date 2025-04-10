# 🔐 Full-Stack Login App

A full-stack login system built with **React + TypeScript** (frontend) and **Node.js + Express + Prisma** (backend). This app replicates a login interface from a Figma design and handles secure user authentication using hashed passwords.

---

## 📸 Screenshot

![Login Screenshot](https://github.com/user-attachments/assets/3ec24ebd-6145-48e6-8b22-e339baf7702c)

---

## 🎥 Recorded Demo

📽️ [Watch the Demo Video](https://drive.google.com/file/d/1ZRxrhNBYBlLCXkYcE68KqpWYui52F7j4/view?usp=sharing)

---

## 📌 Features

- 🔒 Secure user login with bcrypt
- ⚛️ React with TypeScript for scalable UI
- 🧩 Form validation using React Hook Form + Zod
- 📦 API integration with React Query
- 🎯 Type-safe backend using TypeScript + Prisma
- 🛡 Robust error handling on both frontend and backend

---

## 📁 Project Structure

fullstack-login-app/
├── frontend/      # React + TypeScript client
│   └── src/
│       ├── components/     # UI Components
│       ├── hooks/          # Custom business logic hooks
│       ├── pages/          # Page-level components
│       └── api/            # API handler modules
├── backend/       # Node.js + Express + Prisma server
│   └── src/
│       ├── controllers/    # Business logic
│       ├── routes/         # API route definitions
│       ├── middleware/     # Global error handlers
│       └── prisma/         # Prisma DB Client
⚙️ Tech Stack
Frontend-> React, TypeScript, React Hook Form, Zod, React Query, Tailwind CSS, Axios

Backend-> Node.js, Express, Prisma ORM, TypeScript, SQLite, Bcrypt

## 🚀 Getting Started

### 📦 Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

---

## 🔧 Backend Setup
Navigate to backend:

```bash
cd backend

cd backend
Install dependencies:

npm install
Set up Prisma schema:

npx prisma migrate dev --name init
Run the server:

npx ts-node src/index.ts
The server runs at: http://localhost:5000
```

## 💻 Frontend Setup
Navigate to frontend:

cd frontend
Install dependencies:
npm install
Run the frontend dev server:
npm run dev
The app runs at: http://localhost:5173 (if using Vite)

🌐 API Endpoint
Method	Endpoint	Description
POST	/api/login	User login
Request Body

{
  "email": "user@example.com",
  "password": "yourpassword"
}
Response Example

{
  "message": "Login successful",
  "user": {
    "email": "user@example.com"
  }
}
🎥 Demo Instructions (For Submissions)
Record yourself running the project locally.

Demonstrate:

Valid and invalid login

Frontend validations and error messages

Backend error responses

Briefly show the folder structure and code

Upload video to Google Drive and share the link

🛡 Error Handling
Frontend:

Shows inline validation errors

Alerts on API failure

Backend:

Graceful 401 Unauthorized and 500 Server Error responses

Global middleware to catch unhandled errors

🧪 Sample Credentials
You can manually create a test user by running:

ts
Copy
Edit
// In backend, temporary script
import bcrypt from 'bcrypt';
const hashed = await bcrypt.hash('test123', 10);

// Then create a user in SQLite using Prisma Studio
npx prisma studio
Or use the Prisma seed/migration process.

📄 License
This project is for academic/internship purposes only. Do not redistribute.

