import { useEffect, useState } from "react";
import axios from "axios";   // ✅ axios import
import "./Home.css";
import bannerImg from "./images/home.png";

function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://6978acbacd4fe130e3d9c9f6.mockapi.io/api/v1/user")
      .then((response) => {
        console.log("API DATA:", response.data); // 👈 axios data yahan hota hai
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("API ERROR:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {/* ===== HOME BANNER ===== */}
      <div className="home-banner">
        <div className="banner-left">
          <img src={bannerImg} alt="Crynix Baby Care" />
        </div>

        <div className="banner-right">
          <h1>Trusted Baby Care Services</h1>
          <p>Professional babysitters & child care solutions for modern parents.</p>
        </div>
      </div>

      {/* ===== USER LIST SECTION ===== */}
      <div className="users-section">
        <h2>Our Registered Users</h2>

        {loading ? (
          <p>Loading users...</p>
        ) : (
          <div className="users-grid">
            {users.map((user) => (
              <div className="user-card" key={user.id}>
                <h4>{user.baby_name}</h4>
                <h4>{user.baby_age}</h4>
                <h4>{user.baby_location}</h4>
                <span className="user-badge">Active Member</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
