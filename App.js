import { useState, useEffect } from "react";
import Login from "./Login";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Customers from "./Customers";
import Contact from "./Contact";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [deviceType, setDeviceType] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 600) {
        setDeviceType("mobile");
      } else if (width <= 992) {
        setDeviceType("tablet");
      } else {
        setDeviceType("desktop");
      }
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`app-wrapper ${deviceType}`}>
      {!isLoggedIn ? (
        <Login setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <>
          <Navbar setIsLoggedIn={setIsLoggedIn} />

          <main className="app-content">
            <section id="Home" className="app-section">
              <Home />
            </section>

            <section id="About">
              <About />
            </section>

            <section id="Services" className="app-section">
              <Services />
            </section>

            <section id="Customers" className="app-section">
              <Customers />
            </section>

            <section id="Contact" className="app-section">
              <Contact />
            </section>
          </main>
        </>
      )}
    </div>
  );
}

export default App;
