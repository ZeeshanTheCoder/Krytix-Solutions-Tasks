# KeyPass Auth

> Note: "KeyPass Auth" is just a sample name for this project.

KeyPass Auth is a React-based authentication template powered by [Vite](https://vitejs.dev/) for fast development and hot module replacement. It provides a minimal setup for building authentication flows such as login, signup, password reset, and dashboard navigation.

## Features

- **Login & Signup:** Users can sign up with their username, email, and password, or log in using their credentials.
- **Protected Routes:** Access to the dashboard is restricted to logged-in users only.
- **JWT Authentication:** Tokens are stored in `localStorage` or `sessionStorage` for maintaining the session.
- **Responsive Design:** The app is fully responsive, with a design optimized for both desktop and mobile devices.
- **Error Handling:** An error boundary component displays a message when something goes wrong in the app.
- **Forget Password:** Users can request a password reset link if they forget their password.
- **Reset Password:** Users can reset their password securely using the provided

## Project Structure

```
├── public/
│   ├── Logo.png
│   ├── icons/
│   └── images/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── components/
│       ├── ChangePassword.jsx
│       ├── Dashboard.jsx
│       ├── ErrorBoundary.jsx
│       ├── ForgetPassword.jsx
│       ├── Login.jsx
│       ├── Navbar.jsx
│       └── Signup.jsx
├── index.html
├── package.json
├── vite.config.js
├── bun.lockb
└── README.md
```

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Run development server:**
   ```sh
   npm run dev
   ```
3. **Build for production:**
   ```sh
   npm run build
   ```
4. **Preview production build:**
   ```sh
   npm run preview
   ```

## Scripts

- `dev`: Start development server
- `build`: Build for production
- `lint`: Run ESLint
- `preview`: Preview production build

## License

This project is licensed under the MIT

> Made with ❤️ by ZeeshanTheCoder
