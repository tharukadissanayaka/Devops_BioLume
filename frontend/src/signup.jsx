import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./AuthForm.css";
import { FaGoogle, FaApple } from "react-icons/fa";


function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
          e.preventDefault();
          try {
              await axios.post("http://localhost:3000/signup", formData);
  
          } catch (error) {
              alert(error)
          }
      };

  return (
    <div className="auth-container">
        <form className="auth-form" onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <input
                type="text"
                name="username"
                placeholder="Username"
                required
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                required
                onChange={handleChange}
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                required
                onChange={handleChange}
            />
            <button type="submit">Sign Up</button>
            <div className="divider">OR</div>
            <div className="social-signin">
                <button type="button" className="social-btn google-btn">
                    <FaGoogle /> Sign Up with Google
                </button>
                <button type="button" className="social-btn apple-btn">
                    <FaApple /> Sign Up with Apple
                </button>
            </div>
            <div className="form-footer">
                <p>Already have an account? <Link to="/signin">Sign In</Link></p>
            </div>
        </form>
    </div>
  );
}

export default SignUp;
