import React from 'react'

function ErrorBoundary() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Oops! Something went wrong.</h2>
      <p>Please try again later or go back to <a href="/">Login</a>.</p>
    </div>
  );
};

export default ErrorBoundary
