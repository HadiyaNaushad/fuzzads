import { useState } from "react";
import { Link } from "react-router-dom";
import"./Signup.css";

export default function Signup() {

  const [form, setForm] = useState({ name: "", email: "", password: "" });

  async function handleSignup(e) {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    const data = await res.json();
    alert(data.message);
  }

  return (
    <div className="signup-page">
      <div className="signup-wrapper">
        <form className="signup-form" onSubmit={handleSignup}>
          <h2>Sign Up</h2>
          <input placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
          <button type="submit">Sign Up</button>
          <p>Already have an account? <Link to="/">Login</Link></p>
        </form>
      </div>
    </div>
  );
}