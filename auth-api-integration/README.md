# KeyPass Auth

> **Note:** "KeyPass Auth" is just a sample name for this project.

## 🚀 Live Demo
[https://key-pass-auth.vercel.app/](https://key-pass-auth.vercel.app/)

This is a React-based authentication application that allows users to log in, sign up, and access a protected dashboard. The app includes protected routes, error handling, JWT token management, and a responsive design for desktop and mobile views.

## Features
- **Login & Signup:** Users can sign up with their username, email, and password, or log in using their credentials.
- **Protected Routes:** Access to the dashboard is restricted to logged-in users only.
- **JWT Authentication:** Tokens are stored in localStorage or sessionStorage for maintaining the session.
- **Responsive Design:** The app is fully responsive, with a design optimized for both desktop and mobile devices.
- **Error Handling:** An error boundary component displays a message when something goes wrong in the app.

## Folder Structure
```
src/
├── components/
│   ├── Dashboard.jsx     # Dashboard component (Displays user details and session info)
│   ├── ErrorBoundary.jsx # ErrorBoundary component (Handles errors)
│   ├── Login.jsx         # Login component (Handles user authentication)
│   ├── Navbar.jsx        # Navbar component (Displays the navigation bar)
│   ├── Signup.jsx        # Signup component (Handles user registration)
├── App.jsx               # (Handles routes and layout)
├── index.css             # (Global styles)
└── main.jsx              # Entry point (Renders the App component)

```

## Key Components

### 1. App.jsx
- The main entry point of the application.
- Contains routes and navigation for the login, signup, and dashboard pages.
- Uses react-router-dom for routing.

### 2. Navbar.jsx
- Displays the navigation bar with a logo.
- Placeholder for a logout button.

### 3. Login.jsx
- Collects username and password
- Sends data to `https://os-project-server.vercel.app/auth/existinguser`
- "Remember Me" feature (stores token in localStorage or sessionStorage)
- Redirects to Dashboard on successful login

### 4. Signup.jsx
- Collects username, email, password, and agreement to terms
- Sends data to `https://os-project-server.vercel.app/auth/newuser`
- Redirects to Login page on successful registration

### 5. Dashboard.jsx
- Displays user information after successful login.
- Decodes the JWT token and shows the user's ID, session creation time, and expiration time.
- Contains a logout button that clears session storage and redirects to the login page.

### 6. ErrorBoundary.jsx
- Catches JavaScript errors anywhere in the app and displays a fallback UI.

## Styles

### index.css
- The index.css file contains global styles and utility classes for the app:
  - Variables: CSS variables for primary colors, text colors, input styles, button hover states, and font families.
  - Responsive Layout: Flexbox and media queries are used to create a responsive design.
  - Forms: Styles for input fields, buttons, and form containers.
  - Navbar: Positioned at the top with a logo.
  - Social Media Icons: Hover effect added for icons.
  - Error Boundary: A fallback UI displayed when an error occurs.

## Getting Started

### Prerequisites
- Node.js (v16 or above recommended)
- npm or bun (package manager)

### Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/ZeeshanTheCoder/Krytix-Solutions-Tasks.git
   cd Krytix-Solutions-Tasks
   cd auth-api-integration
   ```
2. **Install Dependencies**
   ```sh
   npm install
   ```
3. **Run the Application**
   ```sh
   npm run dev
   ```
   The app will run on http://localhost:5173.

## Usage
- **Sign up:** Visit the /signup page to create a new account.
- **Login:** After signing up, visit the /login page to log in with your credentials.
- **Dashboard:** Once logged in, you will be redirected to the dashboard page where you can view your session details.

## Error Handling
If something goes wrong, the ErrorBoundary component will display an error message. For instance, in the case of an API failure or invalid JWT token, the user will be redirected to the login page with an error message.

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
This project is open source and available under the MIT License.

---

> Made with ❤️ by ZeeshanTheCoder
