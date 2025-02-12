import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Authform() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Router>
      <div className="container">
        <div className="form-container">
          <div className="form-toggle">
            <button
              className={isLogin ? "active" : ""}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button
              className={!isLogin ? "active" : ""}
              onClick={() => setIsLogin(false)}
            >
              Signup
            </button>
          </div>
          {isLogin ? (
            <>
              <div className="form">
                <h2>Login Form</h2>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                {/* Link to forgot password page */}
                <Link to="/forgot-password">Forgot Password</Link>
                <button>Login</button>
                <p>
                  Not a Member?{" "}
                  <a href="#" onClick={() => setIsLogin(false)}>
                    Signup now
                  </a>
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="form">
                <h2>Signup Form</h2>
                <input type="text" placeholder="Username" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <button>SignUp</button>
              </div>
            </>
          )}
        </div>

        {/* Routes for additional pages */}
        <Routes>
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/signup" element={<SignupInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

// Forgot Password Page Component
function ForgotPassword() {
  return (
    <div>
      <h2>Forgot Password</h2>
      <p>
        Placeholder: .
      </p>
    </div>
  );
}

// Signup Info Component
function SignupInfo() {
  return (
    <div>
      <h2>Signup Information</h2>
      <p>
        Placeholder: Tumhare friend yahan backend aur database logic add
        karenge.
      </p>
    </div>
  );
}
