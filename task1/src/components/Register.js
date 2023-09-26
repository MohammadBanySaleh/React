import React from 'react';
import './Register.css';
import NavBar from './NavBar';

function Register() {
  return (
    <div>
      <NavBar />
      <div className="register-container">
        <h2>Register</h2>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>

  );
}

export default Register;
