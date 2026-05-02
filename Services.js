import { useState } from "react";
import "./Services.css";
import "./Modal.css";
import productsImg from "./images/baby.jpg";

function Services() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
    <div>
      <h1>Services</h1>
    </div>
      {/* SERVICES BANNER */}
      <div className="services-banner">

        {/* IMAGE SIDE */}
        <div className="services-image banner-animate-left">
          <img src={productsImg} alt="Baby Care Products" />
        </div>

        {/* TEXT SIDE */}
        <div className="services-content banner-animate-right">
          <h1>
            Get <span>Baby Care</span> Products <br />
            at Exciting Deals
          </h1>

          <p className="services-text">
            Discover premium baby care products designed for safety,
            comfort, and happiness.
          </p>

          <button
            className="services-btn"
            onClick={() => setShowModal(true)}
          >
            Explore Services
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

            <h2>Our Baby Care Services</h2>
            <p>
              We offer a wide range of baby care services and products to
              support your child’s growth and well-being.
            </p>

            <p>
              ✔ Baby hygiene products <br />
              ✔ Feeding & nutrition essentials <br />
              ✔ Baby safety accessories <br />
              ✔ Health & wellness products <br />
              ✔ Affordable & trusted brands
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Services;
