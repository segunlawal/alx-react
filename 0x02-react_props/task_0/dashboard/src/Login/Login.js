import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <>
      <div className="App-body">
        <p>Login to access the full dashboard</p>

        <div className="App-credentials">
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" />
          </div>
          <button type="submit">OK</button>
        </div>
      </div>
    </>
  );
};

export default Login;
