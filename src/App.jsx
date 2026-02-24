import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  return (
    <HashRouter>
      <div className="app-container">
        <Navbar user={user} setUser={setUser} />

        {/* Content area flex-grow so footer stays bottom */}
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/login"
              element={!user ? <Login setUser={setUser} /> : <Navigate to="/profile" />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup setUser={setUser} /> : <Navigate to="/profile" />}
            />

            <Route
              path="/profile"
              element={user ? <Profile /> : <Navigate to="/login" />}
            />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;