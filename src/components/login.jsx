import { useNavigate } from "react-router-dom";

import "./login.css";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="login-box">

      
      
        <h2 className="app-title"> StudyMate</h2>

        <label>e-mail</label>
        <input className="login-input" type="email" />

        <label>password</label>
        <input type="password" />

         <button onClick={() => navigate("/home")}>
          login</button>

        <p className="register-text">
          don’t have an account?
          <span onClick={() => navigate("/signup")}> sign up</span>

        </p>

      </div>
    </div>
  );
}

export default Login;
