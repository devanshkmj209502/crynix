import { useState } from "react";
import "./Contact.css";
import contactImg from "./images/contact.png";

function Contact() {
  const [openForm, setOpenForm] = useState(false);

  return (
    <>
    <div>
    <h1>Contact</h1>
    </div>
      <div className="contact-section">
        <div className="contact-container">

          {/* LEFT IMAGE → GLOBAL BANNER with adjustment */}
          <div className="global-banner contact-banner">
            <img src={contactImg} alt="Contact" />
          </div>

          {/* RIGHT INFO */}
          <div className="contact-info-box">
            <h2>Contact Information</h2>
            <p>We are available for you</p>

            <div className="info-item">📧 support@crynix.com</div>
            <br />
            <div className="info-item">📞 +91 98765 43210</div>
            <br />
            <div className="info-item">📍 New Delhi, India</div>

            <button
              className="contact-btn"
              onClick={() => setOpenForm(true)}
            >
              Get in Touch
            </button>
          </div>

        </div>
      </div>

      {/* ===== POPUP FORM ===== */}
      {openForm && (
        <div className="modal-overlay">
          <div className="modal-box">
            <span
              className="close-btn"
              onClick={() => setOpenForm(false)}
            >
              ✖
            </span>

            <h3>Send Message</h3>

            <form className="contact-form">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <input type="text" placeholder="Mobile Number" />
              <textarea placeholder="Your Message"></textarea>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Contact;
