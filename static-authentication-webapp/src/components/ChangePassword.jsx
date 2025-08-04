import React from 'react'

function ChangePassword() {
  return (
    <>
      <div className="auth-container" id="set-password">
        <form action="/login" className="auth-form">
          <h2>Change your password</h2>
          <p>
            Your previous password has been invalid. Please set a new password for your account.
          </p>
          <input type="password" placeholder="Enter old password" required />
          <input type="password" placeholder="Enter new password" required />
          <input type="password" placeholder="Enter confirm password" required />
          <input type="submit" value="Change password" />
        </form>
        <div className="auth-image">
          <img src="/images/ForgotPasswordIcon.png" alt="Forgot Password Illustration" />
        </div>
      </div>
    </>
  )
}

export default ChangePassword
