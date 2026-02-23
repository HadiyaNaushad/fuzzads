// Login.jsx
import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

export default function Login({ setUser }) {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();

const handleLogin = async (e) => {
e.preventDefault();

try {  
  const res = await axios.post("http://localhost:5000/api/auth/login", {  
    email: email.toLowerCase().trim(),  
    password: password.trim(),  
  });  

  if (res.data.success) {  
    localStorage.setItem("token", res.data.token);  
    localStorage.setItem("user", JSON.stringify(res.data.user));  
    setUser(res.data.user);  
    navigate("/profile");  
  } else {  
    alert(res.data.message || "Invalid credentials");  
  }  
} catch (err) {  
  console.error(err.response?.data || err.message);  
  alert(err.response?.data?.message || "Server error. Make sure backend is running!");  
}

};

return (
<div className="login-page">
<div className="login-wrapper">
<form onSubmit={handleLogin} className="glass-form">
<h2>Login</h2>
<input
type="email"
placeholder="Enter your email"
value={email}
onChange={(e) => setEmail(e.target.value)}
required
/>
<input
type="password"
placeholder="Enter your password"
value={password}
onChange={(e) => setPassword(e.target.value)}
required
/>
<button type="submit">Login</button>
<p>
Don't have an account? <Link to="/signup">Sign Up</Link>
</p>
</form>
</div>
</div>
);
}