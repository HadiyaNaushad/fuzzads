import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  FaRupeeSign,
  FaBoxOpen,
  FaWallet,
  FaBars,
  FaSignOutAlt,
} from "react-icons/fa";
import "./Profile.css";

function Profile() {
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState({
    totalSpend: 0,
    totalOrders: 0,
    totalBalance: 0,
  });
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Order fields
  const [orderData, setOrderData] = useState({
    search: "",
    category: "",
    service: "",
    description: "",
    link: "",
    quantity: "",
    charge: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    const fetchProfile = async () => {
      try {
        const res = await axios.get("https://fuzzads-vq44.onrender.com/api/user/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.data.success) {
          setUser(res.data.user);

          setStats({
            totalSpend: res.data.user.totalSpend || 0,
            totalOrders: res.data.user.totalOrders || 0,
            totalBalance: res.data.user.totalBalance || 0,
          });
        }
      } catch (err) {
        localStorage.removeItem("token");
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleOrderChange = (e) => {
    setOrderData({ ...orderData, [e.target.name]: e.target.value });
  };

  const handleCreateOrder = () => {
    console.log("New Order Data:", orderData);
    alert("Order created! (implement backend submission)");
    setOrderData({
      search: "",
      category: "",
      service: "",
      description: "",
      link: "",
      quantity: "",
      charge: "",
    });
  };

  if (loading) return <div className="loading">Loading Dashboard...</div>;
  if (!user) return <div className="loading">No user data found</div>;

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "active" : ""}`}>
        <ul>
          <li onClick={() => console.log("New Order clicked")}>New Order</li>
          <li onClick={() => console.log("Orders clicked")}>Orders</li>
          <li onClick={() => console.log("Services clicked")}>Services</li>
          <li onClick={() => console.log("Add Funds clicked")}>Add Funds</li>
          <li onClick={() => console.log("Support clicked")}>Support</li>
          <li onClick={logout} className="logout">
            <FaSignOutAlt /> Logout
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main">
        {/* Top Navbar */}
        <div className="topbar">
          <FaBars
            className="menu-icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          />
        </div>

        <div className="cards">
          <div className="card">
            <div>
              <h3>Welcome, {user.name}</h3>
              <p>Email: {user.email}</p>
            </div>
          </div>

          <div className="card">
            <FaRupeeSign className="icon" />
            <div>
              <h3>₹ {stats.totalSpend}</h3>
              <p>Total Spend</p>
            </div>
          </div>

          <div className="card">
            <FaBoxOpen className="icon" />
            <div>
              <h3>{stats.totalOrders}</h3>
              <p>Total Orders</p>
            </div>
          </div>

          <div className="card">
            <FaWallet className="icon" />
            <div>
              <h3>₹ {stats.totalBalance}</h3>
              <p>Total Balance</p>
            </div>
          </div>
        </div>

        {/* Order Section */}
        <div className="order-box glass">
          <div className="order-field">
            <label>Search</label>
            <input
              type="text"
              name="search"
              value={orderData.search}
              onChange={handleOrderChange}
              placeholder="Search..."
            />
          </div>



          <select>
            <option>
              Instagram Likes Old Accounts
            </option>
            <option>
              Instagram Followers
            </option>
            <option>
              Youtube Views
            </option>
          </select>
   <select>
            <option>
              Instagram Likes With Posts
            </option>
            <option>
              Fast Delivery
            </option>
            <option>
            30 Days Refill
            </option>
          </select>

          <div className="order-field">
            <label>Description</label>
            <input
              type="text"
              name="description"
              value={orderData.description}
              onChange={handleOrderChange}
            />
          </div>

          <div className="order-field">
            <label>Link</label>
            <input
              type="text"
              name="link"
              value={orderData.link}
              onChange={handleOrderChange}
            />
          </div>

          <div className="order-field">
            <label>Quantity</label>
            <input
              name="quantity"
              value={orderData.quantity}
              onChange={handleOrderChange}
            />
          </div>

          <div className="order-field">
            <label>Charge</label>
            <input
              type="number"
              name="charge"
              value={orderData.charge}
              onChange={handleOrderChange}
            />
          </div>

          <button className="create-order-btn" onClick={handleCreateOrder}>
            Create New Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;