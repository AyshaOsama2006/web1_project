import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">

      
      
        <h2 className="app-title"> StudyMate</h2>

        <label>e-mail</label>
        <input type="email" />

        <label>password</label>
        <input type="password" />

        <button>login</button>

        <p className="register-text">
          don’t have an account?
          <span> sign up</span>
        </p>

      </div>
    </div>
  );
}

export default Login;
