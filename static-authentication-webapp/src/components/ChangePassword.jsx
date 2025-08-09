import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ChangePassword() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError('New password and confirm password do not match.');
      return;
    }
    navigate('/login');
  };

  return (
    <>
      <div className="auth-container" id="set-password">
        <form onSubmit={handleSubmit} className="auth-form">
          <h2>Change your password</h2>
          <p>
            Your previous password has been invalid. Please set a new password for your account.
          </p>

          {error && <p style={{ color: 'red' }}>{error}</p>}

          <input
            type="password"
            placeholder="Enter old password"
            required
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter new password"
            required
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter confirm password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <input type="submit" value="Change password" />
        </form>

        <div className="auth-image">
          <img src="/images/ForgotPasswordIcon.png" alt="Forgot Password Illustration" />
        </div>
      </div>
    </>
  );
}

export default ChangePassword;
