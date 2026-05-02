import "./Customers.css";
import c1 from "./images/customer1.jpg";
import c2 from "./images/customer2.jpg";
import c3 from "./images/customer3.jpg";
import c4 from "./images/customer4.jpg";

function Customers() {
  const customersData = [
    { img: c1, name: "Jessica Brown", role: "Verified Parent" },
    { img: c2, name: "Sophia Williams", role: "Happy Mother" },
    { img: c3, name: "Emily Johnson", role: "Trusted Client" },
    { img: c4, name: "Olivia Smith", role: "Working Parent" },
  ];

  return (
    <div>
      <h1>Customers</h1>
      <div className="customers-page">
      <div className="customers-heading">
        <h2>We select only the most qualified sitters</h2>
        <p>
          Our caregivers are carefully selected, trained, and verified to
          ensure the best care and safety for your children.
        </p>
      </div>

      {/* GRID */}
      <div className="customers-grid">
        {customersData.map((customer, index) => (
          <div className="customer-card" key={index}>
            <div className="customer-img-box">
              <img src={customer.img} alt={customer.name} />
            </div>
            <h4>{customer.name}</h4>
            <span>{customer.role}</span>
            <div className="stars">★★★★★</div>
          </div>
        ))}
      </div>

      {/* TESTIMONIAL */}
      <div className="testimonial">
        <div className="testimonial-img">
          <img src={c1} alt="Jessica Brown" />
        </div>

        <div className="testimonial-content">
          <h3>What Our Clients Say</h3>
          <p>
            Baby Care has been a lifesaver for our family. The caregivers are
            loving, professional, and extremely reliable.
          </p>
          <h4>— Jessica Brown</h4>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Customers;
