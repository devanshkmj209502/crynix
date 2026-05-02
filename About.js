import { useState } from "react";
import "./About.css";
import "./Modal.css";
import aboutImg from "./images/OIP.jpg";

function About() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
    <div>
      <h1>About</h1>
    </div>
      {/* ABOUT BANNER */}
      <div className="about-banner">

        {/* IMAGE SIDE */}
        <div className="about-image banner-animate-left">
          <img src={aboutImg} alt="About Baby Care" />
        </div>

        {/* TEXT SIDE */}
        <div className="about-content banner-animate-right">
          <h4 className="about-tag">Need BabySitter?</h4>
          <h1>Welcome to Baby Care</h1>
          <p className="about-text">
            We provide trusted and professional baby care services to ensure
            safety, comfort, and happiness for your little ones.
          </p>

          <button
            className="about-btn"
            onClick={() => setShowModal(true)}
          >
            Read More
          </button>
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <span
              className="modal-close"
              onClick={() => setShowModal(false)}
            >
              ✖
            </span>

            <h2>About Baby Care</h2>
            <p>
              Baby Care provides high-quality babysitting and childcare services
              with trained professionals. Our focus is on safety, hygiene,
              emotional care, and overall child development.
            </p>

            <p>
              ✔ Certified caretakers <br />
              ✔ 24/7 Support <br />
              ✔ Affordable pricing <br />
              ✔ Trusted by parents
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default About;
