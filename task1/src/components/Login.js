import React from 'react';
import NavBar from './NavBar';
import './Login.css';

function Login() {
  return (
    <div>
      <NavBar />
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>

  );
}

export default Login;
