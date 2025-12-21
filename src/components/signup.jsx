import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSignup = () => {
    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    if (!agree) {
      alert("Please agree to the terms");
      return;
    }

 
    localStorage.setItem(
      "user",
      JSON.stringify({ name, email })
    );

    alert("Account created successfully");
    navigate("/login");
  };

  return (
    <div className="signup-container">
      <div className="signup-box">

        <h2 className="app-title">StudyMate</h2>

        <label>name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>e-mail</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label className="check">
          <input
            type="checkbox"
            checked={agree}
            onChange={() => setAgree(!agree)}
          />
          I agree to the terms
        </label>

        <button onClick={handleSignup}>
          sign up
        </button>

        <p className="login-text">
          already have an account?
          <span onClick={() => navigate("/Login")}>
            {" "}login
          </span>
        </p>

      </div>
    </div>
  );
}

export default Signup;
